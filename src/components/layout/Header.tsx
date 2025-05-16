
import Link from 'next/link';
import { Palmtree, Menu } from 'lucide-react';
import MainNavigation from './MainNavigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/map', label: 'Interactive Map' },
    { href: '/destinations', label: 'Destinations' },
    { href: '/trip-planner', label: 'Trip Planner' },
    { href: '/ai-assistant', label: 'AI Assistant' },
    { href: '/booking', label: 'Booking' },
  ];

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
          <Palmtree className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Karnataka Explorer</h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <MainNavigation navLinks={navLinks} />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-card">
              <div className="flex flex-col items-start p-6 space-y-4">
                <Link href="/" className="flex items-center gap-2 text-primary hover:text-accent transition-colors mb-4">
                  <Palmtree className="h-7 w-7" />
                  <h1 className="text-xl font-bold">Karnataka Explorer</h1>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
