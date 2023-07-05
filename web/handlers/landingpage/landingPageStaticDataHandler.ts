import { ConfigStaticDataHandlers } from "handlers/config/configStaticDataHandlers";
import { LandingPageQueries } from "./queries/landingPageQueries";

export class LandingPageStaticDataHanlder {
  static async GetStaticProps(slug: string): Promise<any> {
    let landingpageResult: any = null;
    let configResult: any = null;
    let landingpageStaticProps: any = { landingpage: null, config: null };

    try {
      const [getLandingPageResult, getLayoutConfigResult] = await Promise.all([
        LandingPageQueries.GetLandingpage(slug),
        ConfigStaticDataHandlers.GetLayoutConfig(),
      ]);

      landingpageResult = getLandingPageResult;
      configResult = getLayoutConfigResult;
      landingpageStaticProps.landingpage = landingpageResult;
      landingpageStaticProps.config = configResult;
      console.log("landingpageResult", landingpageResult);
    } catch (error) {
      console.log("error", error);
    }

    return landingpageStaticProps;
  }

  static async GetStaticPaths() {}
}
