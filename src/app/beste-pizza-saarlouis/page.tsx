import type { Metadata } from "next";
import LandingShell from "@/components/landing/LandingShell";

const PATH = "/beste-pizza-saarlouis";
const TITLE = "Beste Pizza Saarlouis · AMICIZIA — was Gäste seit 2013 schätzen";
const DESCRIPTION =
  "Beste Pizza in Saarlouis? Was Gäste an AMICIZIA schätzen: Steinofen, San-Marzano-Tomaten, langer Teig, Familienbetrieb seit 2013. Industriestraße 20, täglich 12–22 Uhr.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH },
};

export default function BestePizzaPage() {
  return (
    <LandingShell
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumbs={[
        { name: "Start", path: "/" },
        { name: "Beste Pizza Saarlouis", path: PATH },
      ]}
      hero={{
        eyebrow: "Warum Gäste wiederkommen",
        h1: "Was für viele die beste Pizza in Saarlouis ist.",
        subtitle:
          "„Beste Pizza“ ist eine persönliche Frage. Was wir sagen können: Seit 2013 kommen viele Gäste in Saarlouis regelmäßig zu AMICIZIA — für den Steinofen, für die Zutaten, für die klare Karte. Das sind die Faktoren, die immer wieder genannt werden.",
      }}
      sections={[
        {
          eyebrow: "Faktor 1",
          heading: "Der Steinofen macht die Kruste",
          body: (
            <>
              <p>
                Der Steinofen bei rund 400 °C gart die Pizza in wenigen
                Minuten. Der Rand wird luftig, die Unterseite bekommt die
                charakteristischen Röstflecken, der Belag verliert nicht seine
                Textur. Das ist die Grundlage jeder guten Pizza — und der
                Punkt, den unsere Gäste in Bewertungen am häufigsten
                erwähnen.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Faktor 2",
          heading: "Zutaten mit klarer Herkunft",
          body: (
            <>
              <p>
                Wir verwenden San-Marzano-DOP-Tomaten aus dem Süden Italiens,
                Fior-di-Latte-Mozzarella, italienisches Olivenöl, Burrata für
                die Spezialitäten und italienische Bratwurst für Salsiccia
                und Friarelli Kombi. Rucola, Basilikum und Parmesan kommen
                immer erst nach dem Ofen dazu.
              </p>
              <p>
                Auf einer klaren Karte funktioniert das. Wir verzichten
                bewusst auf zwanzig Varianten desselben Prinzips und
                fokussieren uns auf das, was wir sauber ausführen können.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Faktor 3",
          heading: "Konstant seit 2013",
          body: (
            <>
              <p>
                AMICIZIA gibt es seit über zwölf Jahren in Saarlouis. Die
                Karte und der Ablauf haben sich in dieser Zeit nur behutsam
                geändert. Wer 2013 schon bei uns war, bekommt die Margherita
                heute in derselben Qualität. Das ist unser Anspruch.
              </p>
              <p>
                Wenn du selbst probieren möchtest, warum viele in der Region
                AMICIZIA als „beste Pizza in Saarlouis&ldquo; nennen: Ruf an
                unter <strong>0162 9906068</strong>. Wir freuen uns.
              </p>
            </>
          ),
        },
      ]}
      faqSlugs={[
        "Steinofen-Pizza",
        "vegetarische",
        "Pizza bestellen",
        "Wo befindet sich AMICIZIA",
      ]}
      crossLinks={[
        {
          href: "/steinofen-pizza-saarlouis",
          label: "Steinofen-Pizza in Saarlouis",
          hint: "So arbeiten wir am Ofen.",
        },
        {
          href: "/pizza-saarlouis",
          label: "Pizza Saarlouis",
          hint: "Alle Kategorien und Standort.",
        },
        {
          href: "/ueber-uns",
          label: "Über AMICIZIA",
          hint: "Die Geschichte seit 2013.",
        },
        {
          href: "/speisekarte",
          label: "Zur Speisekarte",
          hint: "Preise und Beschreibungen.",
        },
      ]}
    />
  );
}
