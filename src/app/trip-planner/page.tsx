
'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { generateItineraryFromDestinations, type GenerateItineraryInput, type GenerateItineraryOutput } from '@/ai/flows/travel-itinerary-generator';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Wand2, MapPin, LinkIcon, ThermometerSun, CalendarDays, MountainSnow, Info, CarFront } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

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
      setError('Failed to generate itinerary. Please try again. The AI might be having trouble with the request.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="space-y-8 p-4 rounded-lg"
      style={{
        backgroundImage: "url('https://boujeelife.in/cdn/shop/files/IMG_1517_1.jpg?v=1697371912&width=1946')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', // Optional: for a fixed background effect
        minHeight: 'calc(100vh - var(--header-height, 64px) - var(--footer-height, 64px))', // Adjust based on your header/footer height
      }}
    >
      <Card className="shadow-lg border border-primary/30 bg-card/80 backdrop-blur-sm"> {/* Added transparency and blur to card for better readability */}
        <CardHeader className="text-center">
          <Wand2 className="mx-auto h-12 w-12 text-primary mb-2" />
          <CardTitle className="text-3xl font-bold text-primary">Trip Planner</CardTitle>
          <CardDescription className="text-muted-foreground">
            Let us craft the perfect Karnataka itinerary for you. Just enter your preferences below.
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
                    <FormLabel className="text-foreground/90">Destinations in Karnataka</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Mysore, Coorg, Hampi" {...field} suppressHydrationWarning />
                    </FormControl>
                    <FormDescription className="text-muted-foreground/80">
                      Enter city or place names. Separate multiple destinations with a comma.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/90">Trip Duration</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 3 days, 1 week, 10 days" {...field} suppressHydrationWarning />
                    </FormControl>
                    <FormDescription className="text-muted-foreground/80">
                       Specify how long your trip will be (e.g., "3 days", "1 week", "10 days").
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/90">Your Interests</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., historical sites, nature, adventure, food" {...field} suppressHydrationWarning />
                    </FormControl>
                    <FormDescription className="text-muted-foreground/80">
                      List your travel interests like 'temples, beaches, hiking'. Comma-separated.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading} suppressHydrationWarning>
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
        <Alert variant="destructive" className="bg-destructive/80 backdrop-blur-sm text-destructive-foreground">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {itinerary && itinerary.dailyPlans && (
        <Card className="shadow-lg border border-primary/30 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">{itinerary.overallTitle || "Your Custom Itinerary"}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {itinerary.dailyPlans.map((plan, planIndex) => (
              <Card key={planIndex} className="bg-card/70 p-4 rounded-lg shadow">
                <CardHeader className="p-2">
                  <CardTitle className="text-xl text-accent flex items-center">
                    <CalendarDays className="mr-2 h-5 w-5" /> Day {plan.day}: {plan.title}
                  </CardTitle>
                  {plan.summary && <CardDescription className="text-sm text-muted-foreground pt-1">{plan.summary}</CardDescription>}
                </CardHeader>
                <CardContent className="p-2 space-y-3">
                  {plan.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className="p-3 bg-background/80 rounded-md shadow-sm border border-border">
                      <h4 className="font-semibold text-foreground flex items-center">
                        <MountainSnow className="mr-2 h-5 w-5 text-primary/80" /> {activity.name}
                      </h4>
                      {activity.description && <p className="text-sm text-muted-foreground mt-1 mb-2">{activity.description}</p>}
                      <div className="flex flex-wrap gap-3 items-center mt-2">
                        {activity.googleMapsUrl && (
                          <Button variant="outline" size="sm" asChild className="border-accent text-accent hover:bg-accent/10">
                            <Link href={activity.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                              <LinkIcon className="mr-2 h-4 w-4" /> View on Map
                            </Link>
                          </Button>
                        )}
                        {activity.weather && (
                           <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5">
                             <ThermometerSun className="h-4 w-4 text-secondary-foreground/80" />
                             <span>{activity.weather.condition}, {activity.weather.temperature}</span>
                             {activity.weather.humidity && <span className="text-xs opacity-80">(Humidity: {activity.weather.humidity})</span>}
                           </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                  {plan.transportationNotes && (
                    <div className="mt-4 p-3 bg-background/70 rounded-md border border-border/70">
                      <h5 className="font-semibold text-foreground flex items-center mb-1">
                        <CarFront className="mr-2 h-5 w-5 text-primary/80" /> Transportation Notes:
                      </h5>
                      <p className="text-sm text-muted-foreground">{plan.transportationNotes}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      )}
       {itinerary && !itinerary.dailyPlans && ( 
        <Card className="shadow-lg border border-primary/30 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Your Custom Itinerary</CardTitle>
          </CardHeader>
          <CardContent>
            {/* @ts-ignore */}
            <pre className="whitespace-pre-wrap bg-muted p-4 rounded-md text-sm text-foreground font-mono">{itinerary.itinerary || "No itinerary details available."}</pre>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
