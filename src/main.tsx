import walletConnectConfig from '@/config/walletConnectConfig/index.ts';
// import { EIP6963Connector, walletConnectProvider } from '@web3modal/wagmi';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';

import { WagmiProvider } from 'wagmi';
import { arbitrum, mainnet } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';

import AppRouter from '@/AppRouter.tsx';
import '@/index.scss';
import '@/antd.css';

import { ConfigProvider, notification } from 'antd';
import { theme } from './constants/antdTheme';
import { appConfig } from './config/appConfig';

const { projectId, metadata } = walletConnectConfig;
const mantaChain = appConfig.MANTA_CHAIN;

const queryClient = new QueryClient();
console.log('mantaChain', mantaChain);
const chains = [mainnet, arbitrum, mantaChain] as const;
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata
});

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
});

notification.config({
  closeIcon: false,
  prefixCls: 'custom'
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider theme={theme}>
          <AppRouter />
        </ConfigProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
