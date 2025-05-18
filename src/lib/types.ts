export interface Destination {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  dataAiHint?: string;
  category: string[]; // e.g., ['historical', 'nature']
  region: string; // e.g., 'Coastal Karnataka', 'Malenadu'
  bestTimeToVisit: string;
  howToReach: {
    air?: string;
    rail?: string;
    road?: string;
  };
  attractions: string[];
  tips: string[];
  popularFoods?: string[];
  mapEmbedUrl?: string; // For Google Maps embed
  entryFee?: string; 
  timings?: string; 
}

export interface Itinerary {
  id: string;
  title: string;
  duration: string; // e.g., '3 Days / 2 Nights'
  interests: string[]; // e.g., ['adventure', 'culture']
  description: string;
  dailyPlan: {
    day: number;
    title: string;
    activities: string[];
  }[];
  imageUrl?: string;
  dataAiHint?: string;
}

export interface BookingLink {
  id: string;
  type: 'accommodation' | 'transport'; // Hotel, Homestay, Bus, Train, Flight
  name: string;
  description?: string;
  url: string;
  imageUrl?: string;
  dataAiHint?: string;
  provider?: string; // e.g., 'MakeMyTrip', 'KSRTC'
}
