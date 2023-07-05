import SanityClient from "../../../client";
import groq from "groq";

export class LandingPageQueries {
  static GetLandingpage(slug: string) {
    const query = groq`*[_type=="landingpage" && slug.current=="${slug}"]{
        _type,
         title,
        "slug" : slug.current,
        menuItems[]->{
          _type,
          _id,
          title,
          "slug": slug.current,
          links[]{
            title,
            externalLink,
            _key
          }  
        }
    }`;
    return SanityClient.fetch(query);
  }
}
