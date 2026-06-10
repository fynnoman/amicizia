import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import SubPageHero from "@/components/seo/SubPageHero";
import LocalNapBlock from "@/components/seo/LocalNapBlock";
import RelatedPages from "@/components/seo/RelatedPages";
import FaqBlock, { type FaqEntry } from "@/components/seo/FaqBlock";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo-metadata";
import { breadcrumbSchema, webpageSchema, faqSchema, restaurantSchema } from "@/lib/schema";
import { SITE_URL } from "@/data/business";

const PATH = "/trattoria-saarlouis";
export const metadata: Metadata = buildMetadata(PATH);

const faq: FaqEntry[] = [
  {
    question: "Was ist eine Trattoria?",
    answer:
      "Eine Trattoria ist die italienische Variante eines Familien-Wirtshauses: kleine Karte, einfache italienische Küche, lockere Atmosphäre. Kein steifes Ristorante, keine Pizzeria mit 80 Sorten — sondern das Mittelding, das in Italien selbst am häufigsten ist.",
  },
  {
    question: "Gibt es eine echte Trattoria in Saarlouis?",
    answer:
      "Ja, AMICIZIA Trattoria di Famiglia in der Industriestraße 20. Wir führen das Lokal als Familie seit 2013 — mit eigenem Steinofen, hausgemachter Pasta und einer kurzen, ehrlichen Karte.",
  },
  {
    question: "Worin unterscheidet sich eine Trattoria von einem Italiener?",
    answer:
      `„Italiener" ist der deutsche Sammelbegriff. „Trattoria" ist die italienische Kategorisierung — und sie verspricht mehr als die Pizzeria nebenan: dass es Familienküche ist, dass die Saison eine Rolle spielt und dass das Lokal nicht skalieren will.`,
  },
  {
    question: "Trattoria mit Steinofen in Saarlouis — gibt es das?",
    answer:
      "Genau die Mischung sind wir: Trattoria-Atmosphäre plus echter Steinofen. Pizza unter 90 Sekunden, Pasta auf den Punkt, Antipasti aus eigener Küche.",
  },
];

