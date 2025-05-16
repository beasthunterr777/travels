import Image from 'next/image';
import Link from 'next/link';
import { bookingLinks } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Hotel, Train, Bus } from 'lucide-react';

export default function BookingPage() {
  const accommodationLinks = bookingLinks.filter(link => link.type === 'accommodation');
  const transportLinks = bookingLinks.filter(link => link.type === 'transport');

  const getIconForType = (type: string, provider?: string) => {
    if (type === 'accommodation') return <Hotel className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />;
    if (type === 'transport') {
      if (provider?.toLowerCase().includes('ksrtc') || provider?.toLowerCase().includes('bus')) return <Bus className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />;
      if (provider?.toLowerCase().includes('irctc') || provider?.toLowerCase().includes('train')) return <Train className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />;
      return <Train className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />; // Default transport icon
    }
    return null;
  };

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Book Your Karnataka Adventure</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find and book accommodations and transport options for your trip. We provide links to trusted platforms.
        </p>
      </section>

      {/* Accommodations Section */}
      <section>
        <h2 className="text-3xl font-semibold text-primary mb-6 flex items-center">
          <Hotel className="mr-3 h-8 w-8" /> Accommodations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accommodationLinks.map((link) => (
            <Card key={link.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              {link.imageUrl && (
                <CardHeader className="p-0">
                  <Image
                    src={link.imageUrl}
                    alt={link.name}
                    data-ai-hint={link.dataAiHint}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                    quality={85}
                  />
                </CardHeader>
              )}
              <CardContent className="p-6 flex-grow">
                <div className="flex items-center mb-2">
                   {getIconForType(link.type, link.provider)}
                   <CardTitle className="ml-2 text-xl text-foreground group-hover:text-primary transition-colors">{link.name}</CardTitle>
                </div>
                {link.provider && <p className="text-sm text-muted-foreground mb-1">Provider: {link.provider}</p>}
                <CardDescription className="text-foreground line-clamp-3">{link.description || 'Book your stay with ease.'}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild variant="default" className="w-full bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground">
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    Visit {link.provider || 'Site'} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Transport Section */}
      <section>
        <h2 className="text-3xl font-semibold text-primary mb-6 flex items-center">
          <Train className="mr-3 h-8 w-8" /> Transportation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transportLinks.map((link) => (
             <Card key={link.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              {link.imageUrl && (
                <CardHeader className="p-0">
                  <Image
                    src={link.imageUrl}
                    alt={link.name}
                    data-ai-hint={link.dataAiHint}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                    quality={85}
                  />
                </CardHeader>
              )}
              <CardContent className="p-6 flex-grow">
                <div className="flex items-center mb-2">
                   {getIconForType(link.type, link.provider)}
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
      </section>
       <section className="text-center mt-12 p-6 bg-card rounded-lg shadow">
        <h3 className="text-xl font-semibold text-primary mb-2">Important Note</h3>
        <p className="text-muted-foreground">
          Karnataka Explorer provides links to third-party booking platforms for your convenience. We are not responsible for bookings, availability, or services provided by these platforms. Please review their terms and conditions before making any bookings.
        </p>
      </section>
    </div>
  );
}
