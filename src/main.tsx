import React from 'react';
import { createRoot } from 'react-dom/client';
import { createAppKit } from "@reown/appkit/react";
import { WagmiProvider } from "wagmi";
import { arbitrum, mainnet, AppKitNetwork } from "@reown/appkit/networks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

import { initResponsive } from './lib/responsive.ts';
import AppRouter from './AppRouter.tsx';
import config from './config/index.ts';
import './index.css';

initResponsive();

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId from https://cloud.reown.com
const projectId = config.WALLET_CONNECT_PROJECT_ID;

// 2. Create a metadata object - optional
const metadata = config.WALLET_CONNECT_METADATA;

// 3. Set the networks
const networks: [AppKitNetwork, ...AppKitNetwork[]] = [mainnet, arbitrum];

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
});

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
