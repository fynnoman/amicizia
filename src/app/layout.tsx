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
  title: "AMICIZIA — Italienisches Familienrestaurant · Saarlouis",
  description:
    "Frische Pizza, Pasta & kleine Familienrezepte aus Saarlouis. Eine italienische Familien-Trattoria mit Steinofen, seit über 12 Jahren mit Liebe gemacht.",
  keywords: [
    "AMICIZIA",
    "Pizza Saarlouis",
    "Italiener Saarlouis",
    "Familienrestaurant",
    "italienisches Restaurant",
    "Steinofen Pizza",
    "Trattoria",
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
