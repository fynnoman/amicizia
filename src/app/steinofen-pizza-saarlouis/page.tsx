import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import SubPageHero from "@/components/seo/SubPageHero";
import LocalNapBlock from "@/components/seo/LocalNapBlock";
import RelatedPages from "@/components/seo/RelatedPages";
import FaqBlock, { type FaqEntry } from "@/components/seo/FaqBlock";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo-metadata";
import { breadcrumbSchema, webpageSchema, faqSchema, restaurantSchema } from "@/lib/schema";
import { SITE_URL } from "@/data/business";
import { Sun } from "@/components/Ornaments";

const PATH = "/steinofen-pizza-saarlouis";
export const metadata: Metadata = buildMetadata(PATH);

const faq: FaqEntry[] = [
  {
    question: "Was ist Steinofenpizza eigentlich?",
    answer:
      "Steinofenpizza wird auf einem heißen Steinboden gebacken — nicht auf einem Backblech und nicht im Heißluftofen. Der Stein speichert die Hitze und gibt sie direkt an den Teig ab. Das Ergebnis: ein knuspriger Boden mit Blasen, der von unten karamellisiert, während die Beläge oben saftig bleiben.",
  },
  {
    question: "Wo gibt es Steinofenpizza in Saarlouis?",
    answer:
      "Bei AMICIZIA in der Industriestraße 20. Wir backen seit 2013 in einem echten Steinofen mit rund 400 °C. Es ist mit Abstand die heißeste Backquelle der Stadt für italienische Pizza — und genau deshalb dauert eine Pizza bei uns unter 90 Sekunden.",
  },
  {
    question: "Was ist der Unterschied zwischen Steinofen und Holzofen?",
    answer:
      "In der Praxis sind die Begriffe oft Synonyme. Wichtig ist nicht das Brennmaterial, sondern die Bauweise: ein dicker Schamottstein, der Hitze speichert und reflektiert. Genau das macht die Pizza knusprig und gibt ihr den typischen leicht rauchigen Geschmack.",
  },
  {
    question: "Ist Steinofenpizza besser als Pizza aus dem Elektroofen?",
    answer:
      "Sie ist anders — und für die meisten besser. Der Elektroofen erreicht selten über 280 °C. Bei 400 °C aus dem Steinofen passiert mit dem Teig etwas anderes: er gart in wenigen Sekunden, statt langsam zu trocknen. Du schmeckst das im Rand und im Boden.",
  },
  {
    question: "Wie viel kostet Steinofenpizza in Saarlouis?",
    answer:
      "Bei uns liegen die Preise zwischen 9,90 € (Margherita) und 14,90 € (Prosciutto e Rucola). Für echte Steinofenpizza mit guten Zutaten ist das im Saarland fair gerechnet.",
  },
];

