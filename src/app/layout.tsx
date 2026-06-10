import type { Metadata } from "next";
import { Fraunces, EB_Garamond, Caveat } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";
import {
  restaurantSchema,
  websiteSchema,
  organizationSchema,
} from "@/lib/schema";
import { SITE_URL, SITE_NAME, SITE_TAGLINE, DEFAULT_OG_IMAGE } from "@/data/business";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s · AMICIZIA Saarlouis",
  },
  description: SITE_TAGLINE,
  applicationName: "AMICIZIA",
  authors: [{ name: "AMICIZIA Trattoria" }],
  creator: "AMICIZIA Trattoria",
  publisher: "AMICIZIA Trattoria",
  generator: "Next.js",
  category: "Restaurant",
  classification: "Italienisches Restaurant · Pizzeria",
  keywords: [
    "Pizzeria Saarlouis",
    "Pizza Saarlouis",
    "Italiener Saarlouis",
    "Italienisches Restaurant Saarlouis",
    "Trattoria Saarlouis",
    "Steinofen Pizza Saarlouis",
    "Pizza bestellen Saarlouis",
    "Italienisch essen Saarlouis",
    "Beste Pizza Saarlouis",
    "AMICIZIA Saarlouis",
    "Italiener Industriestraße Saarlouis",
    "Pizzeria Saarland",
    "Italiener in der Nähe Saarlouis",
  ],
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_TAGLINE,
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
    title: SITE_NAME,
    description: SITE_TAGLINE,
    images: [DEFAULT_OG_IMAGE.url],
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  verification: {
    // Add Google Search Console verification token here once available:
    // google: "XXX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${fraunces.variable} ${garamond.variable} ${caveat.variable} h-full antialiased [color-scheme:dark]`}
    >
      <body className="min-h-full flex flex-col bg-paper text-espresso">
        <JsonLd data={[restaurantSchema(), websiteSchema(), organizationSchema()]} />
        {children}
      </body>
    </html>
  );
}
