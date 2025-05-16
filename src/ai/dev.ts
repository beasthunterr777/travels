
import { config } from 'dotenv';
config();

import '@/ai/flows/ai-travel-assistant.ts';
import '@/ai/flows/travel-itinerary-generator.ts';
import '@/ai/flows/travel-recommendation.ts';
import '@/ai/tools/get-weather-tool.ts'; // Added weather tool
