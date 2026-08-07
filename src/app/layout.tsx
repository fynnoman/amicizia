import type { Metadata, Viewport } from "next";
import { Fraunces, EB_Garamond, Caveat } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0B0B0E" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0B0E" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pizza Saarlouis · AMICIZIA — Steinofen Pizzeria in der Industriestraße",
    template: "%s · AMICIZIA Pizzeria Saarlouis",
  },
  description: SITE_TAGLINE,
  applicationName: "AMICIZIA",
  authors: [{ name: "AMICIZIA Pizzeria Saarlouis" }],
  creator: "AMICIZIA",
  publisher: "AMICIZIA",
  generator: "Next.js",
  category: "Restaurant",
  classification: "Pizzeria · Italienisches Restaurant · Steinofen",
  keywords: [
    "Pizza Saarlouis",
    "Pizzeria Saarlouis",
    "Steinofen Pizza Saarlouis",
    "beste Pizza Saarlouis",
    "Pizza bestellen Saarlouis",
    "Pizza abholen Saarlouis",
    "Italiener Saarlouis",
    "Italienisches Restaurant Saarlouis",
    "Italienisch essen Saarlouis",
    "Trattoria Saarlouis",
    "Pizza Industriestraße Saarlouis",
    "AMICIZIA Saarlouis",
    "AMICIZIA Pizza",
    "amicizia-pizza.de",
    "Pizza Dillingen Saar",
    "Pizza Roden Saarlouis",
    "Pizza Fraulautern",
    "Pizza Lisdorf",
    "Pizzeria Saarland",
    "Steinofen Pizzeria Saarland",
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
    siteName: "AMICIZIA — Pizzeria Saarlouis",
    title: "Pizza Saarlouis · AMICIZIA Steinofen Pizzeria",
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
    title: "Pizza Saarlouis · AMICIZIA Steinofen Pizzeria",
    description: SITE_TAGLINE,
    images: [DEFAULT_OG_IMAGE.url],
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  verification: {
    // google: "PLACEHOLDER_GSC_TOKEN",
  },
  other: {
    // Explicit geo tags — some regional bots / older AI crawlers still read these.
    "geo.region": "DE-SL",
    "geo.placename": "Saarlouis",
    "geo.position": "49.3137;6.7514",
    ICBM: "49.3137, 6.7514",
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
      <body className="min-h-full flex flex-col bg-paper text-espresso overflow-x-hidden">
        <JsonLd data={[restaurantSchema(), websiteSchema(), organizationSchema()]} />
        {children}
      </body>
    </html>
  );
}
