import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProd = process.env.NODE_ENV === 'production';
const PORT = 3000;

async function bootstrap() {
  const app = express();
  app.use(express.json());

  // Log server start state
  console.log(`Starting TravelAI server in ${isProd ? 'production' : 'development'} mode...`);

  // Active checking of API key to determine helper features
  const hasApiKey = !!process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'MY_GEMINI_API_KEY';
  console.log(`Gemini API Key Configured: ${hasApiKey ? 'YES' : 'NO (Using fallback mode until configured)'}`);

  // Dynamic status API for the frontend
  app.get('/api/status', (req, res) => {
    res.json({
      configured: hasApiKey,
      message: hasApiKey 
        ? 'Active & Ready for custom itineraries' 
        : 'Running in demo mode. Configure GEMINI_API_KEY in Secrets for live custom planning.'
    });
  });

  // Server-side Gemini API route for itinerary generation
  app.post('/api/generate', async (req, res) => {
    const { destination, budget, style, duration = 3 } = req.body;

    if (!destination) {
      return res.status(400).json({ error: 'Destination is required' });
    }

    try {
      if (!hasApiKey) {
        return res.status(400).json({
          error: 'API_KEY_MISSING',
          message: 'GEMINI_API_KEY is not configured in the secrets panel. Please click "Settings > Secrets" and configure it.'
        });
      }

      console.log(`Generating AI itinerary for: "${destination}" with budget: "${budget}", style: "${style}"`);

      // Lazy initialization of Gemini client to prevent load-time crash
      const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const prompt = `
        You are a prestigious local Himachali travel master designing an exquisite, authentic offline-first 3-day itinerary for: "${destination}" located in Himachal Pradesh, India.
        The travelers preferred budget profile is "${budget || 'boutique'}" and their style is "${style || 'exploring'}".
        
        Provide highly evocative responses focused on offbeat places, hidden waterfalls, apple-blossom stays, wooden Kathguni cabins, streamside camps, and cozy woodfired coffee spots.
        Ensure you fill all fields of the required schema accurately, with beautiful descriptions that evoke misty forest air.
        Give realistic local costs in Indian Rupees (₹) (e.g., ₹2,500 for jeep rides, ₹400 for organic meals) instead of general western pricing.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: prompt,
        config: {
          systemInstruction: 'You are a meticulous, descriptive, high-end travel specialist for executive and luxury travel. You write beautiful descriptions that evoke wanderlust. Avoid clinical wording.',
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              destination: { 
                type: Type.STRING, 
                description: 'The formal name of the destination, city, or country.' 
              },
              tagline: { 
                type: Type.STRING, 
                description: 'A poetic, highly engaging 1-sentence description that excites the traveler.' 
              },
              duration: { 
                type: Type.INTEGER, 
                description: 'Number of days (must be 3).' 
              },
              season: { 
                type: Type.STRING, 
                description: 'The recommended best season or weather for this trip.' 
              },
              budgetType: { 
                type: Type.STRING, 
                description: 'Custom short budget description (e.g., Ultra Luxury, Curated, High Style).' 
              },
              totalCostEstimate: { 
                type: Type.STRING, 
                description: 'Total structural cost estimate per person.' 
              },
              coverImage: { 
                type: Type.STRING, 
                description: 'Leave blank, client will apply beautiful Unsplash travel photo dynamically.' 
              },
              summary: { 
                type: Type.STRING, 
                description: 'An evocative 2-3 sentence overview describing why this specific itinerary is unique.' 
              },
              highlights: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: 'List 3 incredible must-do travel highlights for this trip.'
              },
              days: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    dayNumber: { type: Type.INTEGER },
                    title: { type: Type.STRING, description: 'Catchy daily focus heading.' },
                    description: { type: Type.STRING, description: 'Overview of the theme of the day.' },
                    activities: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          time: { type: Type.STRING, description: 'e.g., "09:00 AM", "01:00 PM"' },
                          title: { type: Type.STRING, description: 'Name of the sight, museum, restaurant, or activity' },
                          description: { type: Type.STRING, description: 'Fascinating details explaining what they will experience and why it is luxury.' },
                          location: { type: Type.STRING, description: 'Specific neighborhood or formal address.' },
                          cost: { type: Type.STRING, description: 'Cost estimate per person.' },
                          type: { 
                            type: Type.STRING, 
                            enum: ['attraction', 'restaurant', 'hotel', 'activity'],
                            description: 'Asset category tag.'
                          }
                        },
                        required: ['time', 'title', 'description', 'location', 'cost', 'type']
                      }
                    }
                  },
                  required: ['dayNumber', 'title', 'description', 'activities']
                }
              },
              recommendedHotels: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING, description: 'Prestigious hotels / resorts.' },
                    description: { type: Type.STRING, description: 'Evocative review summary of why this place is outstanding.' },
                    pricePerNight: { type: Type.STRING, description: 'Average room cost per night.' },
                    rating: { type: Type.STRING, description: 'User rating score out of 5.0' },
                    imageUrl: { type: Type.STRING, description: 'Leave empty, system will match premium resort stock' },
                    tags: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                      description: '3 enticing tags (e.g., Infinity Pool, Private Beach, Michelin Star).'
                    }
                  },
                  required: ['name', 'description', 'pricePerNight', 'rating', 'tags']
                }
              }
            },
            required: [
              'destination', 'tagline', 'duration', 'season', 'budgetType', 
              'totalCostEstimate', 'summary', 'highlights', 'days', 'recommendedHotels'
            ]
          }
        }
      });

      const responseText = response.text;
      if (!responseText) {
        throw new Error('Received an empty response from Gemini API.');
      }

      const generatedData = JSON.parse(responseText.trim());
      res.json(generatedData);

    } catch (error: any) {
      console.error('Error in travel AI generation route: ', error);
      res.status(500).json({ 
        error: 'GENERATION_FAILED', 
        message: error?.message || 'Failed to generate travel schedule. Please try again.' 
      });
    }
  });

  // Handle Vite integration
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });
    
    app.use(vite.middlewares);
    
    app.use('*', async (req, res, next) => {
      const url = req.originalUrl;
      try {
        let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    // Serve static frontend in production
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    
    app.use('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ TravelAI Full-Stack Server listening exclusively on http://0.0.0.0:${PORT}`);
  });
}

bootstrap().catch((err) => {
  console.error('Failure starting TravelAI application:', err);
});
