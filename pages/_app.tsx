import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { appTheme } from "../themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={appTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
