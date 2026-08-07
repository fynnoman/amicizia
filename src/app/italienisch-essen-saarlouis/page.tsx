import type { Metadata } from "next";
import LandingShell from "@/components/landing/LandingShell";

const PATH = "/italienisch-essen-saarlouis";
const TITLE = "Italienisch essen in Saarlouis · AMICIZIA";
const DESCRIPTION =
  "Italienisch essen in Saarlouis: Steinofen-Pizza, Ciabatta, Burrata-Salate und Pasta bei AMICIZIA. Familienbetrieb, Industriestraße 20, täglich 12–22 Uhr.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH },
};

export default function ItalEssenPage() {
  return (
    <LandingShell
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumbs={[
        { name: "Start", path: "/" },
        { name: "Italienisch essen Saarlouis", path: PATH },
      ]}
      hero={{
        eyebrow: "Italienisch essen · Saarlouis",
        h1: "Italienisch essen in Saarlouis.",
        subtitle:
          "Wer in Saarlouis italienisch essen möchte — Pizza, Ciabatta, Pasta, Salate mit Burrata und Dessert — findet bei AMICIZIA einen Familienbetrieb, der seit 2013 nach klarer italienischer Küchen-Logik arbeitet. Industriestraße 20, Küche täglich 12–22 Uhr.",
      }}
      sections={[
        {
          eyebrow: "Karte im Überblick",
          heading: "Was du bei uns essen kannst",
          body: (
            <>
              <p>
                <strong>Pizza aus dem Steinofen:</strong> Klassiker (Margherita
                13 €, Diavola 14 €, Prosciutto e Funghi 14 €), Spezialitäten
                (Parma 16,90 €, Tartufo 17 €, Salsiccia 15,90 €) und
                Neuheiten (einheitlich 15,90 €).
              </p>
              <p>
                <strong>Ciabatta:</strong> Burrata mit Mortadella und
                Pistazien (13,50 €), Verde mit Mozzarella und Basilikum
                (9,90 €), Picante mit scharfer Salami (10,90 €).
              </p>
              <p>
                <strong>Salate:</strong> Burrata Exotica, Verde und Rossa —
                einheitlich 14,90 €. <strong>Pasta:</strong> Carbonara mit
                Sahnesauce, Eigelb, Speck und Parmesan (13,90 €).
              </p>
              <p>
                <strong>Dessert:</strong> Panzerotti (Nutella-Teigtaschen),
                Bombolini (Pistazien-Teigbällchen), Pizza Nutella mit
                Erdbeeren — einheitlich 10,90 €.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Für welchen Anlass",
          heading: "Ob spontan oder geplant",
          body: (
            <>
              <p>
                Ob du nach der Arbeit noch schnell eine Pizza mitnehmen
                möchtest, mit der Familie einen Freitag genießt oder eine
                größere Gruppe für ein Ciabatta-Salat-Menü zusammenholst —
                die Karte deckt es ab. Für die Gruppen-Bestellung meld dich
                gern etwas früher, dann können wir die Reihenfolge planen.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Wie es weitergeht",
          heading: "Anrufen und abholen",
          body: (
            <>
              <p>
                Wenn du italienisch essen willst, ohne zu warten: Ruf uns
                unter <strong>0162 9906068</strong> ab 11 Uhr an. Wir sagen
                dir eine Uhrzeit, du holst frisch aus dem Ofen in der
                Industriestraße 20 ab.
              </p>
            </>
          ),
        },
      ]}
      faqSlugs={[
        "kostet eine Pizza",
        "vegetarische",
        "bezahlen",
        "Pizza bestellen",
      ]}
      crossLinks={[
        {
          href: "/speisekarte",
          label: "Speisekarte",
          hint: "Komplette Karte mit Preisen.",
        },
        {
          href: "/italiener-saarlouis",
          label: "Italiener Saarlouis",
          hint: "Der Familienbetrieb hinter der Karte.",
        },
        {
          href: "/pizza-saarlouis",
          label: "Pizza Saarlouis",
          hint: "Fokus auf unsere Pizzen.",
        },
        {
          href: "/oeffnungszeiten",
          label: "Öffnungszeiten",
          hint: "Küche und Vorbestellung.",
        },
      ]}
    />
  );
}
