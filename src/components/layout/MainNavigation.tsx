'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavLink {
  href: string;
  label: string;
}

interface MainNavigationProps {
  navLinks: NavLink[];
  className?: string;
  linkClassName?: string;
  activeLinkClassName?: string;
}

export default function MainNavigation({
  navLinks,
  className,
  linkClassName = "text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium",
  activeLinkClassName = "text-primary bg-accent/20",
}: MainNavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex items-center space-x-1 md:space-x-2", className)}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            linkClassName,
            pathname === link.href ? activeLinkClassName : ''
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
