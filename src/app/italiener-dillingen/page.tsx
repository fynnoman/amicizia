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

const PATH = "/italiener-dillingen";
export const metadata: Metadata = buildMetadata(PATH);

const faq: FaqEntry[] = [
  {
    question: "Gibt es einen empfehlenswerten Italiener in der Nähe von Dillingen?",
    answer:
      "Ja — AMICIZIA in Saarlouis, nur 6 km von Dillingen entfernt. Familiengeführte Trattoria mit Steinofen, seit 2013. Aus Dillingen-Innenstadt bist du in 10 Minuten bei uns.",
  },
  {
    question: "Lohnt sich die Fahrt nach Saarlouis für Pizza?",
    answer:
      "Wenn du echte Steinofenpizza mit 48 h Teigreife und San-Marzano-Tomaten willst — eindeutig ja. Die 6 km nach Saarlouis machen den Unterschied zwischen Pizza und richtiger Pizza.",
  },
  {
    question: "Kann ich aus Dillingen online bei euch bestellen?",
    answer:
      "Ja. Online bestellen, sicher per SumUp zahlen, ofenfrisch in der Industriestraße 20 abholen. Lieferung machen wir bewusst nicht.",
  },
];

export default function ItalienerDillingenPage() {
  const trail = [
    { name: "Start", path: "/" },
    { name: "Italiener Saarlouis", path: "/italiener-saarlouis" },
    { name: "Italiener Dillingen", path: PATH },
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
            name: "Italiener für Dillingen — AMICIZIA Saarlouis",
            description:
              "Italiener für Gäste aus Dillingen: 6 km nach Saarlouis. Steinofenpizza, frische Pasta, familiäre Trattoria.",
          }),
          faqSchema(faq),
        ]}
      />

      <Breadcrumbs trail={trail} />

      <SubPageHero
        eyebrow="Aus Dillingen"
        title="Italiener für"
        italicTail="Dillingen"
        lead="Nur 6 km zwischen Dillingen und unserer Trattoria in Saarlouis. Für viele Gäste aus Dillingen ist AMICIZIA seit Jahren der Standard, wenn es echte italienische Steinofenpizza sein soll."
      />

      <AreaPageBody
        config={{
          area: "Dillingen",
          fromLabel: "aus Dillingen",
          distanceKm: 6,
          driveMinutes: 10,
          introNote: "Kurze Fahrt, ehrliches Essen — und keine Lieferpizza mehr.",
          body: [
            `Dillingen und Saarlouis liegen so dicht beieinander, dass man die Stadtgrenze kaum merkt. Wer in Dillingen wohnt und einen Italiener sucht, hat verständlicherweise nicht Lust, eine halbe Stunde zu fahren. Die 6 km zur <a href="/pizzeria-saarlouis" class="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">Pizzeria AMICIZIA in der Industriestraße 20</a> sind in 10 Minuten erledigt — über die Saarbrücker Straße oder die B405 ist die Verbindung direkt.`,
            `Was viele Dillinger Gäste bei uns schätzen: dass wir nicht versuchen, durch Lieferung schnell zu sein, sondern durch Qualität langsam. Eine <a href="/steinofen-pizza-saarlouis" class="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">echte Steinofenpizza</a> braucht den heißen Stein, die Hand am Schießer, den Moment, in dem sie aus dem Ofen kommt. Das funktioniert nicht im Lieferthermo. Deshalb: kurz online bestellen, 12–15 Minuten später ofenfrisch abholen.`,
            `Wer einen Abend einplanen will, sitzt natürlich gerne bei uns rein. Die Trattoria-Atmosphäre passt für Paare, Familien oder kleine Runden — wer aus Dillingen einen Anlass feiern will, reserviert am besten vorab. Mehr dazu auf <a href="/reservierung" class="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">/reservierung</a>.`,
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
