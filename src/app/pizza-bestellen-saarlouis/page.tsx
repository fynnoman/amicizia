import type { Metadata } from "next";
import Link from "next/link";
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

const PATH = "/pizza-bestellen-saarlouis";
export const metadata: Metadata = buildMetadata(PATH);

const faq: FaqEntry[] = [
  {
    question: "Wie bestelle ich Pizza in Saarlouis online?",
    answer:
      "Auf unserer Startseite findest du die Online-Bestellung. Pizza auswählen, persönliche Daten hinterlegen, sicher per SumUp bezahlen. Du bekommst eine Bestätigung — und ungefähr 12–15 Minuten später ist deine Pizza ofenfrisch in der Industriestraße 20 abholbereit.",
  },
  {
    question: "Liefert AMICIZIA Pizza in Saarlouis?",
    answer:
      "Wir liefern bewusst nicht. Eine Steinofenpizza, die 20 Minuten im Thermo-Sack liegt, ist nicht mehr die Pizza, die wir aus dem Ofen geholt haben. Wir konzentrieren uns auf Abholung — schneller, heißer, ehrlicher.",
  },
  {
    question: "Wie schnell ist meine Pizza zur Abholung bereit?",
    answer:
      "Plane 12–15 Minuten ab Bestellung ein. Bei sehr großer Auslastung am Freitag- oder Samstagabend kann es bis 25 Minuten dauern — du siehst die Schätzung in der Bestellbestätigung.",
  },
  {
    question: "Kann ich Pasta oder Ciabatta auch online bestellen?",
    answer:
      "Aktuell ist die Online-Bestellung primär für Pizza ausgelegt. Ciabatta und Wraps lassen sich ebenfalls bestellen. Pasta zum Mitnehmen am besten telefonisch — kurz anrufen, abholen.",
  },
  {
    question: "Welche Zahlungsmethoden gibt es online?",
    answer:
      "Sicher über SumUp: Kreditkarte, EC, Apple Pay, Google Pay. Vor Ort beim Abholen geht auch Bargeld.",
  },
];

export default function PizzaBestellenPage() {
  const trail = [
    { name: "Start", path: "/" },
    { name: "Pizzeria Saarlouis", path: "/pizzeria-saarlouis" },
    { name: "Pizza bestellen", path: PATH },
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
            name: "Pizza bestellen in Saarlouis — Online & Abholung",
            description:
              "Pizza in Saarlouis online bestellen und ofenfrisch in der Industriestraße 20 abholen. Sichere Bezahlung über SumUp.",
            primaryImage: `${SITE_URL}/photos/amicizia-1.jpg`,
          }),
          faqSchema(faq),
        ]}
      />

      <Breadcrumbs trail={trail} />

      <SubPageHero
        eyebrow="VII · Pizza bestellen"
        title="Pizza bestellen in"
        italicTail="Saarlouis"
        lead="Online bestellen, sicher bezahlen, ofenfrisch abholen. Keine Lieferzeiten, keine durchgeweichte Pizza im Karton — wir backen, wenn du losfährst, und übergeben dir die Pizza, wie sie aus dem Steinofen kommt."
      />

      <section className="relative py-20 md:py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="display-lg text-[clamp(2rem,4vw,3rem)] text-espresso leading-tight">
            So funktioniert das Bestellen
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                num: "I.",
                t: "Aussuchen",
                d: "Pizza, Ciabatta oder Wrap aus der Karte wählen. Du siehst sofort, was im Warenkorb ist.",
              },
              {
                num: "II.",
                t: "Bezahlen",
                d: "Sichere Online-Zahlung über SumUp. Kreditkarte, EC, Apple Pay, Google Pay. Bestätigung kommt per E-Mail.",
              },
              {
                num: "III.",
                t: "Abholen",
                d: "Industriestraße 20, 66740 Saarlouis. 12–15 Minuten nach Bestellung steht alles bereit. Parken direkt vor der Tür.",
              },
            ].map((s) => (
              <article key={s.num} className="bg-paper-deep border border-paper-soft/15 depth-shadow p-6 relative">
                <div className="pointer-events-none absolute inset-2 border border-terracotta/25" />
                <div className="relative">
                  <div className="font-display italic text-terracotta tracking-[0.35em] text-[0.78rem] mb-3">
                    {s.num}
                  </div>
                  <h3 className="font-display text-espresso text-2xl">{s.t}</h3>
                  <p className="font-serif italic text-espresso-soft mt-2 leading-relaxed">
                    {s.d}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/#order" className="btn-terra">
              Jetzt online bestellen
            </Link>
          </div>
        </div>
      </section>

      <section className="paper-grain relative py-20 md:py-24 px-6 lg:px-12 bg-paper-deep/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="display-lg text-[clamp(1.8rem,3.5vw,2.6rem)] text-espresso leading-tight">
            Warum wir nicht liefern
          </h2>
          <div className="space-y-5 mt-8 font-serif text-espresso-soft text-lg leading-relaxed">
            <p>
              In Saarlouis kannst du Pizza von vielen Lieferdiensten bekommen. Das
              ist okay — wenn die Lieferpizza für dich Hauptsache schnell und nicht
              Hauptsache gut bedeutet. Wir haben uns bewusst dagegen entschieden.
            </p>
            <p>
              Eine{" "}
              <Link href="/steinofen-pizza-saarlouis" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Steinofenpizza
              </Link>
              {" "}bekommt ihren Wert in den ersten zwei Minuten nach dem Ofen. Der
              Boden ist knusprig, der Käse cremig, die Tomate frisch. Nach 15 Minuten
              im Lieferthermo ist der Boden weich, der Käse zäh, die Tomate vermischt
              sich mit Olivenöl zu Soße. Das ist keine schlechte Pizza — es ist
              einfach eine andere Pizza. Und wir wollen die echte abliefern.
            </p>
            <p>
              Deshalb: Bestelle online, wir backen, du holst ab. 12–15 Minuten von
              jeder Adresse in{" "}
              <Link href="/italiener-saarlouis" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Saarlouis
              </Link>
              ,{" "}
              <Link href="/italiener-dillingen" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Dillingen
              </Link>
              ,{" "}
              <Link href="/italiener-fraulautern" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Fraulautern
              </Link>
              ,{" "}
              <Link href="/pizzeria-saarwellingen" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Saarwellingen
              </Link>
              {" "}oder{" "}
              <Link href="/italiener-wallerfangen" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Wallerfangen
              </Link>
              {" "}— und du hast deine Pizza so heiß, wie wir sie aus dem Ofen holen.
            </p>
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
