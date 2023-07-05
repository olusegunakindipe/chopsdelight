import { ILayoutConfig } from "@/interfaces/layoutInterfaces";
import { FrontPageStaticDataHandlers } from "handlers/frontpage/frontPageStaticDataHandler";
import { IFrontpage } from "handlers/frontpage/interfaces/frontpageinterfaces";
import { GetStaticProps, GetStaticPropsResult } from "next";
import Layout from "src/components/layout/Layout";
import Image from "next/image";
import Button from "@/components/button/Button";
import Container from "@/components/container/Container";

interface Props {
  frontpage: IFrontpage;
  config: ILayoutConfig;
}
export default function Index({ frontpage, config }: Props) {
  const { banner } = frontpage;
  return (
    <Layout config={config}>
      <div className="relative lg:pb-[40%] pb-[100%]">
        <Image
          src={`${banner?.image.asset.asset.url}`}
          alt="heroImage"
          fill
          className=" w-full h-full object-cover opacity-100"
        />
        <Container>
          {" "}
          <div className="absolute h-full justify-around  mx-8 flex flex-col z-1 text-white mr-24 md:mx-0">
            <p className="uppercase md:w-1/2 leading-tight text-4xl md:text-7xl">
              {banner.image.caption}
            </p>
            <Button
              type="primary"
              className="self-end md:w-fit md:px-8 px-4 w-60"
            >
              {banner.image.caption}
            </Button>
          </div>
        </Container>
      </div>
      <div>124</div>
    </Layout>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<any>> {
  const data = await FrontPageStaticDataHandlers.GetStaticProps();
  return {
    props: {
      ...data,
    },
  };
}
