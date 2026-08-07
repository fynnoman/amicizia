import type { Metadata } from "next";
import LandingShell from "@/components/landing/LandingShell";

const PATH = "/reservierung";
const TITLE = "Reservierung · AMICIZIA Pizzeria Saarlouis";
const DESCRIPTION =
  "Reservierung bei AMICIZIA in Saarlouis: telefonisch unter 0162 9906068. Sitzplätze, Gruppen, Vorbestellung zur Abholung. Küche täglich 12–22 Uhr.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH },
};

export default function ReservierungPage() {
  return (
    <LandingShell
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumbs={[
        { name: "Start", path: "/" },
        { name: "Reservierung", path: PATH },
      ]}
      hero={{
        eyebrow: "Reservierung · Sitzplätze",
        h1: "Reservieren bei AMICIZIA in Saarlouis.",
        subtitle:
          "Reservierungen für Sitzplätze koordinieren wir am liebsten telefonisch. Ruf uns an unter 0162 9906068 — wir sagen dir, was möglich ist und was zu deinem Wunschzeitpunkt passt.",
      }}
      sections={[
        {
          eyebrow: "So funktioniert es",
          heading: "Kurz anrufen, Zeit vereinbaren",
          body: (
            <>
              <p>
                Sag uns am Telefon deinen Namen, die Anzahl der Personen und
                deinen Wunschzeitpunkt. Wir schauen, ob es passt, und
                bestätigen dir direkt einen Platz.
              </p>
              <p>
                Für größere Gruppen bitten wir um etwas Vorlauf, damit wir
                den Ablauf in der Küche gut planen können. Für kleine
                Runden reicht meist ein Anruf am selben Tag.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Abholung ohne Reservierung",
          heading: "Vorbestellung reicht",
          body: (
            <>
              <p>
                Wenn du nur zur Abholung kommst, ist keine Reservierung
                nötig. Ein Anruf ab 11 Uhr für die Vorbestellung reicht —
                zur vereinbarten Zeit ist deine Pizza fertig. Details dazu
                findest du auf der Seite{" "}
                <em>„Pizza bestellen Saarlouis&ldquo;</em>.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Wichtig",
          heading: "Absagen: bitte kurz Bescheid geben",
          body: (
            <>
              <p>
                Wenn sich etwas ändert, sag uns bitte kurz Bescheid, damit
                wir den Platz freigeben können. Das hilft uns und den
                anderen Gästen. Danke.
              </p>
            </>
          ),
        },
      ]}
      faqSlugs={["reservieren", "erreiche ich AMICIZIA telefonisch", "geöffnet"]}
      crossLinks={[
        {
          href: "/kontakt",
          label: "Kontakt & Anfahrt",
          hint: "Adresse, Telefon, Route.",
        },
        {
          href: "/pizza-bestellen-saarlouis",
          label: "Pizza bestellen",
          hint: "Ablauf für die Abholung.",
        },
        {
          href: "/oeffnungszeiten",
          label: "Öffnungszeiten",
          hint: "Küche und Vorbestellung.",
        },
        {
          href: "/speisekarte",
          label: "Speisekarte",
          hint: "Karte mit Preisen.",
        },
      ]}
    />
  );
}
