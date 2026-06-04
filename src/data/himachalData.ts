export interface Activity {
  time: string;
  title: string;
  description: string;
  location: string;
  cost: string;
  type: 'attraction' | 'restaurant' | 'hotel' | 'activity';
  imageUrl: string;
}

export interface DayPlan {
  dayNumber: number;
  title: string;
  description: string;
  activities: Activity[];
}

export interface RecommendedHotel {
  name: string;
  description: string;
  pricePerNight: string;
  rating: string;
  imageUrl: string;
  tags: string[];
}

export interface HimachalItinerary {
  destination: string;
  tagline: string;
  duration: number;
  season: string;
  budgetType: string;
  adventureLevel: string;
  totalCostEstimate: string;
  coverImage: string;
  summary: string;
  highlights: string[];
  recommendedHotels: RecommendedHotel[];
  days: DayPlan[];
}

export interface DestinationCard {
  id: string;
  name: string;
  tagline: string;
  location: string;
  category: string;
  bestSeason: string;
  priceEstimate: string;
  adventureLevel: string;
  rating: string;
  image: string;
  description: string;
  highlights: string[];
}

export const HIMACHAL_DESTINATIONS: DestinationCard[] = [
  {
    id: 'jibhi',
    name: 'Jibhi',
    tagline: 'Mist, Cedar Woods & Hidden Cascades',
    location: 'Tirthan Valley Sector, Kullu',
    category: 'Waterfalls',
    bestSeason: 'March to June & Oct to Nov',
    priceEstimate: '₹4,500/day per person',
    adventureLevel: 'Moderate Adventure',
    rating: '4.92',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80',
    description: 'A cozy hamlet nestled in the Seraj Valley, famous for its rustic alpine wood cottages, emerald pine forests, and cascading hidden waterfall pools.',
    highlights: ['Jibhi Waterfall Trail', 'Latoda Café Sensation', 'Sharing woodfire tales with locals']
  },
  {
    id: 'kalga',
    name: 'Kalga',
    tagline: 'Apples Orchards & Silent Apple-Wood Lodges',
    location: 'Parvati Valley Basin',
    category: 'Villages',
    bestSeason: 'April to July & September to November',
    priceEstimate: '₹3,200/day per person',
    adventureLevel: 'Easy Trekking',
    rating: '4.89',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80', // Beautiful village valley
    description: 'A slow-paced, serene paradise where traditional wooden houses stand amidst apple groves, looking over the roaring Parvati River.',
    highlights: ['Apple orchard strolls', 'Sunset over Kheerganga ridge', 'Mouth-watering local Himachali Siddu']
  },
  {
    id: 'tirthan-valley',
    name: 'Tirthan Valley',
    tagline: 'A Crystal Trout Sanctuary & Mystic Glades',
    location: 'Banjar, Great Himalayan National Park',
    category: 'Waterfalls',
    bestSeason: 'March to June & October to December',
    priceEstimate: '₹6,000/day per person',
    adventureLevel: 'Moderate to Extreme',
    rating: '4.95',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=80', // Glistening river valley
    description: 'Famous as a gateway to the Great Himalayan National Park, offering pristine turquoise trout waters, dramatic gorges, and lush organic camping grounds.',
    highlights: ['Teal river angling', 'Day trekking in GHNP core zone', 'Water mills observation']
  },
  {
    id: 'chitkul',
    name: 'Chitkul',
    tagline: 'The Ultimate Village of the Indo-Tibetan Line',
    location: 'Sangla Valley, Kinnaur',
    category: 'Villages',
    bestSeason: 'May to October',
    priceEstimate: '₹5,500/day per person',
    adventureLevel: 'High Altitude',
    rating: '4.98',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80', // Last village look
    description: 'Claimed as the last inhabited village on the Indian border, displaying soaring rocky Kinnaur Kailash spires, wood-crafted temples, and stunning riverbeds.',
    highlights: ['Baspa River wooden line walks', 'Hindustan ka Aakhri Dhaba organic food', 'Kinnauri organic farm harvest tours']
  },
  {
    id: 'barot',
    name: 'Barot Valley',
    tagline: 'Offbeat Hanging Trolleys & Teal Trout Ponds',
    location: 'Mandi Outskirts (Uhl River)',
    category: 'Camping',
    bestSeason: 'April to June & Sept to Dec',
    priceEstimate: '₹3,800/day per person',
    adventureLevel: 'Moderate',
    rating: '4.87',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1000&q=80', // Camp under stars
    description: 'An idyllic destination along the spectacular Uhl river, originally built for a colonial-era reservoir trolley. Popular now for remote streamside camps and angling.',
    highlights: ['Uhl River streamside campfire', 'Shanan Hydel Project wooden pipeline loop', 'Nargu Wildlife Refuge birding']
  },
  {
    id: 'shoja',
    name: 'Shoja',
    tagline: 'Draped Valley Vistas & Mist of Seraj',
    location: 'Seraj Valley Sector',
    category: 'Treks',
    bestSeason: 'April to June & Sept to November',
    priceEstimate: '₹4,800/day per person',
    adventureLevel: 'Moderate',
    rating: '4.91',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80', // Misty high wood forest
    description: 'A tiny, dreamy cottage village perched high on a ridge, offering 180-degree panoramas of peak horizons, dense pine groves, and ancient stone watchtowers.',
    highlights: ['Jalori Pass 360° View Point', 'Serolsar Lake sacred walk', 'Verdant meadows carpet picnic']
  },
  {
    id: 'pulga',
    name: 'Pulga',
    tagline: 'Fairy Forest Shrines & Wooden Tea Spots',
    location: 'Deep Parvati Valley',
    category: 'Cafés',
    bestSeason: 'May to July & Oct to Dec',
    priceEstimate: '₹2,800/day per person',
    adventureLevel: 'Easy Trekking',
    rating: '4.90',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80', // Forest retreat
    description: 'A short walk from Barshaini leads into an ancient cedar wonderland affectionately known as the "Fairy Forest". Host to unique organic tea spots.',
    highlights: ['Misty treehouse stays', 'Fairy Forest wood bench coffeeing', 'Local wooden homestay storytelling']
  },
  {
    id: 'grahan',
    name: 'Grahan',
    tagline: 'Hidden Devta Temples & Honey Pine Paths',
    location: 'Deep Kasol Outcrop',
    category: 'Treks',
    bestSeason: 'April to July & Sept to Nov',
    priceEstimate: '₹3,000/day per person',
    adventureLevel: 'Challenging Trail',
    rating: '4.93',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80', // Grand mountain backdrop
    description: 'Isolated from roadways, Grahan is accessed only by a breathtaking 5-hour hike alongside sparkling honey pine paths and ancient Devta wooden shrines.',
    highlights: ['Grahan river hiking alongside creeks', 'Sip of direct fresh rhododendron juice', 'Ancient architecture wooden towers observation']
  },
  {
    id: 'rakchham',
    name: 'Rakchham',
    tagline: 'Glacier Stream Bed & Pastoral Solitude',
    location: 'Between Sangla & Chitkul, Kinnaur',
    category: 'Road Trips',
    bestSeason: 'May to October',
    priceEstimate: '₹5,800/day per person',
    adventureLevel: 'Extreme / Altitude',
    rating: '4.96',
    image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1000&q=80', // Snowy glacier mountain
    description: 'Where absolute silence is framed by soaring glaciers, silver birches, and a glittering riverbed stream populated by local flocks of sheep.',
    highlights: ['Scenic glacier glacier bed hike', 'Pastoral sheep herder interactions', 'Breathtaking bridge photography']
  },
  {
    id: 'sainj-valley',
    name: 'Sainj Valley',
    tagline: 'Shangarh Meadows & Meadows of the Gods',
    location: 'Sainj, Great Himalayan National Park Outcrop',
    category: 'Adventure',
    bestSeason: 'March to June & September to December',
    priceEstimate: '₹4,000/day per person',
    adventureLevel: 'Moderate',
    rating: '4.94',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1000&q=80', // Green meadow slopes
    description: 'Renowned for the vast, emerald green Shangarh meadows — perfectly manicured alpine grass fields said to have been designed by the Pandavas themselves.',
    highlights: ['Shangarh Temple intricate wood carvings', 'Spectacular Meadow relaxation', 'Hidden gorge river strolls']
  },
  {
    id: 'thanedar',
    name: 'Thanedar',
    tagline: 'Birthplace of Indian Red Delicious Apples',
    location: 'Kotgarh Sector, Shimla Area',
    category: 'Homestays',
    bestSeason: 'April to October',
    priceEstimate: '₹5,200/day per person',
    adventureLevel: 'Relaxed Curated',
    rating: '4.88',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1000&q=80', // Apple farm trees
    description: 'The pioneering high-end valley where Samuel Stokes first planted the American apple seeds, creating Himachal’s massive premium apple culture.',
    highlights: ['Stokes Historical Mansion tour', 'Luxury heritage orchard stay', 'Hatu Peak spectacular panorama drive']
  }
];

