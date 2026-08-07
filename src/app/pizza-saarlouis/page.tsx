import type { Metadata } from "next";
import LandingShell from "@/components/landing/LandingShell";

const PATH = "/pizza-saarlouis";
const TITLE = "Pizza Saarlouis · AMICIZIA — Steinofen Pizzeria seit 2013";
const DESCRIPTION =
  "Pizza in Saarlouis aus dem echten Steinofen. AMICIZIA Familienbetrieb, Industriestraße 20, seit 2013. San-Marzano-Tomaten, Fior di Latte, täglich 12–22 Uhr.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
  },
};

export default function PizzaSaarlouisPage() {
  return (
    <LandingShell
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumbs={[
        { name: "Start", path: "/" },
        { name: "Pizza Saarlouis", path: PATH },
      ]}
      hero={{
        eyebrow: "Pizzeria Saarlouis · seit 2013",
        h1: "Pizza in Saarlouis — frisch aus dem Steinofen.",
        subtitle:
          "AMICIZIA ist ein Familienbetrieb in der Industriestraße 20 in Saarlouis. Wir backen jede Pizza im echten Steinofen mit rund 400 °C, verwenden San-Marzano-DOP-Tomaten, Fior di Latte und italienisches Olivenöl. Küche täglich 12–22 Uhr, Vorbestellung zur Abholung ab 11 Uhr.",
      }}
      sections={[
        {
          eyebrow: "So schmeckt Pizza in Saarlouis",
          heading: "Was unsere Pizza ausmacht",
          body: (
            <>
              <p>
                Wir arbeiten mit einer klaren Regel: Wenige, sehr gute Zutaten
                und ausreichend Zeit. Der Teig ruht bei uns lang genug, damit er
                bekömmlich wird und beim Backen die typische Blase am Rand
                bildet. Der Steinofen gibt jeder Pizza die charakteristischen
                Röstpunkte und einen leicht rauchigen Geschmack.
              </p>
              <p>
                Auf der Karte findest du drei Kategorien: <em>Tradizionale</em>{" "}
                für Klassiker wie Margherita, Diavola und Prosciutto e Funghi,{" "}
                <em>Speciale</em> für unsere Küchen-Spezialitäten wie Palermo,
                Parma und Tartufo und die aktuellen <em>Neuheiten</em> wie
                Alba, Rossa, Verde Chiaro, Basilico, Sole und Bosco.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Für wen wir da sind",
          heading: "Pizza für Saarlouis und Umgebung",
          body: (
            <>
              <p>
                Der Standort in der Industriestraße 20 ist zentral erreichbar
                aus Roden, Fraulautern, Lisdorf, Beaumarais, Neuforweiler,
                Dillingen an der Saar, Wallerfangen, Saarwellingen, Bous,
                Ensdorf und Schwalbach. Wer aus dem Umland kommt, findet direkt
                vor der Tür Parkplätze.
              </p>
              <p>
                Wir arbeiten als Abhol-Pizzeria: Du rufst an, wir sagen dir
                eine Uhrzeit, und die Pizza ist frisch fertig, wenn du bei uns
                bist. So bleibt die Kruste knusprig und der Belag heiß —
                genauso wie er aus dem Ofen kommt.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Direkt bestellen",
          heading: "So kommst du an deine Pizza",
          body: (
            <>
              <p>
                Bestellungen zur Abholung nehmen wir ab 11 Uhr telefonisch
                entgegen unter <strong>0162 9906068</strong>. Nenne einfach
                Namen, Pizzawünsche und eine Wunschzeit — den Rest erledigen
                wir.
              </p>
              <p>
                Bezahlen kannst du bei Abholung bar, mit EC-Karte,
                Kreditkarte, Apple Pay, Google Pay oder über SumUp. Allergene
                sind auf jeder Position der Karte gekennzeichnet.
              </p>
            </>
          ),
        },
      ]}
      faqSlugs={[
        "Pizza bestellen",
        "geöffnet",
        "kostet eine Pizza",
        "Steinofen-Pizza",
        "vegetarische",
      ]}
      crossLinks={[
        {
          href: "/steinofen-pizza-saarlouis",
          label: "Steinofen-Pizza in Saarlouis",
          hint: "Wie wir den Ofen führen — Hitze, Zeit, Röstung.",
        },
        {
          href: "/pizza-bestellen-saarlouis",
          label: "Pizza bestellen in Saarlouis",
          hint: "Ablauf, Zeiten, Zahlungsarten.",
        },
        {
          href: "/beste-pizza-saarlouis",
          label: "Beste Pizza in Saarlouis",
          hint: "Warum Gäste seit 2013 wiederkommen.",
        },
        {
          href: "/speisekarte",
          label: "Speisekarte AMICIZIA",
          hint: "Alle Pizzen, Preise und Beschreibungen.",
        },
      ]}
    />
  );
}
