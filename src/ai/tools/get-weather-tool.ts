
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
    // For now, we'll return more dynamic mock data.
    console.log(`Weather tool called for: ${input.location}`);

    // Helper to generate a slightly randomized temperature
    const randomizeTemp = (baseTemp: number): string => {
      return `${baseTemp - 2 + Math.floor(Math.random() * 5)}°C`; // +/- 2 degrees
    };

    // Helper to generate slightly randomized humidity
    const randomizeHumidity = (baseHumidity: number): string => {
      return `${baseHumidity - 5 + Math.floor(Math.random() * 11)}%`; // +/- 5%
    };

    if (input.location.toLowerCase().includes('coorg')) {
      return {
        temperature: randomizeTemp(22),
        condition: 'Misty and Pleasant',
        humidity: randomizeHumidity(80),
        wind: '5 km/h SW',
      };
    } else if (input.location.toLowerCase().includes('mysore')) {
      return {
        temperature: randomizeTemp(28),
        condition: 'Sunny with scattered clouds',
        humidity: randomizeHumidity(65),
        wind: '8 km/h W',
      };
    } else if (input.location.toLowerCase().includes('hampi')) {
      return {
        temperature: randomizeTemp(32),
        condition: 'Clear and Sunny',
        humidity: randomizeHumidity(40),
        wind: '12 km/h NW',
      };
    } else if (input.location.toLowerCase().includes('bangalore') || input.location.toLowerCase().includes('bengaluru')) {
      return {
        temperature: randomizeTemp(26),
        condition: 'Pleasant with a chance of light rain',
        humidity: randomizeHumidity(70),
        wind: '10 km/h E',
      };
    } else if (input.location.toLowerCase().includes('mangalore') || input.location.toLowerCase().includes('mangaluru')) {
      return {
        temperature: randomizeTemp(30),
        condition: 'Warm and Humid',
        humidity: randomizeHumidity(85),
        wind: '15 km/h SW',
      };
    }
    // Default mock data if location doesn't match specific cases
    return {
      temperature: randomizeTemp(27),
      condition: 'Partly Cloudy',
      humidity: randomizeHumidity(70),
      wind: '7 km/h N',
    };
  }
);

