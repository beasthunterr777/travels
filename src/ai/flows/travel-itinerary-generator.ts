
'use server';

/**
 * @fileOverview A travel itinerary generator AI agent.
 *
 * - generateItineraryFromDestinations - A function that handles the travel itinerary generation process.
 * - GenerateItineraryInput - The input type for the generateItineraryFromDestinations function.
 * - GenerateItineraryOutput - The return type for the generateItineraryFromDestinations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { getWeather, GetWeatherOutputSchema } from '@/ai/tools/get-weather-tool'; // Import weather tool

const GenerateItineraryInputSchema = z.object({
  destinations: z
    .string()
    .describe('A comma separated list of destinations in Karnataka.'),
  duration: z.string().describe('The duration of the trip in days.'),
  interests: z.string().describe('A comma separated list of interests, e.g. historical, cultural, nature.'),
});
export type GenerateItineraryInput = z.infer<typeof GenerateItineraryInputSchema>;

const ActivitySchema = z.object({
  name: z.string().describe('Name of the activity or place to visit.'),
  description: z.string().optional().describe('A brief description of the activity or place.'),
  googleMapsUrl: z.string().url().optional().describe('A Google Maps search URL for this specific activity or location. Construct this as https://www.google.com/maps/search/?api=1&query=URL_ENCODED_LOCATION_NAME.'),
  weather: GetWeatherOutputSchema.nullable().optional().describe('Weather forecast for this location, if applicable. Use the getWeather tool for primary locations.'),
});

const DailyPlanSchema = z.object({
  day: z.number().describe('The day number of the itinerary (e.g., 1, 2).'),
  title: z.string().describe('A concise title for the day\'s plan (e.g., "Arrival in Mysore & Palace Visit").'),
  summary: z.string().optional().describe('A brief summary of the day\'s activities.'),
  activities: z.array(ActivitySchema).describe('A list of activities and places to visit for the day.'),
  transportationNotes: z.string().optional().describe("Notes on transportation for this day's plan, e.g., 'Hire a taxi for local sightseeing', 'Take an overnight bus to Hampi'.")
});

const GenerateItineraryOutputSchema = z.object({
  overallTitle: z.string().describe('An overall title for the generated trip itinerary.'),
  dailyPlans: z.array(DailyPlanSchema).describe('A list of daily plans making up the itinerary.'),
});
export type GenerateItineraryOutput = z.infer<typeof GenerateItineraryOutputSchema>;

export async function generateItineraryFromDestinations(input: GenerateItineraryInput): Promise<GenerateItineraryOutput> {
  return generateItineraryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateItineraryPrompt',
  input: {schema: GenerateItineraryInputSchema},
  output: {schema: GenerateItineraryOutputSchema},
  tools: [getWeather], // Make weather tool available
  prompt: `You are an expert travel agent specializing in Karnataka tourism. You will generate a detailed, structured travel itinerary based on the destinations, duration, and interests provided.

Destinations: {{{destinations}}}
Duration: {{{duration}}}
Interests: {{{interests}}}

Follow this structure precisely for your output:
The output should be a JSON object adhering to the GenerateItineraryOutput schema.
- "overallTitle": A catchy title for the entire trip.
- "dailyPlans": An array of objects, where each object represents a day.
  - "day": The day number.
  - "title": A short title for the day's plan.
  - "summary": A brief overview of what the day entails.
  - "activities": An array of activity objects for that day.
    - "name": Name of the specific activity or place.
    - "description": A short description of the activity/place.
    - "googleMapsUrl": Generate a Google Maps search URL for this specific activity or location (e.g., "https://www.google.com/maps/search/?api=1&query=Mysore+Palace%2C+Karnataka"). Ensure the query is URL encoded.
    - "weather": For the primary location of each day or significant outdoor activity, use the 'getWeather' tool to fetch and include the current weather. If weather is not applicable or not fetched, this field can be omitted or set to null. Only call getWeather for distinct, major locations to avoid redundancy.
  - "transportationNotes": Suggestions on how to travel to the day's main location or between major activities for the day. For example: 'Recommend hiring a local auto-rickshaw for sightseeing within Hampi and a KSRTC bus for travel between Hampi and Bangalore.'

Consider travel times between locations, opening hours, and logical sequencing of activities. Provide practical and engaging suggestions.
For example, if a day is focused on Mysore, use getWeather for Mysore. If an activity is a specific trek, get weather for the trek's starting point if it's distinct.
Make the itinerary detailed and user-friendly.
`,
});

const generateItineraryFlow = ai.defineFlow(
  {
    name: 'generateItineraryFlow',
    inputSchema: GenerateItineraryInputSchema,
    outputSchema: GenerateItineraryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
