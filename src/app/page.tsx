
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { destinations } from '@/lib/data';
import { ArrowRight, Wand2, BotMessageSquare } from 'lucide-react';

export default function HomePage() {
  const featuredDestinations = destinations.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-68px)] flex flex-col items-center justify-start pt-12 text-center p-4 rounded-lg shadow-xl overflow-hidden">
        {/* The global background image from globals.css will show here */}
        {/* Overlay for text readability over the global background */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        {/* Content container, positioned above the overlay */}
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4">
            Explore the Soul of Karnataka
          </h1>
          <p className="text-xl text-gray-200 drop-shadow-md mb-8 max-w-2xl">
            Discover breathtaking landscapes, ancient heritage, vibrant culture, and unforgettable experiences.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground" suppressHydrationWarning>
            <Link href="/trip-planner">
              Plan Your Adventure <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-primary mb-8">Discover Karnataka's Gems</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDestinations.map((dest) => (
            <Card key={dest.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <Image
                  src={dest.imageUrl}
                  alt={dest.name}
                  data-ai-hint={dest.dataAiHint}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  quality={85}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-2xl text-primary mb-2">{dest.name}</CardTitle>
                <CardDescription className="text-muted-foreground line-clamp-3">{dest.shortDescription}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10" suppressHydrationWarning>
                  <Link href={`/destinations/${dest.id}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="link" className="text-lg text-primary hover:text-accent" suppressHydrationWarning>
            <Link href="/destinations">
              View All Destinations <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-card p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">Your Journey Starts Here</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Adjusted to 2 columns as Map is removed */}
          <Link href="/trip-planner" className="block p-6 bg-background rounded-lg shadow hover:shadow-xl transition-shadow text-center group">
            <Wand2 className="h-12 w-12 mx-auto text-primary mb-3 group-hover:text-accent transition-colors" />
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Trip Planner</h3>
            <p className="text-muted-foreground text-sm">Generate custom itineraries based on your interests.</p>
          </Link>
          <Link href="/ai-assistant" className="block p-6 bg-background rounded-lg shadow hover:shadow-xl transition-shadow text-center group">
            <BotMessageSquare className="h-12 w-12 mx-auto text-primary mb-3 group-hover:text-accent transition-colors" />
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">AI Travel Assistant</h3>
            <p className="text-muted-foreground text-sm">Get personalized recommendations for your journey.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
