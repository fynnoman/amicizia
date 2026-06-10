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

const PATH = "/italiener-wallerfangen";
export const metadata: Metadata = buildMetadata(PATH);

const faq: FaqEntry[] = [
  {
    question: "Italiener in der Nähe von Wallerfangen?",
    answer:
      "AMICIZIA in Saarlouis, 4 km von Wallerfangen entfernt. Über die L171 in ca. 8 Minuten erreichbar. Familiengeführte Trattoria mit Steinofen.",
  },
  {
    question: "Gute Pizza für Wallerfangen — welche Sorten gibt es?",
    answer:
      "Die Klassiker, perfektioniert: Margherita, Diavola, Quattro Formaggi, Prosciutto e Rucola, Vegetariana. Komplette Karte auf /speisekarte.",
  },
  {
    question: "Kann ich aus Wallerfangen schnell bei euch sein?",
    answer:
      "Ja, 8 Minuten Fahrt. Plus 12–15 Minuten ab Online-Bestellung — die Pizza wartet schon, wenn du ankommst.",
  },
];

export default function ItalienerWallerfangenPage() {
  const trail = [
    { name: "Start", path: "/" },
    { name: "Italiener Saarlouis", path: "/italiener-saarlouis" },
    { name: "Italiener Wallerfangen", path: PATH },
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
            name: "Italiener für Wallerfangen — AMICIZIA Saarlouis",
            description:
              "Italiener für Gäste aus Wallerfangen: 4 km nach Saarlouis-Industriestraße. Steinofenpizza, hausgemachte Pasta.",
          }),
          faqSchema(faq),
        ]}
      />

      <Breadcrumbs trail={trail} />

      <SubPageHero
        eyebrow="Aus Wallerfangen"
        title="Italiener für"
        italicTail="Wallerfangen"
        lead="Wallerfangen liegt nur 4 km von unserer Trattoria in Saarlouis entfernt. Für viele Gäste aus Wallerfangen ist AMICIZIA seit Jahren die Adresse, wenn echte italienische Steinofenpizza gefragt ist."
      />

      <AreaPageBody
        config={{
          area: "Wallerfangen",
          fromLabel: "aus Wallerfangen",
          distanceKm: 4,
          driveMinutes: 8,
          introNote: "Eine kurze Fahrt zur Saar — und du bist in Italien.",
          body: [
            `Wallerfangen und unsere <a href="/pizzeria-saarlouis" class="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">Pizzeria in Saarlouis</a> trennt nur die Saar. Über die L171 oder die Saarbrücker Straße bist du in unter 10 Minuten in der Industriestraße 20. Parken ist gratis und direkt vor der Tür.`,
            `Wallerfangen-Gäste schätzen bei uns die Verlässlichkeit. Seit 2013 backen wir Pizza im echten Steinofen, mit 48 Stunden gereiftem Teig und San-Marzano-Tomaten. Die Karte bleibt klein, dafür wird sie täglich beherrscht. Du bekommst nicht 80 Optionen, sondern fünf bis sechs Pizzen, die wir wirklich draufhaben.`,
            `Spontan ofenfrisch abholen oder ganzen Abend Trattoria: beides geht. Für die Abholung <a href="/pizza-bestellen-saarlouis" class="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">online vorbestellen</a>, für den Abend <a href="/reservierung" class="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">reservieren</a>. Familienfeiern und kleine Anlässe sind ebenfalls möglich — sprich uns an.`,
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
