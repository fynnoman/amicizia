import type { Metadata } from "next";
import LandingShell from "@/components/landing/LandingShell";

const PATH = "/pizza-bestellen-saarlouis";
const TITLE = "Pizza bestellen Saarlouis · AMICIZIA — Vorbestellung ab 11 Uhr";
const DESCRIPTION =
  "Pizza in Saarlouis bestellen: telefonisch bei AMICIZIA unter 0162 9906068. Vorbestellung ab 11 Uhr, Abholung Industriestraße 20. Küche täglich 12–22 Uhr.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH },
};

export default function PizzaBestellenPage() {
  return (
    <LandingShell
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumbs={[
        { name: "Start", path: "/" },
        { name: "Pizza bestellen Saarlouis", path: PATH },
      ]}
      hero={{
        eyebrow: "Vorbestellung · Abholung",
        h1: "Pizza in Saarlouis bestellen — Schritt für Schritt.",
        subtitle:
          "Bei AMICIZIA in Saarlouis funktioniert die Bestellung telefonisch. Du rufst uns an, wir sagen dir eine Uhrzeit, du holst deine Pizza frisch aus dem Steinofen ab. Vorbestellung ab 11 Uhr, Küche 12–22 Uhr täglich.",
      }}
      sections={[
        {
          eyebrow: "Schritt 1",
          heading: "Anrufen: 0162 9906068",
          body: (
            <>
              <p>
                Anrufe für die Vorbestellung nehmen wir ab 11 Uhr entgegen.
                Nenne uns deinen Namen, deine Wunsch-Pizzen und die
                Wunschzeit. Wir bestätigen dir die Uhrzeit direkt am Telefon.
              </p>
              <p>
                Wenn du dir bei der Auswahl unsicher bist, sag uns worauf du
                Lust hast — wir empfehlen dir gern etwas aus unserer Karte
                mit Tradizionale, Speciale und den aktuellen Neuheiten.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Schritt 2",
          heading: "Bei uns abholen — Industriestraße 20",
          body: (
            <>
              <p>
                Zur vereinbarten Zeit ist deine Pizza fertig. Wir sind in der
                <strong> Industriestraße 20 in 66740 Saarlouis</strong>.
                Parkplätze findest du direkt vor der Tür. Aus Roden,
                Fraulautern, Lisdorf, Dillingen und Wallerfangen bist du in
                wenigen Minuten bei uns.
              </p>
              <p>
                So bleibt deine Pizza knusprig: Die Fahrt nach Hause ist kurz,
                die Kruste hat noch die Ofenhitze, der Belag bleibt am Platz.
                Bei einer Lieferung verliert die Steinofen-Kruste ihre
                Textur — deshalb setzen wir bewusst auf Abholung.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Schritt 3",
          heading: "Bezahlen wie es dir passt",
          body: (
            <>
              <p>
                Bei uns kannst du bar, mit EC-Karte, Kreditkarte, Apple Pay,
                Google Pay oder über SumUp bezahlen. Die Abrechnung erfolgt
                bei der Abholung an der Theke.
              </p>
              <p>
                Bei Fragen zu Allergenen oder Zusatzstoffen sprich uns
                direkt an, wir helfen dir gern weiter.
              </p>
            </>
          ),
        },
      ]}
      faqSlugs={[
        "Pizza bestellen",
        "Liefert AMICIZIA",
        "bezahlen",
        "geöffnet",
        "erreiche ich AMICIZIA telefonisch",
      ]}
      crossLinks={[
        {
          href: "/pizza-saarlouis",
          label: "Pizza Saarlouis (Übersicht)",
          hint: "Was wir anbieten.",
        },
        {
          href: "/speisekarte",
          label: "Speisekarte",
          hint: "Preise, Beschreibungen, Allergene.",
        },
        {
          href: "/oeffnungszeiten",
          label: "Öffnungszeiten",
          hint: "Küche und Vorbestellung.",
        },
        {
          href: "/kontakt",
          label: "Kontakt & Anfahrt",
          hint: "Adresse, Telefon, Karte.",
        },
      ]}
    />
  );
}
