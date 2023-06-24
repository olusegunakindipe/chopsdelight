import { createClient } from "@sanity/client";

export default createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  token: process.env.SANITY_TOKEN,
  apiVersion: "v2023-06-01",
  useCdn: true,
});
