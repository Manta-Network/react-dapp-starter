import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu } from 'lucide-react';

import MantaNetworkLogo from '@/assets/manta-network-logo.svg';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
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
    title: 'Profile',
    children: [
      { title: 'History', href: '/history' },
      { title: 'Settings', href: '/setting' },
    ],
  },
];

const ListItem = ({
  title,
  href,
  active,
}: {
  title: string;
  href: string;
  active?: boolean;
}) => (
  <Link
    to={href}
    className={cn(
      'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block rounded-md p-3 leading-none no-underline transition-colors outline-none select-none',
      active && 'bg-accent text-accent-foreground'
    )}
  >
    <div className="text-sm leading-none font-medium">{title}</div>
  </Link>
);

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
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full">
        <SheetTitle className="hidden">menu</SheetTitle>
        <nav className="mt-4 flex flex-col space-y-4">
          {navigation.map(item => (
            <div key={item.title} className="space-y-3">
              {item.href ? (
                <Link
                  to={item.href}
                  className={cn(
                    'text-lg font-medium',
                    location.pathname === item.href && 'text-primary'
                  )}
                  onClick={() => onOpenChange(false)}
                >
                  {item.title}
                </Link>
              ) : (
                <div className="text-lg font-medium">{item.title}</div>
              )}
              {item.children && (
                <div className="space-y-2 pl-4">
                  {item.children.map(child => (
                    <Link
                      key={child.title}
                      to={child.href}
                      className={cn(
                        'text-muted-foreground hover:text-primary block',
                        location.pathname === child.href && 'text-primary'
                      )}
                      onClick={() => onOpenChange(false)}
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

const DesktopNav = () => {
  const location = useLocation();

  return (
    <NavigationMenu className="ml-6">
      <NavigationMenuList>
        {navigation.map(item => (
          <NavigationMenuItem key={item.title}>
            {item.children ? (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4">
                    {item.children.map(child => (
                      <ListItem
                        key={child.title}
                        title={child.title}
                        href={child.href}
                        active={location.pathname === child.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link
                to={item.href}
                className={cn(
                  navigationMenuTriggerStyle(),
                  location.pathname === item.href && 'text-primary'
                )}
              >
                {item.title}
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default function Header() {
  const { isMobile } = useResponsive();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b px-6 backdrop-blur">
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
