import type { Metadata } from "next";
import LandingShell from "@/components/landing/LandingShell";

const PATH = "/italienisches-restaurant-saarlouis";
const TITLE = "Italienisches Restaurant Saarlouis · AMICIZIA";
const DESCRIPTION =
  "Italienisches Restaurant in Saarlouis: AMICIZIA in der Industriestraße 20. Pizza aus dem Steinofen, Ciabatta, Salate. Küche täglich 12–22 Uhr, Vorbestellung ab 11 Uhr.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH },
};

export default function ItalRestaurantPage() {
  return (
    <LandingShell
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumbs={[
        { name: "Start", path: "/" },
        { name: "Italienisches Restaurant Saarlouis", path: PATH },
      ]}
      hero={{
        eyebrow: "Italienisches Restaurant · Saarlouis",
        h1: "Italienisches Restaurant in Saarlouis.",
        subtitle:
          "AMICIZIA ist ein italienisches Restaurant in der Industriestraße 20 in Saarlouis. Wir arbeiten als Familienbetrieb, backen im Steinofen und servieren italienische Klassiker — von der Margherita bis zur Burrata-Ciabatta. Küche täglich 12–22 Uhr.",
      }}
      sections={[
        {
          eyebrow: "Konzept",
          heading: "Ein Restaurant mit klarer Handschrift",
          body: (
            <>
              <p>
                Wir sind kein Riesen-Restaurant, sondern eine familiäre
                Pizzeria mit Trattoria-Charakter. Die Karte ist bewusst kurz
                gehalten: Pizza aus dem Steinofen, Ciabatta, Pizzabrötchen,
                Salate, Pasta, Dessert. Alles auf einem Niveau, das wir
                jeden Tag halten können.
              </p>
              <p>
                Was du auf der Karte findest, kannst du auch schmecken:
                San-Marzano-Tomaten, Fior di Latte, Burrata, italienisches
                Olivenöl, Parmaschinken, Bratwurst nach italienischer Art —
                die Zutaten sind der Grund, warum die einfachsten Gerichte
                bei uns besonders gut funktionieren.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Für Gruppen",
          heading: "Gäste, Familien, Nachbarschaft",
          body: (
            <>
              <p>
                Zum italienischen Restaurant gehört für uns die persönliche
                Atmosphäre. Viele unserer Gäste kommen seit Jahren, ganze
                Familien kennen den Ablauf. Wenn du mit einer größeren Gruppe
                kommst, ruf gern vorher an — wir richten uns nach dir.
              </p>
              <p>
                Reservierungen für Sitzplätze koordinieren wir am besten
                telefonisch. Für die Vorbestellung zur Abholung reicht ein
                Anruf ab 11 Uhr.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Standort",
          heading: "Industriestraße 20 in Saarlouis",
          body: (
            <>
              <p>
                Der Standort ist zentral in Saarlouis. Parkplätze findest du
                direkt vor der Tür. Aus Roden, Fraulautern, Lisdorf,
                Dillingen an der Saar, Wallerfangen, Saarwellingen und
                weiter aus dem Umland bist du in wenigen Minuten bei uns.
              </p>
              <p>
                Küche 12–22 Uhr, Vorbestellung ab 11 Uhr. Telefon:{" "}
                <strong>0162 9906068</strong>.
              </p>
            </>
          ),
        },
      ]}
      faqSlugs={[
        "reservieren",
        "Wo befindet sich AMICIZIA",
        "geöffnet",
        "bezahlen",
      ]}
      crossLinks={[
        {
          href: "/trattoria-saarlouis",
          label: "Trattoria in Saarlouis",
          hint: "Wie sich Trattoria von Restaurant unterscheidet.",
        },
        {
          href: "/italiener-saarlouis",
          label: "Italiener in Saarlouis",
          hint: "Der Familienbetrieb hinter der Karte.",
        },
        {
          href: "/reservierung",
          label: "Reservierung",
          hint: "Sitzplätze anfragen — so geht's.",
        },
        {
          href: "/speisekarte",
          label: "Speisekarte",
          hint: "Alle Positionen mit Preisen.",
        },
      ]}
    />
  );
}
