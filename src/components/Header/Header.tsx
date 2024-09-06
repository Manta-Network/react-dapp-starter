import MantaNetworkLogo from '@/assets/manta-network-logo.svg';
import './Header.scss';
import MenuContainer from '../MenuContainer';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { ChevronDown } from 'lucide-react';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: '1',
    label: 'Navigation One',
    children: [
      { key: '11', label: 'Option 1' },
      { key: '12', label: 'Option 2' },
      { key: '13', label: 'Option 3' },
      { key: '14', label: 'Option 4' },
    ],
  },
  {
    key: '2',
    label: 'Navigation Two',
    children: [
      { key: '21', label: 'Option 1' },
      { key: '22', label: 'Option 2' },
      {
        key: '23',
        label: 'Submenu',
        children: [
          { key: '231', label: 'Option 1' },
          { key: '232', label: 'Option 2' },
          { key: '233', label: 'Option 3' },
        ],
      },
      {
        key: '24',
        label: 'Submenu 2',
        children: [
          { key: '241', label: 'Option 1' },
          { key: '242', label: 'Option 2' },
          { key: '243', label: 'Option 3' },
        ],
      },
    ],
  },
  {
    key: '3',
    label: 'Navigation Three',
    children: [
      { key: '31', label: 'Option 1' },
      { key: '32', label: 'Option 2' },
      { key: '33', label: 'Option 3' },
      { key: '34', label: 'Option 4' },
    ],
  },
];

function Header() {
  return (
    <header className="flex h-[84px] items-center justify-between border-b-[1px] bg-white px-12">
      <div className="relative flex items-center gap-8 max-md:w-full max-md:justify-between">
        <a
          href="https://manta.network/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2"
        >
          <img src={MantaNetworkLogo} alt="Manta Logo" />
        </a>
        <MenuContainer>
          <Menu items={items} expandIcon={<ChevronDown />} mode="horizontal" />
        </MenuContainer>
      </div>
    </header>
  );
}

export default Header;
