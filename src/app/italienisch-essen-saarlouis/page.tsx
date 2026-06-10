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

const PATH = "/italienisch-essen-saarlouis";
export const metadata: Metadata = buildMetadata(PATH);

const faq: FaqEntry[] = [
  {
    question: "Wo kann man italienisch essen gehen in Saarlouis?",
    answer:
      "AMICIZIA, Industriestraße 20. Familiengeführte italienische Trattoria, Steinofen, hausgemachte Pasta, klassische italienische Karte. Reservierung empfohlen, vor allem am Wochenende.",
  },
  {
    question: "Italienisch essen mit Kindern in Saarlouis?",
    answer:
      "Sehr gerne. Die Atmosphäre ist familiär, die Karte einfach genug, dass auch wählerische Kinder etwas finden. Margherita, Wraps und Ciabatta funktionieren immer.",
  },
  {
    question: "Italienisch essen Saarlouis — Vorspeisen?",
    answer:
      "Antipasti gehören dazu: Bruschetta, italienischer Aufschnitt, eingelegtes Gemüse, frische Brotvariationen. Frag direkt vor Ort, was die Küche heute extra schön hat.",
  },
  {
    question: "Was ist günstig italienisch essen in Saarlouis?",
    answer:
      "Pizza ab 9,90 €, Pasta-Klassiker im mittleren zweistelligen Bereich. Wir halten die Preise bewusst fair — gute italienische Küche soll für alle möglich sein, nicht nur fürs Anlass-Essen.",
  },
];

export default function ItalienischEssenPage() {
  const trail = [
    { name: "Start", path: "/" },
    { name: "Italiener Saarlouis", path: "/italiener-saarlouis" },
    { name: "Italienisch essen", path: PATH },
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
            name: "Italienisch essen in Saarlouis — AMICIZIA Trattoria",
            description:
              "Italienisch essen gehen in Saarlouis: Pizza, Pasta, Antipasti in familiärer Trattoria-Atmosphäre. Industriestraße 20.",
            primaryImage: `${SITE_URL}/photos/amicizia-2.jpg`,
          }),
          faqSchema(faq),
        ]}
      />

      <Breadcrumbs trail={trail} />

      <SubPageHero
        eyebrow="VIII · Italienisch essen"
        title="Italienisch essen in"
        italicTail="Saarlouis"
        lead="Wenn du in Saarlouis italienisch essen gehen willst, bist du auf der Suche nach mehr als nur einer Mahlzeit. Du willst Wärme, Atmosphäre, einen Tisch, an dem du lange sitzen darfst. Das gibt's bei uns seit 2013."
      />

      <section className="relative max-w-6xl mx-auto px-6 lg:px-12 mb-20">
        <div className="relative aspect-[16/9] overflow-hidden border border-paper-soft/15 depth-shadow">
          <div className="pointer-events-none absolute inset-2 border border-terracotta/30 z-10" />
          <Image
            src="/photos/amicizia-2.jpg"
            alt="Italienisch essen gehen in Saarlouis — Tisch in der AMICIZIA Trattoria"
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
            Was ein guter <span className="italic-display text-terracotta">Italiener-Abend</span> in Saarlouis braucht
          </h2>
          <div className="space-y-5 mt-8 font-serif text-espresso-soft text-lg leading-relaxed">
            <p>
              Italienisch essen heißt sich Zeit nehmen. Erst die Karte durchlesen,
              dann Antipasti — Bruschetta, ein paar dünne Scheiben Aufschnitt, Brot
              mit Olivenöl. Während ihr esst und redet, geht der Hauptgang in Ruhe in
              den Ofen. Bei{" "}
              <Link href="/pizza-saarlouis" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Pizza
              </Link>
              {" "}sind das unter 90 Sekunden, bei Pasta ein paar Minuten. Trinkst du
              Wein dazu, hast du den Abend richtig angelegt.
            </p>
            <p>
              In Saarlouis sind die Möglichkeiten begrenzt, das so zu erleben. Viele
              Italiener-Restaurants funktionieren mehr wie ein Fast-Food-Konzept mit
              italienischer Karte. Wir versuchen, das Gegenteil zu sein: eine echte{" "}
              <Link href="/trattoria-saarlouis" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Trattoria di Famiglia
              </Link>
              , in der sich der Aufenthalt vom Hineinsetzen bis zum Espresso wie
              ein zusammenhängender Abend anfühlt — nicht wie ein Vorgang.
            </p>
            <p>
              Reservieren lohnt sich, vor allem Freitag und Samstag. Über das{" "}
              <Link href="/reservierung" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Reservierungsformular
              </Link>
              {" "}oder per Telefon. Wir vergeben ungern Tische ohne Anmeldung — nicht,
              weil wir voll wären, sondern weil wir dir die Atmosphäre garantieren
              wollen, für die du gekommen bist.
            </p>
            <p>
              Ein Hinweis für die Karte: sie ist bewusst klein. Wer 80 Gerichte
              braucht, ist anderswo besser aufgehoben. Wer fünf Dinge will, die
              wirklich gut sind, ist hier richtig. Die komplette Karte siehst du
              auf der{" "}
              <Link href="/speisekarte" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Speisekarte
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-hand text-3xl text-terracotta mb-6">
            Heute Abend italienisch?
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
