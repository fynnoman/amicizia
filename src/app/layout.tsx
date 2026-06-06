import type { Metadata } from "next";
import { Fraunces, EB_Garamond, Caveat } from "next/font/google";
import "./globals.css";

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
  title: "AMICIZIA — Trattoria di Famiglia · Saarlouis",
  description:
    "Pizza, pasta e amore. Eine kleine italienische Familien-Trattoria in Saarlouis — seit 2013 con amore.",
  keywords: [
    "AMICIZIA",
    "Trattoria",
    "Pizza",
    "Saarlouis",
    "Italiener",
    "Familienrestaurant",
    "Italienisch",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${fraunces.variable} ${garamond.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-espresso">{children}</body>
    </html>
  );
}
