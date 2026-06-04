import React from 'react';
import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, 
  Calendar, 
  Users, 
  DollarSign, 
  Compass, 
  Sparkles, 
  Star, 
  Check, 
  ChevronRight, 
  Search, 
  Menu, 
  X, 
  Globe, 
  Utensils, 
  Coffee, 
  Award,
  Info,
  ChevronDown,
  ChevronLeft,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HIMACHAL_DESTINATIONS, 
  EXPERIENCE_CATEGORIES, 
  LOCAL_EXPERIENCES, 
  PREBUILT_HIMACHAL_ITINERARIES,
  DestinationCard,
  HimachalItinerary,
  DayPlan
} from './data/himachalData';

import himachalParaglidingBg from './assets/images/himachal_paragliding_1780568642052.png';

// Fallback high-quality mountain-forest image
const FALLBACK_COVER = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Custom Form states
  const [destinationInput, setDestinationInput] = useState('');
  const [duration, setDuration] = useState('3 Days');
  const [budget, setBudget] = useState('Boutique Adventure');
  const [travelStyle, setTravelStyle] = useState('Cultured Explorers');
  const [adventureLevel, setAdventureLevel] = useState('Moderate High-Trails');

  // Interactive drop-downs
  const [showDestDropdown, setShowDestDropdown] = useState(false);
  const [showDurationDropdown, setShowDurationDropdown] = useState(false);
  const [showBudgetDropdown, setShowBudgetDropdown] = useState(false);
  const [showStyleDropdown, setShowStyleDropdown] = useState(false);
  const [showAdvDropdown, setShowAdvDropdown] = useState(false);

  // Active Itinerary (loaded from clicks or generated dynamically)
  const [activeItinerary, setActiveItinerary] = useState<HimachalItinerary | null>(null);
  const [selectedDayTab, setSelectedDayTab] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState('');
  const [apiStatus, setApiStatus] = useState({ configured: false, message: 'Detecting local backend...' });
  const [errorText, setErrorText] = useState<string | null>(null);

  // Likes Counter
  const [likedDestinations, setLikedDestinations] = useState<Record<string, boolean>>({});

  // Elements scroll triggers
  const heroRef = useRef<HTMLDivElement>(null);
  const exploreSectionRef = useRef<HTMLDivElement>(null);
  const plannerSectionRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const destDropdownRef = useRef<HTMLDivElement>(null);

  // Monitor scroll for premium fixed navbar blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync API Configuration status with backend
  useEffect(() => {
    fetch('/api/status')
      .then(res => res.json())
      .then(data => setApiStatus(data))
      .catch(() => setApiStatus({ configured: false, message: 'Running in localized offline performance mode.' }));

    // Automatically load Jibhi itinerary as default template showcase
    if (PREBUILT_HIMACHAL_ITINERARIES['jibhi']) {
      setActiveItinerary(PREBUILT_HIMACHAL_ITINERARIES['jibhi']);
    }
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (destDropdownRef.current && !destDropdownRef.current.contains(e.target as Node)) {
        setShowDestDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Trigger quick interactive prebuilt selection
  const handlePrebuiltSelect = (id: string) => {
    const matched = PREBUILT_HIMACHAL_ITINERARIES[id];
    if (matched) {
      setActiveItinerary(matched);
      setSelectedDayTab(1);
      setTimeout(() => {
        showcaseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      // Find matches in main list and compile a customized mock if not in prebuilts
      const matchedCard = HIMACHAL_DESTINATIONS.find(c => c.id === id);
      if (matchedCard) {
        const generated = generateLocallyTailoredItinerary(matchedCard.name, budget, travelStyle, adventureLevel);
        setActiveItinerary(generated);
        setSelectedDayTab(1);
        setTimeout(() => {
          showcaseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  };

  // Generate itinerary - connects to server-side Gemini 3.5-Flash API
  const handleGenerateItinerary = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorText(null);
    const targetPlace = destinationInput.trim() || 'Jibhi';

    // Premium realistic step animations to mimic high-complexity AI synthesis
    setIsGenerating(true);
    const mockSteps = [
      'Locating secret shepherd trails & mountain passes...',
      'Cross-referencing alpine weather guidelines...',
      'Mapping authentic local Kathguni homestays...',
      apiStatus.configured 
        ? 'Connecting to server-side Gemini flash model (3.5)...' 
        : 'Synthesizing premium custom Himachal travel journal...'
    ];

    for (let i = 0; i < mockSteps.length; i++) {
      setGenerationStep(mockSteps[i]);
      await new Promise(resolve => setTimeout(resolve, i === mockSteps.length - 1 ? 1400 : 800));
    }

    try {
      if (apiStatus.configured) {
        const response = await fetch('/api/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            destination: `Offbeat Himachali region around ${targetPlace}`,
            budget,
            style: `${travelStyle} utilizing ${adventureLevel} pathways`,
            duration: 3
          })
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || 'The model was unable to parse local Himachal lore correctly.');
        }

        // Apply a photogenic Himachal photo based on keyword queries
        const matchedImage = HIMACHAL_DESTINATIONS.find(h => 
          h.name.toLowerCase().includes(targetPlace.toLowerCase()) ||
          targetPlace.toLowerCase().includes(h.name.toLowerCase())
        )?.image || FALLBACK_COVER;

        const assembled: HimachalItinerary = {
          ...data,
          coverImage: matchedImage,
          adventureLevel: adventureLevel,
          days: data.days.map((d: any) => ({
            ...d,
            activities: d.activities.map((a: any) => ({
              ...a,
              imageUrl: getLocalActivityImageFallback(a.title, a.type)
            }))
          })),
          recommendedHotels: data.recommendedHotels.map((h: any) => ({
            ...h,
            imageUrl: getLocalActivityImageFallback(h.name, 'hotel')
          }))
        };

        setActiveItinerary(assembled);
        setSelectedDayTab(1);
        setTimeout(() => {
          showcaseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 120);

      } else {
        // Fallback localized prompt synthesizer - highly responsive offline mock
        const mappedPrebuilt = PREBUILT_HIMACHAL_ITINERARIES[targetPlace.toLowerCase()];
        if (mappedPrebuilt) {
          setActiveItinerary(mappedPrebuilt);
        } else {
          const locallyCreated = generateLocallyTailoredItinerary(targetPlace, budget, travelStyle, adventureLevel);
          setActiveItinerary(locallyCreated);
        }
        setSelectedDayTab(1);
        setTimeout(() => {
          showcaseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 120);
      }
    } catch (err: any) {
      console.error(err);
      setErrorText(err.message || 'Connection glitch encountered. Reverting to pristine prebuilt Jibhi template.');
      if (PREBUILT_HIMACHAL_ITINERARIES['jibhi']) {
        setActiveItinerary(PREBUILT_HIMACHAL_ITINERARIES['jibhi']);
      }
    } finally {
      setIsGenerating(false);
    }
  };

  // Helper local Unsplash images for dynamic outputs
  const getLocalActivityImageFallback = (title: string, type: string) => {
    const text = title.toLowerCase();
    if (type === 'hotel' || text.includes('cottage') || text.includes('stay') || text.includes('lodge')) {
      return "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=600&q=80"; // woodhouse
    }
    if (type === 'restaurant' || text.includes('cafe') || text.includes('food') || text.includes('dine')) {
      return "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80"; // cafe
    }
    if (text.includes('trek') || text.includes('pass') || text.includes('peak') || text.includes('climb')) {
      return "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"; // high mountain
    }
    if (text.includes('waterfall') || text.includes('river') || text.includes('stream') || text.includes('lake')) {
      return "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80"; // river stream
    }
    return "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80"; // neutral travel
  };

  // Local beautiful generator for typed offline destinations
  const generateLocallyTailoredItinerary = (
    dest: string, 
    b: string, 
    style: string, 
    adv: string
  ): HimachalItinerary => {
    const cleanedTitle = dest.trim().charAt(0).toUpperCase() + dest.trim().slice(1);
    
    // Find stock images if match
    const lookup = HIMACHAL_DESTINATIONS.find(d => d.name.toLowerCase() === dest.toLowerCase());
    const coverImageToUse = lookup?.image || FALLBACK_COVER;

    return {
      destination: `${cleanedTitle} Unexplored Valley`,
      tagline: `An exclusive editorial schedule mapping mountain cafés, secret ridges, and local homestays in ${cleanedTitle}.`,
      duration: 3,
      season: 'Mild Dry Blossom (April to October)',
      budgetType: b,
      adventureLevel: adv,
      totalCostEstimate: '₹12,400 per traveler',
      coverImage: coverImageToUse,
      summary: `Carefully configured for travelers seeking a profound connection with ${cleanedTitle}, this journal features native shepherd trail-mapping, organic orchard strolls, and stunning cottage stays.`,
      highlights: [
        `Climbing the misty panoramic ridges looking over standard roads`,
        `Enjoying hot local dishes beside deep cedar wood fires`,
        `Private photography sessions of Himalayan high peaks at dawn`
      ],
      recommendedHotels: [
        {
          name: `The ${cleanedTitle} Pine Ridge Homestay`,
          description: `Rustic wood-frame Kathguni retreat offering exquisite sunrise views over snow-capped ranges, heated brick bedding spaces, and direct orchard trails.`,
          pricePerNight: '₹4,200',
          rating: '4.91',
          imageUrl: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=500&q=80',
          tags: ['Apple Orchard View', 'Handmade Cozy Mud-Stove', 'Guided Ridgewalks']
        }
      ],
      days: [
        {
          dayNumber: 1,
          title: 'Arrival in the Forgotten Woods',
          description: `Step past the crowded roadways into the timeless silence of ${cleanedTitle}'s cedar valleys. Walk alongside clear river streams and unpack in your rustic retreat.`,
          activities: [
            {
              time: '09:30 AM',
              title: `Welcome Herbal Brew & Local Cabin Unpack`,
              description: `Arrive in ${cleanedTitle}. Sip on comforting fresh ginger honey mint teas compiled by native house owners, and take in the massive spires.`,
              location: 'Cedar Forest Cabin Frontage',
              cost: 'Included',
              type: 'hotel',
              imageUrl: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=400&q=80'
            },
            {
              time: '02:00 PM',
              title: 'Trek to the Crystal Spring Cascade',
              description: `A pristine mountain walk past moss-covered oak trees to a stunning secluded waterfall pool fed directly by melting snow glaciers.`,
              location: 'Valley Backtrails',
              cost: 'Free Access',
              type: 'attraction',
              imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400&q=80'
            }
          ]
        },
        {
          dayNumber: 2,
          title: 'Altitude Ridge High-Walk & Star Gazing',
          description: `Set foot on a moderate forest path climbing up to high clearing ridges for breathtaking 360-degree views, culminating in campfire stories under crystal stars.`,
          activities: [
            {
              time: '10:00 AM',
              title: 'Lush Pine Canopy Ridge Walk',
              description: `Trek alongside mountain herds to a sweeping meadow clearing offering dramatic views of the Kinnaur Kailash or Pir Panjal spikes.`,
              location: 'High Ridge Crest',
              cost: '₹1,500 with local guide',
              type: 'activity',
              imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80'
            },
            {
              time: '07:30 PM',
              title: 'Clay Oven Siddu Feast & Forest Campfire',
              description: `Dine directly under the starry skies while local musicians play string folk tunes, and feast on traditional ghee-stewed Siddu buns.`,
              location: 'Lodge Apple Garden',
              cost: '₹600 pax',
              type: 'restaurant',
              imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=400&q=80'
            }
          ]
        },
        {
          dayNumber: 3,
          title: 'Historic Village Hermitages & Heritage Walks',
          description: `Explore ancient local structures built of interlinked cedar timber logs, meeting native wood-craft artisans who preserve ancient traditions.`,
          activities: [
            {
              time: '10:00 AM',
              title: 'Kathguni Architecture Preservation Trail',
              description: `Tour traditional, hand-crafted timber towers dating back 200 years, and sample delicious, locally-grown stone fruits directly from a farm.`,
              location: 'Ancient Village Cluster',
              cost: 'Free Entry',
              type: 'attraction',
              imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=400&q=80'
            }
          ]
        }
      ]
    };
  };

  // Toggle Likes on cards
  const toggleLikeCard = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedDestinations(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 antialiased font-sans selection:bg-teal-100 selection:text-teal-900 overflow-x-hidden">
      
      {/* 1. EDITORIAL FIXED HEADER */}
      <nav id="navbar" className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm border-b border-orange-100' : 'bg-transparent py-5 lg:py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo with warm Himachal color accent */}
          <a href="#" className="flex items-center space-x-2.5 focus:outline-none">
            <div className="p-2 rounded-xl bg-emerald-700 text-white shadow-md shadow-emerald-700/10">
              <Compass className="h-5.5 w-5.5 stroke-[1.5]" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-black tracking-tight leading-none ${scrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'} font-heading`}>
                HIMATRAILS
              </span>
              <span className="text-[10px] font-bold tracking-widest text-[#F97316] uppercase mt-0.5">AI CAPTIVES</span>
            </div>
          </a>

          {/* Nav Links - Center */}
          <div className="hidden lg:flex items-center space-x-9">
            {['Explore', 'Planner', 'Experiences', 'Showcase'].map((item) => (
              <button 
                key={item} 
                onClick={() => {
                  if (item === 'Explore') handleScrollToSection(exploreSectionRef);
                  if (item === 'Planner') handleScrollToSection(plannerSectionRef);
                  if (item === 'Experiences') handleScrollToSection(plannerSectionRef);
                  if (item === 'Showcase') handleScrollToSection(showcaseRef);
                }}
                className={`text-xs font-semibold tracking-widest uppercase transition-all duration-200 hover:text-orange-500 cursor-pointer ${scrolled ? 'text-slate-600' : 'text-slate-700 lg:text-white/90 lg:hover:text-white'}`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Quick status display plus interactive CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <span className="text-[10px] font-bold tracking-widest bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-full px-3 py-1.5 flex items-center space-x-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{apiStatus.configured ? 'GEMINI LIVE' : 'DEMO MODE'}</span>
            </span>
            <button 
              onClick={() => handleScrollToSection(plannerSectionRef)}
              className="bg-[#F97316] hover:bg-orange-600 transition-all duration-200 text-white font-bold tracking-wider uppercase text-xs px-5 py-3 rounded-full shadow-lg shadow-orange-500/20 active:scale-95"
            >
              Plan Your Trip
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center space-x-2">
            <span className="text-[10px] font-bold tracking-wider bg-orange-50 text-orange-700 border border-orange-100 rounded-full px-2.5 py-1">
               Himachal AI
            </span>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 transition-colors rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200/80"
              aria-label="Toggle Navigation Drawer"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[70px] left-0 w-full bg-[#FDFBF7] border-b border-orange-100 shadow-xl z-40 lg:hidden flex flex-col p-6 space-y-4"
          >
            <button 
              onClick={() => { setMobileMenuOpen(false); handleScrollToSection(exploreSectionRef); }}
              className="text-left font-bold text-slate-800 hover:text-orange-500 py-2 border-b border-slate-100 tracking-wider text-sm uppercase"
            >
              Explore Uncharted Himachal
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); handleScrollToSection(plannerSectionRef); }}
              className="text-left font-bold text-slate-800 hover:text-orange-500 py-2 border-b border-slate-100 tracking-wider text-sm uppercase"
            >
              AI Travel Planner
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); handleScrollToSection(showcaseRef); }}
              className="text-left font-bold text-slate-800 hover:text-orange-500 py-2 border-b border-slate-100 tracking-wider text-sm uppercase"
            >
              Active Showcase Journal
            </button>
            
            <div className="pt-4 flex flex-col gap-2">
              <div className="flex items-center space-x-2 p-2 rounded-xl bg-orange-50 border border-orange-100 text-[11px] text-orange-800 font-medium">
                <Sparkles className="h-4 w-4 text-orange-500" />
                <span>Generating tailored 3-day plans on-the-fly.</span>
              </div>
              <button 
                onClick={() => { setMobileMenuOpen(false); handleScrollToSection(plannerSectionRef); }}
                className="w-full text-center bg-emerald-800 text-white font-bold p-3 rounded-xl hover:bg-emerald-950 uppercase tracking-widest text-xs"
              >
                Launch Planner Tool
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. MAJESTIC SPLIT HERO SECTION */}
      <section id="hero" ref={heroRef} className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 lg:py-0 overflow-hidden">
        
        {/* Immersive high-resolution background paragliding scenery */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          <img 
            src={himachalParaglidingBg} 
            alt="Himachal Paragliding Scenery" 
            className="w-full h-full object-cover object-center scale-[1.01] brightness-[1.08] saturate-[1.05]"
            referrerPolicy="no-referrer"
          />
          {/* Beautiful vibrant light translucent gradient wash with subtle mist tint */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FDFBF7]/90 via-[#FDFBF7]/75 to-transparent" />
          <div className="absolute inset-0 bg-white/20 backdrop-blur-[1.2px]" />
          <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 bg-gradient-to-l from-transparent via-[#FDFBF7]/20 to-[#FDFBF7]/90" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* LEFT SIDE: EDITORIAL HEADING & CTAS */}
          <div className="lg:col-span-6 text-left space-y-6 lg:space-y-8 max-w-xl">
            
            {/* Small label: OFFBEAT HIMACHAL • HIDDEN GEMS • LOCAL EXPERIENCES */}
            <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-150 px-4 py-2 rounded-full shadow-inner">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse shrink-0" />
              <span className="text-[10px] md:text-xs font-bold tracking-widest text-emerald-800 uppercase">
                OFFBEAT HIMACHAL • HIDDEN GEMS • LOCAL EXPERIENCES
              </span>
            </div>

            {/* Massive Typography: Discover The Untouched Side Of Himachal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] font-heading">
              Discover The <br className="hidden sm:inline" /> 
              <span className="relative inline-block text-emerald-800">
                Untouched
                <span className="absolute left-0 bottom-1 w-full h-1.5 bg-[#F97316]/30 -z-1" />
              </span> Side of <br />
              <span className="text-[#F97316]">Himachal</span>
            </h1>

            {/* Subheading: Plan personalized journeys through hidden villages, mountain cafés, alpine lakes, secret waterfalls, and offbeat destinations using AI. */}
            <p className="text-slate-600 text-sm md:text-base leading-relaxed tracking-wide">
              Plan personalized journeys through hidden villages, mountain cafés, alpine lakes, secret waterfalls, and offbeat destinations using AI. Let native wisdom map your steps.
            </p>

            {/* CTA Buttons: Explore Places | Plan My Trip */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => handleScrollToSection(exploreSectionRef)}
                className="px-8 py-4 bg-emerald-800 hover:bg-emerald-950 text-white rounded-full font-bold tracking-wider uppercase text-xs transition-all duration-300 hover:shadow-xl active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Places</span>
                <ChevronRight className="h-4 w-4" />
              </button>
              <button 
                onClick={() => handleScrollToSection(plannerSectionRef)}
                className="px-8 py-4 bg-transparent hover:bg-slate-100 text-slate-800 border-2 border-slate-300 rounded-full font-bold tracking-wider uppercase text-xs transition-all duration-300 active:scale-95 cursor-pointer"
              >
                Plan My Trip
              </button>
            </div>

            <div className="pt-2 border-t border-orange-100 flex items-center space-x-6 text-slate-400">
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-slate-800 font-heading">10+</span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">Offbeat Hamlets</span>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-slate-800 font-heading">100%</span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">Native Culture</span>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-slate-800 font-heading">Live</span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">Gemini Mappings</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: LARGE LAYERED TRAVEL COMPOSITION */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] md:min-h-[520px]">
            
            {/* Giant Background typography "HIMACHAL" filled with mountain imagery clipping mask */}
            <div className="absolute inset-0 flex items-center justify-center opacity-15 overflow-hidden select-none pointer-events-none z-0">
              <span className="text-8xl sm:text-9xl lg:text-[13rem] font-black tracking-tighter leading-none select-none text-emerald-950 font-heading">
                HIMACHAL
              </span>
            </div>

            {/* Overlapping Images Collage Container */}
            <div className="relative w-full max-w-[420px] h-full flex items-center justify-center">
              
              {/* Layer 1: Snowy Peaks Background */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                className="absolute w-[240px] h-[310px] rounded-3xl overflow-hidden shadow-2xl skew-y-3 -rotate-3 z-10 border-4 border-white left-2 top-0"
              >
                <img 
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=650&q=80" 
                  alt="Pine mountains" 
                  className="w-full h-full object-cover grayscale-10 hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>

              {/* Layer 2: Apple grove cottage overlay */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                className="absolute w-[210px] h-[260px] rounded-3xl overflow-hidden shadow-2xl -skew-y-3 rotate-6 z-20 border-4 border-white right-0 bottom-12"
              >
                <img 
                  src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=650&q=80" 
                  alt="Wooden cottage in wood" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              {/* Layer 3: Unexplained stream waterfall portrait */}
              <motion.div 
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
                className="absolute w-[140px] h-[190px] rounded-2xl overflow-hidden shadow-xl rotate-12 z-30 border-4 border-white bottom-0 left-[25%]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=350&q=80" 
                  alt="Glacier Thaws Waterfall" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* FLOATING DESTINATION QUICK CARDS (Around Collage) */}
              {/* Card 1: Jibhi */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 0 }}
                onClick={() => handlePrebuiltSelect('jibhi')}
                className="absolute -left-6 top-[28%] z-40 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-orange-50 cursor-pointer flex items-center space-x-2 -rotate-6 transition-all duration-300"
              >
                <span className="p-1.5 rounded-lg bg-orange-100 text-[#F97316]">
                  <Sparkles className="h-3.5 w-3.5" />
                </span>
                <div>
                  <h4 className="font-bold text-xs text-slate-800">Jibhi</h4>
                  <p className="text-[10px] text-slate-400 font-semibold">Hidden waterfalls</p>
                </div>
              </motion.div>

              {/* Card 2: Kalga */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 0 }}
                onClick={() => handlePrebuiltSelect('kalga')}
                className="absolute -right-8 top-[15%] z-40 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-orange-50 cursor-pointer flex items-center space-x-2 rotate-6 transition-all duration-300"
              >
                <span className="p-1.5 rounded-lg bg-teal-100 text-teal-800">
                  <Globe className="h-3.5 w-3.5" />
                </span>
                <div>
                  <h4 className="font-bold text-xs text-slate-800">Kalga</h4>
                  <p className="text-[10px] text-slate-400 font-semibold">Mountain village</p>
                </div>
              </motion.div>

              {/* Card 3: Tirthan Valley */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 0 }}
                onClick={() => handlePrebuiltSelect('tirthan-valley')}
                className="absolute -right-4 bottom-[38%] z-40 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-orange-50 cursor-pointer flex items-center space-x-2 -rotate-3 transition-all duration-300"
              >
                <span className="p-1.5 rounded-lg bg-sky-100 text-sky-800">
                  <MapPin className="h-3.5 w-3.5" />
                </span>
                <div>
                  <h4 className="font-bold text-xs text-slate-800">Tirthan Valley</h4>
                  <p className="text-[10px] text-slate-400 font-semibold">Trout paradise</p>
                </div>
              </motion.div>

              {/* Card 4: Chitkul */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 0 }}
                onClick={() => handlePrebuiltSelect('chitkul')}
                className="absolute left-[8%] bottom-[42%] z-40 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-orange-50 cursor-pointer flex items-center space-x-2 rotate-12 transition-all duration-300"
              >
                <span className="p-1.5 rounded-lg bg-amber-100 text-amber-800">
                  <Award className="h-3.5 w-3.5" />
                </span>
                <div>
                  <h4 className="font-bold text-xs text-slate-800">Chitkul</h4>
                  <p className="text-[10px] text-slate-400 font-semibold">Last Indian village</p>
                </div>
              </motion.div>

              {/* Card 5: Barot */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 0 }}
                onClick={() => handlePrebuiltSelect('barot')}
                className="absolute left-[-15px] bottom-4 z-40 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-orange-50 cursor-pointer flex items-center space-x-2 -rotate-6 transition-all duration-300"
              >
                <span className="p-1.5 rounded-lg bg-orange-100 text-orange-700">
                  <Compass className="h-3.5 w-3.5" />
                </span>
                <div>
                  <h4 className="font-bold text-xs text-slate-800">Barot</h4>
                  <p className="text-[10px] text-slate-400 font-semibold">Offbeat camping</p>
                </div>
              </motion.div>

              {/* Card 6: Shoja */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 0 }}
                onClick={() => handlePrebuiltSelect('shoja')}
                className="absolute right-[-10px] bottom-[-15px] z-40 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-orange-50 cursor-pointer flex items-center space-x-2 rotate-3 transition-all duration-300"
              >
                <span className="p-1.5 rounded-lg bg-blue-100 text-blue-800">
                  <Star className="h-3.5 w-3.5" />
                </span>
                <div>
                  <h4 className="font-bold text-xs text-slate-800">Shoja</h4>
                  <p className="text-[10px] text-slate-400 font-semibold">Forest escapes</p>
                </div>
              </motion.div>

            </div>

          </div>

        </div>

      </section>

      {/* 3. PREMIUM FLOATING AI SEARCH PANEL */}
      <section id="ai-planner" ref={plannerSectionRef} className="relative z-20 -mt-8 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="bg-white/95 backdrop-blur-md p-6 lg:p-8 rounded-[32px] shadow-xl shadow-emerald-900/5 border border-emerald-100/50">
            
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="h-5 w-5 text-orange-500 animate-pulse" />
              <h3 className="font-bold text-sm tracking-widest text-[#F97316] uppercase">SYNTHESIZE BESPOKE HIMACHAL ESCAPES</h3>
            </div>

            <form onSubmit={handleGenerateItinerary} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 items-end">
              
              {/* Field 1: Target Location */}
              <div className="lg:col-span-3 text-left relative" ref={destDropdownRef}>
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2 flex items-center space-x-1">
                  <MapPin className="h-3 w-3 text-emerald-600" />
                  <span>Where To?</span>
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={destinationInput}
                    onChange={(e) => {
                      setDestinationInput(e.target.value);
                      setShowDestDropdown(true);
                    }}
                    onFocus={() => setShowDestDropdown(true)}
                    placeholder="e.g. Jibhi, Kalga, Chitkul..."
                    className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3.5 text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-heading"
                  />
                  
                  {/* Dest list popdown */}
                  {showDestDropdown && (
                    <div className="absolute top-[102%] left-0 w-full min-w-[240px] bg-white border border-slate-200 rounded-2xl shadow-2xl mt-2 overflow-hidden z-50">
                      <div className="p-3 bg-slate-50 border-b border-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Suggested Offbeats
                      </div>
                      <div className="max-h-60 overflow-y-auto scrollbar-hide">
                        {HIMACHAL_DESTINATIONS.map((d) => (
                          <button 
                            key={d.id}
                            type="button"
                            onClick={() => {
                              setDestinationInput(d.name);
                              setShowDestDropdown(false);
                            }}
                            className="w-full text-left px-4 py-3 hover:bg-emerald-50/50 flex justify-between items-center transition-colors border-b border-slate-50"
                          >
                            <div>
                              <p className="font-bold text-slate-800 text-xs">{d.name}</p>
                              <p className="text-[10px] text-slate-400">{d.location}</p>
                            </div>
                            <span className="text-[9px] font-bold px-2 py-0.5 bg-emerald-100/40 text-emerald-800 rounded">{d.category}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Field 2: Trip Duration */}
              <div className="lg:col-span-2 text-left relative">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2 flex items-center space-x-1">
                  <Calendar className="h-3 w-3 text-emerald-600" />
                  <span>Duration</span>
                </label>
                <div 
                  onClick={() => setShowDurationDropdown(!showDurationDropdown)}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3.5 text-sm font-semibold text-slate-800 cursor-pointer flex items-center justify-between font-heading"
                >
                  <span>{duration}</span>
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                </div>
                {showDurationDropdown && (
                  <div className="absolute top-[102%] left-0 bg-white border border-slate-200 rounded-2xl shadow-xl mt-2 p-2 overflow-hidden z-50 w-full">
                    {['2 Days', '3 Days', '5 Days', '7 Days'].map(val => (
                      <button 
                        key={val}
                        type="button" 
                        onClick={() => { setDuration(val); setShowDurationDropdown(false); }}
                        className="w-full text-left px-4 py-2 text-xs hover:bg-slate-100 rounded-lg font-bold transition-colors"
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Field 3: Budget Options */}
              <div className="lg:col-span-2 text-left relative">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2 flex items-center space-x-1">
                  <DollarSign className="h-3 w-3 text-emerald-600" />
                  <span>Budget</span>
                </label>
                <div 
                  onClick={() => setShowBudgetDropdown(!showBudgetDropdown)}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3.5 text-sm font-semibold text-slate-800 cursor-pointer flex items-center justify-between font-heading"
                >
                  <span className="text-orange-600 font-extrabold">{budget.split(' ')[0]}</span>
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                </div>
                {showBudgetDropdown && (
                  <div className="absolute top-[102%] left-0 bg-white border border-slate-200 rounded-2xl shadow-xl mt-2 p-2 overflow-hidden z-50 w-full">
                    {['Budget Friendly', 'Boutique Adventure', 'Luxury Timber Resorts'].map(val => (
                      <button 
                        key={val}
                        type="button" 
                        onClick={() => { setBudget(val); setShowBudgetDropdown(false); }}
                        className="w-full text-left px-4 py-2 text-xs hover:bg-slate-100 rounded-lg font-bold transition-colors"
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Field 4: Travel Style */}
              <div className="lg:col-span-2 text-left relative">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2 flex items-center space-x-1">
                  <Compass className="h-3 w-3 text-emerald-600" />
                  <span>Style</span>
                </label>
                <div 
                  onClick={() => setShowStyleDropdown(!showStyleDropdown)}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3.5 text-sm font-semibold text-slate-800 cursor-pointer flex items-center justify-between font-heading"
                >
                  <span className="truncate">{travelStyle}</span>
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                </div>
                {showStyleDropdown && (
                  <div className="absolute top-[102%] left-0 bg-white border border-slate-200 rounded-2xl shadow-xl mt-2 p-2 overflow-hidden z-50 w-full">
                    {['Cultured Explorers', 'Misty Café Hopping', 'Active Mountaineers', 'Orchard Sabbatical'].map(val => (
                      <button 
                        key={val}
                        type="button" 
                        onClick={() => { setTravelStyle(val); setShowStyleDropdown(false); }}
                        className="w-full text-left px-4 py-2 text-xs hover:bg-slate-100 rounded-lg font-bold transition-colors"
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Field 5: Adventure Level */}
              <div className="lg:col-span-2 text-left relative">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2 flex items-center space-x-1">
                  <Sparkles className="h-3 w-3 text-emerald-600" />
                  <span>Adventure</span>
                </label>
                <div 
                  onClick={() => setShowAdvDropdown(!showAdvDropdown)}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3.5 text-sm font-semibold text-slate-800 cursor-pointer flex items-center justify-between font-heading"
                >
                  <span className="truncate">{adventureLevel}</span>
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                </div>
                {showAdvDropdown && (
                  <div className="absolute top-[102%] left-0 bg-white border border-slate-200 rounded-2xl shadow-xl mt-2 p-2 overflow-hidden z-50 w-full">
                    {['Relaxed Walks', 'Moderate High-Trails', 'Challenging Valleys'].map(val => (
                      <button 
                        key={val}
                        type="button" 
                        onClick={() => { setAdventureLevel(val); setShowAdvDropdown(false); }}
                        className="w-full text-left px-4 py-2 text-xs hover:bg-slate-100 rounded-lg font-bold transition-colors"
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit CTA: Generate My Himachal Trip */}
              <div className="lg:col-span-1 w-full flex items-center">
                <button 
                  type="submit" 
                  className="w-full bg-emerald-800 hover:bg-emerald-950 text-white font-bold tracking-wider py-4 rounded-2xl shadow-lg shadow-emerald-900/10 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all text-xs uppercase flex items-center justify-center space-x-1.5 cursor-pointer h-[50px]"
                >
                  <Search className="h-4 w-4 shrink-0" />
                  <span className="lg:hidden text-xs">Generate My Himachal Trip</span>
                </button>
              </div>

            </form>

            {/* Hint bar indicating offline/online seamless capability */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2">
              <span className="flex items-center space-x-1">
                <Info className="h-3.5 w-3.5 text-[#F97316] shrink-0" />
                <span>Type any locale (e.g. *Grahan* or *Sainj*) to trigger local synthesis or prebuilt logs instantly.</span>
              </span>
              <span className="font-semibold text-emerald-800">
                ⚡ Real-time travel mapping engine, backed by local experts.
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 4. EXPLORE HIDDEN HIMACHAL: CREATIVE MASONRY GRID */}
      <section id="explore-himachal" ref={exploreSectionRef} className="py-24 bg-[#FAF7F0] border-b border-orange-100/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Header Layout */}
          <div className="md:flex md:justify-between md:items-end mb-16 max-w-5xl">
            <div className="space-y-3">
              <span className="text-[10px] font-bold tracking-widest text-[#F97316] uppercase block">EXPLORE UNCHARTED SANCTUARIES</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight font-heading">
                Explore Hidden Himachal
              </h2>
              <p className="text-slate-500 max-w-xl text-xs md:text-sm leading-relaxed">
                Click any destination to load its beautifully aligned travel-poster itinerary directly in our active journal showcase.
              </p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <span className="inline-flex items-center space-x-1 px-4 py-2 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5 text-[#F97316] shrink-0 fill-orange-500 animate-spin" />
                <span>11 Unexplored Gems Map</span>
              </span>
            </div>
          </div>

          {/* Creative layout with unique heights for editorial magazine feel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {HIMACHAL_DESTINATIONS.map((dest, idx) => {
              // Apply distinctive height rules for dynamic rhythm
              const cardClass = idx % 3 === 0 
                ? 'min-h-[460px] lg:col-span-1' 
                : idx % 3 === 1 
                  ? 'min-h-[380px] lg:col-span-1' 
                  : 'min-h-[420px] lg:col-span-1';

              const isLiked = !!likedDestinations[dest.id];

              return (
                <motion.div 
                  key={dest.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                  onClick={() => handlePrebuiltSelect(dest.id)}
                  className={`group relative rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer bg-white border border-slate-200/40 flex flex-col justify-end ${cardClass}`}
                >
                  
                  {/* Photo with beautiful slow scale effects */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={dest.image} 
                      alt={dest.name} 
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Shadow layer gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
                  </div>

                  {/* Top floating markers */}
                  <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-10">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#FDFBF7] bg-emerald-900/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/25">
                      {dest.category}
                    </span>
                    <button 
                      onClick={(e) => toggleLikeCard(dest.id, e)}
                      className="p-2 rounded-full bg-white/95 backdrop-blur-sm shadow-md hover:bg-[#F97316] hover:text-white transition-colors duration-200 text-slate-600"
                    >
                      <Heart className={`h-4 w-4 ${isLiked ? 'fill-[#F97316] text-[#F97316] hover:text-white' : ''}`} />
                    </button>
                  </div>

                  {/* Main card info area */}
                  <div className="p-6 relative z-10 text-white space-y-2.5">
                    
                    <div className="flex items-center space-x-1.5 text-[10px] uppercase font-semibold text-emerald-300">
                      <MapPin className="h-3 w-3 shrink-0" />
                      <span className="truncate">{dest.location}</span>
                    </div>

                    <h3 className="text-2xl font-extrabold tracking-tight font-heading group-hover:text-[#F97316] transition-colors">{dest.name}</h3>
                    
                    {/* Extra detail revealed nicely on layout hover */}
                    <p className="text-xs text-slate-200/90 leading-relaxed line-clamp-2 md:line-clamp-3 font-sans font-light">
                      {dest.description}
                    </p>

                    <div className="pt-2 border-t border-white/10 flex justify-between items-center text-[10px] font-bold tracking-widest uppercase">
                      <div>
                        <span className="text-slate-400 block text-[8px] mb-0.5">BEST SEASON</span>
                        <span className="text-[#FDFBF7]">{dest.bestSeason.split(' ')[0]} {dest.bestSeason.includes('to') ? 'Season' : ''}</span>
                      </div>
                      <div className="bg-[#F97316]/90 text-white rounded-full px-3 py-1 text-[9px] lowercase font-normal flex items-center space-x-1">
                        <Star className="h-2.5 w-2.5 fill-white" />
                        <span>{dest.rating}</span>
                      </div>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. POETIC STORYTELLING SECTION: "Not every journey is found on Google Maps" */}
      <section className="relative py-28 text-center text-white bg-slate-900 overflow-hidden">
        
        {/* Full Screen Cinematic mountain background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=80" 
            alt="Huge Himachal Ridge Forest" 
            className="w-full h-full object-cover scale-102 transform hover:scale-105 duration-[4000ms]"
          />
          {/* Deep slate green / warm dark filter overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#111827] via-emerald-950/80 to-[#111827]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-8">
          
          <div className="inline-flex items-center space-x-1 text-orange-400">
            <Compass className="h-5 w-5 animate-spin" />
            <span className="text-xs font-bold uppercase tracking-widest">HIMACHAL ORCHID LORE</span>
          </div>

          {/* Huge background mountain image. Large Quote: Not every journey is found on Google Maps */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight font-heading text-neutral-100 max-w-3xl mx-auto leading-relaxed">
            "Not every journey is found on Google Maps."
          </h2>

          <div className="w-16 h-1 bg-[#F97316] mx-auto rounded-full" />

          {/* Explain how AI helps users discover lesser known locations */}
          <p className="text-neutral-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed tracking-wide font-sans">
            Standard travel logs trap seekers in the same congested loops of Manali or Shimla. HimaTrails AI leverages oral shepherd lore, high-altitude path indices, and local homestay registrations to generate bespoke schedules across untouched timberlands. Step back into time and discover the true soul of Himachal.
          </p>

          <div className="pt-4">
            <button 
              onClick={() => handleScrollToSection(plannerSectionRef)}
              className="px-6 py-3.5 bg-white hover:bg-[#FDFBF7] text-slate-900 border border-slate-200 uppercase tracking-widest text-[10px] font-bold rounded-full shadow-lg transition-transform hover:scale-105 cursor-pointer duration-300"
            >
              Consult the AI Oracle
            </button>
          </div>

        </div>

      </section>

      {/* 6. AI ITINERARY SHOWCASE: INTERACTIVE PREMIUM TRAVEL JOURNAL */}
      <section id="showcase-journal" ref={showcaseRef} className="py-24 bg-[#FDFBF7]">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] font-bold tracking-widest text-emerald-800 uppercase block">ACTIVE ADVENTURE FILE</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              The Travel Journal Showcase
            </h2>
            <p className="text-slate-500 text-xs md:text-sm">
              Review your customized daily plan. Change input criteria above to overwrite this journal instantly using Gemini AI.
            </p>
          </div>

          {/* Main Journal Container style like a premium leather/woodbound ledger book */}
          {activeItinerary ? (
            <div className="bg-white rounded-[36px] shadow-xl shadow-slate-900/5 overflow-hidden border border-slate-200">
              
              {/* Cover Header Banner */}
              <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <img 
                  src={activeItinerary.coverImage || FALLBACK_COVER} 
                  alt={activeItinerary.destination} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Float detail metrics */}
                <div className="absolute bottom-6 left-6 right-6 md:left-8 md:right-8 flex flex-wrap items-end justify-between text-white gap-4">
                  <div className="space-y-1.5 max-w-xl text-left">
                    <span className="text-[9px] font-bold tracking-widest uppercase bg-[#F97316] text-white px-3 py-1 rounded-full">
                      {activeItinerary.season}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black font-heading leading-tight">{activeItinerary.destination}</h3>
                    <p className="text-xs text-slate-200 leading-relaxed font-sans">{activeItinerary.tagline}</p>
                  </div>

                  <div className="flex space-x-3 text-xs font-bold text-slate-100 uppercase tracking-wider shrink-0 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/25">
                    <div>
                      <span className="text-[8px] text-slate-300 block mb-0.5">ESTIMATE</span>
                      <span className="text-white text-xs">{activeItinerary.totalCostEstimate}</span>
                    </div>
                    <div className="border-l border-white/20 pl-3">
                      <span className="text-[8px] text-slate-300 block mb-0.5">ADVENTURE</span>
                      <span className="text-orange-400 text-xs">{activeItinerary.adventureLevel || 'Moderate'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Journal Body Grid */}
              <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
                
                {/* Left hand Journal column: Highlights, Lodging, Overview */}
                <div className="lg:col-span-4 space-y-6 lg:border-r lg:border-slate-150 lg:pr-8">
                  
                  {/* Summary Statement */}
                  <div className="space-y-2.5">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#F97316]">THE ESSENCE</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans font-light">
                      {activeItinerary.summary}
                    </p>
                  </div>

                  {/* Highlights Bullet Ledger */}
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-800">KEY MEMORIES</h4>
                    <ul className="space-y-2 text-slate-700 text-xs leading-relaxed">
                      {activeItinerary.highlights.map((hlt, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{hlt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Curated Lodging Card */}
                  {activeItinerary.recommendedHotels && activeItinerary.recommendedHotels.length > 0 && (
                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">ELITE LODGING RETREAT</h4>
                      {activeItinerary.recommendedHotels.map((hotel, hIdx) => (
                        <div key={hIdx} className="rounded-2xl border border-slate-200/60 overflow-hidden bg-slate-50/50 p-3 space-y-2">
                          <img 
                            src={hotel.imageUrl || 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=400&q=80'} 
                            alt={hotel.name} 
                            className="w-full h-24 object-cover rounded-xl"
                          />
                          <div className="flex justify-between items-start">
                            <h5 className="font-extrabold text-[11px] text-slate-800 font-heading leading-tight">{hotel.name}</h5>
                            <span className="text-[9px] font-bold bg-white text-emerald-800 px-1.5 py-0.5 border border-slate-100 rounded flex items-center space-x-0.5 shrink-0">
                              <Star className="h-2.5 w-2.5 fill-[#F97316] text-[#F97316]" />
                              <span>{hotel.rating}</span>
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-500 leading-normal line-clamp-2 pr-1">{hotel.description}</p>
                          <div className="flex flex-wrap gap-1 pt-1">
                            {hotel.tags.map(t => (
                              <span key={t} className="text-[8px] bg-white text-slate-500 border border-slate-200 rounded-md px-1.5 py-0.5 capitalize">{t}</span>
                            ))}
                          </div>
                          <div className="pt-2 flex justify-between items-center border-t border-slate-100">
                            <span className="text-[10px] text-slate-400">RATE</span>
                            <span className="text-xs font-bold text-slate-900">{hotel.pricePerNight} <span className="text-[9px] font-normal text-slate-400">/night</span></span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                </div>

                {/* Right hand Journal column: Dynamic Day Tab and list of daily events */}
                <div className="lg:col-span-8 space-y-6">
                  
                  {/* Ledger Tabs for Day Selection */}
                  <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
                    {activeItinerary.days.map((day) => (
                      <button
                        key={day.dayNumber}
                        onClick={() => setSelectedDayTab(day.dayNumber)}
                        className={`px-4 py-2 rounded-full font-bold tracking-widest text-[10px] uppercase transition-all whitespace-nowrap cursor-pointer ${selectedDayTab === day.dayNumber ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                      >
                        DAY 0{day.dayNumber}
                      </button>
                    ))}
                  </div>

                  {/* Day Overview text statement */}
                  {activeItinerary.days.map((day) => {
                    if (day.dayNumber !== selectedDayTab) return null;

                    return (
                      <motion.div 
                        key={day.dayNumber}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        
                        {/* Day Title and description: e.g. Day 1: Waterfall Trail, local homestay */}
                        <div className="space-y-1.5 p-4 rounded-2xl bg-orange-50/50 border border-orange-100/50">
                          <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#F97316]">FOCUS SCHEDULE</span>
                          <h4 className="text-lg md:text-xl font-bold font-heading text-slate-900 leading-tight">{day.title}</h4>
                          <p className="text-xs text-slate-500 leading-relaxed font-sans font-light">
                            {day.description}
                          </p>
                        </div>

                        {/* Interactive chronologically laid out events */}
                        <div className="space-y-6 relative border-l border-slate-200 pl-4 md:pl-6 ml-2.5">
                          {day.activities.map((act, aIdx) => (
                            <div key={aIdx} className="relative space-y-2">
                              
                              {/* Colored node marker */}
                              <div className="absolute -left-[21px] md:-left-[29px] top-1.5 p-1 rounded-full bg-slate-900 text-white shadow-md">
                                <span className="block h-1.5 w-1.5 rounded-full bg-[#F97316]" />
                              </div>

                              {/* Time + category */}
                              <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                                <span>{act.time}</span>
                                <span className="bg-slate-100 rounded-md px-2 py-0.5 text-[10px] text-slate-500 font-bold">{act.type}</span>
                              </div>

                              {/* Card detail layout */}
                              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                                
                                {/* Photo preview */}
                                <div className="sm:col-span-4 h-24 sm:h-20 w-full overflow-hidden rounded-xl">
                                  <img 
                                    src={act.imageUrl || 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=400&q=80'} 
                                    alt={act.title} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>

                                <div className="sm:col-span-8 text-left space-y-1">
                                  <h5 className="font-extrabold text-sm text-slate-900 font-heading leading-tight">{act.title}</h5>
                                  
                                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                                    {act.description}
                                  </p>

                                  <div className="flex flex-wrap items-center justify-between text-[10px] text-slate-400 font-semibold pt-1">
                                    <span className="flex items-center space-x-1">
                                      <MapPin className="h-3 w-3 text-emerald-600" />
                                      <span className="truncate max-w-[140px]">{act.location}</span>
                                    </span>
                                    <span className="text-slate-700 bg-slate-100 rounded-full px-2 py-0.5 font-bold">{act.cost}</span>
                                  </div>
                                </div>

                              </div>

                            </div>
                          ))}
                        </div>

                      </motion.div>
                    );
                  })}

                </div>

              </div>

            </div>
          ) : (
            <div className="py-20 text-center bg-slate-50 border border-slate-200 rounded-[32px] space-y-4">
              <Compass className="h-10 w-10 mx-auto text-slate-400 stroke-[1.5] animate-spin" />
              <p className="text-sm text-slate-500">Retrieving standard master plans...</p>
            </div>
          )}

          {errorText && (
            <div className="mt-6 p-4 rounded-xl bg-orange-50 border border-orange-100 text-xs text-orange-700 font-semibold max-w-xl mx-auto">
              {errorText}
            </div>
          )}

        </div>
      </section>

      {/* 7. EXPERIENCE CATEGORIES: IMMERSIVE ACCENT GRID */}
      <section id="experience-categories" className="py-24 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
            <span className="text-[10px] font-bold tracking-widest text-emerald-800 uppercase block">IMMERSIVE LANDSCAPE MODES</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-heading">
              Himachal Experience Categories
            </h2>
            <p className="text-slate-500 text-xs md:text-sm">
              Discover unique activity themes optimized dynamically by altitude thresholds.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {EXPERIENCE_CATEGORIES.map((cat, i) => (
              <motion.div 
                key={cat.id}
                whileHover={{ y: -4 }}
                className="group relative h-48 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-slate-200/30 bg-white"
              >
                <div className="absolute inset-0 z-0">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/65 group-hover:bg-slate-950/50 transition-colors" />
                </div>

                <div className="absolute inset-0 p-5 flex flex-col justify-end text-left text-white z-10 space-y-1">
                  <span className="text-[9px] font-bold tracking-widest text-[#F97316] uppercase">{cat.label}</span>
                  <h4 className="font-extrabold text-sm md:text-base font-heading leading-tight">{cat.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. LOCAL EXPERIENCES: HORIZONTAL STORYTELLING CARDS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="max-w-2xl text-left mb-16 space-y-3">
            <span className="text-[10px] font-bold tracking-widest text-[#F97316] uppercase block">THE CULTURAL DIALOGUE</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-heading">
              Bespoke Epicurean & Village Walks
            </h2>
            <p className="text-slate-500 text-xs md:text-sm">
              Slower activities curated to foster authentic local exchange and deep nature connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {LOCAL_EXPERIENCES.map((exp, i) => (
              <div 
                key={i}
                className="flex flex-col sm:flex-row gap-6 items-start sm:items-center p-5 rounded-3xl hover:bg-slate-50 transition-colors border border-slate-100 bg-white/50"
              >
                <div className="w-full sm:w-44 h-36 overflow-hidden rounded-2xl shrink-0">
                  <img 
                    src={exp.image} 
                    alt={exp.title} 
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2 text-left">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-emerald-800">{exp.tagline}</span>
                  <h3 className="text-lg font-bold text-slate-900 font-heading leading-tight">{exp.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans pr-1">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 py-16 text-slate-400 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10">
          
          <div className="md:col-span-4 space-y-4 text-left">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-xl bg-emerald-700 text-white">
                <Compass className="h-5 w-5" />
              </div>
              <span className="text-lg font-black tracking-wider text-[#FDFBF7] font-heading">HIMATRAILS AI</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-sans max-w-xs">
              A bespoke National Geographic style digital campaign helping explorers discover the forgotten, organic, and offbeat side of Himachal Pradesh.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="font-bold text-[10px] tracking-widest uppercase text-[#FDFBF7]">Offbeat Hamlets</h4>
            <ul className="space-y-2 text-xs">
              {['Jibhi Solitude', 'Kalga Apple Walks', 'Tirthan Angling', 'Barot Valley Canopy'].map(h => (
                <li key={h} className="hover:text-[#F97316] transition-colors"><a href="#ai-planner">{h}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="font-bold text-[10px] tracking-widest uppercase text-[#FDFBF7]">AI Mappings</h4>
            <ul className="space-y-2 text-xs">
              <li>Altitude Mappings</li>
              <li>Shepherd Route Registers</li>
              <li>Kathguni Woodhouse Audits</li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3 text-left">
            <h4 className="font-bold text-[10px] tracking-widest uppercase text-[#FDFBF7]">Contact</h4>
            <p className="text-xs text-slate-500 font-sans leading-relaxed">
              Shimla High Forest Reserve, <br /> Himachal Pradesh Tourism Hub <br />
              info@himatrails.ai
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10 mt-10 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500">
          <p>© 2026 HimaTrails AI (Himachal Pradesh Tourism Campaign). All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <span>Kathguni-Certified</span>
            <span>•</span>
            <span>Great Himalayan National Park Advocate</span>
          </div>
        </div>
      </footer>

      {/* GLOBAL GENERATING STATE PORTAL INTERFACE */}
      <AnimatePresence>
        {isGenerating && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl z-[9999] flex flex-col items-center justify-center p-6 text-[#FDFBF7]"
          >
            <div className="max-w-md text-center space-y-8">
              
              {/* Spherical glowing mountain alignment vectors */}
              <div className="relative h-28 w-28 mx-auto flex items-center justify-center bg-emerald-800/10 rounded-full border border-emerald-500/20 shadow-2xl">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                  className="absolute inset-1.5 border-2 border-dashed border-[#F97316]/50 rounded-full"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
                  className="absolute inset-4 border border-dashed border-emerald-400 rounded-full"
                />
                <Globe className="h-8 w-8 text-[#FDFBF7] stroke-[1.5] animate-pulse" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black font-heading text-white">Curating Himachal Lore</h3>
                <p className="text-slate-400 text-xs">Assembling offbeat homestays, pine vistas, and road altitude thresholds.</p>
              </div>

              {/* Step indicator feedback message */}
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl w-full flex items-center justify-center space-x-3 text-orange-400 font-bold text-xs uppercase tracking-widest shadow-inner min-h-[64px]">
                <Sparkles className="h-4 w-4 animate-spin shrink-0 text-orange-400" />
                <span>{generationStep}</span>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