export default function TrattoriaSaarlouisPage() {
  const trail = [
    { name: "Start", path: "/" },
    { name: "Italiener Saarlouis", path: "/italiener-saarlouis" },
    { name: "Trattoria Saarlouis", path: PATH },
  ];

  return (
    <>
      <Navbar />
      <JsonLd
        data={[
          restaurantSchema(),
          breadcrumbSchema(trail),
          webpageSchema({
            url: PATH,
            name: "Trattoria in Saarlouis — AMICIZIA di Famiglia",
            description:
              "Eine echte italienische Trattoria in Saarlouis: kleine Karte, familiäre Atmosphäre, Steinofen, hausgemachte Pasta. Seit 2013.",
            primaryImage: `${SITE_URL}/photos/amicizia-2.jpg`,
          }),
          faqSchema(faq),
        ]}
      />

      <Breadcrumbs trail={trail} />

      <SubPageHero
        eyebrow="VI · Trattoria di Famiglia"
        title="Trattoria in"
        italicTail="Saarlouis"
        lead="AMICIZIA — eine echte italienische Trattoria mitten in Saarlouis. Klein, familiär, ehrlich. Was in Italien selbstverständlich ist, gibt es hier seit 2013."
      />

      <section className="relative max-w-6xl mx-auto px-6 lg:px-12 mb-20">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative aspect-[4/5] overflow-hidden border border-paper-soft/15 depth-shadow">
            <div className="pointer-events-none absolute inset-2 border border-terracotta/30 z-10" />
            <Image
              src="/photos/amicizia-2.jpg"
              alt="Trattoria di Famiglia in Saarlouis — Küchenarbeit bei AMICIZIA"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden border border-paper-soft/15 depth-shadow">
            <div className="pointer-events-none absolute inset-2 border border-terracotta/30 z-10" />
            <Image
              src="/photos/amicizia-1.jpg"
              alt="Tisch in der Trattoria AMICIZIA Saarlouis mit Pizza und Wein"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="display-lg text-[clamp(2rem,4vw,3rem)] text-espresso leading-tight">
            Was eine <span className="italic-display text-terracotta">Trattoria</span> in Saarlouis verspricht
          </h2>
          <div className="space-y-5 mt-8 font-serif text-espresso-soft text-lg leading-relaxed">
            <p>
              Trattoria ist mehr als ein hübsches Wort. In Italien beschreibt es einen
              klar definierten Lokal-Typ: familiengeführt, mit kurzer Karte, regionalem
              Bezug, fairen Preisen. Du gehst nicht in eine Trattoria, weil sie schick
              ist. Du gehst hin, weil das Essen gut, ehrlich und bezahlbar ist und weil
              du dich willkommen fühlst.
            </p>
            <p>
              Trattoria di Famiglia ist seit 2013 unser Versprechen: Familie, nicht
              Kette. Wir kaufen ein, wir kochen, wir bedienen. Es gibt keine Zentrale,
              kein Franchise, kein Konzernmanagement. Das verändert das Erlebnis: du
              redest mit denen, die kochen, du wirst beim zweiten Besuch erkannt, und
              wenn es ein Special gibt, ist es kein Marketingplan, sondern was die
              Küche heute besonders schön bekommen hat.
            </p>
            <p>
              Unsere Karte bleibt deshalb klein. Pizza vom Steinofen, frische Pasta,
              Antipasti, Ciabatta, Wraps. Mehr braucht es nicht — und nichts davon
              ist Tiefkühl. Auf der{" "}
              <Link href="/speisekarte" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Speisekarte
              </Link>
              {" "}siehst du genau, was wir machen.
            </p>
            <p>
              In Saarlouis und im Saarland insgesamt gibt es immer weniger Lokale,
              die diesen Trattoria-Charakter wirklich leben. Vieles wird zur Pizzeria
              mit Karte XXL oder zum hochpreisigen Ristorante. Wir versuchen, das
              Mittelding ehrlich zu halten — kleine Karte, ehrliche Preise, echtes
              Handwerk.
            </p>
          </div>
        </div>
      </section>

      <section className="paper-grain relative py-16 md:py-20 px-6 lg:px-12 bg-paper-deep/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="display-lg text-3xl text-espresso leading-tight">
            Trattoria-Versprechen
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mt-8 font-serif text-espresso-soft text-base leading-relaxed">
            <p>
              <strong className="text-espresso">Kleine Karte.</strong> Lieber zehn
              Gerichte, die wir täglich beherrschen, als 80, die alle nur halb gelingen.
            </p>
            <p>
              <strong className="text-espresso">Frische Zutaten.</strong> San Marzano,
              Fior di Latte, Parmaschinken, Olivenöl. Nichts aus dem Konzern, nichts
              aus der Tüte.
            </p>
            <p>
              <strong className="text-espresso">Ehrliche Preise.</strong> Pizza ab
              9,90 €, Pasta-Klassiker im fairen Mittelfeld. Du gehst satt und nicht
              schlecht gelaunt heim.
            </p>
            <p>
              <strong className="text-espresso">Familiäre Atmosphäre.</strong> Enger
              Raum, lautes Lachen aus der Küche, der Wirt am Tisch. So fühlt sich
              eine Trattoria an.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-hand text-3xl text-terracotta mb-6">
            Komm vorbei.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/reservierung" className="btn-terra">
              Tisch reservieren
            </Link>
            <Link href="/ueber-uns" className="btn-ghost !text-espresso !border-espresso/70 hover:!bg-espresso hover:!text-paper">
              Über uns
            </Link>
          </div>
        </div>
      </section>

      <FaqBlock items={faq} />
      <LocalNapBlock />
      <RelatedPages path={PATH} />
      <Footer />
    </>
  );
}
