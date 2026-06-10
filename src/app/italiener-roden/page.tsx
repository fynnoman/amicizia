import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import SubPageHero from "@/components/seo/SubPageHero";
import LocalNapBlock from "@/components/seo/LocalNapBlock";
import RelatedPages from "@/components/seo/RelatedPages";
import FaqBlock, { type FaqEntry } from "@/components/seo/FaqBlock";
import JsonLd from "@/components/seo/JsonLd";
import AreaPageBody from "@/components/seo/AreaPageBody";
import { buildMetadata } from "@/lib/seo-metadata";
import { breadcrumbSchema, webpageSchema, faqSchema, restaurantSchema } from "@/lib/schema";

const PATH = "/italiener-roden";
export const metadata: Metadata = buildMetadata(PATH);

const faq: FaqEntry[] = [
  {
    question: "Italiener in Roden — welchen empfehlt ihr?",
    answer:
      "Wir würden uns nicht selbst nennen, wenn wir nicht überzeugt wären: AMICIZIA in der Industriestraße 20, ca. 2 km von Saarlouis-Roden entfernt. In 5 Minuten mit dem Auto, zu Fuß in 25–30.",
  },
  {
    question: "Habt ihr aus Roden bequem Parkmöglichkeit?",
    answer:
      "Ja, direkt vor unserer Tür in der Industriestraße. Keine Parkhaussuche, keine Bezahlpflicht.",
  },
  {
    question: "Liefert ihr nach Roden?",
    answer:
      "Wir liefern bewusst nicht — eine Steinofenpizza schmeckt am besten, wenn sie in den ersten Minuten nach dem Ofen auf deinem Teller landet. Bestelle lieber online und hol ab.",
  },
];

export default function ItalienerRodenPage() {
  const trail = [
    { name: "Start", path: "/" },
    { name: "Italiener Saarlouis", path: "/italiener-saarlouis" },
    { name: "Italiener Roden", path: PATH },
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
            name: "Italiener für Roden — AMICIZIA Saarlouis",
            description:
              "Italiener für Roden: 2 km bis Saarlouis-Industriestraße. Familiengeführte Trattoria, Steinofen, frische Pasta.",
          }),
          faqSchema(faq),
        ]}
      />

      <Breadcrumbs trail={trail} />

      <SubPageHero
        eyebrow="Aus Roden"
        title="Italiener für"
        italicTail="Saarlouis-Roden"
        lead="Roden und unsere Trattoria in Saarlouis liegen praktisch nebeneinander. Ca. 2 km — mit dem Auto fünf Minuten, zu Fuß ein netter Spaziergang. Für Roden sind wir der schnelle, ehrliche Italiener um die Ecke."
      />

      <AreaPageBody
        config={{
          area: "Roden",
          fromLabel: "aus Roden",
          distanceKm: 2,
          driveMinutes: 5,
          introNote: "Quasi um die Ecke — und doch komplett italienisch.",
          body: [
            `Saarlouis-Roden ist Teil von Saarlouis, und unsere <a href="/pizzeria-saarlouis" class="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">Pizzeria AMICIZIA</a> liegt in der Industriestraße 20 — wenige Minuten Fahrt von Roden. Viele Roden-Gäste laufen sogar zu uns. Wenn das Wetter mitspielt und du Bewegung magst, ist ein abendlicher Spaziergang mit Italiener am Ende ein echter Klassiker.`,
            `Was uns von anderen Lokalen in der direkten Umgebung unterscheidet: Steinofen statt Elektroofen, 48 Stunden Teigreife statt Tütenmehl, italienische Grundzutaten statt Großhandel. Es ist mehr Aufwand — aber genau das schmeckst du, wenn die Pizza vor dir steht.`,
            `Für spontanen Hunger: <a href="/pizza-bestellen-saarlouis" class="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">online bestellen</a>, in 12–15 Minuten ofenfrisch abholen. Für Familien-Abende oder Anlässe: <a href="/reservierung" class="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">Tisch reservieren</a> — wir freuen uns über Stammgäste aus Roden seit 2013.`,
          ],
        }}
      />

      <FaqBlock items={faq} />
      <LocalNapBlock />
      <RelatedPages path={PATH} />
      <Footer />
    </>
  );
}
