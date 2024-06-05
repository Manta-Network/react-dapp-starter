import { EIP6963Connector, walletConnectProvider } from '@web3modal/wagmi';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { publicProvider } from 'wagmi/providers/public';
import AppRouter from './AppRouter.tsx';
import { appConfig } from '@/config/appConfig/index.ts';
import walletConnectConfig from '@/config/walletConnectConfig/index.ts';
import './index.scss';

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
    <WagmiConfig config={wagmiConfig}>
      <AppRouter />
    </WagmiConfig>
  </React.StrictMode>
);
