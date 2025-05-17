
import type { Destination, BookingLink, Itinerary } from './types';

export const destinations: Destination[] = [
  {
    id: 'bangalore',
    name: 'Bengaluru (Bangalore)',
    shortDescription: 'The vibrant capital of Karnataka, known as the Silicon Valley of India, blending modernity with rich history and green spaces.',
    longDescription: 'Bengaluru, officially known as Bengaluru, is the capital of the Indian state of Karnataka. It has a population of over ten million, making it a megacity and the third-most populous city and fifth-most populous urban agglomeration in India. It is located in southern India on the Deccan Plateau. Its elevation is the highest among the major cities of India. A demographically diverse city, Bengaluru is a major economic and cultural hub and the second-fastest-growing major metropolis in India. It is home to many well-recognized educational and research institutions. Numerous state-owned aerospace and defence organisations are located in the city. The city also houses the Kannada film industry. It was ranked the most liveable Indian city with a population of over a million by the Ease of Living Index 2020.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'bangalore city',
    category: ['city', 'modern', 'historical', 'gardens', 'nightlife'],
    region: 'South Karnataka',
    bestTimeToVisit: 'October to March (Pleasant weather)',
    howToReach: {
      air: 'Kempegowda International Airport Bengaluru (BLR) connects to domestic and international destinations.',
      rail: 'Bengaluru City Railway Station (SBC) and Yesvantpur Junction (YPR) are major railway hubs.',
      road: 'Excellent road network connecting to all major South Indian cities. BMTC and KSRTC buses operate extensively.',
    },
    attractions: ['Bangalore Palace', 'Lal Bagh Botanical Garden', 'Cubbon Park', 'Vidhana Soudha', 'ISKCON Temple Bangalore', 'National Gallery of Modern Art', 'Visvesvaraya Industrial & Technological Museum', 'Bannerghatta National Park (Safari & Zoo)'],
    tips: ['Utilize ride-hailing apps or metro for easy commute.', 'Explore diverse culinary scenes from street food to fine dining.', 'Traffic can be heavy, plan your travel accordingly.', 'Many tech parks and startups to see if interested in the modern aspect.'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.95993135967!2d77.4661254209386!3d12.95394562249558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1710000000000'
  },
  {
    id: 'mysore',
    name: 'Mysore',
    shortDescription: 'The cultural capital of Karnataka, known for its majestic palaces and vibrant traditions.',
    longDescription: 'Mysore, officially Mysuru, is a city in the southern part of Karnataka. It served as the capital city of the Kingdom of Mysore for nearly six centuries from 1399 until 1956. The city is known for its palaces, including the Mysore Palace, and for the festivities that take place during the Dasara festival.',
    imageUrl: 'https://cdn.britannica.com/58/124658-050-28314DA4/Maharaja-Palace-Mysuru-Karnataka-India.jpg',
    dataAiHint: 'mysore city palace',
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
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62360.40207404979!2d76.59191701049998!3d12.310893904901526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7038112f600f%3A0x425a20399ba9355d!2sMysuru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000'
  },
  {
    id: 'coorg',
    name: 'Coorg (Kodagu)',
    shortDescription: 'The "Scotland of India," famous for its coffee plantations, misty hills, and lush forests.',
    longDescription: 'Kodagu, also known as Coorg, is an administrative district in Karnataka, India. It occupies an area of 4,102 square kilometres (1,584 sq mi) in the Western Ghats of southwestern Karnataka. It is a popular tourist destination known for its coffee plantations, cool climate, and scenic beauty.',
    imageUrl: 'https://tripver.com/wp-content/uploads/2024/08/coorg-karnataka.jpg',
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
    imageUrl: 'https://karnatakatourism.org/wp-content/uploads/2020/05/Hampi.jpg',
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
  },
];

export const bookingLinks: BookingLink[] = [
  {
    id: 'makemytrip-hotels',
    type: 'accommodation',
    name: 'MakeMyTrip Hotels',
    url: 'https://www.makemytrip.com/hotels/',
    provider: 'MakeMyTrip',
    description: 'Wide range of hotels across Karnataka.',
    dataAiHint: 'hotel booking travel',
  },
  {
    id: 'goibibo-hotels',
    type: 'accommodation',
    name: 'Goibibo Hotels',
    url: 'https://www.goibibo.com/hotels/',
    provider: 'Goibibo',
    description: 'Find deals on hotels and resorts.',
    imageUrl: 'https://placehold.co/400x200.png',
    dataAiHint: 'resort travel',
  },
  {
    id: 'agoda-homes',
    type: 'accommodation',
    name: 'Agoda Homes & Hotels',
    url: 'https://www.agoda.com/',
    provider: 'Agoda',
    description: 'Book hotels, homes, and more.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Agoda_logo.png/600px-Agoda_logo.png',
    dataAiHint: 'accommodation booking',
  },
  {
    id: 'ksrtc-booking',
    type: 'transport',
    name: 'KSRTC Bus Booking',
    url: 'https://ksrtc.in/oprs-web/',
    provider: 'KSRTC',
    description: 'Official Karnataka State Road Transport Corporation bus bookings.',
    imageUrl: 'https://placehold.co/400x200.png',
    dataAiHint: 'bus ticket',
  },
  {
    id: 'redbus',
    type: 'transport',
    name: 'RedBus',
    url: 'https://www.redbus.in/',
    provider: 'RedBus',
    description: 'Popular platform for booking bus tickets across India.',
    imageUrl: 'https://placehold.co/400x200.png',
    dataAiHint: 'bus booking travel',
  },
  {
    id: 'irctc-trains',
    type: 'transport',
    name: 'IRCTC Train Booking',
    url: 'https://www.irctc.co.in/nget/train-search',
    provider: 'IRCTC',
    description: 'Official Indian Railways booking portal for train tickets.',
    imageUrl: 'https://placehold.co/400x200.png',
    dataAiHint: 'train ticket india',
  }
];

export const itineraries: Itinerary[] = [
  // Example Itineraries - These can be expanded or dynamically generated
  {
    id: 'coorg-3day',
    title: '3-Day Coorg Nature Retreat',
    duration: '3 Days / 2 Nights',
    interests: ['nature', 'adventure', 'coffee'],
    description: 'Experience the misty hills, lush coffee plantations, and serene waterfalls of Coorg.',
    dailyPlan: [
      { day: 1, title: 'Arrival & Madikeri Exploration', activities: ['Check into hotel/homestay', 'Visit Raja\'s Seat for sunset', 'Explore Madikeri Fort'] },
      { day: 2, title: 'Waterfalls & Wildlife', activities: ['Visit Abbey Falls', 'Explore Dubare Elephant Camp', 'Optional: Talakaveri visit'] },
      { day: 3, title: 'Coffee Plantations & Departure', activities: ['Tour a coffee plantation', 'Shop for local spices and coffee', 'Depart from Coorg'] },
    ],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'coorg hills'
  },
  {
    id: 'hampi-2day',
    title: '2-Day Hampi Historical Tour',
    duration: '2 Days / 1 Night',
    interests: ['historical', 'archaeological', 'photography'],
    description: 'Journey back in time exploring the magnificent ruins of the Vijayanagara Empire in Hampi.',
    dailyPlan: [
      { day: 1, title: 'Sacred Centre & Royal Enclosure', activities: ['Visit Virupaksha Temple', 'Explore Hampi Bazaar', 'See Elephant Stables and Lotus Mahal'] },
      { day: 2, title: 'Vittala Temple & Tungabhadra River', activities: ['Marvel at the Stone Chariot in Vittala Temple', 'Enjoy a coracle ride on Tungabhadra River (seasonal)', 'Hike Matanga Hill for panoramic views'] },
    ],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'hampi ruins'
  }
];
