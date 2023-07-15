import React from "react";
import { ILayoutConfig } from "/interfaces/layoutInterfaces";
import { ILandingPage } from "handlers/landingpage/interfaces/landingPageInterfaces";
import { LandingPageStaticDataHanlder } from "handlers/landingpage/landingPageStaticDataHandler";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import Recipe from "/blocks/recipe/Recipe";
import Product from "/blocks/product/Product";

interface Props {
  landingpage?: ILandingPage[];
  config: ILayoutConfig;
}
export default function Index({ landingpage, config }: Props) {
  const getLandingPage = () => {
    return landingpage?.reduce<React.ReactElement[]>((acc, item) => {
      if (item?.slug === "recipes") {
        acc.push(<Recipe landingpage={item} config={config} />);
      } else if (item?.slug === "products") {
        acc.push(<Product landingpage={item} config={config} />);
      }
      return acc;
    }, []);
  };
  return <>{getLandingPage()}</>;
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<any>> {
  const slug = Array.isArray(params?.slug)
    ? params?.slug[0]
    : params?.slug ?? "";
  if (!slug) {
    return {
      notFound: true,
    };
  }
  const data = await LandingPageStaticDataHanlder.GetStaticProps(slug);
  return {
    props: {
      ...data,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const data = await LandingPageStaticDataHanlder.GetStaticPaths();
  return {
    paths: [],
    fallback: "blocking",
  };
};
