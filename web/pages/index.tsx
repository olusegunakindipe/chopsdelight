import { ILayoutConfig } from "@/interfaces/layoutInterfaces";
import { FrontPageStaticDataHandlers } from "handlers/frontpage/frontPageStaticDataHandler";
import { IFrontpage } from "handlers/frontpage/interfaces/frontpageinterfaces";
import { GetStaticProps, GetStaticPropsResult } from "next";
import Layout from "src/components/layout/Layout";

interface Props {
  frontpage: IFrontpage;
  config: ILayoutConfig;
}
export default function Index({ frontpage, config }: Props) {
  const { logo } = config;
  return <Layout logo={logo} config={config}></Layout>;
}

export async function getStaticProps(): Promise<GetStaticPropsResult<any>> {
  const data = await FrontPageStaticDataHandlers.GetStaticProps();
  return {
    props: {
      ...data,
    },
  };
}
