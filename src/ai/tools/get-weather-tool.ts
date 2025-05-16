
/**
 * @fileOverview A Genkit tool to fetch weather information for a given location.
 *
 * - getWeather - A tool that returns (mocked) weather data.
 * - GetWeatherInputSchema - Input schema for the weather tool.
 * - GetWeatherOutputSchema - Output schema for the weather tool.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const GetWeatherInputSchema = z.object({
  location: z.string().describe('The city or location for which to fetch the weather.'),
});
export type GetWeatherInput = z.infer<typeof GetWeatherInputSchema>;

export const GetWeatherOutputSchema = z.object({
  temperature: z.string().describe('The current temperature, e.g., "25°C".'),
  condition: z.string().describe('The current weather condition, e.g., "Sunny", "Cloudy".'),
  humidity: z.string().optional().describe('The current humidity, e.g., "60%".'),
  wind: z.string().optional().describe('The current wind speed and direction, e.g., "10 km/h NW".'),
});
export type GetWeatherOutput = z.infer<typeof GetWeatherOutputSchema>;

export const getWeather = ai.defineTool(
  {
    name: 'getWeather',
    description: 'Provides the current weather forecast for a specified location in Karnataka. Use this for primary destinations in an itinerary.',
    inputSchema: GetWeatherInputSchema,
    outputSchema: GetWeatherOutputSchema,
  },
  async (input: GetWeatherInput) => {
    // In a real application, you would call a weather API here.
    // For now, we'll return mock data.
    console.log(`Weather tool called for: ${input.location}`);
    // Simulate different weather for different places for more dynamic mock data
    if (input.location.toLowerCase().includes('coorg')) {
      return {
        temperature: '22°C',
        condition: 'Misty and Pleasant',
        humidity: '80%',
        wind: '5 km/h SW',
      };
    } else if (input.location.toLowerCase().includes('mysore')) {
      return {
        temperature: '28°C',
        condition: 'Sunny with scattered clouds',
        humidity: '65%',
        wind: '8 km/h W',
      };
    } else if (input.location.toLowerCase().includes('hampi')) {
      return {
        temperature: '32°C',
        condition: 'Clear and Sunny',
        humidity: '40%',
        wind: '12 km/h NW',
      };
    }
    return {
      temperature: '27°C',
      condition: 'Partly Cloudy',
      humidity: '70%',
      wind: '7 km/h N',
    };
  }
);
