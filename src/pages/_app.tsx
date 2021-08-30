import "@/styles/globals.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/styles/themes/globalStyle";
import themes from "@/styles/themes";
import { DefaultSeo } from "next-seo";
import defaultSeo from "@/config/default-seo";
import Navbar from "@/components/Navbar";
import Main from "../containers/Main";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={themes.light}>
      <DefaultSeo {...defaultSeo} />
      <GlobalStyles />
      <Navbar />
      <Main>
        <Component {...pageProps} />
      </Main>
    </ThemeProvider>
  );
}

export default MyApp;
