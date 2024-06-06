import { appConfig } from '@/config/appConfig/index.ts';
import walletConnectConfig from '@/config/walletConnectConfig/index.ts';
import { EIP6963Connector, walletConnectProvider } from '@web3modal/wagmi';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { SWRConfig } from 'swr';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { publicProvider } from 'wagmi/providers/public';
import AppRouter from '@/AppRouter.tsx';
import '@/index.scss';
import { getFetcher } from '@/utils/request/index.ts';

const { projectId, metadata } = walletConnectConfig;
const mantaChain = appConfig.MANTA_CHAIN;

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mantaChain],
  [walletConnectProvider({ projectId }), publicProvider()]
);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({
      chains,
      options: { projectId, showQrModal: false, metadata }
    }),
    new EIP6963Connector({ chains })
  ],
  publicClient,
  webSocketPublicClient
});

createWeb3Modal({
  themeMode: 'light',
  themeVariables: {
    '--w3m-font-family': 'Tomorrow'
  },
  wagmiConfig,
  projectId,
  chains,
  defaultChain: mantaChain
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        fetcher: getFetcher
      }}
    >
      <WagmiConfig config={wagmiConfig}>
        <AppRouter />
      </WagmiConfig>
    </SWRConfig>
  </React.StrictMode>
);
