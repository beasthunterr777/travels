// src/ai/flows/travel-recommendation.ts
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

const TravelRecommendationsOutputSchema = z.object({
  destinations: z
    .string()
    .describe('Recommended destinations in Karnataka based on the user preferences.'),
  activities: z
    .string()
    .describe('Recommended activities at the destinations based on the user preferences.'),
  itineraries: z
    .string()
    .describe(
      'Potential itineraries including destinations and activities, tailored to the trip duration.'
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
  prompt: `You are an expert travel guide for Karnataka, India. A user is planning a trip to Karnataka and has provided their preferences.  Based on these preferences, provide personalized travel recommendations, including destinations, activities, and potential itineraries.

Interests: {{{interests}}}
Budget: {{{budget}}}
Duration: {{{duration}}}
Travel Style: {{{travelStyle}}}
Location Preferences: {{{locationPreferences}}}

Provide destinations, activities and itineraries tailored to these preferences.  Also, provide an estimated cost if possible, and any additional notes that might be helpful.`,
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
