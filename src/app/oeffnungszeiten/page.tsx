import type { Metadata } from "next";
import LandingShell from "@/components/landing/LandingShell";
import { BUSINESS } from "@/data/business";

const PATH = "/oeffnungszeiten";
const TITLE = "Öffnungszeiten · AMICIZIA Pizzeria Saarlouis";
const DESCRIPTION =
  "Öffnungszeiten AMICIZIA Saarlouis: Küche täglich 12–22 Uhr, Vorbestellung ab 11 Uhr. Industriestraße 20, 66740 Saarlouis. Telefon 0162 9906068.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH },
};

export default function OeffnungszeitenPage() {
  return (
    <LandingShell
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumbs={[
        { name: "Start", path: "/" },
        { name: "Öffnungszeiten", path: PATH },
      ]}
      hero={{
        eyebrow: "Öffnungszeiten · AMICIZIA",
        h1: "Wann AMICIZIA in Saarlouis geöffnet hat.",
        subtitle:
          "Die Küche von AMICIZIA hat täglich von 12:00 bis 22:00 Uhr geöffnet — Montag bis Sonntag. Telefonische Vorbestellung zur Abholung nehmen wir bereits ab 11:00 Uhr entgegen.",
      }}
      sections={[
        {
          eyebrow: "Küche",
          heading: "12:00 – 22:00 Uhr täglich",
          body: (
            <ul className="grid sm:grid-cols-2 gap-2">
              {BUSINESS.hours.weekdayText.map((d) => (
                <li
                  key={d}
                  className="border-l border-terracotta/50 pl-3 font-display italic text-espresso"
                >
                  {d}
                </li>
              ))}
            </ul>
          ),
        },
        {
          eyebrow: "Vorbestellung",
          heading: "Anrufe ab 11:00 Uhr",
          body: (
            <>
              <p>
                Wenn du vorbestellen möchtest, ruf uns ab 11 Uhr an unter{" "}
                <strong>0162 9906068</strong>. Wir nehmen deine Bestellung
                auf und sagen dir eine Uhrzeit für die Abholung.
              </p>
              <p>
                So können wir die Reihenfolge am Ofen planen und deine Pizza
                ist pünktlich fertig. Kurzfristige Bestellungen während der
                Öffnungszeit sind natürlich möglich — wir sagen dir dann eine
                realistische Zeit.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Feiertage & Ausnahmen",
          heading: "Regelbetrieb sieben Tage die Woche",
          body: (
            <>
              <p>
                AMICIZIA arbeitet grundsätzlich täglich, auch am Wochenende.
                An gesetzlichen Feiertagen können die Zeiten abweichen — im
                Zweifelsfall ruf kurz an oder schau auf unserem Instagram-Kanal
                @amicizia.saarlouis vorbei.
              </p>
            </>
          ),
        },
      ]}
      faqSlugs={["geöffnet", "erreiche ich AMICIZIA telefonisch", "Pizza bestellen"]}
      crossLinks={[
        {
          href: "/kontakt",
          label: "Kontakt & Anfahrt",
          hint: "Adresse, Telefon, Google Maps.",
        },
        {
          href: "/pizza-bestellen-saarlouis",
          label: "Pizza bestellen",
          hint: "Ablauf, Zahlung, Wartezeit.",
        },
        {
          href: "/reservierung",
          label: "Reservierung",
          hint: "Sitzplätze telefonisch.",
        },
        {
          href: "/speisekarte",
          label: "Speisekarte",
          hint: "Alle Positionen mit Preisen.",
        },
      ]}
      showQuickFacts={false}
    />
  );
}
