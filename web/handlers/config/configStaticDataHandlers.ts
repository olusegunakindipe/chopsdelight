import groq from "groq";
import SanityClient from "../../client";

export class ConfigStaticDataHandlers {
  static async GetLayoutConfig() {
    const query = groq`*[_type=="site-config"]{
        ...,
        headerNavigation[]{
            title,
            landingpage->{
                menuItems[]->{
                    title,
                    "slug" : slug.current,
                    links
                },
              title,
              "slug":slug.current,
            }
          },
        caption,
        logo{
            asset{
                asset->{
                    url
                }
            }
        },
        footer[]{
          title,
          _key,
          link[]{
            title,
            externalLink
          }
        }
    
    }`;

    const result = await SanityClient.fetch(query);
    return result[0];
  }
}
