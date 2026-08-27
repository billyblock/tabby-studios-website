import { SITE_URL } from "./lib/site";

export default function sitemap() {
  const routes = ["", "/about", "/pricing", "/faq", "/contact", "/start", "/privacy", "/terms"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));
}
