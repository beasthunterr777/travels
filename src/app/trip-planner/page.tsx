'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { generateItineraryFromDestinations, type GenerateItineraryInput, type GenerateItineraryOutput } from '@/ai/flows/travel-itinerary-generator';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Wand2 } from 'lucide-react';

const formSchema = z.object({
  destinations: z.string().min(3, 'Please enter at least one destination.'),
  duration: z.string().min(1, 'Please enter trip duration (e.g., 3 days).'),
  interests: z.string().min(3, 'Please enter your interests (e.g., history, nature).'),
});

type TripPlannerFormValues = z.infer<typeof formSchema>;

export default function TripPlannerPage() {
  const [itinerary, setItinerary] = useState<GenerateItineraryOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<TripPlannerFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destinations: '',
      duration: '',
      interests: '',
    },
  });

  const onSubmit: SubmitHandler<TripPlannerFormValues> = async (data) => {
    setIsLoading(true);
    setError(null);
    setItinerary(null);

    try {
      const result = await generateItineraryFromDestinations(data);
      setItinerary(result);
    } catch (e) {
      console.error(e);
      setError('Failed to generate itinerary. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <Wand2 className="mx-auto h-12 w-12 text-primary mb-2" />
          <CardTitle className="text-3xl font-bold text-primary">AI Trip Planner</CardTitle>
          <CardDescription className="text-muted-foreground">
            Let our AI craft the perfect Karnataka itinerary for you. Just enter your preferences below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="destinations"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Destinations (comma-separated)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Mysore, Coorg, Hampi" {...field} />
                    </FormControl>
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
                      <Input placeholder="e.g., 5 days, 1 week" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Interests (comma-separated)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., historical sites, nature, adventure, food" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate Itinerary'
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

      {itinerary && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Your Custom Itinerary</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="whitespace-pre-wrap bg-muted p-4 rounded-md text-sm text-foreground font-mono">
              {itinerary.itinerary}
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
