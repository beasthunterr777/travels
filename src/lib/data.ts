
import type { Destination, BookingLink, Itinerary } from './types';

export const destinations: Destination[] = [
  {
    id: 'mysore',
    name: 'Mysore',
    shortDescription: 'The cultural capital of Karnataka, known for its majestic palaces and vibrant traditions.',
    longDescription: 'Mysore, officially Mysuru, is a city in the southern part of Karnataka. It served as the capital city of the Kingdom of Mysore for nearly six centuries from 1399 until 1956. The city is known for its palaces, including the Mysore Palace, and for the festivities that take place during the Dasara festival.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'palace india',
    category: ['historical', 'cultural'],
    region: 'Southern Karnataka',
    bestTimeToVisit: 'October to March',
    howToReach: {
      air: 'Nearest airport is Mysore Airport (MYQ), with limited connectivity. Kempegowda International Airport Bengaluru (BLR) is 170 km away.',
      rail: 'Mysore Junction (MYS) is well-connected to major Indian cities.',
      road: 'Excellent road connectivity from Bangalore and other nearby cities.',
    },
    attractions: ['Mysore Palace', 'Brindavan Gardens', 'Chamundeshwari Temple', 'Mysore Zoo', 'Jaganmohan Palace Art Gallery'],
    tips: ['Attend the Dasara festival if visiting in autumn.', 'Try the famous Mysore Pak sweet.', 'Explore Devaraja Market for local crafts.'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62385.R!2d76.612670!3d12.310971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70383f60ca79%3A0x885977e3617906ab!2sMysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1628500000000!5m2!1sen!2sin'
  },
  {
    id: 'coorg',
    name: 'Coorg (Kodagu)',
    shortDescription: 'The "Scotland of India," famous for its coffee plantations, misty hills, and lush forests.',
    longDescription: 'Kodagu, also known as Coorg, is an administrative district in Karnataka, India. It occupies an area of 4,102 square kilometres (1,584 sq mi) in the Western Ghats of southwestern Karnataka. It is a popular tourist destination known for its coffee plantations, cool climate, and scenic beauty.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'coffee plantation',
    category: ['nature', 'adventure'],
    region: 'Malenadu',
    bestTimeToVisit: 'September to May',
    howToReach: {
      air: 'Nearest airports are Kannur (CNN) in Kerala (approx. 90km) and Mangalore (IXE) (approx. 140km).',
      rail: 'Nearest railway stations are Mysore, Mangalore, and Hassan.',
      road: 'Well-connected by road from Mysore, Mangalore, and Bangalore.',
    },
    attractions: ['Abbey Falls', 'Dubare Elephant Camp', 'Raja\'s Seat', 'Talakaveri', 'Nagarhole National Park', 'Madikeri Fort'],
    tips: ['Go for a coffee plantation tour.', 'Trekking is popular here.', 'Carry warm clothes, as it can get chilly.'],
  },
  {
    id: 'hampi',
    name: 'Hampi',
    shortDescription: 'A UNESCO World Heritage site with ancient ruins of the Vijayanagara Empire.',
    longDescription: 'Hampi is an ancient village in the south Indian state of Karnataka. It’s dotted with numerous ruined temple complexes from the Vijayanagara Empire. On the south bank of the River Tungabhadra is the 7th-century Hindu Virupaksha Temple, near the revived Hampi Bazaar.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'ancient ruins',
    category: ['historical', 'archaeological', 'religious'],
    region: 'North Karnataka',
    bestTimeToVisit: 'October to February',
    howToReach: {
      air: 'Nearest airport is Hubli (HBX) (approx. 160km). Jindal Vijaynagar Airport (VDY) in Toranagallu is closer (approx. 40km) but has limited flights.',
      rail: 'Nearest railway station is Hospet Junction (HPT), about 13 km away.',
      road: 'Connected by road from Bangalore, Hyderabad, and Goa.',
    },
    attractions: ['Virupaksha Temple', 'Vijaya Vittala Temple (Stone Chariot)', 'Elephant Stables', 'Matanga Hill', 'Lotus Mahal'],
    tips: ['Rent a bicycle or scooter to explore the vast ruins.', 'Wear comfortable shoes.', 'Hire a guide for a better understanding of the history.'],
  },
  {
    id: 'gokarna',
    name: 'Gokarna',
    shortDescription: 'A serene beach town known for its pristine beaches and sacred temples.',
    longDescription: 'Gokarna is a small temple town on the western coast of India in the Kumta taluk of Uttara Kannada district of the state of Karnataka. The main temple and deity is Lord Shiva, who is also known as Mahabaleshwara. This temple houses what is believed tobe original image of Lord Shiva\'s linga (Atmalinga).',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'beach sunset',
    category: ['beach', 'religious', 'nature'],
    region: 'Coastal Karnataka',
    bestTimeToVisit: 'October to March',
    howToReach: {
      air: 'Nearest airport is Dabolim Airport (GOI) in Goa (approx. 140km).',
      rail: 'Gokarna Road (GOK) railway station is about 10km from town, on the Konkan Railway line.',
      road: 'Well-connected by bus from major cities like Bangalore, Mangalore, and Goa.',
    },
    attractions: ['Om Beach', 'Kudle Beach', 'Half Moon Beach', 'Paradise Beach', 'Mahabaleshwar Temple'],
    tips: ['Enjoy beach trekking between the different beaches.', 'Respect local customs, especially near temples.', 'Sunsets are spectacular here.'],
  }
];

export const bookingLinks: BookingLink[] = [
  {
    id: 'makemytrip-hotels',
    type: 'accommodation',
    name: 'MakeMyTrip Hotels',
    url: 'https://www.makemytrip.com/hotels/',
    provider: 'MakeMyTrip',
    imageUrl: 'data:image/jpeg;base64,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',
    dataAiHint: 'hotel booking',
    description: 'Wide range of hotels across Karnataka.'
  },
  {
    id: 'agoda-hotels',
    type: 'accommodation',
    name: 'Agoda Homes & Hotels',
    url: 'https://www.agoda.com/',
    provider: 'Agoda',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Agoda_transparent_logo.png',
    dataAiHint: 'travel stay',
    description: 'Find great deals on homes and hotels.'
  },
  {
    id: 'ksrtc-buses',
    type: 'transport',
    name: 'KSRTC Bus Booking',
    url: 'https://ksrtc.in/oprs-web/',
    provider: 'KSRTC',
    imageUrl: 'https://placehold.co/300x200.png',
    dataAiHint: 'bus travel',
    description: 'Official Karnataka State Road Transport Corporation bus bookings.'
  },
  {
    id: 'irctc-trains',
    type: 'transport',
    name: 'IRCTC Train Booking',
    url: 'https://www.irctc.co.in/',
    provider: 'IRCTC',
    imageUrl: 'https://placehold.co/300x200.png',
    dataAiHint: 'train railway',
    description: 'Official Indian Railways train ticket bookings.'
  }
];

export const sampleItineraries: Itinerary[] = [
  {
    id: 'cultural-karnataka-7d',
    title: 'Cultural Karnataka Discovery',
    duration: '7 Days / 6 Nights',
    interests: ['culture', 'history', 'architecture'],
    description: 'Explore the rich cultural heritage of Karnataka, from majestic palaces to ancient temple towns.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'temple festival',
    dailyPlan: [
      { day: 1, title: 'Arrival in Bangalore & Transfer to Mysore', activities: ['Arrive at Bangalore Airport (BLR)', 'Transfer to Mysore (3-4 hours drive)', 'Check-in to hotel', 'Evening visit to Brindavan Gardens'] },
      { day: 2, title: 'Mysore Sightseeing', activities: ['Visit Mysore Palace', 'Explore Jaganmohan Palace Art Gallery', 'Visit Chamundeshwari Temple atop Chamundi Hills', 'Evening at Mysore Zoo'] },
      { day: 3, title: 'Mysore to Hassan (Belur & Halebidu)', activities: ['Drive to Hassan (2-3 hours)', 'Day trip to Belur and Halebidu temples (Hoysala architecture)', 'Return to Hassan for overnight stay'] },
      { day: 4, title: 'Hassan to Hampi', activities: ['Drive to Hampi (5-6 hours)', 'Check-in to hotel', 'Evening exploration of Hampi Bazaar and Virupaksha Temple surroundings'] },
      { day: 5, title: 'Hampi Exploration', activities: ['Full day Hampi sightseeing: Vijaya Vittala Temple (Stone Chariot)', 'Elephant Stables, Lotus Mahal, Queen\'s Bath', 'Sunset from Matanga Hill'] },
      { day: 6, title: 'Hampi to Badami, Aihole, Pattadakal', activities: ['Day trip to Badami cave temples, Aihole, and Pattadakal (Chalukyan architecture)', 'Return to Hampi/Hospet or stay near Badami'] },
      { day: 7, title: 'Departure', activities: ['Transfer to Hubli Airport (HBX) or Hospet Railway Station (HPT) for departure'] },
    ]
  },
  {
    id: 'nature-escape-coorg-3d',
    title: 'Nature Escape to Coorg',
    duration: '3 Days / 2 Nights',
    interests: ['nature', 'coffee', 'relaxation'],
    description: 'Immerse yourself in the misty hills and coffee plantations of Coorg.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'green hills',
    dailyPlan: [
      { day: 1, title: 'Arrival in Coorg & Plantation Visit', activities: ['Arrive in Madikeri, Coorg', 'Check-in to hotel/homestay', 'Visit a local coffee plantation', 'Evening at Raja\'s Seat for sunset views'] },
      { day: 2, title: 'Coorg Sightseeing', activities: ['Visit Abbey Falls', 'Explore Dubare Elephant Camp (elephant interaction)', 'Visit Talakaveri (origin of River Cauvery)', 'Optional visit to Namdroling Monastery (Golden Temple)'] },
      { day: 3, title: 'Departure from Coorg', activities: ['Morning leisure or visit Madikeri Fort', 'Depart from Coorg'] },
    ]
  }
];

    

    
