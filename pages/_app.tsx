import { AppProps } from "next/app";
import Head from "next/head";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useState } from "react";
import Layout from "../components/Layout";

export default function App(props: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");

  const toggleColorScheme = (scheme?: ColorScheme) => {
    if (scheme) {
      setColorScheme(scheme);
      return;
    }

    setColorScheme((ps) => (ps === "dark" ? "light" : "dark"));
  };

  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Dynamic UI</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ColorSchemeProvider
        toggleColorScheme={toggleColorScheme}
        colorScheme={colorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: colorScheme,
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
