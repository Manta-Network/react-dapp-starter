import MenuIcon from './assets/mobile-menu.svg?react';
import {
  ReactNode,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
} from 'react';
import './index.scss';
import { useResponsive } from '@/hooks/useResponsive';
import clsx from 'clsx';

const MenuContainer = ({ children }: { children: ReactNode }) => {
  const [open, toggleOpen] = useState(false);
  const { isMobile } = useResponsive();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Clean up the effect
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  if (isMobile) {
    if (!isValidElement(children)) {
      throw new Error('Menu is not a valid Element');
    }
    const Menu = cloneElement(children as any, {
      mode: isMobile ? 'inline' : 'horizontal',
      onSelect: (args: any) => {
        toggleOpen(false);
        (children as any)?.props?.onSelect &&
          (children as any)?.props?.onSelect(args);
      },
    });
    return (
      <>
        <MenuIcon onClick={() => toggleOpen(true)} />

        <nav className={clsx('nav-menu', { 'nav-menu-show': open })}>
          <div className="flex justify-end" onClick={() => toggleOpen(false)}>
            <MenuIcon className="mb-[9px] mr-4 mt-[73px] rotate-180 transform" />
          </div>
          {Menu}
          <div
            className="absolute inset-0 -z-[1]"
            onClick={() => toggleOpen(false)}
          ></div>
        </nav>
      </>
    );
  }
  return children;
};

export default MenuContainer;
