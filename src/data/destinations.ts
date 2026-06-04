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

export interface Itinerary {
  destination: string;
  tagline: string;
  duration: number;
  season: string;
  budgetType: string;
  totalCostEstimate: string;
  coverImage: string;
  summary: string;
  highlights: string[];
  days: DayPlan[];
  recommendedHotels: RecommendedHotel[];
}

export interface DestinationCard {
  id: string;
  name: string;
  tagline: string;
  bestSeason: string;
  priceEstimate: string;
  image: string;
  rating: string;
  reviews: string;
}

export const POPULAR_DESTINATIONS: DestinationCard[] = [
  {
    id: 'bali',
    name: 'Bali',
    tagline: 'The Island of the Gods',
    bestSeason: 'April - October (Dry season)',
    priceEstimate: '$1,200 - $2,500',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    rating: '4.9',
    reviews: '1,420 reviews'
  },
  {
    id: 'maldives',
    name: 'Maldives',
    tagline: 'Unrivaled Luxury & Turquoise Reefs',
    bestSeason: 'November - April (Sunniest months)',
    priceEstimate: '$3,500 - $6,500',
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80',
    rating: '5.0',
    reviews: '980 reviews'
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    tagline: 'Snow-clapped Peaks & Alpine Lakes',
    bestSeason: 'June - September or Dec - March',
    priceEstimate: '$2,800 - $5,000',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    rating: '4.9',
    reviews: '850 reviews'
  },
  {
    id: 'paris',
    name: 'Paris',
    tagline: 'The Capital of Romance & Fine Art',
    bestSeason: 'April - June or September - October',
    priceEstimate: '$2,000 - $4,200',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    rating: '4.8',
    reviews: '2,110 reviews'
  },
  {
    id: 'dubai',
    name: 'Dubai',
    tagline: 'Ultimate Skyline & Desert Safaris',
    bestSeason: 'November - March (Cool winter)',
    priceEstimate: '$1,800 - $3,900',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    rating: '4.7',
    reviews: '1,150 reviews'
  },
  {
    id: 'goa',
    name: 'Goa',
    tagline: 'Sun-drenched Beaches & Bohemian Vibe',
    bestSeason: 'November - February (Perfect beach days)',
    priceEstimate: '$600 - $1,400',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    rating: '4.6',
    reviews: '1,890 reviews'
  },
  {
    id: 'kashmir',
    name: 'Kashmir',
    tagline: 'Heaven on Earth',
    bestSeason: 'March - August (Meadows & Valleys)',
    priceEstimate: '$800 - $1,800',
    image: 'https://images.unsplash.com/photo-1588661793297-f04bf4087118?auto=format&fit=crop&w=1200&q=80',
    rating: '4.9',
    reviews: '740 reviews'
  },
  {
    id: 'japan',
    name: 'Japan',
    tagline: 'Ancient Tradition meets Neon Innovation',
    bestSeason: 'March - May (Sakura) or Oct - Nov',
    priceEstimate: '$2,500 - $4,800',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    rating: '4.9',
    reviews: '1,650 reviews'
  }
];

