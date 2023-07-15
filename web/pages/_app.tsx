import React, { ComponentType } from "react";
import "assets/styles/app.scss";
interface Props {
  Component: ComponentType;
  pageProps: any;
}

function App({ Component, pageProps }: Props) {
  return <Component {...pageProps} />;
}

export default App;
