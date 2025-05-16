
// src/ai/flows/ai-travel-assistant.ts
'use server';
/**
 * @fileOverview AI-powered travel recommendation tool based on user preferences and current trends.
 *
 * - getPersonalizedTravelRecommendations - A function that takes user preferences and returns personalized travel recommendations.
 * - TravelPreferencesInput - The input type for the getPersonalizedTravelRecommendations function.
 * - TravelRecommendationsOutput - The return type for the getPersonalizedTravelRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { getWeather, GetWeatherOutputSchema } from '@/ai/tools/get-weather-tool'; // Import weather tool

const TravelPreferencesInputSchema = z.object({
  interests: z
    .string()
    .describe('Interests of the traveler, e.g., historical sites, nature, adventure.'),
  budget: z.string().describe('Budget of the traveler, e.g., low, medium, high.'),
  duration: z.string().describe('Duration of the trip in days, e.g., 3 days, 1 week.'),
  travelStyle: z
    .string()
    .optional()
    .describe('Preferred travel style, e.g., backpacking, luxury, family.'),
  locationPreferences: z
    .string()
    .optional()
    .describe('Preferred locations or regions within Karnataka, e.g., Coorg, Mysore.'),
});
export type TravelPreferencesInput = z.infer<typeof TravelPreferencesInputSchema>;

const RecommendedDestinationSchema = z.object({
  name: z.string().describe('Name of the recommended destination.'),
  description: z.string().describe('Brief description of why this destination is recommended.'),
  googleMapsUrl: z.string().url().optional().describe('A Google Maps search URL for this destination (e.g., "https://www.google.com/maps/search/?api=1&query=Coorg%2C+Karnataka"). Ensure the query is URL encoded.'),
  weather: GetWeatherOutputSchema.optional().describe('Current weather for this destination. Use the getWeather tool.'),
});

const SuggestedActivitySchema = z.object({
  name: z.string().describe('Name of the suggested activity.'),
  description: z.string().describe('Details about the activity and where it can be done.'),
  relatedDestination: z.string().optional().describe('If specific to a destination, mention its name.'),
  googleMapsUrl: z.string().url().optional().describe('A Google Maps search URL for the activity location, if applicable. Construct as https://www.google.com/maps/search/?api=1&query=URL_ENCODED_LOCATION_NAME.'),
});

const BriefItinerarySchema = z.object({
  title: z.string().describe("Title for the brief itinerary (e.g., 'Weekend in Coorg', 'Historical Hampi Tour')."),
  summary: z.string().describe("A short summary of what this itinerary covers."),
  days: z.array(z.object({
    day: z.number().describe("Day number"),
    description: z.string().describe("Brief plan for the day.")
  })).optional().describe("Optional day-by-day breakdown if simple enough.")
});


const TravelRecommendationsOutputSchema = z.object({
  recommendedDestinations: z
    .array(RecommendedDestinationSchema)
    .describe('A list of recommended destinations in Karnataka based on user preferences. For each, provide a Google Maps link and use the getWeather tool for weather.'),
  suggestedActivities: z
    .array(SuggestedActivitySchema)
    .describe('A list of activities suiting the user preferences, potentially linked to the destinations.'),
  suggestedItineraries: z
    .array(BriefItinerarySchema)
    .describe(
      'One or two potential brief itinerary outlines based on the preferences and recommended destinations.'
    ),
  estimatedCost: z
    .string()
    .optional()
    .describe('Estimated cost of the trip based on the budget and duration.'),
  additionalNotes: z
    .string()
    .optional()
    .describe('Any additional notes or recommendations for the trip.'),
});
export type TravelRecommendationsOutput = z.infer<typeof TravelRecommendationsOutputSchema>;

export async function getPersonalizedTravelRecommendations(
  input: TravelPreferencesInput
): Promise<TravelRecommendationsOutput> {
  return personalizedTravelRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedTravelRecommendationsPrompt',
  input: {schema: TravelPreferencesInputSchema},
  output: {schema: TravelRecommendationsOutputSchema},
  tools: [getWeather], // Make weather tool available
  prompt: `You are an expert travel guide for Karnataka, India. A user is planning a trip and has provided their preferences.
Provide personalized travel recommendations adhering strictly to the TravelRecommendationsOutputSchema.

User Preferences:
Interests: {{{interests}}}
Budget: {{{budget}}}
Duration: {{{duration}}}
Travel Style: {{{travelStyle}}}
Location Preferences: {{{locationPreferences}}}

Your response must be a JSON object with the following fields:
- "recommendedDestinations": An array of destination objects. For each destination:
  - "name": The name of the place.
  - "description": Why it's recommended.
  - "googleMapsUrl": A Google Maps search URL (e.g., "https://www.google.com/maps/search/?api=1&query=URL_ENCODED_LOCATION_NAME").
  - "weather": Use the 'getWeather' tool to provide current weather for this destination.
- "suggestedActivities": An array of activity objects. For each activity:
  - "name": Name of the activity.
  - "description": Details and where it can be done.
  - "relatedDestination": (Optional) Mention if tied to a specific recommended destination.
  - "googleMapsUrl": (Optional) A Google Maps search URL if the activity has a specific location.
- "suggestedItineraries": An array of brief itinerary objects. For each itinerary:
    - "title": Catchy title.
    - "summary": Short summary.
    - "days": (Optional) A very brief day-by-day plan if it fits.
- "estimatedCost": (Optional) An estimated cost.
- "additionalNotes": (Optional) Any other useful tips.

Focus on providing valuable, actionable information. Ensure all Google Maps URLs are correctly formatted and query parameters are URL encoded. Use the getWeather tool for each primary recommended destination.
`,
});

const personalizedTravelRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedTravelRecommendationsFlow',
    inputSchema: TravelPreferencesInputSchema,
    outputSchema: TravelRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