export const PREBUILT_ITINERARIES: Record<string, Itinerary> = {
  bali: {
    destination: 'Bali, Indonesia',
    tagline: 'A spiritual sanctuary combining rich culture, dense jungles, and golden reefs.',
    duration: 3,
    season: 'April - October',
    budgetType: 'Luxury Balanced',
    totalCostEstimate: '$1,850 per person',
    coverImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    summary: 'Embark on an immersive journey across Ubud’s sacred hills, cultural heartlands, and Uluwatu’s dramatic sunset cliffs.',
    highlights: ['Sacred Monkey Forest exploration', 'Sunrise Swing over infinite forest valleys', 'Spectacular sunset Kecak fire dance on Uluwatu Cliffs'],
    recommendedHotels: [
      {
        name: 'The Kayon Jungle Resort',
        description: 'Voted Bali’s premier eco-resort, nestled within deep valley jungles and spectacular multi-level green pools.',
        pricePerNight: '$380',
        rating: '4.9',
        imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80',
        tags: ['Infiniti Pool', 'Eco Luxury', 'Spa & Wellness']
      },
      {
        name: 'Alila Villas Uluwatu',
        description: 'Spectacular modernist pool villas perched on private limestone cliffs looking down on turquoise ocean swells.',
        pricePerNight: '$620',
        rating: '4.9',
        imageUrl: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80',
        tags: ['Cliffside View', 'Private Butler', 'Private Pool']
      }
    ],
    days: [
      {
        dayNumber: 1,
        title: 'Spiritual Roots & Rice Terraces',
        description: 'Journey into the green heart of Bali, Ubud, exploring ancient shrines and emerald rice valleys.',
        activities: [
          {
            time: '09:00 AM',
            title: 'Tegalalang Rice Terraces & Jungle Swing',
            description: 'Stroll along the ancient Subak irrigation paths and soar high above the palms on the iconic Bali Swing.',
            location: 'Tegalalang, Ubud',
            cost: '$25 per person',
            type: 'activity',
            imageUrl: 'https://images.unsplash.com/photo-1501179691627-ef31b70011ac?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '12:30 PM',
            title: 'Organic Garden Lunch at Wild Air Ubud',
            description: 'Feast on farm-to-table Asian fusion delicacies while looking down on a spectacular river valley canopy.',
            location: 'Wild Air Ubud',
            cost: '$45 for two',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '03:00 PM',
            title: 'Sacred Monkey Forest Sanctuary',
            description: 'Wander deep into lush ancient banyan forest paths guarded by gentle long-tailed macaques and moss-covered stone carvings.',
            location: 'Sacred Monkey Forest Ubud',
            cost: '$8 per person',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1540552989939-14a60488f192?auto=format&fit=crop&w=400&q=80'
          }
        ]
      },
      {
        dayNumber: 2,
        title: 'Cascading Waterfalls & Sacred Temples',
        description: 'Chase hidden cascades in tropical ravines and experience deep Balinese water purification rituals.',
        activities: [
          {
            time: '08:00 AM',
            title: 'Pura Tirta Empul Holy Water Temple',
            description: 'Participate in a centuries-old spiritual cleansing ritual (Melukat) inside sacred spring-water fountains.',
            location: 'Tampaksiring, Bali',
            cost: '$15 per person',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '01:00 PM',
            title: 'Cuisine & Pool Day at Cretya Ubud',
            description: 'Dine in luxury looking at breathtaking three-tiered fields while swimming in cascading pools.',
            location: 'Cretya Sunset Oasis',
            cost: '$50 minimum spend',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '04:00 PM',
            title: 'Leke Leke Hidden Waterfall',
            description: 'Take a mild hike down a tropical valley to reveal a single epic ribbon of spring water surrounded by gigantic moist leaves.',
            location: 'Tabanan, Bali',
            cost: '$5 per person',
            type: 'activity',
            imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80'
          }
        ]
      },
      {
        dayNumber: 3,
        title: 'Uluwatu Sunset Cliffs & Cultural Legends',
        description: 'Head down south to Uluwatu’s dazzling ocean clifftops, where deep blue swell meets ancient folklore.',
        activities: [
          {
            time: '10:00 AM',
            title: 'Melasti Beach Club Relaxation',
            description: 'Sink into luxurious beachside daybeds overlooking limestone cliffs, white sands, and crystal-clear calm waves.',
            location: 'Melasti Beach Cliffside',
            cost: '$30 entry credit',
            type: 'activity',
            imageUrl: 'https://images.unsplash.com/photo-150752428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '05:30 PM',
            title: 'Sunset Kecak Fire Dance at Pura Uluwatu',
            description: 'Witness an epic Balinese musical drama based on Ramayana saga, with 70 male performers chanting rhythmically against a dramatic direct ocean sunset.',
            location: 'Uluwatu Cliff Temple',
            cost: '$18 per person',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '07:30 PM',
            title: 'Fresh Seafood Dinner on Jimbaran Sands',
            description: 'Eat charcoal-grilled oceanic lobsters, king prawns, and red snapper on a candlelit beach table with your feet in the sand.',
            location: 'Jimbaran Coastline Restaurants',
            cost: '$80 for two',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80'
          }
        ]
      }
    ]
  },
  maldives: {
    destination: 'The Maldives',
    tagline: 'A dreamscape of secluded turquoise waters, pristine coral reefs, and romantic water villas.',
    duration: 3,
    season: 'November - April',
    budgetType: 'Ultra Luxury & Romance',
    totalCostEstimate: '$4,200 per person',
    coverImage: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80',
    summary: 'An elite escape curated with private catamaran voyages, candlelit sandbanks, underwater dining, and world-class reef diving.',
    highlights: ['Seaplane aerial reef cruise', 'Sub-aquatic Michelin restaurant dinner', 'Snorkeling with massive manta rays'],
    recommendedHotels: [
      {
        name: 'Soneva Jani',
        description: 'The world’s flagship overwater resort featuring massive open-roof retracting master domes and waterslides curving straight into the warm blue lagoon.',
        pricePerNight: '$1,850',
        rating: '5.0',
        imageUrl: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=600&q=80',
        tags: ['Water Slider', 'Retractable Roof', 'Eco Sanctuary']
      },
      {
        name: 'Conrad Maldives Rangali Island',
        description: 'Elite double-island reserve hosting the world’s first entirely glass undersea residence and premium spa chalets.',
        pricePerNight: '$950',
        rating: '4.8',
        imageUrl: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80',
        tags: ['Undersea Room', 'Two Islands', 'Coral Garden']
      }
    ],
    days: [
      {
        dayNumber: 1,
        title: 'Sinking in Dreamy Turquoise',
        description: 'Arrive via scenic seaplane and settle into your overwater sanctuary, letting ocean currents lull you into zen composure.',
        activities: [
          {
            time: '11:00 AM',
            title: 'Scenic Seaplane Transfer & Arrival Ripple',
            description: 'Fly over a majestic sequence of bright blue string-of-pearl rings (Maldivian atolls) and touch down directly by the resort cruiser jetty.',
            location: 'Malé to Resort Air Path',
            cost: 'Included in stay',
            type: 'activity',
            imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '01:30 PM',
            title: 'Lagoon Overwater Deck Lunch',
            description: 'Sip on tropical cocktails and nibble cold king crab claw legs and local coconut prawns directly suspended over a neon-blue warm lagoon.',
            location: 'Resort Beachside Lounge',
            cost: '$65 per person',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '07:30 PM',
            title: 'Sunset Beach Barbeque & Bonfire',
            description: 'Feast on freshly caught white reef cod and tiger prawns grilled on order, accompanied by local Boduberu ocean drumming.',
            location: 'North-East Sandy Hook',
            cost: '$120 per person',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80'
          }
        ]
      },
      {
        dayNumber: 2,
        title: 'Whispering Reefs & Sea Creatures',
        description: 'Dive below the glassy waves to glide alongside spectacular rays, turtles, and neon coral structures.',
        activities: [
          {
            time: '09:00 AM',
            title: 'Manta Ray & Whale Shark Snorkel Safari',
            description: 'Board a luxury speedboat outwards to the Atoll edge to swim alongside giant manta rays gracefully gliding over sand banks.',
            location: 'Hanifaru Bay Marine Reserve',
            cost: '$140 per person',
            type: 'activity',
            imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '12:30 PM',
            title: 'Undersea Dining Experience at Ithaa',
            description: 'Descend 5 meters below sea level to dine on a premium 5-course lunch enclosed entirely in a 180-degree glass dome surrounded by darting clownfish.',
            location: 'Ithaa Undersea Chamber',
            cost: '$320 per person',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '05:00 PM',
            title: 'Romantic Sunset Yacht Cruise',
            description: 'Sip classic champagne on the deck of a sleek double-hull sailing yacht while looking out for spinning wild dolphins.',
            location: 'Atoll Exterior Waters',
            cost: '$180 per person',
            type: 'activity',
            imageUrl: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?auto=format&fit=crop&w=400&q=80'
          }
        ]
      },
      {
        dayNumber: 3,
        title: 'Secluded Sandbanks & Spa Serenity',
        description: 'Cherish undisturbed intimacy with your partner on a disappearing sand islet, followed by relaxing full-body rituals.',
        activities: [
          {
            time: '10:00 AM',
            title: 'Castaway Private Sandbank Picnic',
            description: 'Be whisked away to a secluded crescent of white sand in the middle of the sea, entirely to yourself, with a premium cold-cut picnic basket set up under a white canopy.',
            location: 'Resort Islet Sector B',
            cost: '$260 for two',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '03:30 PM',
            title: 'Overwater Couple Massage & Singing Bowls',
            description: 'Relax in a private spa room looking through glass floor panels at coral fish beneath, while heated balinese herbal compresses dissolve all stress.',
            location: 'Ocean Shell Wellness',
            cost: '$190 per person',
            type: 'activity',
            imageUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '08:00 PM',
            title: 'Private Candlelit Shoreline Gala',
            description: 'A custom menu cooked by a private chef, under a starry sky right on the sea’s edge with waves lapping your feet.',
            location: 'South Beach Shoreline',
            cost: '$350 for two',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80'
          }
        ]
      }
    ]
  },
  switzerland: {
    destination: 'Switzerland',
    tagline: 'Spectacular alpine peaks, dramatic cascades, and premium train rides around beautiful waters.',
    duration: 3,
    season: 'June - September',
    budgetType: 'Luxury Majestic',
    totalCostEstimate: '$3,100 per person',
    coverImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    summary: 'Witness the absolute crown of Swiss nature: majestic Lauterbrunnen cliffs, epic peaks on the Jungfrau railway, and vintage cruises around Lucerne.',
    highlights: ['Jungfraujoch - Top of Europe expedition', 'Eiger-facing historic resort cabins', 'Lucerne wood bridge & private yacht cruise'],
    recommendedHotels: [
      {
        name: 'Grand Hotel National Luzern',
        description: 'Elite historic masterpiece on Lucerne lakeside, boasting classical gold architecture and views of alpine ranges.',
        pricePerNight: '$450',
        rating: '4.9',
        imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
        tags: ['Lake View', 'Historic Palace', 'Michelin Dining']
      },
      {
        name: 'The Chedi Andermatt',
        description: 'Voted dynamic ski-resort of the decade, featuring dramatic dark timber pillars, stone open fireplaces, and heated outdoor pools facing snowy ridges.',
        pricePerNight: '$720',
        rating: '4.9',
        imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
        tags: ['Alpine Modern', 'Fireplace lounge', 'Ultra Spa']
      }
    ],
    days: [
      {
        dayNumber: 1,
        title: 'Lucerne Lakes & Castle Skylines',
        description: 'Walk across medieval wooden bridges and board a beautiful 19th-century paddle steamer around pristine deep blue waters.',
        activities: [
          {
            time: '09:00 AM',
            title: 'Chapel Bridge & Altstadt Historical Walk',
            description: 'Stroll across Lucerne’s iconic Chapel Bridge (Kapellbrücke) adorned with 17th-century roof paintings, finding beautiful medieval architecture in the Old Town.',
            location: 'Lucerne Centre',
            cost: 'Free access',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '12:30 PM',
            title: 'Swiss Fondue Lunch at Fritschi',
            description: 'Feast on dynamic, bubbly, hot gruyère and vacherin cheese melted with dry white wine, served in typical iron pots with crusty fresh-baked breads.',
            location: 'Fritschi Luzern',
            cost: '$55 for two',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '03:00 PM',
            title: 'Vintage VIP Paddle Steamer Voyage',
            description: 'Step into a beautifully restored vintage paddle boat cruised around Lake Lucerne, watching Mount Rigi raise its snowy crown.',
            location: 'Lucerne Pier 1',
            cost: '$60 per person',
            type: 'activity',
            imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400&q=80'
          }
        ]
      },
      {
        dayNumber: 2,
        title: 'The Valley of 72 Waterfalls',
        description: 'Explore Lauterbrunnen, an incredible ribbon of green cliffs down which pristine spring water falls directly into alpine fields.',
        activities: [
          {
            time: '08:30 AM',
            title: 'Journey to Lauterbrunnen Valley',
            description: 'Take the panoramic rail inwards to the deep Lauterbrunnen ravine, surrounded by colossal rock cliffs and traditional chalet houses.',
            location: 'Bernese Oberland Rail',
            cost: '$40 per person',
            type: 'activity',
            imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '10:30 AM',
            title: 'Staubbach & Trümelbach Caves',
            description: 'Dodge the mist from Staubbach Falls and crawl inside the dark mountain to hear Trümelbach Falls, spectacular roaring glacial waters spinning inside rock cylinders.',
            location: 'Lauterbrunnen Cliffs',
            cost: '$18 entry',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '01:30 PM',
            title: 'Wengen Village Cliffside Lunch',
            description: 'Ride the yellow cableway to Wengen car-free mountain terrace and eat a beautiful plate of rösti potatoes topped with cheese and cold cuts.',
            location: 'Restaurant Mary’s Cafe',
            cost: '$48 for two',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=400&q=80'
          }
        ]
      },
      {
        dayNumber: 3,
        title: 'Top of Europe: Snowy Jungfraujoch',
        description: 'Scale the historic cogwheel rails built deep inside the Eiger mountain to step out on a frozen glacier peak.',
        activities: [
          {
            time: '09:00 AM',
            title: 'Jungfraujoch Cogwheel Expedition',
            description: 'Climb the iconic mountain train, crossing deep gorges, climbing inside tunnels, and emerging at 3,454m at the continent’s tallest rail terminal.',
            location: 'Kleine Scheidegg Spur',
            cost: '$190 per person',
            type: 'activity',
            imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '11:30 AM',
            title: 'Sphinx Observatory & Ice Palace Walks',
            description: 'Step onto the frozen Aletsch Glacier, cross ice-crafted corridors of polar sculptures, and look down on Italy’s border from the top deck.',
            location: 'Jungfraujoch Summit',
            cost: 'Included in ticket',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '02:30 PM',
            title: 'Warming Hot Chocolate & Apple Strudel',
            description: 'Unwind at Bollywood Restaurant looking out on the white expanses with rich, thick dark chocolate and typical warm vanilla apple pastry.',
            location: 'Jungfraujoch food gallery',
            cost: '$30 for two',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80'
          }
        ]
      }
    ]
  },
  paris: {
    destination: 'Paris, France',
    tagline: 'The timeless city of romantic bistros, rich imperial museums, and brilliant haute couture.',
    duration: 3,
    season: 'April - October',
    budgetType: 'Luxury Chic',
    totalCostEstimate: '$2,450 per person',
    coverImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    summary: 'A stylish, elegant tour around historical art archives, rooftop bars, Seine yacht decks, and charming Montmartre lanes.',
    highlights: ['After-hours private Louvre viewing', 'Eaton eiffel-view penthouse luxury', 'Sunset luxury cruise on La Seine'],
    recommendedHotels: [
      {
        name: 'Le Meurice',
        description: 'Spectacular historic hotel on Rue de Rivoli, decorated with Versailles-style gold leaf ceilings and Salvador Dalí references.',
        pricePerNight: '$750',
        rating: '4.9',
        imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
        tags: ['Near Louvre', 'Michelin Stars', 'Palace Hotel']
      },
      {
        name: 'Hotel Plaza Athénée',
        description: 'Instantly recognizable by its striking bright red geraniums, offering premium suites facing the Eiffel Tower.',
        pricePerNight: '$980',
        rating: '4.8',
        imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
        tags: ['Eiffel Terrace', 'Luxury Shopping', 'Dior Spa']
      }
    ],
    days: [
      {
        dayNumber: 1,
        title: 'Louvre Legends & French Pâtisserie',
        description: 'Explore majestic royal palace halls housing humanity’s finest masterpieces, followed by warm buttery pastries.',
        activities: [
          {
            time: '09:00 AM',
            title: 'Louvre Museum VIP Entrance',
            description: 'Bypass the massive glass pyramid lines with a fast-track guide to marvel at Mona Lisa, Winged Victory, and majestic Napoleonic chambers.',
            location: 'Musée du Louvre',
            cost: '$45 per person',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '12:30 PM',
            title: 'Parisian Bistro Lunch at Angelina',
            description: 'Relish French roasted duck breast and sip the world-famous, velvety, ultra-luxurious hot chocolate paired with chestnut Mont-Blanc cakes.',
            location: 'Angelina Rue de Rivoli',
            cost: '$70 for two',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '03:00 PM',
            title: 'Tuileries Gardens & Seine Walkway',
            description: 'Stroll on gravel paths under green chestnut trees, looking at marble statues, ancient ponds, and taking spectacular pictures of historic bridges.',
            location: 'Place de la Concorde',
            cost: 'Free access',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=400&q=80'
          }
        ]
      },
      {
        dayNumber: 2,
        title: 'Bohemian Montmartre & Sunset Sails',
        description: 'Head up the cobble hills where Picasso painted, followed by a romantic sunset champagne sail on the river.',
        activities: [
          {
            time: '10:00 AM',
            title: 'Montmartre Artists & Sacré-Cœur Basilica',
            description: 'Wander hilly pavements where street artists paint canvas portraits on Place de Tertre, finishing at the white marble peak looking down on the city.',
            location: 'Montmartre Peak',
            cost: 'Free access',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '01:00 PM',
            title: 'Lunch at La Maison Rose',
            description: 'Savor traditional Parisian onion soup and goat cheese salads at this historic dusty-pink street side café.',
            location: 'Rue des Saules, Montmartre',
            cost: '$48 for two',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '06:00 PM',
            title: 'Sunset Champagne River Seine Yachts',
            description: 'Board a wooden custom boat and cruise alongside Notre-Dame, Grand Palais, and Musée d’Orsay while sipping fine Moët champagne.',
            location: 'Port de la Bourdonnais',
            cost: '$90 per person',
            type: 'activity',
            imageUrl: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=400&q=80'
          }
        ]
      },
      {
        dayNumber: 3,
        title: 'Haute Imperial Arcades & Eiffel Glows',
        description: 'Indulge in Parisian luxury shopping lanes and watch the iron lattices twinkle at midnight.',
        activities: [
          {
            time: '11:00 AM',
            title: 'Champs-Élysées & Arc de Triomphe VIP Ascent',
            description: 'Ascend to the roof of the spectacular napoleonic arch for the definitive 12-avenue symmetry photograph.',
            location: 'Place Charles de Gaulle',
            cost: '$15 per person',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '03:00 PM',
            title: 'Ladurée Macaron Pastry Class',
            description: 'Learn the ancient royal pastry methods from executive chefs, backing beautiful colorful rose, pistachio, and caramel pastries.',
            location: 'Ladurée Royale',
            cost: '$120 per person',
            type: 'activity',
            imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '08:00 PM',
            title: 'Le Jules Verne Fine Dining',
            description: 'Seat yourself on the Eiffel Tower’s 2nd floor inside this legendary 3 Michelin star eatery, drinking burgundy Pinot Noir as the structure illuminates.',
            location: 'Eiffel Tower Pillar South',
            cost: '$290 per person',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80'
          }
        ]
      }
    ]
  },
  dubai: {
    destination: 'Dubai, UAE',
    tagline: 'A futuristic oasis of vertical towers, high-end shopping dunes, and luxury ocean bays.',
    duration: 3,
    season: 'November - March',
    budgetType: 'Ultra Luxury Spectacular',
    totalCostEstimate: '$3,400 per person',
    coverImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    summary: 'Scale vertical cloud scrapers, watch giant musical fountains, charter luxury motorboats, and sleep in desert resorts.',
    highlights: ['Burj Khalifa Level 148 Lounge access', 'Supercar track day or desert dune cruise', 'Helicopter skyline flyover'],
    recommendedHotels: [
      {
        name: 'Armani Hotel Dubai',
        description: 'Elite modern design situated directly inside the world’s tallest tower, carrying Giorgio Armani’s sleek gray-silk minimalism.',
        pricePerNight: '$580',
        rating: '4.8',
        imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80',
        tags: ['Inside Burj', 'Private Butler', 'Fine Dining']
      },
      {
        name: 'One&Only The Palm',
        description: 'Ultra-exclusive private sand reserve facing Dubai Marina’s sleek cluster towers, home to Michelin-starred dining.',
        pricePerNight: '$950',
        rating: '4.9',
        imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
        tags: ['Private Island', 'Marina Views', 'Luxury Spa']
      }
    ],
    days: [
      {
        dayNumber: 1,
        title: 'Tower of Skies & Musical Lakes',
        description: 'Experience gravity-defying architecture and spectacular fire-and-water fountain displays.',
        activities: [
          {
            time: '10:00 AM',
            title: 'At The Top - Burj Khalifa SKY Lounge',
            description: 'Ascend to the 148th floor VIP viewing platform, sipping arabic coffee dates while looking at the desert meeting the emerald Arabian Gulf.',
            location: 'Downtown Dubai',
            cost: '$110 per person',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '01:30 PM',
            title: 'Lunch at CE LA VI Dubai',
            description: 'Dine on fine black truffle risotto on the rooftop looking directly across the spectacular frame of Address Sky View.',
            location: 'CE LA VI Address Sky View',
            cost: '$85 per person',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '06:00 PM',
            title: 'Dubai Fountain Lake Ride & Shows',
            description: 'Board a traditional wooden Abra boat and sail directly on the fountain lake, just yards away from 1,000-ft water shooters soaring to classical scores.',
            location: 'Dubai Mall Promenade',
            cost: '$20 per person',
            type: 'activity',
            imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80'
          }
        ]
      },
      {
        dayNumber: 2,
        title: 'Desert Dune Luxury & Bedouin Feasts',
        description: 'Race through red desert waves under the Arabian sun, followed by elegant, authentic carpets, tents, and falconry.',
        activities: [
          {
            time: '08:00 AM',
            title: 'Private Range Rover Desert Conservation Cruise',
            description: 'Explore the desert sands in a luxurious vintage Range Rover, identifying rare Arabian oryx and falcons in flight.',
            location: 'Dubai Desert Reserve',
            cost: '$150 per person',
            type: 'activity',
            imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '04:00 PM',
            title: 'High-Speed Sand Dunes & Buggy Run',
            description: 'Grip the wheels of 1000cc desert dune buggies racing over steep hills in late afternoon gold angles.',
            location: 'Lahbab Desert Sands',
            cost: '$90 per person',
            type: 'activity',
            imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '07:30 PM',
            title: 'Elite Bedouin Dining at Al Hadheerah',
            description: 'Indulge in charcoal whole-roasted lamb, handmade flatbreads, and spice-rich rice, while watching live equestrian spectacles.',
            location: 'Bab Al Shams Desert Resort',
            cost: '$130 per person',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80'
          }
        ]
      },
      {
        dayNumber: 3,
        title: 'Luxury Yacht Charter & Palm Bays',
        description: 'Cruise inside Dubai Marina and sail alongside iconic architectural shapes on the bay.',
        activities: [
          {
            time: '10:00 AM',
            title: 'Private Superyacht Sailing Cruise',
            description: 'Charter a sleek 44-ft executive yacht with a dedicated crew, sailing through Bluewaters Island and around the massive Palm Jumeirah.',
            location: 'Dubai Marina Yacht Club',
            cost: '$280 for two',
            type: 'activity',
            imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '02:00 PM',
            title: 'Infinity Pool Day at Aura Skypool',
            description: 'Bathe in the world’s tallest 360-degree infinity pool hanging 200m above ground, framing views of the Palm Jumeirah.',
            location: 'The Palm Tower, 50th floor',
            cost: '$45 entry credit',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=80'
          }
        ]
      }
    ]
  },
  goa: {
    destination: 'Goa, India',
    tagline: 'Warm golden beach sunsets, palm groves, historic Portuguese mansions, and vibrant nightlife.',
    duration: 3,
    season: 'November - February',
    budgetType: 'Boutique Seaside Luxury',
    totalCostEstimate: '$950 per person',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    summary: 'Recline under swaying palms, tour whitewashed churches of Old Goa, and dine on spicy prawns and feni in elegant villas.',
    highlights: ['Sunset charter catamaran sail', 'Fontainhas Portuguese quarter heritage walk', 'Fresh beachside shacks dinner'],
    recommendedHotels: [
      {
        name: 'W Goa',
        description: 'Vibrant cliffside resort on Vagator Beach, with infinity pools overlooking direct rocky sunsets and tropical techno sunset sessions.',
        pricePerNight: '$280',
        rating: '4.7',
        imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80',
        tags: ['Vagator Beach', 'Rock Pool', 'Chic Nightlife']
      },
      {
        name: 'The Leela Goa',
        description: 'Encircled by azure water lagoons and Mobor Beach sands, featuring absolute high-end colonial gardens.',
        pricePerNight: '$340',
        rating: '4.9',
        imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
        tags: ['Lagoon Golf', 'Private Beach', 'Colonial Splendor']
      }
    ],
    days: [
      {
        dayNumber: 1,
        title: 'Portuguese Corners & Old Goa',
        description: 'Step into the past walking through old colonial lanes with typical whitewashed tiles and yellow facades.',
        activities: [
          {
            time: '09:00 AM',
            title: 'Fontainhas Latin Quarter Heritage Trail',
            description: 'Stroll past charming bright yellow, blue, and green Portuguese houses, smelling freshly brewed local coffee and cardamon buns.',
            location: 'Fontainhas, Panaji',
            cost: '$12 guide cost',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '12:30 PM',
            title: 'Heritage Lunch at O Coqueiro',
            description: 'Relish authentic chicken cafreal, mutton xacuti, and spicy butter-garlic crab at this historic Goan bistro.',
            location: 'Porvorim, Goa',
            cost: '$35 for two',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '03:00 PM',
            title: 'Basilica of Bom Jesus & Old Goa',
            description: 'Visit the landmark 16th-century red laterite church housing the saintly remains of St. Francis Xavier, a supreme world heritage site.',
            location: 'Old Goa Centre',
            cost: 'Free access',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1588661793297-f04bf4087118?auto=format&fit=crop&w=400&q=80'
          }
        ]
      },
      {
        dayNumber: 2,
        title: 'Sandy Vagator & Cliff Sunsets',
        description: 'Indulge in coastal relaxation on the cliffs of North Goa, wrapped in electronic music notes.',
        activities: [
          {
            time: '10:00 AM',
            title: 'Morning Dolphin Safari & Catamaran Sail',
            description: 'Sail the calm morning offshore swells on a luxury catamaran, watching grey dolphins arching alongside the hulls.',
            location: 'Nerul River Pier',
            cost: '$45 per person',
            type: 'activity',
            imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '05:00 PM',
            title: 'Sunset Cocktails at Thalassa Vagator',
            description: 'Claim a premium clifftop table looking down on Ozran Beach sands, drinking local feni infusions as classic Greek plates break to beats.',
            location: 'Thalassa Cliff Edge',
            cost: '$60 for two',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80'
          }
        ]
      },
      {
        dayNumber: 3,
        title: 'South Goa Serenity & Beach Dinners',
        description: 'Slow down paths down South, exploring virgin calm bays and cozy beach settings.',
        activities: [
          {
            time: '10:00 AM',
            title: 'Palolem Beach Kayaking & Cave Discoveries',
            description: 'Paddle transparent yellow kayaks around the calm waters of Palolem, finding small sandy bays completely hidden under thick green canopies.',
            location: 'Palolem Shoreline',
            cost: '$15 rental',
            type: 'activity',
            imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '07:30 PM',
            title: 'Seaside Dinner on Cola Beach Sands',
            description: 'An exclusive oceanfront dinner with freshly ground Goan curry spices, fresh coconut water, and locally grilled tiger king prawns.',
            location: 'Cola Ocean Resort',
            cost: '$70 for two',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80'
          }
        ]
      }
    ]
  },
  kashmir: {
    destination: 'Kashmir, India',
    tagline: 'Snow-capped peaks, saffron meadows, and historic wooden shikaras sliding on glassy Dal Lake.',
    duration: 3,
    season: 'March - August',
    budgetType: 'Historic Cozy Luxury',
    totalCostEstimate: '$1,100 per person',
    coverImage: 'https://images.unsplash.com/photo-1588661793297-f04bf4087118?auto=format&fit=crop&w=1200&q=80',
    summary: 'A breathtaking cultural escape across historic royal gardens, alpine gondolas soaring into white mountain ridges, and cozy handpicked houseboats.',
    highlights: ['Dal Lake royal shikara sunset ride', 'Gulmarg Phase II heights gondola', 'Historic authentic multi-course Kashmiri Wazwan feast'],
    recommendedHotels: [
      {
        name: 'The Khyber Mountain Resort & Spa',
        description: 'Voted premier winter mountain hotel of the country, built with rich pine timbers and slate stones, overlooking snowy Gulmarg paths.',
        pricePerNight: '$380',
        rating: '4.9',
        imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
        tags: ['Gulmarg Slopes', 'Heated Indoor Resort', 'L’Occitane Spa']
      },
      {
        name: 'The Khyber Houseboats on Dal Lake',
        description: "Ornate cedarwood cabins floating on Dal Lake's quietest reaches, styled with warm hand-loomed silk carpets and velvet cushions.",
        pricePerNight: '$180',
        rating: '4.8',
        imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
        tags: ['On the Water', 'Private Shikara', 'Authentic Kahwa']
      }
    ],
    days: [
      {
        dayNumber: 1,
        title: 'Dal Lake Reflections & Royal Shalimar',
        description: "Experience Srinagar's floating lifestyle with a sunset ride on Dal Lake's iconic gondolas, and tour historic Mughal terraced fountains.",
        activities: [
          {
            time: '09:30 AM',
            title: 'Mughal Gardens: Shalimar & Nishat Bagh',
            description: 'Tour the sprawling imperial terraces, cascades, and ancient Chinar trees planted by Emperor Jehangir for Queen Nur Jahan.',
            location: 'Srinagar Shoreline',
            cost: '$5 entry fee',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '01:00 PM',
            title: 'Premium Kahwa & Lunch at Lhasa Restaurant',
            description: 'Sip hot pink Kashmiri salt tea or sweet saffron Kahwa loaded with almond slivers, followed by steaming hot Tibetan momos and local chicken skewers.',
            location: 'Srinagar Lake Road',
            cost: '$30 for two',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '05:00 PM',
            title: 'Dal Lake Sunset Shikara Voyage',
            description: 'Glide smoothly inside a beautifully decorated wooden boat on glassy Dal Lake, watching snowy mountain peaks reflect on golden water sheets.',
            location: 'Ghat Number 14',
            cost: '$20 per hour',
            type: 'activity',
            imageUrl: 'https://images.unsplash.com/photo-1588661793297-f04bf4087118?auto=format&fit=crop&w=400&q=80'
          }
        ]
      },
      {
        dayNumber: 2,
        title: 'Gulmarg Gondola & Snowy Meadows',
        description: "Take the scenic journey to the soaring heights of Apharwat Peak on one of the world's tallest cableways.",
        activities: [
          {
            time: '08:00 AM',
            title: 'Drive to Gulmarg Snowy Slopes',
            description: 'Drive the climbing road flanked by dramatic pine forests and snowy mounds, entering the grassy meadow bowl of Gulmarg.',
            location: 'Srinagar to Gulmarg Highway',
            cost: '$50 cab fare',
            type: 'activity',
            imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '10:30 AM',
            title: 'Gulmarg Gondola Flight: Phase I & II',
            description: 'Fly above the tree deck on the Gulmarg Gondola. Phase II climbs directly to 3,979 meters into pristine mountain slopes.',
            location: 'Apharwat Base',
            cost: '$25 ticket',
            type: 'activity',
            imageUrl: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '02:00 PM',
            title: 'Warm Dum Aloo Lunch on the Ridge',
            description: 'Feast on slow-cooked, spicy, deep-fried baby potatoes in thick red Kashmiri chili curry, beside log fire hearths.',
            location: 'The Highland Park Diner',
            cost: '$40 for two',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=400&q=80'
          }
        ]
      },
      {
        dayNumber: 3,
        title: 'Pahalgam Valley & Saffron Meadows',
        description: 'Discover crystal clear gushing glacier rivers and wild pony meadows down the Pahalgam gorge.',
        activities: [
          {
            time: '09:00 AM',
            title: 'Lidder River Picnic & Saffron Meadows Walk',
            description: 'Stroll around the scenic saffron fields of Pampore (where the fields turn lavender in autumn) and host a picnic beside the icy, blue Lidder River.',
            location: 'Pahalgam Meadows',
            cost: '$15 guide fee',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '07:30 PM',
            title: 'Ultimate 7-Course Kashmiri Wazwan Feast',
            description: 'Relax on floor mattresses inside Srinagar’s premium dining halls for a royal banquet: Rogan Josh lamb cooked in mountain spices, Gushtaba, and aromatic saffron pulao.',
            location: 'Ahdoos Restaurant Srinagar',
            cost: '$60 for two',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80'
          }
        ]
      }
    ]
  },
  japan: {
    destination: 'Japan',
    tagline: 'A seamless blend of sacred shinto shrines, pink cherry blossoms, and vertical neon skylines.',
    duration: 3,
    season: 'March - May',
    budgetType: 'Luxury Tech & Cultured',
    totalCostEstimate: '$2,900 per person',
    coverImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    summary: 'Walk through red Shinto gates, ride the sleek Shinkansen bullet train at 320km/h, and dine in top-secret Michelin-star sushi establishments.',
    highlights: ['Kyoto Fushimi Inari red gate sunrise tour', 'Shinkansen bullet train first-class seat', 'Premium Wagyu beef grill experience'],
    recommendedHotels: [
      {
        name: 'The Ritz-Carlton Kyoto',
        description: 'Exquisite modern sanctuary built on Kamogawa River banks, combining tatami mat aesthetics with deep granite bathtubs and Zen rock courtyards.',
        pricePerNight: '$690',
        rating: '5.0',
        imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
        tags: ['Kamogawa River', 'Zen Gardens', 'Traditional tea master']
      },
      {
        name: 'Aman Tokyo',
        description: 'A structural masterpiece high above the financial towers of Otemachi, using delicate washi paper slide doors and giant basalt bath baths.',
        pricePerNight: '$1,200',
        rating: '4.9',
        imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
        tags: ['Skyscraper Baths', 'Otemachi Peak', 'Luxury Spa']
      }
    ],
    days: [
      {
        dayNumber: 1,
        title: 'Shibuya Neon Lights & Michelin Sushi',
        description: "Explore the high-octane streets of Tokyo, crossing the world's busiest sidewalk and tasting ultra-fresh oceanic tuna.",
        activities: [
          {
            time: '10:00 AM',
            title: 'Meiji Shinto Shrine Forest Walk',
            description: 'Cross the massive wooden torii gates into a serene evergreen forest right in downtown Tokyo, paying respect at the major Shinto shrine.',
            location: 'Yoyogi Park, Tokyo',
            cost: 'Free access',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '01:00 PM',
            title: 'Premium Omakase Sushi at Kyubey',
            description: 'Seat yourself on cypress boards to watch master chefs mold fat, bluefin fatty tuna, sea urchin, and crispy sea-salt eel on seasoned warm rice.',
            location: 'Kyubey Ginza, Tokyo',
            cost: '$140 per person',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '04:30 PM',
            title: 'Shibuya Sky Observatory Deck',
            description: 'Climb 230m to the open-roof glass platform overlooking the sprawling city, framing Mount Fuji on clear sunset horizons.',
            location: 'Shibuya Scramble Square',
            cost: '$18 ticket',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=400&q=80'
          }
        ]
      },
      {
        dayNumber: 2,
        title: 'Bullet Train & Kyoto Maple Groves',
        description: "Board the iconic white train bullet and zoom westwards into Japan's ancient cultural capitals.",
        activities: [
          {
            time: '08:00 AM',
            title: 'Shinkansen Gran Class Bullet Ride',
            description: 'Board the Nozomi express train, reclining on soft white leather seats while speed displays climb past 300km/h through coastal green farms.',
            location: 'Tokyo to Kyoto Station',
            cost: '$120 ticket',
            type: 'activity',
            imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '11:00 AM',
            title: 'Kinkaku-ji golden temple arches',
            description: 'Walk around a gorgeous mirror pond reflecting a two-tiered temple covered in absolute pure gold leaf sheets, nested under old pine branches.',
            location: 'Northern Kyoto Forest',
            cost: '$6 entry fee',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '06:00 PM',
            title: 'Geisha District Teahouse Walk at Gion',
            description: 'Explore the narrow wooden lanes of Hanami-koji, catching sights of authentic Geiko walking with clanging white socks on smooth basalt roads.',
            location: 'Gion District Kyoto',
            cost: 'Free access',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=400&q=80'
          }
        ]
      },
      {
        dayNumber: 3,
        title: 'Thousand Torii Gates & Searing Wagyu',
        description: 'Witness the infinite red paths of Fushimi Inari and feast on marbled beef melting on stone grills.',
        activities: [
          {
            time: '07:30 AM',
            title: 'Fushimi Inari Shrine Thousand Red Gates',
            description: 'Hike early morning under hundreds of bright vermillion wooden shinto arches arching over mountain pathways.',
            location: 'Southern Kyoto Ridge',
            cost: 'Free access',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '12:30 PM',
            title: 'Teppanyaki A5 Kobe Beef Banquet',
            description: 'Eat melt-in-your-mouth charcoal-broiled authentic Kobe beef grade A5, grilled on table plate grids by master chefs, seasoned with cold ocean sea salts.',
            location: 'Wagyu Itoh Kyoto',
            cost: '$180 per person',
            type: 'restaurant',
            imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80'
          },
          {
            time: '03:00 PM',
            title: 'Arashiyama Sacred Bamboo Walk',
            description: 'Walk the soaring jade green bamboo grove pathways, listening to green stems clicking under gentle afternoon winds.',
            location: 'Arashiyama, Western Kyoto',
            cost: 'Free access',
            type: 'attraction',
            imageUrl: 'https://images.unsplash.com/photo-1501179691627-ef31b70011ac?auto=format&fit=crop&w=400&q=80'
          }
        ]
      }
    ]
  }
};
