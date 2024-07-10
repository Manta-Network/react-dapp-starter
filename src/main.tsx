import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter.tsx';
import './index.css';

import { createWeb3Modal } from '@web3modal/wagmi/react';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';

import { WagmiProvider } from 'wagmi';
import { arbitrum, mainnet } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId from https://cloud.walletconnect.com
const projectId = 'YOUR_PROJECT_ID';

// 2. Create wagmiConfig
const metadata = {
	name: 'React Dapp Starter',
	description: 'React Dapp Starter Example',
	url: 'https://cedefi.manta.network',
	icons: ['https://cedefi.manta.network/favicon.ico'],
};

const chains = [mainnet, arbitrum] as const;
const config = defaultWagmiConfig({
	chains,
	projectId,
	metadata,
});

// 3. Create modal
createWeb3Modal({
	wagmiConfig: config,
	projectId,
	enableAnalytics: true, // Optional - defaults to your Cloud configuration
	enableOnramp: true, // Optional - false as default
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<AppRouter />
			</QueryClientProvider>
		</WagmiProvider>
	</React.StrictMode>
);
