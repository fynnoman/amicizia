import type { Metadata } from "next";
import LandingShell from "@/components/landing/LandingShell";

const PATH = "/italiener-saarlouis";
const TITLE = "Italiener in Saarlouis · AMICIZIA — Familienbetrieb seit 2013";
const DESCRIPTION =
  "Italiener in Saarlouis: AMICIZIA. Familienbetrieb in der Industriestraße 20, Steinofen-Pizza, Pasta, Ciabatta und italienische Klassiker. Küche 12–22 Uhr täglich.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH },
};

export default function ItalienerSaarlouisPage() {
  return (
    <LandingShell
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumbs={[
        { name: "Start", path: "/" },
        { name: "Italiener Saarlouis", path: PATH },
      ]}
      hero={{
        eyebrow: "Italiener · Saarlouis",
        h1: "Ein Italiener in Saarlouis, seit 2013.",
        subtitle:
          "AMICIZIA ist ein italienischer Familienbetrieb in der Industriestraße 20 in Saarlouis. Wir backen im Steinofen, arbeiten mit italienischen Grundzutaten wie San-Marzano-Tomaten, Fior di Latte, Burrata und italienischem Olivenöl. Küche täglich 12–22 Uhr.",
      }}
      sections={[
        {
          eyebrow: "Italienische Küche",
          heading: "Was uns italienisch macht",
          body: (
            <>
              <p>
                Wir arbeiten nach italienischer Küchen-Logik: Wenige, sehr
                gute Zutaten, kurze Wege, klar erkennbare Aromen. Statt langer
                Karte mit vielen Kompromissen konzentrieren wir uns auf das,
                was wir gut können: Steinofen-Pizza, Ciabatta, Pasta,
                Burrata-Salate und Dessert.
              </p>
              <p>
                Der Steinofen ist das Herzstück. Er sorgt für die typische
                Kruste und den leicht rauchigen Geschmack, den man nur mit
                sehr hoher Hitze bekommt. Alles, was danach auf die Pizza
                kommt — Rucola, Burrata, Parmaschinken, Pistazien — bleibt
                frisch.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Familienbetrieb",
          heading: "Kein Kettenrestaurant",
          body: (
            <>
              <p>
                AMICIZIA ist kein Franchise und keine Kette. Der Betrieb wird
                seit 2013 in Saarlouis geführt, mit einem festen Team an der
                Theke und in der Küche. Wenn du bei uns bestellst, sprichst
                du mit jemandem, der die Karte kennt und der jede Pizza
                selbst sieht, bevor sie rausgeht.
              </p>
              <p>
                Wir kennen viele unserer Gäste beim Namen. Rezar und das
                Team stehen fast täglich selbst am Ofen. Das ist einer der
                Gründe, warum die Qualität konstant bleibt.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Für die Region",
          heading: "Italienische Küche für Saarlouis und Umland",
          body: (
            <>
              <p>
                Aus Saarlouis-Stadt bist du in wenigen Minuten bei uns. Auch
                aus Roden, Fraulautern, Lisdorf, Dillingen an der Saar,
                Wallerfangen, Saarwellingen, Bous, Ensdorf, Schwalbach und
                Rehlingen-Siersburg kommen Gäste regelmäßig zur Abholung.
              </p>
              <p>
                Ruf uns an unter <strong>0162 9906068</strong>, sag deinen
                Namen und Wünsche, wähle eine Zeit — bei uns kannst du frisch
                abholen, ohne Wartezeit.
              </p>
            </>
          ),
        },
      ]}
      faqSlugs={[
        "Wo befindet sich AMICIZIA",
        "Steinofen-Pizza",
        "vegetarische",
        "geöffnet",
      ]}
      crossLinks={[
        {
          href: "/italienisches-restaurant-saarlouis",
          label: "Italienisches Restaurant Saarlouis",
          hint: "Was uns als Restaurant ausmacht.",
        },
        {
          href: "/trattoria-saarlouis",
          label: "Trattoria in Saarlouis",
          hint: "Der familiäre Rahmen einer Trattoria.",
        },
        {
          href: "/italienisch-essen-saarlouis",
          label: "Italienisch essen in Saarlouis",
          hint: "Karte und Preise auf einen Blick.",
        },
        {
          href: "/pizza-saarlouis",
          label: "Pizza in Saarlouis",
          hint: "Fokus auf unsere Pizzen.",
        },
      ]}
    />
  );
}
