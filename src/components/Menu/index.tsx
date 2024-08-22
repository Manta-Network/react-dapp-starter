import MenuIcon from './assets/mobile-menu.svg?react';
import { ReactNode, useState } from 'react';
import './index.scss';
import { useResponsive } from '@/hooks/useResponsive';
import clsx from 'clsx';

const Menu = ({ children }: { children: ReactNode }) => {
  const [open, toggleOpen] = useState(false);
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <>
        <MenuIcon onClick={() => toggleOpen(true)} />

        <nav
          className={clsx('nav-menu', { 'nav-menu-show': open })}
          onClick={() => toggleOpen(false)}
        >
          <div className="flex justify-end">
            <MenuIcon className="mb-[9px] mr-4 mt-[73px] rotate-180 transform" />
          </div>
          {children}
        </nav>
      </>
    );
  }
  return children;
};

export default Menu;