export const EXPERIENCE_CATEGORIES = [
  { id: 'adventure', name: 'High Adventure', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80', label: 'Summit Peaks' },
  { id: 'cafes', name: 'Mountain Cafés', image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=400&q=80', label: 'Cozy Fireplaces' },
  { id: 'camping', name: 'Offbeat Camping', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80', label: 'Under Stars' },
  { id: 'homestays', name: 'Woodland Homestays', image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=400&q=80', label: 'Heritage Living' },
  { id: 'roadtrips', name: 'Sinuous Road Trips', image: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=400&q=80', label: 'Breathtaking Drives' },
  { id: 'waterfalls', name: 'Secret Waterfalls', image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400&q=80', label: 'Glacier Thaws' },
  { id: 'villages', name: 'Untouched Villages', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=400&q=80', label: 'Farming Hermits' },
  { id: 'treks', name: 'Legendary Treks', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=400&q=80', label: 'Ancient Pathways' }
];

export const LOCAL_EXPERIENCES = [
  {
    title: "Organic Apple Orchard Stays",
    tagline: "Live among blossoming fruit rows",
    description: "Stay in heritage wooden cabins in Thanedar, wake up to scent of handpicked apples, and bake traditional apple pies with local families.",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=650&q=80"
  },
  {
    title: "Mountain Café Hopping",
    tagline: "Riverside cedar decks with local folk bands",
    description: "From cozy woodfired pizzerias in Jibhi to rooftop vegan wood decks in Kalga, enjoy local organic coffee, herb tea, and live sitar acoustic strings.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=650&q=80"
  },
  {
    title: "Stone & Timber Kathguni Village Walks",
    tagline: "Architecture that resists centuries of snow",
    description: "Tour the traditional slate-roofed Kathguni multi-story layouts of Naggar or Pulga, guided by elder carpenters who know the historic timber secrets.",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=650&q=80"
  },
  {
    title: "Bonfire streamside Trout Camping",
    tagline: "Catch your meal, smoke it with wild cedar branch",
    description: "Pitch premium water-resistant dome tents along the Uhl river in Barot, angling with local experts and slow-cooking trout over deep charcoal pits.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=650&q=80"
  }
];

export const PREBUILT_HIMACHAL_ITINERARIES: Record<string, HimachalItinerary> = {
  'jibhi': {
    destination: 'Jibhi & Seraj Valley Sanctuary',
    tagline: 'A curated journey through cascading streams, ancient timber fort towers, and silent pine trails.',
    duration: 3,
    season: 'Scented Alpine Spring (March to June)',
    budgetType: 'Boutique Adventure',
    adventureLevel: 'Moderate Trails',
    totalCostEstimate: '₹14,500 per traveler',
    coverImage: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80',
    summary: 'Sparsely touched by standard tourism, this 3-day itinerary combines deep forest walks in the Seraj Valley with artisanal café experiences and stunning historical wood fortresses.',
    highlights: [
      'Twilight bonfire beside the crystal Jibhi stream',
      'The breathtaking 360-degree panorama of Jalori Pass at 10,800 feet',
      'Authentic Himachali organic dinners featuring ghee-infused Siddu'
    ],
    recommendedHotels: [
      {
        name: 'The Cedarwood Treehouse Retreat',
        description: 'Perched high in old Himalayan pines, offering wooden balconies, modern comforts, and a direct view over the Jibhi water rapids.',
        pricePerNight: '₹6,500',
        rating: '4.95',
        imageUrl: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=500&q=80',
        tags: ['Pristine Balcony', 'Outdoor Bonfire', 'Locally Sourced Meals']
      },
      {
        name: 'The Seraj Heritage Lodge',
        description: 'An elegant Kathguni-style villa constructed from stone and dry cedar timber, with premium organic farm-to-table culinary menus.',
        pricePerNight: '₹4,800',
        rating: '4.88',
        imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80',
        tags: ['Mountain View', 'Kathguni Architecture', 'Spa Haven']
      }
    ],
    days: [
      {
        dayNumber: 1,
        title: 'Hidden Waterfalls & Stream-Side Cafés',
        description: 'Unpack your bags in your wooden lodge, then spend the afternoon trekking through a mossy cedar trail to discover Jibhi’s secret waterfall tiers.',
        activities: [
          {
            time: '10:00 AM',
            title: 'Welcome Herbal Infusion & Lodge Settle',
            description: 'Arrive at Jibhi Valley. Settle into your cedar log cabin and receive a personalized briefing with a native guide over freshly brewed wild mint tea.',
            location: 'Main Seraj Forest Outcrop',
            cost: 'Included',
            type: 'hotel',
            imageUrl: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '02:00 PM',
            title: 'Trek to the Seven Stepped Jibhi Cascades',
            description: 'Set out on a 30-minute flat footpath framed by handcrafted wooden footbridges. Discover the crystal pools fed by mountain snow glaciers, perfect for a crisp splash.',
            location: 'Jibhi Gorge Path',
            cost: 'Free Entry',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '06:00 PM',
            title: 'Live Acoustic Session at Cafe Latoda',
            description: 'Unwind at an iconic riverside café built from logs. Enjoy fresh wooden-oven pizza, Himachali apple juices, and acoustic Himalayan guitar folk tunes.',
            location: 'Beside Jibhi River Rapids',
            cost: '₹800 for two',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=400&q=80'
          }
        ]
      },
      {
        dayNumber: 2,
        title: 'Jalori Pass Summit & Sacred Serolsar Lake',
        description: 'Ascend by private 4x4 vehicle to the high Jalori mountain pass, then trek through majestic oak forests to a sacred mirroring lake.',
        activities: [
          {
            time: '08:00 AM',
            title: 'Ascent to Jalori Pass (10,800 ft)',
            description: 'Drive up a sinuous mountain cliff road to the top of the pass, where panoramic views of the ice-covered peak horizons emerge through early mist.',
            location: 'Jalori ridge line',
            cost: '₹2,500 private jeep',
            type: 'activity',
            imageUrl: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '11:00 AM',
            title: 'Oak Tree Forest Trek to Serolsar Lake',
            description: 'Hike 5 kilometers along an emerald forest corridor to a magical high-altitude pool, sacred to local villagers, which never has a single leaf floating on it.',
            location: 'Great Himalayan National Park Outpost',
            cost: 'Free access',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '07:30 PM',
            title: 'The Royal Siddu Tasting & Storytelling',
            description: 'Feast on freshly steamed local wheat buns stuffed with cracked poppy seeds and walnuts, drowned in absolute golden-warm local cow ghee.',
            location: 'Lodge Outdoor Deck',
            cost: '₹600 pax',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80'
          }
        ]
      },
      {
        dayNumber: 3,
        title: 'Ancient Wooden Tower of Chehni Kothi',
        description: 'Venture into the heart of Himachali timber architecture, witnessing a breathtaking secular castle built entirely without nails or concrete.',
        activities: [
          {
            time: '09:00 AM',
            title: 'Trek to Chehni Kothi Castle',
            description: 'Hike through terraced fields of mustard and giant walnuts to an isolated, 7-story high mountain watchtower structure constructed 400 years ago from massive logs.',
            location: 'Chehni Village High Ridge',
            cost: 'Free / Local donation',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '01:00 PM',
            title: 'Traditional Lunch in a Villager’s Timber Home',
            description: 'Enjoy a humble feast of local red rice, wild mountain ferns (Lingri curry), butter-fried mushrooms, and cold rich buttermilk.',
            location: 'Mrs. Thakur’s Kitchen, Chehni',
            cost: '₹500 per contribution',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80'
          }
        ]
      }
    ]
  },
  'kalga': {
    destination: 'Kalga Timber Sanctuary & Apple Slopes',
    tagline: 'Quietude, wild cannabis slopes, apple rows, and high-peak panoramas in Parvati Valley.',
    duration: 3,
    season: 'Late Autumn Gold (September to November)',
    budgetType: 'Backpacker Luxe',
    adventureLevel: 'Easy Alpine Walks',
    totalCostEstimate: '₹9,800 per traveler',
    coverImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    summary: 'A completely vehicle-free village where cozy wooden homestays lie strewn about lush apple trees. This 3-day itinerary maps a beautiful digital-detox journey away from normal hustle.',
    highlights: [
      'Walking barefoot over lush dew-covered pine carpets',
      'Observing the mighty snow peaks of Parvati Valley directly from your window bench',
      'Feasting on ginger honey chamomiles inside woodfired lounge chambers'
    ],
    recommendedHotels: [
      {
        name: 'The Apple Blossom Heritage Stay',
        description: 'A 50-year-old double-roofed wooden house offering absolute quietude, cozy mattresses on carpets, and an organic apple garden yard.',
        pricePerNight: '₹3,500',
        rating: '4.91',
        imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=500&q=80',
        tags: ['Orchard Strolls', 'Clay Tandoor', 'Breathtaking Sunrise']
      }
    ],
    days: [
      {
        dayNumber: 1,
        title: 'Barshaini Forest Ascent & Tea Lounge',
        description: 'Ditch your backpacks on your lodge, and hike a short 20-minute trail from Barshaini into the green meadows of Kalga.',
        activities: [
          {
            time: '11:00 AM',
            title: 'Pine Ridge Hike from Barshaini Dam',
            description: 'Walk a sinuous pine trail past roaring currents where Parvati and Tosh rivers meet, entering the peaceful, silent meadows of Kalga.',
            location: 'Barshaini Bridge trailhead',
            cost: 'Free Trail',
            type: 'activity',
            imageUrl: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '04:00 PM',
            title: 'Sunset Apple Grove Meditation',
            description: 'Sit under century-old apple branches as the setting sun paints the Parvati snow spires a rich orange-gold.',
            location: 'Kalga High Orchards',
            cost: 'Included',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80'
          }
        ]
      },
      {
        dayNumber: 2,
        title: 'The Fairy Forest Exploration',
        description: 'Wander deep into a lush green forest characterized by giant pines, moss-covered trails, and small streams trickling over pebbles.',
        activities: [
          {
            time: '10:00 AM',
            title: 'Mystic Wilderness Forest Hike',
            description: 'Drek out across winding cedar roots to secret glades locally dubbed the "Fairy Forest". Build a custom wood pile or practice forest photography.',
            location: 'Kalga Forest Reserve',
            cost: 'Complimentary guide',
            type: 'activity',
            imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=400&q=80'
          }
        ]
      },
      {
        dayNumber: 3,
        title: 'Clay-oven Café Comforts',
        description: 'Spend your last day cafe hopping and relaxing in traditional Parvati cushion floors.',
        activities: [
          {
            time: '10:30 AM',
            title: 'Apple Cinnamon Crepes & Organic Honey Tea',
            description: 'Enjoy slow-made pancakes under a wooden sunroom while soft lo-fi acoustic music plays beside a roaring clay stove.',
            location: 'The Nomad Shanti Café',
            cost: '₹500 for two',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=400&q=80'
          }
        ]
      }
    ]
  },
  'tirthan-valley': {
    destination: 'Tirthan Valley River Sanctuary',
    tagline: 'Angling, crisp pine walks, and glacier-fed torrents along Great Himalayan National Park.',
    duration: 3,
    season: 'Lush Post-Monsoon (October to January)',
    budgetType: 'High Luxury Nature',
    adventureLevel: 'High Excitement',
    totalCostEstimate: '₹19,000 per traveler',
    coverImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    summary: 'A pristine alpine river valley offering spectacular views, trout fishing with professional curators, and dense hikes into pristine UNESCO-listed biological forests.',
    highlights: [
      'Live trout angling with an expert using premium hooks',
      'Hiking past pristine waterfalls in the core zone of GHNP',
      'Curated riverside wooden cottage dining under pine lanterns'
    ],
    recommendedHotels: [
      {
        name: 'The Whispering Pines River Chalet',
        description: 'A spectacular five-star eco-lodge sitting directly on the river rapids, boasting glass facades, fireplace logs, and a personal butler.',
        pricePerNight: '₹9,500',
        rating: '4.98',
        imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=500&q=80',
        tags: ['Glass Fireplace', 'River Access', 'Pristine Fishing Point']
      }
    ],
    days: [
      {
        dayNumber: 1,
        title: 'River Angling & Searing Trout BBQ',
        description: 'Spend your first day on a wooden deck mastering classical fly-fishing techniques, followed by custom-style local barbecue preparation.',
        activities: [
          {
            time: '01:00 PM',
            title: 'Curated Trout Angling Clinic',
            description: 'Meet a wildlife guard and cast customized hooks into the clean torrent of Tirthan. Feel the thrill of checking beautiful local Brown and Rainbow trout.',
            location: 'Tirthan River Angling Zone 4',
            cost: '₹1,500 permit & gear',
            type: 'activity',
            imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80'
          }
        ]
      },
      {
        dayNumber: 2,
        title: 'Gateways of the UNESCO Forest Area',
        description: 'Spend 5 hours trekking past giant cedars into the core protected zones of the Great Himalayan National Park.',
        activities: [
          {
            time: '08:30 AM',
            title: 'UNESCO National Park Forest Crossing',
            description: 'Hike behind majestic peaks, cross crystal bamboo forest pathways, and observe rare birds like the Western Tragopan in their raw, peaceful habitat.',
            location: 'Rolla Forest Entrance GHNP',
            cost: '₹500 entry ticket',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400&q=80'
          }
        ]
      },
      {
        dayNumber: 3,
        title: 'The Great Chhoie Waterfall Trek',
        description: 'Conclude with a misty forest climb to Himachal’s most magnificent cascading water basin.',
        activities: [
          {
            time: '10:00 AM',
            title: 'Hike up to the Sacred Chhoie Pool',
            description: 'Climb a steep scenic cedar stairs trail to a breathtaking hidden waterfall. Take serene photos and breathe pure oxygen under deep spruce cliffs.',
            location: 'Chhoie Trailhead, Nagini',
            cost: 'Free access',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400&q=80'
          }
        ]
      }
    ]
  }
};
