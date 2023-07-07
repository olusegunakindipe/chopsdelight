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
  const {
    banner,
    recipe: { content },
  } = frontpage;
  console.log("recipe", content);
  return (
    <Layout config={config}>
      <div className="relative lg:pb-[36%] pb-[100%]">
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
      <Container className="">
        {content.map((item, index) => (
          <div
            key={item._key}
            className={`grid first-of-type:shadow-xl rounded-md py-4  ${
              index === 0
                ? "grid-col-1 gap-y-4 mb-4"
                : "grid-cols-2 gap-4 items-center justify-items-center pb-0"
            }`}
          >
            <Image
              src={`${item?.image.asset.asset.url}`}
              alt=""
              width={500}
              height={100}
              className={`${
                index === 0 ? "w-full" : "w-5/6 h-4/5"
              } h-full object-cover rounded-2xl`}
            />

            <p className={`py-2 px-2 text-2xl ${index === 0 && "text-center"}`}>
              {item.description}
            </p>
          </div>
        ))}
      </Container>
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
