import { Chain } from "@rainbow-me/rainbowkit";

export const campTestnet: Chain = {
  id: 90354,
  name: "campTestnet",
  iconUrl: "/camp.png",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH",
  },
  rpcUrls: {
    public: {
      http: ["https://rpc-campnetwork.xyz/"],
    },
    default: {
      http: ["https://rpc-campnetwork.xyz/"],
    },
  },
  blockExplorers: {
    etherscan: { name: "Camp Testnet Block Explorer", url: "https://explorerl2new-camp-network-4xje7wy105.t.conduit.xyz/" },
    default: { name: "Camp Testnet Block Explorer", url: "https://explorerl2new-camp-network-4xje7wy105.t.conduit.xyz/" },
  },
  testnet: true,
};
