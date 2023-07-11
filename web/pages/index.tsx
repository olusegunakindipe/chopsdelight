import { ILayoutConfig } from "@/interfaces/layoutInterfaces";
import { FrontPageStaticDataHandlers } from "handlers/frontpage/frontPageStaticDataHandler";
import { IFrontpage } from "handlers/frontpage/interfaces/frontpageinterfaces";
import { GetStaticProps, GetStaticPropsResult } from "next";
import Layout from "src/components/layout/Layout";
import Image from "next/image";
import Button from "@/components/button/Button";
import Container from "@/components/container/Container";
import Link from "next/link";

interface Props {
  frontpage: IFrontpage;
  config: ILayoutConfig;
}
export default function Index({ frontpage, config }: Props) {
  const {
    banner,
    occasion,
    recipe: { content },
  } = frontpage;
  let [firstItem, ...restItems] = content;

  return (
    <Layout config={config}>
      <div className="relative h-96 md:h-[508px] w-full">
        <Image
          src={`${banner?.image.asset.asset.url}`}
          alt="heroImage"
          fill
          className=" w-full  xl:h-3/4 object-cover opacity-100"
        />
        <Container className="absolute inset-0  justify-center items-center h-full content-around gap-12 md:gap-0 grid grid-cols-1  mx-8 md:px-16 text-white mr-24 md:mr-0 xl:w-full z-1">
          <p className="uppercase md:-mt-8 md:w-1/2 leading-tight text-4xl md:text-6xl">
            {banner.image.caption}
          </p>
          <div className="flex md:justify-end md:w-full">
            <Button
              type="primary"
              className="flex md:!w-fit md:px-8 px-4  rounded-full"
            >
              {banner.image.caption}
            </Button>
          </div>
        </Container>
      </div>
      <Container className="md:grid md:grid-cols-2 md:gap-4 xl:gap-8 md:mx-12 md:mb-12 mt-0">
        {[firstItem].map((item) => (
          <Link
            href=""
            key={item._key}
            className="md:-mt-20 z-50 grid shadow-2xl rounded-md py-4 grid-col-1 gap-y-4 mb-4"
          >
            <Image
              src={`${item?.image.asset.asset.url}`}
              alt=""
              width={600}
              height={100}
              className="w-full h-full object-cover"
            />

            <h6 className="py-2 px-4 text-2xl text-center">
              {item.description}
            </h6>
          </Link>
        ))}
        <div className="md:flex md:flex-col md:h-full ">
          {restItems.map((item) => (
            <Link
              href=""
              key={item._key}
              className={`grid rounded-md py-4 grid-cols-2  items-center justify-items-center pb-0`}
            >
              <Image
                src={`${item?.image.asset.asset.url}`}
                alt=""
                width={500}
                height={100}
                className="h-4/5 object-cover rounded-2xl w-5/6 "
              />

              <h6 className="py-2 text-2xl">{item.description}</h6>
            </Link>
          ))}
        </div>
      </Container>
      <div className="bg-gray-100 mt-12">
        <Container className="py-4 gap-x-8 md:py-8">
          {occasion?.content.map((item, index) => (
            <div
              className={`${
                index % 2 == 1 && "md:flex md:flex-row-reverse"
              }  gap-4 md:gap-0 flex-col md:flex-row flex mx-auto md:h-96`}
              key={item._key}
            >
              <Image
                src={`${item.image.asset.asset.url}`}
                alt="image"
                fill
                className="!static h-full object-cover md:!w-1/2"
              />
              <div className="text-center  flex flex-col justify-center items-center py-8 md:py-12 md:!w-1/2">
                <h4 className="text-2xl my-4 px-14">{item.header}</h4>
                <p className="my-4 md:my-6 px-14 md:px-8 md:text-lg">
                  {item.description}
                </p>
                <div className="py-4">
                  <Button
                    type="primary"
                    className="p-4 my-8"
                    href={`${item.cta?.externalLink}`}
                  >
                    {item.cta?.title} {">"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </div>
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
