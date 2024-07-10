import { Link, useLocation } from 'react-router-dom';
import MantaNetworkLogo from '@/assets/manta-network-logo.svg';
import classNames from 'classnames';
import './Header.css';

function Header() {
	const { pathname } = useLocation();
	return (
		<header className="flex justify-between items-center h-[84px] px-12 bg-white border-b-[1px]">
			<div className="flex items-center gap-8 relative">
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
						'header-link flex items-center gap-1 text-center ml-10',
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
