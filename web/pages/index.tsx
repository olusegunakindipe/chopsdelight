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
    pastry,
    inspiration,
    recipe: { content },
  } = frontpage;
  let [firstItem, ...restItems] = content;

  return (
    <Layout config={config}>
      <div className="relative h-96 md:h-[508px] w-full">
        <Image
          src={`${banner.image.asset.asset.url}`}
          alt="heroImage"
          fill
          className=" w-full  xl:h-3/4 object-cover opacity-100"
        />
        <Container className="absolute inset-0 justify-center items-center h-full content-around gap-12 md:gap-0 grid grid-cols-1  mx-8 md:px-16 text-white mr-24 md:mr-0 xl:w-full z-1">
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
                alt="image"
                width={500}
                height={100}
                className="h-4/5 object-cover rounded-2xl w-5/6 "
              />

              <h6 className="py-2 text-base md:text-xl">{item.description}</h6>
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
      <Container className="grid grid-cols-1 py-12 px-4">
        <h4 className="mx-auto pb-4 md:text-3xl">{pastry?.header}</h4>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
          {pastry?.content.map((data) => (
            <div key={data._key} className="py-4 md:py-8 text-center">
              <Image
                src={`${data?.image.asset.asset.url}`}
                alt=""
                width={255}
                height={150}
                className="w-4/5 rounded-3xl rotate-6 h-16 py-2 md:py-4 md:h-24 object-cover mx-auto flex"
              />
              <div className="p-4 md:py-8 text-sm md:text-base">
                {data.description}
              </div>
              <Button
                href="/"
                type="primary"
                className="text-sm md:text-base rounded-full my-4 relative pr-8"
              >
                {data.cta?.title}
                <svg
                  className="absolute top-2 right-2"
                  height="24"
                  width="24"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h256v256H0z"></path>
                  <path
                    d="M184 184H69.8L41.9 30.6a8 8 0 0 0-7.8-6.6H16"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                    className="stroke-000000"
                  ></path>
                  <circle
                    cx="80"
                    cy="204"
                    fill="none"
                    r="20"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                    className="stroke-000000"
                  ></circle>
                  <circle
                    cx="184"
                    cy="204"
                    fill="none"
                    r="20"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                    className="stroke-000000"
                  ></circle>
                  <path
                    d="M62.5 144h125.6a15.9 15.9 0 0 0 15.7-13.1L216 64H48"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                    className="stroke-000000"
                  ></path>
                </svg>
              </Button>
            </div>
          ))}
        </div>
      </Container>
      <div className="bg-[#021d48]">
        <Container className="text-white flex flex-col py-12 italic items-center">
          <h2 className="text-2xl">{inspiration?.header}</h2>
          <p className="text-sm py-4 text-center">{inspiration?.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 md:gap-x-2 md:px-2 py-4">
            {inspiration?.images?.map((item, i) => (
              <Link href="" key={i} className="">
                <Image
                  src={`${item.asset.asset.url}`}
                  alt=""
                  width={255}
                  height={150}
                  className="h-11/12 md:w-full md:h-72 object-cover px-3"
                />
              </Link>
            ))}
          </div>
          <Button type="primary" className="mt-12 pl-8 relative text-sm">
            {inspiration?.cta?.title}
            <svg
              className="absolute left-3 top-2.5 "
              height="14"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56.7 56.7"
              xmlSpace="preserve"
            >
              <path
                d="M28.2 16.7c-7 0-12.8 5.7-12.8 12.8s5.7 12.8 12.8 12.8S41 36.5 41 29.5s-5.8-12.8-12.8-12.8zm0 21c-4.5 0-8.2-3.7-8.2-8.2s3.7-8.2 8.2-8.2 8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z"
                fill="#ffffff"
                className="fill-000000"
              ></path>
              <circle
                cx="41.5"
                cy="16.4"
                r="2.9"
                fill="#ffffff"
                className="fill-000000"
              ></circle>
              <path
                d="M49 8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7 0-14.5 5.8-14.5 14.5v20.5c0 4.3 1.4 8 4.2 10.7 2.7 2.6 6.3 3.9 10.4 3.9h20.4c4.3 0 7.9-1.4 10.5-3.9 2.7-2.6 4.1-6.3 4.1-10.6V19.3c0-4.2-1.4-7.8-4-10.4zm-.4 31c0 3.1-1.1 5.6-2.9 7.3s-4.3 2.6-7.3 2.6H18c-3 0-5.5-.9-7.3-2.6C8.9 45.4 8 42.9 8 39.8V19.3c0-3 .9-5.5 2.7-7.3 1.7-1.7 4.3-2.6 7.3-2.6h20.6c3 0 5.5.9 7.3 2.7 1.7 1.8 2.7 4.3 2.7 7.2v20.6z"
                fill="#ffffff"
                className="fill-000000"
              ></path>
            </svg>
          </Button>
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
