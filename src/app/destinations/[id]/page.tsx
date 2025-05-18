import Image from 'next/image';
import Link from 'next/link';
import { destinations } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MapPin, CalendarDays, Sun, Plane, Train, Car, Info, Sparkles, Tag, Navigation, Utensils, Ticket, Clock4 } from 'lucide-react';

interface DestinationDetailPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return destinations.map((dest) => ({
    id: dest.id,
  }));
}

export default function DestinationDetailPage({ params }: DestinationDetailPageProps) {
  const destination = destinations.find((d) => d.id === params.id);

  if (!destination) {
    notFound();
  }

  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination.name + ', Karnataka')}`;

  return (
    <div className="space-y-8">
      <Card className="overflow-hidden shadow-xl">
        <div className="relative h-96 w-full">
          <Image
            src={destination.imageUrl}
            alt={destination.name}
            data-ai-hint={destination.dataAiHint}
            layout="fill"
            objectFit="cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-5xl font-extrabold text-white drop-shadow-xl">{destination.name}</h1>
            <div className="mt-2">
              {destination.category.map(cat => (
                <span key={cat} className="inline-block bg-accent text-accent-foreground text-sm font-semibold mr-2 px-3 py-1 rounded-full shadow-md">
                  <Tag className="inline-block h-4 w-4 mr-1" /> {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
        <CardContent className="p-6 md:p-8 space-y-6">
          <CardDescription className="text-lg text-foreground leading-relaxed">{destination.longDescription}</CardDescription>
          
          <Separator />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2 flex items-center"><MapPin className="mr-2 h-5 w-5" />Region</h3>
              <p className="text-muted-foreground">{destination.region}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2 flex items-center"><CalendarDays className="mr-2 h-5 w-5" />Best Time to Visit</h3>
              <p className="text-muted-foreground">{destination.bestTimeToVisit}</p>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center"><Car className="mr-2 h-5 w-5" />How to Reach</h3>
            <div className="space-y-2 text-muted-foreground">
              {destination.howToReach.road && <p><Car className="inline-block mr-2 h-4 w-4 text-primary/70" /><strong>Road:</strong> {destination.howToReach.road}</p>}
              {destination.howToReach.rail && <p><Train className="inline-block mr-2 h-4 w-4 text-primary/70" /><strong>Rail:</strong> {destination.howToReach.rail}</p>}
              {destination.howToReach.air && <p><Plane className="inline-block mr-2 h-4 w-4 text-primary/70" /><strong>Air:</strong> {destination.howToReach.air}</p>}
            </div>
          </div>
          
          <Separator />

          <Button asChild variant="default" className="w-full md:w-auto bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground">
            <a href={googleMapsSearchUrl} target="_blank" rel="noopener noreferrer">
              <Navigation className="mr-2 h-5 w-5" /> Get Directions on Google Maps
            </a>
          </Button>

          <Separator />
          
          <div>
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center"><Sun className="mr-2 h-5 w-5" />Major Attractions</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {destination.attractions.map((attraction, index) => (
                <li key={index}>{attraction}</li>
              ))}
            </ul>
          </div>

          {destination.popularFoods && destination.popularFoods.length > 0 && (
            <>
              <Separator />
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3 flex items-center"><Utensils className="mr-2 h-5 w-5" />Popular Foods</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {destination.popularFoods.map((food, index) => (
                    <li key={index}>{food}</li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {destination.entryFee && (
            <>
              <Separator />
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3 flex items-center"><Ticket className="mr-2 h-5 w-5" />Entry Fee</h3>
                <p className="text-muted-foreground">{destination.entryFee}</p>
              </div>
            </>
          )}

          {destination.timings && (
            <>
              <Separator />
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3 flex items-center"><Clock4 className="mr-2 h-5 w-5" />Timings</h3>
                <p className="text-muted-foreground">{destination.timings}</p>
              </div>
            </>
          )}

          <Separator />

          <div>
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center"><Info className="mr-2 h-5 w-5" />Traveler Tips</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {destination.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>

          {destination.mapEmbedUrl && (
            <>
              <Separator />
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3 flex items-center"><MapPin className="mr-2 h-5 w-5" />Location Map (Embed)</h3>
                <div className="aspect-video rounded-lg overflow-hidden border border-muted shadow-md">
                   <iframe
                     src={destination.mapEmbedUrl}
                     width="100%"
                     height="100%"
                     style={{ border:0 }}
                     allowFullScreen={true}
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                   ></iframe>
                </div>
              </div>
            </>
          )}

        </CardContent>
      </Card>
    </div>
  );
}
