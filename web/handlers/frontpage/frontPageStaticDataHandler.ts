import { ConfigStaticDataHandlers } from "handlers/config/configStaticDataHandlers";
import { FrontPageQueries } from "./queries/frontPageQueries";

export class FrontPageStaticDataHandlers {
  static async GetStaticProps(): Promise<any> {
    let frontpageResult: any = null;
    let configResult: any = null;
    let frontPageStaticProps: any = { frontpage: null, config: null };

    try {
      const [getSanityResult, getLayoutConfigResult] = await Promise.all([
        FrontPageQueries.GetFrontpage(),
        ConfigStaticDataHandlers.GetLayoutConfig(),
      ]);
      frontpageResult = getSanityResult;
      configResult = getLayoutConfigResult;
      frontPageStaticProps.frontpage = frontpageResult;
      frontPageStaticProps.config = configResult;
    } catch (err) {
      console.log("err", err);
    }
    console.log("aws", frontPageStaticProps);
    return frontPageStaticProps;
  }
}
