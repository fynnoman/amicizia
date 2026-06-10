import type { Metadata } from "next";
import { SEO_PAGES, type SeoPage } from "@/data/seo-pages";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/data/business";

/**
 * Build a Next.js Metadata object from a SeoPage entry. Centralises title,
 * description, canonical, OG, Twitter, and robots so every page is consistent.
 */
export function buildMetadata(path: string): Metadata {
  const page: SeoPage | undefined = SEO_PAGES.find((p) => p.path === path);
  if (!page) {
    throw new Error(`[seo] No SEO_PAGES entry for ${path}`);
  }
  return {
    title: page.title,
    description: page.description,
    keywords: [page.keyword, ...page.secondaryKeywords],
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      type: "website",
      url: `${SITE_URL}${page.path === "/" ? "" : page.path}`,
      title: page.title,
      description: page.description,
      siteName: "AMICIZIA — Pizzeria & Italiener in Saarlouis",
      locale: "de_DE",
      images: [
        {
          url: DEFAULT_OG_IMAGE.url,
          width: DEFAULT_OG_IMAGE.width,
          height: DEFAULT_OG_IMAGE.height,
          alt: DEFAULT_OG_IMAGE.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [DEFAULT_OG_IMAGE.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  };
}
