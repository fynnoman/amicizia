import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/business";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // Explicitly welcome AI search crawlers for GEO / AI Overview visibility.
      // These crawlers are the ones used by ChatGPT search, Perplexity, Claude,
      // Google's SGE / AI Overviews, Apple Intelligence and Bing Copilot.
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "Perplexity-User",
          "ClaudeBot",
          "Claude-Web",
          "Claude-SearchBot",
          "Google-Extended",
          "Applebot",
          "Applebot-Extended",
          "Bingbot",
          "CCBot",
          "Amazonbot",
          "YouBot",
          "DuckAssistBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
