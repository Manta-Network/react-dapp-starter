export default {
  MANTA_PACIFIC_CHAIN: {
    id: 169,
    name: "Manta Pacific",
    network: "manta pacific",
    nativeCurrency: {
      decimals: 18,
      name: "Ethereum",
      symbol: "ETH",
    },
    rpcUrls: {
      public: {
        http: ["https://pacific-rpc.manta.network/http"],
        webSocket: ["wss://pacific-rpc.manta.network/ws"],
      },
      default: {
        http: ["https://pacific-rpc.manta.network/http"],
        webSocket: ["wss://pacific-rpc.manta.network/ws"],
      },
    },
    blockExplorers: {
      etherscan: {
        name: "Manta Pacific Explorer",
        url: "https://pacific-rpc.manta.network",
      },
      default: {
        name: "Manta Pacific Explorer",
        url: "https://pacific-rpc.manta.network",
      },
    },
    iconUrl: "https://app.manta.network/favicon.ico",
  },
  CONTRACTS: {
    XCM: '0x677ff73D25E4AcEb535d9994366B1B1f08227295',
  }
};
