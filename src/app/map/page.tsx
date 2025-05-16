
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function InteractiveMapPage() {
  // These locations will have pins on the map image.
  // lat/lng are approximate top/left percentages for positioning on the static map image.
  const majorLocationsWithPins = [
    { name: 'Bangalore', description: 'The bustling IT capital.', link: '/destinations/bangalore', lat: '75%', lng: '70%' },
    { name: 'Mysore', description: 'The city of Palaces.', link: '/destinations/mysore', lat: '85%', lng: '60%' },
    { name: 'Hampi', description: 'Ancient ruins of Vijayanagara.', link: '/destinations/hampi', lat: '30%', lng: '55%' },
    { name: 'Coorg', description: 'Misty hills and coffee estates.', link: '/destinations/coorg', lat: '80%', lng: '35%' },
    { name: 'Gokarna', description: 'Pristine beaches and temples.', link: '/destinations/gokarna', lat: '25%', lng: '15%' },
  ];

  const majorLocationsForList = [
    { name: 'Bangalore', description: 'The bustling IT capital.', link: '/destinations/bangalore' }, 
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
            (Full interactive map feature with live data and travel routes coming soon!)
          </p>
          <TooltipProvider>
            <div className="relative w-full max-w-4xl mx-auto aspect-[16/10] rounded-lg overflow-hidden border-4 border-accent shadow-inner">
              <Image
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiy6_z5IwR71UL8nV6H435bjTyr0CELJX-E_GDTTPYAEub_IB6B3ltpZ00VSJSnvy5bRF6MbSX-RjwnD4m6YBAwdG3dtnizrfVUgJyXgqIcVP08wszMdPfWRmQvWD0OX8qbGT0vxkeuLK5D/s1600/karnataka+ecotourism+web.jpg"
                alt="Map of Karnataka"
                data-ai-hint="karnataka map"
                layout="fill"
                objectFit="contain"
                quality={85}
                priority
              />
              {majorLocationsWithPins.map((location) => (
                <Tooltip key={location.name}>
                  <TooltipTrigger asChild>
                    <Link
                      href={location.link}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 hover:scale-110 transition-transform"
                      style={{ top: location.lat, left: location.lng }}
                      aria-label={`Go to ${location.name} page`}
                    >
                      <MapPin className="h-8 w-8 text-primary fill-primary/30 stroke-primary-foreground" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{location.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
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
            {majorLocationsForList.map(location => (
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
