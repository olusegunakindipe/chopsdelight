import Layout from "src/components/layout/Layout";
import { ILayoutConfig } from "/interfaces/layoutInterfaces";
import { ILandingPage } from "handlers/landingpage/interfaces/landingPageInterfaces";
import React from "react";
interface Props {
  landingpage?: ILandingPage;
  config: ILayoutConfig;
}
function Recipe({ landingpage, config }: Props) {
  return (
    <Layout config={config}>
      <div className="bg-black">123</div>
    </Layout>
  );
}

export default Recipe;
