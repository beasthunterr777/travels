
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
    imageUrl: 'https://placehold.co/300x200.png',
    dataAiHint: 'hotel booking',
    description: 'Wide range of hotels across Karnataka.'
  },
  {
    id: 'agoda-hotels',
    type: 'accommodation',
    name: 'Agoda Homes & Hotels',
    url: 'https://www.agoda.com/',
    provider: 'Agoda',
    imageUrl: 'https://placehold.co/300x200.png',
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

    