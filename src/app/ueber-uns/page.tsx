import type { Metadata } from "next";
import LandingShell from "@/components/landing/LandingShell";

const PATH = "/ueber-uns";
const TITLE = "Über uns · AMICIZIA Pizzeria Saarlouis — Familienbetrieb seit 2013";
const DESCRIPTION =
  "AMICIZIA — Familienbetrieb in Saarlouis seit 2013. Inhaber Rezar mit 21+ Jahren Betriebserfahrung. Steinofen-Pizza, Ciabatta, Pasta in der Industriestraße 20.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH },
};

export default function UeberUnsPage() {
  return (
    <LandingShell
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumbs={[
        { name: "Start", path: "/" },
        { name: "Über uns", path: PATH },
      ]}
      hero={{
        eyebrow: "Über AMICIZIA · seit 2013",
        h1: "Ein Familienbetrieb aus Saarlouis.",
        subtitle:
          "AMICIZIA wurde 2013 in Saarlouis gegründet. Inhaber Rezar bringt über 21 Jahre Erfahrung im Handel und in der Führung eigener Betriebe mit. Aus dieser Grundlage entstand die Idee einer Pizzeria mit klarer Handschrift — kontrollierte Küche, Steinofen, sauberer Ablauf.",
      }}
      sections={[
        {
          eyebrow: "Der Anfang",
          heading: "2013: Gründung in Saarlouis",
          body: (
            <>
              <p>
                AMICIZIA startete 2013 mit einem klaren Konzept: Steinofen-
                Pizza, hausgemachte Beilagen, kurze Wege in der Küche und
                eine Karte, die man mit den eigenen Händen ausführen kann.
                Nichts, was nicht in der eigenen Küche entstehen soll.
              </p>
              <p>
                Rezar hatte davor über zwei Jahrzehnte im Handel gearbeitet
                und eigene Betriebe geführt. Das prägt bis heute den Ablauf:
                Klare Verantwortlichkeiten, disziplinierter Einkauf, feste
                Öffnungszeit.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Zwischen 2015 und 2022",
          heading: "Aufbau und Konsolidierung",
          body: (
            <>
              <p>
                In den ersten Jahren wurde das Sortiment um Ciabatta und
                Wraps erweitert. Feste Abläufe und ein wiederkehrender
                Kundenstamm etablierten den Betrieb im Saarlouiser Zentrum.
              </p>
              <p>
                Zwischen 2019 und 2022 wuchs AMICIZIA kontrolliert.
                Öffnungszeiten, Einkauf und Personalstruktur wurden
                professionalisiert. Der Betrieb läuft seither zuverlässig
                sieben Tage die Woche.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Heute",
          heading: "Industriestraße 20 — Steinofen und feste Handschrift",
          body: (
            <>
              <p>
                Heute arbeitet AMICIZIA aus dem Standort in der
                Industriestraße 20 in 66740 Saarlouis. Steinofen, Küche und
                Theke sind auf den bestehenden Betriebsablauf ausgerichtet.
                Die Karte ist gewachsen — Klassiker, Speciale, Neuheiten mit
                Burrata und Trüffel, Ciabatta, Burrata-Salate, Dessert.
              </p>
              <p>
                Was gleich geblieben ist: die Handschrift. Wenige, gute
                Zutaten. Kein Konzept-Marketing. Ein Familienbetrieb, den
                du am Telefon oder an der Theke tatsächlich erreichst.
              </p>
            </>
          ),
        },
      ]}
      faqSlugs={[
        "Seit wann gibt es AMICIZIA",
        "Wo befindet sich AMICIZIA",
        "Steinofen-Pizza",
      ]}
      crossLinks={[
        {
          href: "/steinofen-pizza-saarlouis",
          label: "Steinofen-Pizza",
          hint: "Wie wir am Ofen arbeiten.",
        },
        {
          href: "/pizza-saarlouis",
          label: "Pizza Saarlouis",
          hint: "Kategorien und Standort.",
        },
        {
          href: "/speisekarte",
          label: "Speisekarte",
          hint: "Karte mit Preisen.",
        },
        {
          href: "/kontakt",
          label: "Kontakt & Anfahrt",
          hint: "So findest du uns.",
        },
      ]}
    />
  );
}
