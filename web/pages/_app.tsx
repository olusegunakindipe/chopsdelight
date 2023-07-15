import React, { ComponentType } from "react";
import "assets/styles/app.scss";
import Head from "next/head";
interface Props {
  Component: ComponentType;
  pageProps: any;
}

function App({ Component, pageProps }: Props) {
  <Head>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta
      name="viewport"
      content="initial-scale=1.0, width=device-width, viewport-fit=cover"
    />
    {/* Add meta tags, external stylesheets, and other customizations */}
  </Head>;
  return <Component {...pageProps} />;
}

export default App;
