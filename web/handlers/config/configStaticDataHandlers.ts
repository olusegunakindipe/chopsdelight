import groq from "groq";
import SanityClient from "../../client";

export class ConfigStaticDataHandlers {
  static async GetLayoutConfig() {
    const query = groq`*[_type=="site-config"]{
        ...,
        caption,
        logo{
            asset{
                asset->{
                    url
                }
            }
        }
    
    }`;

    const result = await SanityClient.fetch(query);
    return result[0];
  }
}
