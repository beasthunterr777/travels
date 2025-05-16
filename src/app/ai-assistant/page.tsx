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
import { Loader2, BotMessageSquare } from 'lucide-react';

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
      setError('Failed to get recommendations. Please try again.');
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
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg text-foreground">Recommended Destinations:</h3>
              <p className="text-muted-foreground whitespace-pre-wrap">{recommendations.destinations}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-foreground">Suggested Activities:</h3>
              <p className="text-muted-foreground whitespace-pre-wrap">{recommendations.activities}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-foreground">Potential Itineraries:</h3>
              <pre className="text-muted-foreground whitespace-pre-wrap bg-muted p-3 rounded-md font-mono text-sm">{recommendations.itineraries}</pre>
            </div>
            {recommendations.estimatedCost && (
              <div>
                <h3 className="font-semibold text-lg text-foreground">Estimated Cost:</h3>
                <p className="text-muted-foreground">{recommendations.estimatedCost}</p>
              </div>
            )}
            {recommendations.additionalNotes && (
              <div>
                <h3 className="font-semibold text-lg text-foreground">Additional Notes:</h3>
                <p className="text-muted-foreground whitespace-pre-wrap">{recommendations.additionalNotes}</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
