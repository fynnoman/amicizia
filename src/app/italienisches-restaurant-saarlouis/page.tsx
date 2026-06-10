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

const PATH = "/italienisches-restaurant-saarlouis";
export const metadata: Metadata = buildMetadata(PATH);

const faq: FaqEntry[] = [
  {
    question: "Welches italienische Restaurant in Saarlouis ist authentisch?",
    answer:
      "AMICIZIA in der Industriestraße 20. Italienisch geführte Trattoria, eigener Steinofen, klassische italienische Karte mit Antipasti, Pizza und Pasta. Seit 2013.",
  },
  {
    question: "Italienisches Restaurant in Saarlouis für Geschäftsessen?",
    answer:
      "Wir nehmen Tischreservierungen auch für Gruppen entgegen. Sprich uns an — wir können einen ruhigeren Bereich vorbereiten und das Menü auf einen festen Ablauf abstimmen.",
  },
  {
    question: "Gibt es ein italienisches Restaurant in Saarlouis mit Steinofen?",
    answer:
      "Ja, AMICIZIA. Der Steinofen ist seit 2013 das Herzstück unserer Küche. Pizza unter 90 Sekunden bei 400 °C — Bauart wie in Neapel.",
  },
  {
    question: "Gibt es ein italienisches Restaurant in Saarlouis mit veganen Optionen?",
    answer:
      "Vegetarisch immer, vegan auf Anfrage. Viele unserer Pizzen lassen sich ohne Käse zubereiten, und unsere Saisonpasta gibt es immer wieder mit veganen Alternativen.",
  },
  {
    question: "Italienisches Restaurant Saarlouis — wo am besten parken?",
    answer:
      "Direkt vor der Tür in der Industriestraße. Wir sind kein Innenstadt-Restaurant, das heißt: keine Parkhaus-Suche, kein Drei-Runden-Drehen. Du parkst, du kommst rein, du isst.",
  },
];

