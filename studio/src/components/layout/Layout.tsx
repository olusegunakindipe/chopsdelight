import { IAsset, ILayoutConfig } from "@/interfaces/layoutInterfaces";
import Head from "next/head";
import React, { PropsWithChildren } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

interface Props
  extends PropsWithChildren<{
    config: ILayoutConfig;
    logo: any;
  }> {}

function Layout({ children, config, logo }: Props) {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
      </Head>
      <Header logo={logo} layout={config} />
      <main className="relative min-h-[40vh]" id="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
