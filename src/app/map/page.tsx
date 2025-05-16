import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

export default function InteractiveMapPage() {
  // These could be dynamically fetched or link to actual map coordinates/regions
  const majorLocations = [
    { name: 'Bangalore', description: 'The bustling IT capital.', link: '/destinations/bangalore' }, // Assuming a destination page for Bangalore
    { name: 'Mysore', description: 'The city of Palaces.', link: '/destinations/mysore' },
    { name: 'Hampi', description: 'Ancient ruins of Vijayanagara.', link: '/destinations/hampi' },
    { name: 'Coorg', description: 'Misty hills and coffee estates.', link: '/destinations/coorg' },
    { name: 'Gokarna', description: 'Pristine beaches and temples.', link: '/destinations/gokarna' },
  ];

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary text-center">Interactive Map of Karnataka</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground mb-6">
            Visualize your journey across Karnataka. Explore regions, discover hidden gems, and plan your routes.
            <br />
            (Full interactive map feature with destination pins and travel routes coming soon!)
          </p>
          <div className="relative w-full max-w-4xl mx-auto aspect-[16/10] rounded-lg overflow-hidden border-4 border-accent shadow-inner">
            <Image
              src="https://placehold.co/1200x750.png" // Replace with an actual map image of Karnataka
              alt="Map of Karnataka"
              data-ai-hint="karnataka map"
              layout="fill"
              objectFit="contain" // or 'cover' depending on the image
              quality={85}
            />
            {/* Placeholder for map pins - In a real implementation, these would be interactive elements on the map */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-black/50 text-white rounded-md">
               Map Area - Interactive Pins Coming Soon
             </div>
          </div>
          <p className="mt-6 text-sm text-foreground">
            Future enhancements will include integration with Google Maps for real-time navigation and route planning.
            Consider using libraries like <code className="bg-muted p-1 rounded">@vis.gl/react-google-maps</code> for implementation.
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-primary">Key Regions & Cities</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">Discover some of the prominent locations in Karnataka:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {majorLocations.map(location => (
              <Link key={location.name} href={location.link} className="block p-4 bg-background rounded-lg shadow hover:shadow-md transition-shadow group">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 text-primary mr-2 group-hover:text-accent transition-colors" />
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{location.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{location.description}</p>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
