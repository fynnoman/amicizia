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

const PATH = "/italiener-fraulautern";
export const metadata: Metadata = buildMetadata(PATH);

const faq: FaqEntry[] = [
  {
    question: "Welcher Italiener ist nah an Fraulautern?",
    answer:
      "AMICIZIA in Saarlouis, ca. 3 km von Fraulautern. Über die Stadtmitte oder direkt über die Industriestraße in 5–7 Minuten erreichbar.",
  },
  {
    question: "Pizza aus Fraulautern bestellen — geht das?",
    answer:
      "Online bestellen ja, Lieferung nein. Wir wollen die Pizza so übergeben, wie sie aus dem Steinofen kommt. Bestellen, abholen, genießen.",
  },
  {
    question: "Lohnt sich der Italiener von Fraulautern aus?",
    answer:
      "Für echte Steinofenpizza und familiengeführte Trattoria-Atmosphäre: ja. Die wenigen Minuten Fahrt machen den Unterschied zwischen schnellem Hunger-Lokal und echtem italienischen Abendessen.",
  },
];

export default function ItalienerFraulauternPage() {
  const trail = [
    { name: "Start", path: "/" },
    { name: "Italiener Saarlouis", path: "/italiener-saarlouis" },
    { name: "Italiener Fraulautern", path: PATH },
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
            name: "Italiener für Fraulautern — AMICIZIA Saarlouis",
            description:
              "Italiener für Fraulautern: 3 km nach Saarlouis. Steinofen, frische Pasta, italienische Trattoria seit 2013.",
          }),
          faqSchema(faq),
        ]}
      />

      <Breadcrumbs trail={trail} />

      <SubPageHero
        eyebrow="Aus Fraulautern"
        title="Italiener für"
        italicTail="Fraulautern"
        lead="Fraulautern und Saarlouis-Industriestraße sind nur ein paar Minuten voneinander entfernt. Für viele Gäste aus Fraulautern ist AMICIZIA der nächstgelegene echte Italiener — mit eigenem Steinofen seit 2013."
      />

      <AreaPageBody
        config={{
          area: "Fraulautern",
          fromLabel: "aus Fraulautern",
          distanceKm: 3,
          driveMinutes: 6,
          introNote: "Drei Kilometer für eine ehrliche Steinofenpizza — kürzer wird's kaum.",
          body: [
            `Fraulautern liegt im Norden von Saarlouis. Über die Saarbrücker Straße oder direkt durch die Innenstadt bist du in unter 10 Minuten in unserer <a href="/pizzeria-saarlouis" class="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">Pizzeria in der Industriestraße 20</a>. Parken ist direkt vor der Tür, keine Bezahlpflicht.`,
            `Was Fraulautern-Gäste bei uns finden: einen echten <a href="/steinofen-pizza-saarlouis" class="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">Steinofen</a> bei rund 400 °C, 48 Stunden Teigreife, San-Marzano-Tomaten, Fior di Latte. Klein gehaltene Karte, große Verlässlichkeit. Wir machen seit über zehn Jahren denselben Job gleich gewissenhaft.`,
            `Spontan abholen funktioniert in 12–15 Minuten ab <a href="/pizza-bestellen-saarlouis" class="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">Online-Bestellung</a>. Für längere Abende lohnt sich Reservierung — vor allem freitags und samstags, wenn unsere Trattoria voll wird.`,
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
