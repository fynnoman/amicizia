import type { MetadataRoute } from "next";
import { SEO_PAGES } from "@/data/seo-pages";
import { SITE_URL } from "@/data/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return SEO_PAGES.map((p) => ({
    url: `${SITE_URL}${p.path === "/" ? "" : p.path}`,
    lastModified,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
    images:
      p.path === "/"
        ? [
            `${SITE_URL}/photos/amicizia-1.jpg`,
            `${SITE_URL}/photos/amicizia-2.jpg`,
            `${SITE_URL}/photos/amicizia-3.jpg`,
          ]
        : [`${SITE_URL}/photos/amicizia-1.jpg`],
  }));
}
