
'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { getPersonalizedTravelRecommendations, type TravelPreferencesInput, type TravelRecommendationsOutput } from '@/ai/flows/ai-travel-assistant';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, BotMessageSquare, MapPin, LinkIcon, ThermometerSun, ListChecks, CalendarRange, HandCoins, PlaneTakeoff } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const formSchema = z.object({
  interests: z.string().min(3, 'Please describe your interests.'),
  budget: z.enum(['low', 'medium', 'high'], { required_error: 'Please select a budget.' }),
  duration: z.string().min(1, 'Please enter trip duration.'),
  travelStyle: z.string().optional(),
  locationPreferences: z.string().optional(),
});

type AssistantFormValues = z.infer<typeof formSchema>;

export default function AiAssistantPage() {
  const [recommendations, setRecommendations] = useState<TravelRecommendationsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<AssistantFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: '',
      duration: '',
      travelStyle: '',
      locationPreferences: '',
    },
  });

  const onSubmit: SubmitHandler<AssistantFormValues> = async (data) => {
    setIsLoading(true);
    setError(null);
    setRecommendations(null);

    try {
      const result = await getPersonalizedTravelRecommendations(data);
      setRecommendations(result);
    } catch (e) {
      console.error(e);
      setError('Failed to get recommendations. The AI might be having trouble with the request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <BotMessageSquare className="mx-auto h-12 w-12 text-primary mb-2" />
          <CardTitle className="text-3xl font-bold text-primary">AI Travel Assistant</CardTitle>
          <CardDescription className="text-muted-foreground">
            Get personalized travel recommendations for your Karnataka trip based on your preferences.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Interests</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., historical sites, nature, adventure, cuisine" {...field} />
                    </FormControl>
                    <FormDescription>What do you enjoy doing on a trip?</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Budget</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your budget range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Trip Duration</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 3 days, 1 week, 10 days" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="travelStyle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Travel Style (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., backpacking, luxury, family-friendly, solo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="locationPreferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location Preferences (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Coorg, coastal areas, North Karnataka" {...field} />
                    </FormControl>
                    <FormDescription>Any specific places in Karnataka you have in mind?</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Getting Recommendations...
                  </>
                ) : (
                  'Get Recommendations'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {recommendations && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Your Personalized Recommendations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {recommendations.recommendedDestinations && recommendations.recommendedDestinations.length > 0 && (
              <div>
                <h3 className="font-semibold text-xl text-accent mb-3 flex items-center"><MapPin className="mr-2 h-5 w-5" /> Recommended Destinations</h3>
                <div className="space-y-4">
                  {recommendations.recommendedDestinations.map((dest, index) => (
                    <Card key={index} className="p-4 bg-card/60 border">
                      <CardTitle className="text-lg text-foreground mb-1">{dest.name}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground mb-2">{dest.description}</CardDescription>
                      <div className="flex flex-wrap gap-3 items-center mt-2">
                        {dest.googleMapsUrl && (
                          <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary/10">
                            <Link href={dest.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                              <LinkIcon className="mr-2 h-4 w-4" /> View on Map
                            </Link>
                          </Button>
                        )}
                        {dest.weather && (
                          <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5">
                            <ThermometerSun className="h-4 w-4 text-secondary-foreground/80" />
                            <span>{dest.weather.condition}, {dest.weather.temperature}</span>
                             {dest.weather.humidity && <span className="text-xs opacity-80">(Humidity: {dest.weather.humidity})</span>}
                          </Badge>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            
            <Separator />

            {recommendations.suggestedActivities && recommendations.suggestedActivities.length > 0 && (
              <div>
                <h3 className="font-semibold text-xl text-accent mb-3 flex items-center"><ListChecks className="mr-2 h-5 w-5" /> Suggested Activities</h3>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  {recommendations.suggestedActivities.map((activity, index) => (
                    <li key={index} className="text-muted-foreground">
                      <strong className="text-foreground">{activity.name}:</strong> {activity.description}
                      {activity.relatedDestination && <span className="text-xs text-primary ml-1"> (Near {activity.relatedDestination})</span>}
                      {activity.googleMapsUrl && (
                        <Link href={activity.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm ml-2">
                          (Map <LinkIcon className="inline h-3 w-3" />)
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Separator />
            
            {recommendations.suggestedItineraries && recommendations.suggestedItineraries.length > 0 && (
              <div>
                <h3 className="font-semibold text-xl text-accent mb-3 flex items-center"><CalendarRange className="mr-2 h-5 w-5" /> Suggested Itineraries</h3>
                <div className="space-y-3">
                {recommendations.suggestedItineraries.map((itinerary, index) => (
                  <Card key={index} className="p-3 bg-card/60 border">
                    <p className="font-semibold text-foreground">{itinerary.title}</p>
                    <p className="text-sm text-muted-foreground">{itinerary.summary}</p>
                    {itinerary.days && itinerary.days.length > 0 && (
                      <ul className="mt-1 list-disc list-inside text-xs text-muted-foreground space-y-0.5">
                        {itinerary.days.map((day, dayIdx) => (
                          <li key={dayIdx}><strong>Day {day.day}:</strong> {day.description}</li>
                        ))}
                      </ul>
                    )}
                  </Card>
                ))}
                </div>
              </div>
            )}

            {recommendations.estimatedCost && (
              <div>
                <Separator className="my-4"/>
                <h3 className="font-semibold text-lg text-accent flex items-center"><HandCoins className="mr-2 h-5 w-5" /> Estimated Cost:</h3>
                <p className="text-muted-foreground">{recommendations.estimatedCost}</p>
              </div>
            )}
            {recommendations.additionalNotes && (
              <div>
                <Separator className="my-4"/>
                <h3 className="font-semibold text-lg text-accent flex items-center"><PlaneTakeoff className="mr-2 h-5 w-5" /> Additional Notes:</h3>
                <p className="text-muted-foreground whitespace-pre-wrap">{recommendations.additionalNotes}</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
