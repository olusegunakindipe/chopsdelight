import SanityClient from "../../../client";
import groq from "groq";
export class FrontPageQueries {
  static contentBlock = {
    image: {
      alt: "alt",
      caption: "caption",
      asset: {
        asset: {
          url: "url",
        },
      },
    },
    description: "description",
    cta: {
      title: "title",
      externalLink: "externalLink",
    },
  };
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
          },
          "pastry": content[_type == "frontPagePastrySheet"][0]{
            header,
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
