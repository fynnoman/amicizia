import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${SITE_URL}/photos/amicizia-1.jpg`,
        `${SITE_URL}/photos/amicizia-2.jpg`,
        `${SITE_URL}/photos/amicizia-3.jpg`,
      ],
    },
  ];
}
