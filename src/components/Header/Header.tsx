import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';

import MantaNetworkLogo from '@/assets/manta-network-logo.svg';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useResponsive } from '@/hooks/useResponsive';

const navigation = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Page1',
    href: '/page1',
  },
  {
    title: 'Page2',
    href: '/page2',
  },
];

const MantaLogo = () => (
  <a
    href="https://manta.network/"
    target="_blank"
    rel="noreferrer"
    className="flex items-center"
  >
    <img src={MantaNetworkLogo} alt="Manta Logo" />
  </a>
);

const MobileNav = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const location = useLocation();

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-slate-100 md:hidden dark:hover:bg-slate-800"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[280px] border-0 bg-white p-0 dark:bg-slate-900"
        showClose={false}
      >
        <SheetTitle className="flex items-center justify-between border-b border-slate-200 p-4 text-lg font-semibold text-slate-900 dark:border-slate-800 dark:text-white">
          Menu
          <SheetClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="h-5 w-5" />
            </Button>
          </SheetClose>
        </SheetTitle>
        <nav className="flex flex-col gap-1 p-4">
          {navigation.map(item => (
            <Link
              key={item.title}
              to={item.href}
              className={cn(
                'rounded-lg px-4 py-3 text-base font-medium transition-all',
                location.pathname === item.href
                  ? 'bg-primary/10 text-primary'
                  : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
              )}
              onClick={() => onOpenChange(false)}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

const DesktopNav = () => {
  const location = useLocation();

  return (
    <nav className="ml-8 hidden md:flex md:items-center md:gap-1">
      {navigation.map(item => (
        <Link
          key={item.title}
          to={item.href}
          className={cn(
            'relative px-4 py-2 text-sm font-medium transition-colors',
            location.pathname === item.href
              ? 'text-primary'
              : 'hover:text-primary dark:hover:text-primary text-slate-700 dark:text-slate-300'
          )}
        >
          {item.title}
          {location.pathname === item.href && (
            <span className="bg-primary absolute right-0 bottom-0 left-0 h-0.5" />
          )}
        </Link>
      ))}
    </nav>
  );
};

export default function Header() {
  const { isMobile } = useResponsive();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b px-6 backdrop-blur">
      <div className="container flex h-14 items-center justify-between md:justify-start">
        <MantaLogo />
        {isMobile ? (
          <MobileNav isOpen={isSheetOpen} onOpenChange={setIsSheetOpen} />
        ) : (
          <DesktopNav />
        )}
      </div>
    </header>
  );
}
