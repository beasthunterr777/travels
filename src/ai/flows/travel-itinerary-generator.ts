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

const GenerateItineraryInputSchema = z.object({
  destinations: z
    .string()
    .describe('A comma separated list of destinations in Karnataka.'),
  duration: z.string().describe('The duration of the trip in days.'),
  interests: z.string().describe('A comma separated list of interests, e.g. historical, cultural, nature.'),
});
export type GenerateItineraryInput = z.infer<typeof GenerateItineraryInputSchema>;

const GenerateItineraryOutputSchema = z.object({
  itinerary: z.string().describe('The generated travel itinerary.'),
});
export type GenerateItineraryOutput = z.infer<typeof GenerateItineraryOutputSchema>;

export async function generateItineraryFromDestinations(input: GenerateItineraryInput): Promise<GenerateItineraryOutput> {
  return generateItineraryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateItineraryPrompt',
  input: {schema: GenerateItineraryInputSchema},
  output: {schema: GenerateItineraryOutputSchema},
  prompt: `You are an expert travel agent specializing in Karnataka tourism. You will generate a travel itinerary based on the destinations, duration, and interests provided.

Destinations: {{{destinations}}}
Duration: {{{duration}}}
Interests: {{{interests}}}

Consider distances, travel times, and the optimal order to visit the destinations. Provide a detailed itinerary with suggestions for activities and places to visit each day.`,
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
