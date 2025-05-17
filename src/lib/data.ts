
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
    imageUrl: 'data:image/png;base64,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',
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

    

    