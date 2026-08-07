import type { Metadata } from "next";
import LandingShell from "@/components/landing/LandingShell";

const PATH = "/steinofen-pizza-saarlouis";
const TITLE = "Steinofen Pizza Saarlouis · AMICIZIA — 400 °C, echter Ofen";
const DESCRIPTION =
  "Steinofen Pizza in Saarlouis bei AMICIZIA. Echter Steinofen mit ca. 400 °C, lang geführter Teig, San-Marzano-Tomaten. Industriestraße 20, täglich 12–22 Uhr.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH },
};

export default function SteinofenPizzaPage() {
  return (
    <LandingShell
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      breadcrumbs={[
        { name: "Start", path: "/" },
        { name: "Steinofen Pizza Saarlouis", path: PATH },
      ]}
      hero={{
        eyebrow: "Steinofen · Saarlouis",
        h1: "Steinofen-Pizza in Saarlouis.",
        subtitle:
          "Bei AMICIZIA in Saarlouis backen wir jede Pizza im echten Steinofen. Rund 400 °C Oberhitze, ein Teig der lange ruht und Zutaten, die wir nach der italienischen Küche auswählen — das ist die Grundlage für die Kruste, die du bei uns bekommst.",
      }}
      sections={[
        {
          eyebrow: "Der Ofen",
          heading: "Warum ein echter Steinofen den Unterschied macht",
          body: (
            <>
              <p>
                Der Steinofen erzeugt eine sehr hohe, gleichmäßige Hitze. Die
                Pizza gart deshalb in wenigen Minuten. Die Kruste wird außen
                knusprig, bleibt innen locker und bekommt die typischen kleinen
                Röststellen am Rand — auf Italienisch „leopardato&ldquo;. Ein
                gewöhnlicher Deckenofen erreicht diese Textur nicht.
              </p>
              <p>
                Genauso wichtig wie die Temperatur ist die kurze Zeit. Wir
                arbeiten pro Pizza einzeln, damit jede das gleiche Hitzeprofil
                bekommt. Deshalb ist die Vorbestellung ab 11 Uhr sinnvoll: Wir
                können deinen Wunschtermin sauber planen.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Der Teig",
          heading: "Lang geführter Teig, wenige Zutaten",
          body: (
            <>
              <p>
                Unser Teig besteht aus Mehl, Wasser, Salz und Hefe — mehr
                braucht es nicht. Die Ruhezeit sorgt dafür, dass er bekömmlich
                wird und beim Backen die charakteristische, luftige Blase am
                Rand („cornicione&ldquo;) bildet.
              </p>
              <p>
                Wir formen jede Pizza von Hand aus. Kein Ausrollen, keine
                Maschine. Das erhält die Luft im Rand und lässt der Pizza ihre
                natürliche, leicht unregelmäßige Form.
              </p>
            </>
          ),
        },
        {
          eyebrow: "Die Zutaten",
          heading: "San Marzano, Fior di Latte, gutes Öl",
          body: (
            <>
              <p>
                Auf die Basis kommt bei uns San-Marzano-DOP-Tomate — eine
                Sorte aus dem Süden Italiens, die für ihre milde Süße und
                geringe Säure bekannt ist. Als Käse verwenden wir Fior di
                Latte (Kuhmilch-Mozzarella), auf einigen Varianten Burrata
                oder Provola. Das Olivenöl kommt aus Italien.
              </p>
              <p>
                Alle Belag-Zutaten kommen nach dem Backen so dazu, wie es die
                Rezeptur verlangt: Rucola, Parmaschinken oder Burrata werden
                erst auf die heiße Pizza gelegt, damit sie ihre Textur
                behalten.
              </p>
            </>
          ),
        },
      ]}
      faqSlugs={["Steinofen-Pizza", "geöffnet", "vegetarische", "kostet eine Pizza"]}
      crossLinks={[
        {
          href: "/pizza-saarlouis",
          label: "Pizza Saarlouis (Übersicht)",
          hint: "Alle Kategorien und Standort-Infos.",
        },
        {
          href: "/beste-pizza-saarlouis",
          label: "Beste Pizza in Saarlouis",
          hint: "Was Gäste an unserer Pizza schätzen.",
        },
        {
          href: "/speisekarte",
          label: "Speisekarte",
          hint: "Alle Pizzen mit Preisen.",
        },
        {
          href: "/ueber-uns",
          label: "Über AMICIZIA",
          hint: "Wer wir sind und wie wir arbeiten.",
        },
      ]}
    />
  );
}
