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

const PATH = "/faq";
export const metadata: Metadata = buildMetadata(PATH);

const faq: FaqEntry[] = [
  // — Lokal & Atmosphäre
  {
    question: "Was für ein Lokal ist AMICIZIA?",
    answer:
      "AMICIZIA ist eine familiengeführte italienische Trattoria & Pizzeria in Saarlouis. Wir machen seit 2013 Steinofenpizza, frische Pasta und kleine Familienrezepte — kein Konzern, kein Franchise, kein Tiefkühl.",
  },
  {
    question: "Wo genau seid ihr?",
    answer:
      "Industriestraße 20, 66740 Saarlouis. Direkt zwischen Innenstadt, Roden und Fraulautern. Parkplätze sind kostenlos vor der Tür.",
  },
  // — Öffnungszeiten
  {
    question: "Wann habt ihr geöffnet?",
    answer:
      "Mo–Do: 10:00–22:00 Uhr · Fr–Sa: 10:00–23:00 Uhr · So: 11:00–22:00 Uhr. Küche bis 30 Minuten vor Schließung.",
  },
  {
    question: "Habt ihr an Feiertagen geöffnet?",
    answer:
      "An den meisten saarländischen Feiertagen ja. Ausnahmen: Heiligabend und 1. Januar. Aktuelle Hinweise immer auf unserem Instagram-Profil.",
  },
  // — Bestellung
  {
    question: "Kann ich Pizza online bestellen?",
    answer:
      "Ja, direkt über die Bestellfunktion auf der Startseite oder über /pizza-bestellen-saarlouis. Bezahlung sicher per SumUp.",
  },
  {
    question: "Liefert AMICIZIA?",
    answer:
      "Wir liefern bewusst nicht. Eine Steinofenpizza schmeckt am besten direkt aus dem Ofen — und genau das wollen wir dir liefern. Abholung in der Industriestraße 20.",
  },
  {
    question: "Wie lange dauert eine Bestellung?",
    answer:
      "In der Regel 12–15 Minuten ab Bestellung. Am Freitag- oder Samstagabend bei voller Auslastung bis ca. 25 Minuten — die Schätzung siehst du in der Bestätigung.",
  },
  // — Reservierung
  {
    question: "Wie reserviere ich einen Tisch?",
    answer:
      "Am schnellsten telefonisch. Für Gruppen oder besondere Anlässe gerne auch per E-Mail oder Instagram-DM. Mehr auf /reservierung.",
  },
  // — Karte
  {
    question: "Wo finde ich eure Speisekarte?",
    answer:
      "Komplette Karte mit Preisen und Beschreibungen auf /speisekarte.",
  },
  {
    question: "Gibt es vegetarische oder vegane Optionen?",
    answer:
      "Vegetarisch immer (Margherita, Quattro Formaggi, Vegetariana, Veggie Wrap, Ciabatta Verde). Vegan auf Anfrage: viele Pizzen lassen sich ohne Käse zubereiten.",
  },
  {
    question: "Habt ihr glutenfreie Pizza?",
    answer:
      "Aktuell nicht regelmäßig. Bei Anfragen versuchen wir, eine glutenfreie Variante anzubieten — sprich uns vorab kurz an, dann planen wir es ein.",
  },
  // — Allergene & Zutaten
  {
    question: "Wie geht ihr mit Allergien um?",
    answer:
      "Sprich uns offen darauf an, bevor du bestellst. Wir achten in der Küche darauf, Kreuzkontaminationen so weit wie möglich zu vermeiden, und kommunizieren ehrlich, wenn ein Gericht für eine bestimmte Allergie nicht geeignet ist.",
  },
  {
    question: "Welche Zutaten benutzt ihr für die Pizza?",
    answer:
      "San-Marzano-Tomaten aus Süditalien, Fior-di-Latte-Mozzarella, italienisches Olivenöl, frisches Basilikum. Der Teig reift 48 Stunden. Mehr auf /steinofen-pizza-saarlouis.",
  },
  // — Anfahrt & Parken
  {
    question: "Kann ich bei euch in der Nähe parken?",
    answer:
      "Ja, direkt vor der Tür in der Industriestraße. Keine Parkhaus-Suche, keine Bezahlpflicht.",
  },
  {
    question: "Erreiche ich euch mit den öffentlichen Verkehrsmitteln?",
    answer:
      "Ja, mehrere Saarbahn-Linien halten in der Nähe. Vom Saarlouiser Bahnhof bist du in etwa 10 Minuten zu Fuß bei uns.",
  },
  // — Zahlung
  {
    question: "Welche Zahlungsmethoden akzeptiert ihr?",
    answer:
      "Bargeld, EC, Kreditkarte, Apple Pay, Google Pay — online über SumUp, vor Ort am Tisch ebenfalls modern bezahlbar.",
  },
  // — Hunde, Kinder
  {
    question: "Sind Hunde willkommen?",
    answer:
      "Leinengeführte, ruhige Hunde im Außenbereich gerne. Im Innenraum nach Absprache.",
  },
  {
    question: "Ist AMICIZIA kinderfreundlich?",
    answer:
      "Sehr. Familiäre Atmosphäre, einfache Auswahl auf der Karte, freundliche Bedienung. Kinder fühlen sich bei uns wohl.",
  },
];

export default function FAQPage() {
  const trail = [
    { name: "Start", path: "/" },
    { name: "FAQ", path: PATH },
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
            name: "FAQ — AMICIZIA Saarlouis",
            description:
              "Häufige Fragen zur Pizzeria & Trattoria AMICIZIA in Saarlouis: Öffnungszeiten, Bestellung, Reservierung, Allergien, Anfahrt.",
          }),
          faqSchema(faq),
        ]}
      />

      <Breadcrumbs trail={trail} />

      <SubPageHero
        eyebrow="FAQ"
        title="Häufige"
        italicTail="Fragen"
        lead="Alles, was Gäste regelmäßig wissen wollen — von Öffnungszeiten bis Allergien. Fehlt etwas? Schreib uns gerne."
      />

      <FaqBlock heading="Übersicht" items={faq} />

      <section className="relative py-16 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="font-hand text-3xl text-terracotta mb-6">
            Frage nicht dabei?
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/kontakt" className="btn-terra">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      <LocalNapBlock />
      <RelatedPages path={PATH} />
      <Footer />
    </>
  );
}
