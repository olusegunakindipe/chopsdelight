import SanityClient from "@sanity/client";

export default SanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  token: process.env.SANITY_TOKEN,
});
