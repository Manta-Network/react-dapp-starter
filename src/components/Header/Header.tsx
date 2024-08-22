import MantaNetworkLogo from '@/assets/manta-network-logo.svg';
import './Header.scss';
import Menu from '../Menu';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export const MenuList = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex gap-10 max-md:flex-col max-md:px-10">
      <Link
        to="/"
        className={clsx(
          'header-link flex items-center gap-1 text-center md:ml-10',
          {
            'text-[#05d9a6]': pathname === '/',
            'text-[rgba(21,21,34,0.70)]': pathname !== '/',
          }
        )}
      >
        Home
      </Link>
      <Link
        to="/profile"
        className={clsx('header-link', {
          'text-[#05d9a6]': pathname === '/profile',
          'text-[rgba(21,21,34,0.70)] max-md:text-white':
            pathname !== '/profile',
        })}
      >
        Profile
      </Link>
    </div>
  );
};

function Header() {
  return (
    <header className="flex h-[84px] items-center justify-between border-b-[1px] bg-white px-12">
      <div className="relative flex items-center gap-8">
        <a
          href="https://manta.network/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2"
        >
          <img src={MantaNetworkLogo} alt="Manta Logo" />
        </a>
        <Menu>
          <MenuList />
        </Menu>
      </div>
    </header>
  );
}

export default Header;
