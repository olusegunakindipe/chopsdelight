import SanityClient from "../../../client";
import groq from "groq";
export class FrontPageQueries {
  static GetFrontpage() {
    const query = groq`*[_type == "frontpage"][0]{
        title,
          "banner": content[_type == "landingPageBanner"][0]{
            image{
              ...,
              alt,
              caption,
              asset{
                asset->{
                  url
                },
              }
            },
            _type,
          }
         
        }`;
    return SanityClient.fetch(query);
  }
}