export default function SteinofenPizzaPage() {
  const trail = [
    { name: "Start", path: "/" },
    { name: "Pizzeria Saarlouis", path: "/pizzeria-saarlouis" },
    { name: "Steinofen-Pizza", path: PATH },
  ];

  return (
    <>
      <Navbar />
      <JsonLd
        data={[
          restaurantSchema(),
          breadcrumbSchema(trail),
          webpageSchema({
            url: PATH,
            name: "Steinofen-Pizza in Saarlouis — Echter Holzofen bei AMICIZIA",
            description:
              "Steinofenpizza in Saarlouis aus echtem Steinofen bei 400 °C. Knuspriger Boden, italienische Klassiker, seit 2013.",
            primaryImage: `${SITE_URL}/photos/amicizia-1.jpg`,
          }),
          faqSchema(faq),
        ]}
      />

      <Breadcrumbs trail={trail} />

      <SubPageHero
        eyebrow="III · Steinofen-Pizza"
        title="Steinofen-Pizza in"
        italicTail="Saarlouis"
        lead="400 °C, dünner Boden, leicht rauchig. So sieht echte Steinofenpizza in Saarlouis aus. AMICIZIA backt in einem klassischen Steinofen — wie in Italien, mitten in der Industriestraße."
      />

      <section className="relative max-w-6xl mx-auto px-6 lg:px-12 mb-20">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-4">
          <div className="relative aspect-[4/3] overflow-hidden border border-paper-soft/15 depth-shadow">
            <div className="pointer-events-none absolute inset-2 border border-terracotta/30 z-10" />
            <Image
              src="/photos/amicizia-3.jpg"
              alt="Steinofen in der Pizzeria AMICIZIA Saarlouis bei 400 Grad"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden border border-paper-soft/15 depth-shadow">
            <div className="pointer-events-none absolute inset-2 border border-terracotta/30 z-10" />
            <Image
              src="/photos/amicizia-2.jpg"
              alt="Frischer Pizzateig auf dem Schießer für den Steinofen"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8 text-terracotta">
            <Sun size={26} />
            <h2 className="display-lg text-[clamp(2rem,4vw,3rem)] text-espresso leading-tight">
              Warum echter <span className="italic-display text-terracotta">Steinofen</span> den Unterschied macht
            </h2>
          </div>
          <div className="space-y-5 font-serif text-espresso-soft text-lg leading-relaxed">
            <p>
              Ein Steinofen ist kein Marketing-Begriff. Es ist eine Bauweise. Schamottstein,
              gemauerte Kuppel, hohe Hitzespeicherung. Wenn wir morgens den Ofen anheizen,
              braucht er drei Stunden, bis der Stein die richtige Temperatur erreicht. Erst
              dann fangen wir an zu backen.
            </p>
            <p>
              Diese gespeicherte Hitze ist der ganze Trick. Sie strahlt von unten direkt
              in den Teig — der bekommt seinen knusprigen Boden in unter 30 Sekunden. Die
              Kuppel reflektiert die Hitze von oben — die Beläge garen, ohne auszutrocknen.
              In Summe: unter 90 Sekunden, und die Pizza ist fertig. So entsteht der Rand
              mit Blasen, die kleinen schwarzen Punkte und der leicht rauchige Geschmack,
              den man in einem normalen Backofen nie hinbekommt.
            </p>
            <p>
              Steinofenpizza in Saarlouis findest du nicht an jeder Ecke. Die meisten
              Lokale arbeiten mit Elektroöfen — schneller einzurichten, leichter zu warten,
              aber sie erreichen selten 280 °C. Das reicht für eine ordentliche Tiefkühlpizza.
              Es reicht nicht für eine{" "}
              <Link href="/pizza-saarlouis" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                richtige Pizza in Saarlouis
              </Link>.
            </p>
            <p>
              Wir haben uns für den Steinofen entschieden, weil er das einzige Mittel ist,
              das uns die Qualität liefert, die wir wollen. Das ist auch der Grund, warum
              wir nicht ausliefern — eine Pizza, die 20 Minuten im Lieferthermo durchweicht,
              verliert genau die Eigenschaften, für die wir den ganzen Aufwand betreiben.
              Hol sie lieber bei uns ab.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              { kicker: "400 °C", label: "Steinofen-Hitze" },
              { kicker: "48 h", label: "Teigreife" },
              { kicker: "< 90 s", label: "Backzeit pro Pizza" },
            ].map((b) => (
              <div key={b.label} className="bg-paper-deep border border-paper-soft/15 depth-shadow p-5 text-center">
                <div className="font-display text-terracotta text-3xl">{b.kicker}</div>
                <div className="font-display italic text-espresso-soft text-xs tracking-[0.25em] uppercase mt-2">
                  {b.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-hand text-3xl text-terracotta mb-6">
            Pizza ofenfrisch holen?
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/pizza-bestellen-saarlouis" className="btn-terra">
              Steinofenpizza bestellen
            </Link>
            <Link href="/speisekarte" className="btn-ghost !text-espresso !border-espresso/70 hover:!bg-espresso hover:!text-paper">
              Speisekarte
            </Link>
          </div>
        </div>
      </section>

      <FaqBlock items={faq} />
      <LocalNapBlock />
      <RelatedPages path={PATH} />
      <Footer />
    </>
  );
}
