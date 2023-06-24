import SanityClient from "../../../client";
import groq from "groq";
export class FrontPageQueries {
  static GetFrontpage() {
    const query = groq`*[_type=="frontpage"]{
        ..., 
        content[]{
            image{
                asset{
                    asset->{
                        url
                    }
                }
            }
        }
    }`;
    return SanityClient.fetch(query);
  }
}