export default function ItalienischesRestaurantPage() {
  const trail = [
    { name: "Start", path: "/" },
    { name: "Italiener Saarlouis", path: "/italiener-saarlouis" },
    { name: "Italienisches Restaurant", path: PATH },
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
            name: "Italienisches Restaurant in Saarlouis — AMICIZIA Trattoria",
            description:
              "Italienisches Restaurant in Saarlouis: familiengeführte Trattoria mit Steinofen, frischer Pasta, italienischen Klassikern. Reservierung empfohlen.",
            primaryImage: `${SITE_URL}/photos/amicizia-3.jpg`,
          }),
          faqSchema(faq),
        ]}
      />

      <Breadcrumbs trail={trail} />

      <SubPageHero
        eyebrow="V · Italienisches Restaurant"
        title="Italienisches Restaurant"
        italicTail="in Saarlouis"
        lead="AMICIZIA Trattoria di Famiglia — ein italienisches Restaurant in Saarlouis, das sich nicht für die Karte, sondern für das Können entschuldigt. Steinofen, Pasta, ehrliche Aromen. Industriestraße 20."
      />

      <section className="relative max-w-6xl mx-auto px-6 lg:px-12 mb-20">
        <div className="relative aspect-[16/8] overflow-hidden border border-paper-soft/15 depth-shadow">
          <div className="pointer-events-none absolute inset-2 border border-terracotta/30 z-10" />
          <Image
            src="/photos/amicizia-3.jpg"
            alt="Italienisches Restaurant AMICIZIA in Saarlouis — Trattoria-Atmosphäre"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="relative py-20 md:py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="display-lg text-[clamp(2rem,4vw,3rem)] text-espresso leading-tight">
            Was ein <span className="italic-display text-terracotta">italienisches Restaurant</span> in Saarlouis ausmacht
          </h2>
          <div className="space-y-5 mt-8 font-serif text-espresso-soft text-lg leading-relaxed">
            <p>
              „Italienisches Restaurant" ist ein weiter Begriff. Er reicht von der
              hochpreisigen Ristorante-Bühne bis zur Pizzeria, die abends Pasta auf
              die Karte nimmt. Wir sind in der Mitte: eine{" "}
              <Link href="/trattoria-saarlouis" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Trattoria
              </Link>
              {" "}— das italienische Wort für ein Lokal, in dem das Essen wichtiger ist
              als das Ambiente, aber das Ambiente trotzdem zählt.
            </p>
            <p>
              Italienische Restaurants in Saarlouis gibt es einige. Wenige davon kochen
              selbst, mit eigenem Steinofen, in einer Familie. AMICIZIA tut das seit 2013.
              Unsere Karte bleibt bewusst klein: Pizza vom Steinofen, hausgemachte Pasta,
              Antipasti, ein paar wechselnde Tagesgerichte. Dafür ist jedes Gericht
              ehrlich gemacht — keine Tiefkühl-Abkürzungen, keine Industrie-Saucen.
            </p>
            <p>
              Atmosphäre: warm, italienisch, familiär. Wir haben absichtlich enge Tische,
              weil ein gutes italienisches Restaurant lebt. Du sitzt nicht in einer
              Box mit Hintergrundmusik, sondern in einem Raum, der atmet. Der Wirt kommt
              vorbei, die Küche ruft, der Tisch nebenan lacht. Wenn du Stille brauchst,
              gehst du ins Hotel-Restaurant. Wenn du Italien willst, kommst du zu uns.
            </p>
            <p>
              Für ein <strong className="text-espresso">italienisches Restaurant in Saarlouis</strong>
              {" "}empfehlen wir Reservierung, vor allem freitags und samstags. Über das{" "}
              <Link href="/reservierung" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Reservierungsformular
              </Link>
              {" "}oder per Telefon. Bei spontanem Hunger lohnt sich der Anruf vorab — wir
              schauen, was geht.
            </p>
          </div>
        </div>
      </section>

      <section className="paper-grain relative py-20 md:py-24 px-6 lg:px-12 bg-paper-deep/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="display-lg text-3xl text-espresso leading-tight">
            Auf der Karte unseres italienischen Restaurants
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mt-8 font-serif text-espresso-soft text-base leading-relaxed">
            <article>
              <h3 className="font-display text-espresso text-xl mb-2">Pizza vom Steinofen</h3>
              <p>
                Die italienischen Klassiker — Margherita, Diavola, Quattro Formaggi,
                Prosciutto e Rucola, Vegetariana. Alle mit 48 h Teigreife. Komplett
                auf der{" "}
                <Link href="/speisekarte" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                  Speisekarte
                </Link>
                .
              </p>
            </article>
            <article>
              <h3 className="font-display text-espresso text-xl mb-2">Pasta &amp; Ciabatta</h3>
              <p>
                Frische Pasta, Ciabatta-Klassiker wie Verde und Piccante, kleine
                Salate. Saisonale Specials wechseln — sprich uns vor Ort an, dann
                wissen wir, was die Küche heute besonders im Griff hat.
              </p>
            </article>
            <article>
              <h3 className="font-display text-espresso text-xl mb-2">Antipasti</h3>
              <p>
                Bruschetta, italienischer Aufschnitt, eingelegtes Gemüse. Das, was
                dich vor dem Hauptgang abholt, ohne dich vollzustopfen.
              </p>
            </article>
            <article>
              <h3 className="font-display text-espresso text-xl mb-2">Wraps &amp; Kleines</h3>
              <p>
                Wer nur schnell etwas möchte: Chicken Wrap, Veggie Wrap, oder eine
                Pizza zum Mitnehmen. Industriestraße 20 — in 10 Minuten ofenfrisch.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-hand text-3xl text-terracotta mb-6">
            Tisch für heute Abend?
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/reservierung" className="btn-terra">
              Tisch reservieren
            </Link>
            <Link href="/speisekarte" className="btn-ghost !text-espresso !border-espresso/70 hover:!bg-espresso hover:!text-paper">
              Speisekarte
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
