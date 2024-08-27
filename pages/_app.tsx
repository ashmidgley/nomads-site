import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/montserrat";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import type { AppProps } from "next/app";

import { AppContextProvider } from "../contexts";

import { MainView } from "../components";

import "../styles/globals.css";
import theme from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <AppContextProvider>
          <MainView>
            <Component {...pageProps} />
          </MainView>
        </AppContextProvider>
      </ChakraProvider>
      {/* Analytics */}
      <GoogleTagManager gtmId="GTM-TCR2V5HB" />
      <GoogleAnalytics gaId="G-QT2SMJ9P6V" />
    </>
  );
}
