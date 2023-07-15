import { IAsset, ILayoutConfig } from "/interfaces/layoutInterfaces";
import Head from "next/head";
import React, { PropsWithChildren } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

interface Props
  extends PropsWithChildren<{
    config: ILayoutConfig;
    landingage?: any;
  }> {}

function Layout({ children, config }: Props) {
  const { footer } = config;
  return (
    <div className="font-sans">
      <Header logo={config.logo} layout={config} />
      <main className="relative md:min-h-[40vh] z-1" id="main">
        {children}
      </main>
      <Footer footer={footer} />
    </div>
  );
}

export default Layout;
