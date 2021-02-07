import '../styles/globals.css'
import {ChakraProvider,extendTheme} from "@chakra-ui/react";
import React from "react";
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import Router from 'next/router';
import Layout from "../component/Layout";
import Head from 'next/head'
//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#5a22dd",
    800: "#220070",
    700: "#ef0d67",
  },
}
NProgress.configure({ showSpinner: false });
const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
              name="viewport"
              content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          <title>Next.js and Formik PWA Example</title>

          <link rel="manifest" href="/manifest.json" />
          <link
              href="/icons/favicon-16x16.png"
              rel="icon"
              type="image/png"
              sizes="16x16"
          />
          <link
              href="/icons/favicon-32x32.png"
              rel="icon"
              type="image/png"
              sizes="32x32"
          />
          <link rel="apple-touch-icon" href="/apple-icon.png"></link>
          <meta name="theme-color" content="#317EFB" />
        </Head>
  <ChakraProvider theme={theme}>
    <Layout>
    <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
        </>
  )
}

export default MyApp
