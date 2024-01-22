import type { AppProps } from "next/app";
import Head from "next/head";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  safeWallet,
  localWallet,
  embeddedWallet,
  trustWallet,
  rainbowWallet,
} from "@thirdweb-dev/react";

import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/global.css";

const clientAPI = process.env.THIRDWEB_API_KEY as string;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ThirdwebProvider
        activeChain={{// === Required information for connecting to the network === \\
          chainId: 168587773, // Chain ID of the network
          // Array of RPC URLs to use
          rpc: ["https://sepolia.blast.io"],
  
          // === Information for adding the network to your wallet (how it will appear for first time users) === \\
          // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
          nativeCurrency: {
            decimals: 18,
            name: "Blast Sepolia",
            symbol: "ETH",
          },
          shortName: "blastsepolia", // Display value shown in the wallet UI
          slug: "blast", // Display value shown in the wallet UI
          testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
          chain: "Blast", // Name of the network
          name: "Blast Sepolia", // Name of the network
        }}
        clientId={clientAPI}
        supportedWallets={[
          metamaskWallet(),
          coinbaseWallet(),
          walletConnect(),
          safeWallet({
            personalWallets: [
              metamaskWallet(),
              coinbaseWallet(),
              walletConnect(),
              localWallet(),
              embeddedWallet({
                recommended: true,
                auth: {
                  options: [
                    "email",
                    "google",
                    "apple",
                    "facebook",
                  ],
                },
              }),
              trustWallet(),
              rainbowWallet(),
            ],
          }),
          localWallet(),
          embeddedWallet({
            recommended: true,
            auth: {
              options: [
                "email",
                "google",
                "apple",
                "facebook",
              ],
            },
          }),
          trustWallet(),
          rainbowWallet(),
        ]}
      >
        <Head>
          <title>Goblin Miner - #1 On-chain Play-And-Earn Game on Blast Network </title>
          <meta
            name="description"
            content="A cool digital world where little goblins use special tools like Pickaxes to dig for treasures powered by the magical Blue Crystal! Each unique Goblin NFT is like a ticket to join the fun. Collect them, explore the mines, and earn awesome rewards. It's like having your own digital mining adventure with magical goblins!"
          />
          <meta property="og:image" content="/10.png" />
          <meta name="twitter:card" content="/10.png" />
          <meta name="twitter:image" content="/10.png" />

          {/* Favicon */}
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

          {/* Apple Touch icon */}
          <link rel="apple-touch-icon" sizes="192x192" href="/apple-touch-icon.png" />

          {/* Android icons */}
          <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
          <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />

          {/* Web Manifest */}
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </ThirdwebProvider>
    </ChakraProvider>
  );
}

export default MyApp;
