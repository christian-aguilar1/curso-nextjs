import type { AppProps } from "next/app";
import Layout from "@components/Layout/Layout";

import CartProvider from "store/Cart";

import "../styles/global.scss";
import "semantic-ui-css/semantic.min.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}
