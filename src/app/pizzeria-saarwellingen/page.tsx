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

const PATH = "/pizzeria-saarwellingen";
export const metadata: Metadata = buildMetadata(PATH);

const faq: FaqEntry[] = [
  {
    question: "Gibt es eine gute Pizzeria nahe Saarwellingen?",
    answer:
      "AMICIZIA in Saarlouis liegt 7 km von Saarwellingen entfernt — in ca. 12 Minuten mit dem Auto erreichbar. Echte Steinofenpizza, familiengeführte Trattoria.",
  },
  {
    question: "Was zeichnet eure Pizzeria für Gäste aus Saarwellingen aus?",
    answer:
      "48 h Teigreife, echter Steinofen bei 400 °C, San-Marzano-Tomaten. Keine Lieferung — wir wollen, dass deine Pizza ofenfrisch bei dir ankommt, nicht nach 20 Minuten im Thermo-Sack.",
  },
  {
    question: "Kann ich aus Saarwellingen online bestellen?",
    answer:
      "Ja, über die Online-Bestellung. Pizza wählen, per SumUp zahlen, 12–15 Minuten später in der Industriestraße 20 abholen.",
  },
];

export default function PizzeriaSaarwellingenPage() {
  const trail = [
    { name: "Start", path: "/" },
    { name: "Pizzeria Saarlouis", path: "/pizzeria-saarlouis" },
    { name: "Pizzeria Saarwellingen", path: PATH },
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
            name: "Pizzeria für Saarwellingen — AMICIZIA Saarlouis",
            description:
              "Pizzeria für Gäste aus Saarwellingen: 7 km nach Saarlouis. Steinofenpizza, ehrliche italienische Trattoria.",
          }),
          faqSchema(faq),
        ]}
      />

      <Breadcrumbs trail={trail} />

      <SubPageHero
        eyebrow="Aus Saarwellingen"
        title="Pizzeria für"
        italicTail="Saarwellingen"
        lead="7 km von Saarwellingen nach Saarlouis. Für viele Gäste aus Saarwellingen ist AMICIZIA seit Jahren die kurze Strecke wert — weil hier echte Steinofenpizza aus dem Holzofen kommt, nicht aus dem Elektrobackofen."
      />

      <AreaPageBody
        config={{
          area: "Saarwellingen",
          fromLabel: "aus Saarwellingen",
          distanceKm: 7,
          driveMinutes: 12,
          introNote: "Wer den Unterschied von echtem Steinofen einmal geschmeckt hat, fährt die paar Kilometer gerne.",
          body: [
            `Saarwellingen hat eigene Lokale — aber die spezielle Kategorie „echte italienische Steinofenpizza" ist selten. Wer das sucht, findet das in unserer <a href="/pizzeria-saarlouis" class="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">Pizzeria in Saarlouis</a>, 7 km entfernt. Über die L139 oder die L142 bist du in 10–12 Minuten bei uns.`,
            `Was Saarwellingen-Gäste bei AMICIZIA finden: einen echten Steinofen, der bei rund 400 °C läuft, einen Teig mit 48 Stunden Reifezeit und italienische Grundzutaten wie San-Marzano-Tomaten und Fior di Latte. Das macht die Pizza, die du aus dem Elektroofen nie bekommst — knuspriger Boden mit Blasen, leicht rauchig, klar belegt.`,
            `Wir liefern bewusst nicht, weil Steinofenpizza ihren Wert in den ersten Minuten nach dem Ofen verliert. Stattdessen: <a href="/pizza-bestellen-saarlouis" class="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">online bestellen</a> während du losfährst, dann ofenfrisch abholen. Oder Tisch reservieren und einen Abend daraus machen — die Trattoria-Atmosphäre lohnt sich.`,
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
