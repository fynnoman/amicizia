import type { Metadata } from "next";
import LandingShell from "@/components/landing/LandingShell";

const PATH = "/pizzeria-saarlouis";
const TITLE = "Pizzeria Saarlouis · AMICIZIA — Familienbetrieb Industriestraße 20";
const DESCRIPTION =
  "AMICIZIA — Pizzeria in Saarlouis, seit 2013. Steinofen, hausgemachte Ciabatta und Pasta, tägliche Küche 12–22 Uhr. Industriestraße 20, 66740 Saarlouis.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH },
};

export default function PizzeriaSaarlouisPage() {
  return (
    <LandingShell
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumbs={[
        { name: "Start", path: "/" },
        { name: "Pizzeria Saarlouis", path: PATH },
      ]}
      hero={{
        eyebrow: "Pizzeria · Saarlouis",
        h1: "Deine Pizzeria in Saarlouis.",
        subtitle:
          "AMICIZIA ist eine familiengeführte Pizzeria in der Industriestraße 20 in Saarlouis. Seit 2013 backen wir Steinofen-Pizza, machen Ciabatta, Pizzabrötchen, Salate und Dessert selbst. Küche täglich 12–22 Uhr, Vorbestellung ab 11 Uhr.",
      }}
      sections={[
        {
          eyebrow: "Familienbetrieb",
          heading: "Eine kleine Pizzeria mit klarem Konzept",
          body: (
            <>
              <p>
                AMICIZIA wurde 2013 in Saarlouis gegründet. Inhaber Rezar hat
                über 21 Jahre Erfahrung im Handel und in der Führung eigener
                Betriebe. Aus dieser Erfahrung entstand die Idee, eine
                Pizzeria aufzubauen, in der jeder Schritt kontrolliert und in
                der eigenen Küche ausgeführt wird.
              </p>
              <p>
                Heute steht AMICIZIA für Steinofen-Pizza, hausgemachte
                Beilagen und einen geregelten Ablauf mit fester Öffnungszeit.
                Der Betrieb läuft sieben Tage die Woche mit einem festen Team
                und persönlicher Betreuung an der Theke.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Was wir anbieten",
          heading: "Karte in aller Kürze",
          body: (
            <>
              <p>
                Auf unserer Karte findest du Klassiker (Margherita, Diavola,
                Prosciutto e Funghi, Tonno, Quattro Formaggi), Spezialitäten
                (Palermo, Parma, Tartufo, Salsiccia, Gamberi, Calzone) und
                unsere aktuellen Neuheiten mit Burrata und Trüffelöl.
              </p>
              <p>
                Dazu gibt es hausgemachte Ciabatta (Burrata, Verde, Picante),
                Pizzabrötchen mit Aioli-Dip, Salate rund um Burrata,
                Süßkartoffel-Pommes mit Trüffel-Parmesan-Mayo und Dessert:
                Panzerotti mit Nutella, Bombolini mit Pistaziencreme, Pizza
                Nutella mit Erdbeeren.
              </p>
            </>
          ),
        },
        {
          eyebrow: "So findest du uns",
          heading: "Industriestraße 20, 66740 Saarlouis",
          body: (
            <>
              <p>
                Wir sind zentral in Saarlouis und schnell erreichbar aus
                Roden, Fraulautern, Lisdorf, Dillingen an der Saar,
                Saarwellingen, Wallerfangen, Bous, Ensdorf und Schwalbach.
                Parkplätze findest du direkt vor der Tür.
              </p>
              <p>
                Anrufen für die Vorbestellung ab 11 Uhr:{" "}
                <strong>0162 9906068</strong>. Küche 12–22 Uhr täglich.
              </p>
            </>
          ),
        },
      ]}
      faqSlugs={[
        "Wo befindet sich AMICIZIA",
        "geöffnet",
        "Pizza bestellen",
        "reservieren",
        "bezahlen",
      ]}
      crossLinks={[
        {
          href: "/pizza-saarlouis",
          label: "Pizza Saarlouis",
          hint: "Alle Kategorien im Überblick.",
        },
        {
          href: "/italiener-saarlouis",
          label: "Italiener in Saarlouis",
          hint: "Warum AMICIZIA ein echter Italiener ist.",
        },
        {
          href: "/oeffnungszeiten",
          label: "Öffnungszeiten",
          hint: "Küche und Vorbestellung im Detail.",
        },
        {
          href: "/kontakt",
          label: "Kontakt & Anfahrt",
          hint: "Telefon, Adresse, Route.",
        },
      ]}
    />
  );
}
