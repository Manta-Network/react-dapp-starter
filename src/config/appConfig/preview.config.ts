export default {
  MANTA_CHAIN: {
    id: 3441006,
    name: 'Manta Pacific Sepolia Testnet',
    network: 'manta pacific sepolia testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'Ethereum',
      symbol: 'ETH'
    },
    rpcUrls: {
      public: {
        http: ['https://manta-sepolia.rpc.caldera.xyz/http'],
        webSocket: ['wss://pacific-rpc.sepolia-testnet.manta.network/ws']
      },
      default: {
        http: ['https://manta-sepolia.rpc.caldera.xyz/http'],
        webSocket: ['wss://pacific-rpc.sepolia-testnet.manta.network/ws']
      }
    },
    blockExplorers: {
      etherscan: {
        name: 'Manta Pacific Explorer',
        url: 'https://pacific-explorer.sepolia-testnet.manta.network'
      },
      default: {
        name: 'Manta Pacific Explorer',
        url: 'https://pacific-explorer.sepolia-testnet.manta.network'
      }
    },
    iconUrl: 'https://app.manta.network/favicon.ico'
  },
  CONTRACTS: {
    XCM: '0x677ff73D25E4AcEb535d9994366B1B1f08227295'
  }
};
