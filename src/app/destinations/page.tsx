import Link from 'next/link';
import Image from 'next/image';
import { destinations } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Tag } from 'lucide-react';

export default function DestinationsPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Explore Karnataka's Destinations</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          From ancient ruins to serene beaches and lush hill stations, Karnataka offers a diverse range of experiences for every traveler.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <Card key={dest.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0 relative">
                <Image
                  src={dest.imageUrl}
                  alt={dest.name}
                  data-ai-hint={dest.dataAiHint}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                  quality={85}
                />
                <div className="absolute bottom-0 left-0 bg-black/50 p-2">
                  {dest.category.map(cat => (
                    <span key={cat} className="inline-block bg-accent text-accent-foreground text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                       {cat}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="text-2xl text-primary mb-2">{dest.name}</CardTitle>
                <p className="text-sm text-muted-foreground mb-1"><strong>Region:</strong> {dest.region}</p>
                <CardDescription className="text-foreground line-clamp-4">{dest.shortDescription}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  <Link href={`/destinations/${dest.id}`}>
                    Discover {dest.name} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
