import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import MantaNetworkLogo from '@/assets/manta-network-logo.svg';
import './Header.css';

function Header() {
  const { pathname } = useLocation();
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
        <Link
          to="/"
          className={classNames(
            'header-link ml-10 flex items-center gap-1 text-center',
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
          className={classNames('header-link', {
            'text-[#05d9a6]': pathname === '/profile',
            'text-[rgba(21,21,34,0.70)]': pathname !== '/profile',
          })}
        >
          Profile
        </Link>
      </div>
    </header>
  );
}

export default Header;
