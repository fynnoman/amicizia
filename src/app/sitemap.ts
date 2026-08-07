import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/business";

// All indexable routes on the site. Priorities reflect the intended traffic
// tier for the "Pizza Saarlouis" strategy — the topical landing pages that
// target the primary keyword sit at 0.9, secondary keyword pages at 0.8,
// utility pages at 0.7.
const routes: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "/",                                    priority: 1.0, changeFrequency: "weekly" },
  { path: "/pizza-saarlouis",                     priority: 0.9, changeFrequency: "weekly" },
  { path: "/steinofen-pizza-saarlouis",           priority: 0.9, changeFrequency: "weekly" },
  { path: "/pizzeria-saarlouis",                  priority: 0.9, changeFrequency: "weekly" },
  { path: "/italiener-saarlouis",                 priority: 0.9, changeFrequency: "weekly" },
  { path: "/beste-pizza-saarlouis",               priority: 0.8, changeFrequency: "weekly" },
  { path: "/pizza-bestellen-saarlouis",           priority: 0.8, changeFrequency: "weekly" },
  { path: "/italienisches-restaurant-saarlouis",  priority: 0.8, changeFrequency: "weekly" },
  { path: "/trattoria-saarlouis",                 priority: 0.7, changeFrequency: "monthly" },
  { path: "/italienisch-essen-saarlouis",         priority: 0.7, changeFrequency: "monthly" },
  { path: "/speisekarte",                         priority: 0.9, changeFrequency: "weekly" },
  { path: "/kontakt",                             priority: 0.8, changeFrequency: "monthly" },
  { path: "/oeffnungszeiten",                     priority: 0.8, changeFrequency: "monthly" },
  { path: "/faq",                                 priority: 0.7, changeFrequency: "monthly" },
  { path: "/ueber-uns",                           priority: 0.6, changeFrequency: "monthly" },
  { path: "/reservierung",                        priority: 0.6, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "" : r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
    ...(r.path === "/" && {
      images: [
        `${SITE_URL}/photos/amicizia-1.jpg`,
        `${SITE_URL}/photos/amicizia-2.jpg`,
        `${SITE_URL}/photos/amicizia-3.jpg`,
      ],
    }),
  }));
}
