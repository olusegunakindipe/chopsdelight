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
        },
        "recipe": content[_type == "frontPageTastyRecipe"][0]{
        content[]{
          image{
          alt,
          caption,
          asset{
            asset->{
              url
            },
          }
          },
        description
        },
        },
        "occasion": content[_type == "frontPageOccasionalRecipe"][0]{
          content[]{
            image{
            alt,
            caption,
            asset{
              asset->{
                url
              },
            }
            },
            header,
            description,
            cta{
              title, externalLink
            }
        
          }
          }
      }
      `;
    return SanityClient.fetch(query);
  }
}
