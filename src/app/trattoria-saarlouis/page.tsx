import type { Metadata } from "next";
import LandingShell from "@/components/landing/LandingShell";

const PATH = "/trattoria-saarlouis";
const TITLE = "Trattoria in Saarlouis · AMICIZIA — Familienbetrieb seit 2013";
const DESCRIPTION =
  "Trattoria in Saarlouis: AMICIZIA. Familiäre italienische Küche, Steinofen-Pizza, Ciabatta, Pasta. Industriestraße 20, täglich 12–22 Uhr, Vorbestellung ab 11 Uhr.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH },
};

export default function TrattoriaPage() {
  return (
    <LandingShell
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumbs={[
        { name: "Start", path: "/" },
        { name: "Trattoria Saarlouis", path: PATH },
      ]}
      hero={{
        eyebrow: "Trattoria · Saarlouis",
        h1: "Eine Trattoria in Saarlouis, geführt von Familie.",
        subtitle:
          "Eine Trattoria ist in Italien der familiäre Gasthof — kürzer als ein Restaurant, ehrlicher, mit fester Handschrift. So verstehen wir AMICIZIA. In der Industriestraße 20 in Saarlouis. Seit 2013.",
      }}
      sections={[
        {
          eyebrow: "Was eine Trattoria ausmacht",
          heading: "Zwischen Restaurant und Zuhause",
          body: (
            <>
              <p>
                Die Trattoria in Italien liegt zwischen Restaurant und
                Familienküche. Kurze Karte, feste Handschrift, meist inhaber-
                geführt, oft über viele Jahre in denselben Händen. Kein
                Chichi, keine langen Rituale — dafür Konstanz und
                Ehrlichkeit.
              </p>
              <p>
                Genau in diesem Sinne arbeiten wir. Unsere Karte wechselt
                nicht ständig. Was neu ist, wird sorgfältig integriert
                (siehe unsere Neuheiten: Alba, Rossa, Verde Chiaro, Basilico,
                Sole, Bosco). Der Kern bleibt.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Das Team",
          heading: "Rezar und die Küche seit 2013",
          body: (
            <>
              <p>
                Inhaber Rezar bringt über 21 Jahre Handels- und Betriebs-
                Erfahrung mit. Aus dieser Grundlage entstand die
                Entscheidung, eine eigene Trattoria zu führen — nicht als
                Konzept, sondern als Beruf. Das Team an der Theke und in der
                Küche arbeitet seit Jahren zusammen.
              </p>
              <p>
                Das merkt man am Ablauf: Bestellungen laufen sauber, die
                Pizza kommt pünktlich, die Zutaten stimmen. Für uns ist das
                die Definition von guter Trattoria-Arbeit.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Für dich",
          heading: "Was du bekommst",
          body: (
            <>
              <p>
                Steinofen-Pizza mit dünnem, luftigem Rand. Ciabatta mit
                Burrata und Mortadella, Verde mit Mozzarella und Basilikum,
                Picante mit scharfer Salami. Pasta Carbonara. Burrata-Salate
                mit Mango, Avocado, Granatapfel. Süßkartoffel-Pommes mit
                Trüffel-Parmesan-Mayo. Dessert mit Panzerotti, Bombolini
                und Pizza Nutella.
              </p>
              <p>
                Wenn du gern kommst, ruf vorher an unter{" "}
                <strong>0162 9906068</strong>. So haben wir Zeit für dich
                und deine Bestellung.
              </p>
            </>
          ),
        },
      ]}
      faqSlugs={[
        "reservieren",
        "Wo befindet sich AMICIZIA",
        "geöffnet",
        "vegetarische",
      ]}
      crossLinks={[
        {
          href: "/italienisches-restaurant-saarlouis",
          label: "Italienisches Restaurant Saarlouis",
          hint: "Karte, Standort, Team.",
        },
        {
          href: "/italiener-saarlouis",
          label: "Italiener in Saarlouis",
          hint: "Warum AMICIZIA ein echter Italiener ist.",
        },
        {
          href: "/ueber-uns",
          label: "Über AMICIZIA",
          hint: "Die Geschichte seit 2013.",
        },
        {
          href: "/speisekarte",
          label: "Speisekarte",
          hint: "Alle Gerichte mit Preisen.",
        },
      ]}
    />
  );
}
