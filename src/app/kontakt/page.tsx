import type { Metadata } from "next";
import LandingShell from "@/components/landing/LandingShell";

const PATH = "/kontakt";
const TITLE = "Kontakt · AMICIZIA Pizzeria Saarlouis";
const DESCRIPTION =
  "Kontakt AMICIZIA Saarlouis: 0162 9906068, Industriestraße 20, 66740 Saarlouis. Vorbestellung ab 11 Uhr, Küche 12–22 Uhr täglich. Direkte Anfahrt mit Google Maps.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH },
};

export default function KontaktPage() {
  return (
    <LandingShell
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumbs={[
        { name: "Start", path: "/" },
        { name: "Kontakt", path: PATH },
      ]}
      hero={{
        eyebrow: "Kontakt · Anfahrt",
        h1: "So erreichst du AMICIZIA in Saarlouis.",
        subtitle:
          "AMICIZIA — Pizzeria in der Industriestraße 20, 66740 Saarlouis. Telefonische Bestellung und Vorbestellung ab 11 Uhr unter 0162 9906068. Küche täglich 12–22 Uhr.",
      }}
      sections={[
        {
          eyebrow: "Telefon",
          heading: "Anrufen: 0162 9906068",
          body: (
            <>
              <p>
                Bestellungen zur Abholung nehmen wir telefonisch entgegen — ab
                11 Uhr für die Vorbestellung, während der Öffnungszeit von
                12 bis 22 Uhr für kurzfristige Bestellungen und Fragen.
              </p>
              <p>
                Bei Reservierungswünschen für Sitzplätze ruf uns bitte
                ebenfalls an, wir richten uns nach dir.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Adresse",
          heading: "Industriestraße 20, 66740 Saarlouis",
          body: (
            <>
              <p>
                Wir sind zentral in Saarlouis. Aus Roden, Fraulautern,
                Lisdorf, Beaumarais, Dillingen an der Saar, Saarwellingen,
                Wallerfangen, Bous, Ensdorf, Schwalbach und Rehlingen-
                Siersburg bist du in wenigen Minuten bei uns.
              </p>
              <p>
                Parkplätze findest du direkt vor der Tür. Für die Route mit
                Google Maps klicke unten auf „Route zur Industriestraße 20&ldquo;.
              </p>
            </>
          ),
        },
        {
          eyebrow: "E-Mail & Social",
          heading: "Weitere Kanäle",
          body: (
            <>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:ciao@amicizia-pizza.de"
                  className="text-terracotta underline-offset-4 hover:underline"
                >
                  ciao@amicizia-pizza.de
                </a>
                <br />
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/amicizia.saarlouis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terracotta underline-offset-4 hover:underline"
                >
                  @amicizia.saarlouis
                </a>
                <br />
                Website: <strong>amicizia-pizza.de</strong>
              </p>
              <p>
                Für schnelle Rückmeldung ruf uns bitte direkt an. E-Mails
                lesen wir außerhalb der Küchenzeiten.
              </p>
            </>
          ),
        },
      ]}
      faqSlugs={[
        "erreiche ich AMICIZIA telefonisch",
        "Wo befindet sich AMICIZIA",
        "geöffnet",
      ]}
      crossLinks={[
        {
          href: "/oeffnungszeiten",
          label: "Öffnungszeiten",
          hint: "Küche und Vorbestellung im Detail.",
        },
        {
          href: "/reservierung",
          label: "Reservierung",
          hint: "Sitzplätze telefonisch anfragen.",
        },
        {
          href: "/pizza-bestellen-saarlouis",
          label: "Pizza bestellen",
          hint: "Ablauf, Zeiten, Zahlungsarten.",
        },
        {
          href: "/",
          label: "Startseite",
          hint: "Zurück zur Übersicht.",
        },
      ]}
    />
  );
}
