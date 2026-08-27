import { SITE_URL } from "./lib/site";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/contact/thank-you", "/start/confirmed"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
