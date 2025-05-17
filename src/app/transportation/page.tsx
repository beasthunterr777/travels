
import Image from 'next/image';
import { bookingLinks } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Train, Bus, Plane } from 'lucide-react';

export default function TransportationPage() {
  const transportLinks = bookingLinks.filter(link => link.type === 'transport');

  const getIconForProvider = (provider?: string) => {
    if (provider?.toLowerCase().includes('ksrtc') || provider?.toLowerCase().includes('bus')) return <Bus className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />;
    if (provider?.toLowerCase().includes('irctc') || provider?.toLowerCase().includes('train')) return <Train className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />;
    if (provider?.toLowerCase().includes('flight') || provider?.toLowerCase().includes('air')) return <Plane className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />;
    return <Train className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />; // Default icon
  };

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Transportation in Karnataka</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find various transportation options to help you travel across Karnataka. Book your tickets through these trusted platforms.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-primary mb-6 flex items-center">
          <Train className="mr-3 h-8 w-8" /> Travel Options
        </h2>
        {transportLinks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transportLinks.map((link) => (
              <Card key={link.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                {link.imageUrl && (
                  <CardHeader className="p-0">
                    <Image
                      src={link.imageUrl}
                      alt={link.name}
                      data-ai-hint={link.dataAiHint || 'transport service'}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                      quality={85}
                    />
                  </CardHeader>
                )}
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center mb-2">
                    {getIconForProvider(link.provider)}
                    <CardTitle className="ml-2 text-xl text-foreground group-hover:text-primary transition-colors">{link.name}</CardTitle>
                  </div>
                  {link.provider && <p className="text-sm text-muted-foreground mb-1">Provider: {link.provider}</p>}
                  <CardDescription className="text-foreground line-clamp-3">{link.description || 'Book your travel tickets.'}</CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="default" className="w-full bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground">
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      Book via {link.provider || 'Site'} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-center">No transportation links available at the moment. Please check back later.</p>
        )}
      </section>

      <section className="text-center mt-12 p-6 bg-card rounded-lg shadow">
        <h3 className="text-xl font-semibold text-primary mb-2">Travel Tip</h3>
        <p className="text-muted-foreground">
          Always check the latest schedules and availability directly on the provider's website before making any travel plans.
        </p>
      </section>
    </div>
  );
}
