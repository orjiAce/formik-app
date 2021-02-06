import '../styles/globals.css'
import {ChakraProvider,extendTheme} from "@chakra-ui/react";
import React from "react";
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import Router from 'next/router';
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
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
