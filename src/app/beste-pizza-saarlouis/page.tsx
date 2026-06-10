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

const PATH = "/beste-pizza-saarlouis";
export const metadata: Metadata = buildMetadata(PATH);

const faq: FaqEntry[] = [
  {
    question: "Wo gibt es die beste Pizza in Saarlouis?",
    answer:
      "Diese Frage beantwortet am Ende immer der Gast — aber an drei Kriterien lässt sich gute Pizza messen: Steinofen mit echter Hitze, lange Teigreife, italienische Grundzutaten. Bei AMICIZIA in der Industriestraße 20 stimmen alle drei seit 2013.",
  },
  {
    question: "Woran erkenne ich gute Pizza?",
    answer:
      "An vier Sachen: 1) Der Rand hat Blasen und ist außen knusprig, innen luftig. 2) Der Boden hat kleine schwarze Punkte vom heißen Stein. 3) Der Käse schmilzt cremig statt gummiartig. 4) Die Tomate schmeckt säuerlich und süß zugleich — nicht wässrig.",
  },
  {
    question: "Beste Pizza in Saarlouis — was kostet sie?",
    answer:
      "Für echte Steinofenpizza mit italienischen Zutaten liegt der faire Preisbereich in Saarlouis bei 9,90–14,90 €. Alles deutlich darunter erkauft sich meistens Industrie-Zutaten. Alles deutlich darüber zahlt für Ambiente.",
  },
  {
    question: "Lohnt sich die Anfahrt aus Saarbrücken oder Dillingen für gute Pizza?",
    answer:
      "Ehrlich gesagt: ja. Aus Dillingen sind es 6 km, aus Saarwellingen 7 km, aus Wallerfangen 4 km. Wer nach echter Steinofenpizza sucht, fährt diese Distanz gerne. Aus Saarbrücken ca. 30 km — kein Tagesausflug, aber für ein gutes Abendessen gerechtfertigt.",
  },
];

export default function BestePizzaPage() {
  const trail = [
    { name: "Start", path: "/" },
    { name: "Pizzeria Saarlouis", path: "/pizzeria-saarlouis" },
    { name: "Beste Pizza", path: PATH },
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
            name: "Beste Pizza in Saarlouis — Worauf es ankommt",
            description:
              "Beste Pizza in Saarlouis: woran du sie erkennst, was sie kostet, warum AMICIZIA seit 2013 als feste Größe gilt.",
            primaryImage: `${SITE_URL}/photos/amicizia-1.jpg`,
          }),
          faqSchema(faq),
        ]}
      />

      <Breadcrumbs trail={trail} />

      <SubPageHero
        eyebrow="IX · Beste Pizza Saarlouis"
        title="Die beste Pizza in"
        italicTail="Saarlouis"
        lead={`Wer „beste Pizza" sagt, sollte begründen, warum. Auf dieser Seite findest du die vier Kriterien, an denen man sie erkennt — und ehrlich, warum AMICIZIA seit über zehn Jahren oft genannt wird, wenn jemand in Saarlouis gefragt wird.`}
      />

      <section className="relative max-w-6xl mx-auto px-6 lg:px-12 mb-20">
        <div className="relative aspect-[16/8] overflow-hidden border border-paper-soft/15 depth-shadow">
          <div className="pointer-events-none absolute inset-2 border border-terracotta/30 z-10" />
          <Image
            src="/photos/amicizia-1.jpg"
            alt="Beste Pizza in Saarlouis — Steinofenpizza Margherita bei AMICIZIA"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="relative py-20 md:py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="display-lg text-[clamp(2rem,4vw,3rem)] text-espresso leading-tight">
            Vier Kriterien für <span className="italic-display text-terracotta">gute Pizza</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mt-10">
            {[
              {
                num: "I.",
                t: "Echter Steinofen",
                d: "Ein Steinofen erreicht ~400 °C. Ein Elektroofen selten über 280 °C. Bei 400 °C entsteht in unter 90 Sekunden der knusprige Boden, den eine Pizza braucht. Alles andere ist eine andere Disziplin.",
              },
              {
                num: "II.",
                t: "48 Stunden Teig",
                d: "Lange Reifezeit baut Aroma auf, macht den Teig leichter verdaulich und gibt dem Rand seine offene Struktur. Eine Pizza mit 4 h Hefe-Teig ist nicht schlecht — sie ist nur was anderes.",
              },
              {
                num: "III.",
                t: "Italienische Zutaten",
                d: "San-Marzano-Tomaten, Fior-di-Latte-Mozzarella, gutes Olivenöl. Wer hier spart, kommt nie in die Nähe einer richtigen Pizza, egal wie gut der Ofen ist.",
              },
              {
                num: "IV.",
                t: "Kurze Karte",
                d: "Eine Pizzeria mit 80 Sorten kann nicht alle gut beherrschen. Lieber zehn Klassiker, perfekt — das ist das italienische Prinzip. Wer das macht, signalisiert Kompetenz.",
              },
            ].map((c) => (
              <article key={c.num}>
                <div className="font-display italic text-terracotta tracking-[0.4em] text-[0.78rem]">
                  {c.num}
                </div>
                <h3 className="display-lg text-2xl text-espresso leading-tight mt-2">
                  {c.t}
                </h3>
                <p className="font-serif italic text-espresso-soft mt-2 leading-relaxed">
                  {c.d}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="paper-grain relative py-20 md:py-24 px-6 lg:px-12 bg-paper-deep/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="display-lg text-[clamp(1.8rem,3.5vw,2.6rem)] text-espresso leading-tight">
            Warum AMICIZIA seit 2013 oft genannt wird
          </h2>
          <div className="space-y-5 mt-8 font-serif text-espresso-soft text-lg leading-relaxed">
            <p>
              Wir sind nicht das einzige Lokal in Saarlouis, das Pizza macht. Aber wir
              sind eins der wenigen, die alle vier Kriterien gleichzeitig erfüllen:{" "}
              <Link href="/steinofen-pizza-saarlouis" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Steinofen
              </Link>
              , 48 h Teig, italienische Zutaten, kurze Karte. Das sagen die Leute, die zu
              uns kommen — und das ist letztlich der einzige Beweis, der zählt.
            </p>
            <p>
              Was Gäste oft erwähnen: dass unser Boden anders schmeckt. Knusprig, aber
              nicht trocken. Leicht rauchig vom Steinofen. Dass die Tomate echt schmeckt.
              Dass der Käse cremig schmilzt. Dass die Karte überschaubar ist und damit
              die Entscheidung leichter wird. Dass die Pizza in 12–15 Minuten ab
              Bestellung abholbereit ist, auch wenn freitags volles Haus ist.
            </p>
            <p>
              Wenn du nach{" "}
              <strong className="text-espresso">der besten Pizza in Saarlouis</strong>
              {" "}suchst, ist das immer subjektiv. Aber wenn du dir die vier Kriterien
              ehrlich anschaust, landest du bei einer kleinen Gruppe von Lokalen. Wir
              wären gerne dabei, dass du uns ausprobierst.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/pizza-bestellen-saarlouis" className="btn-terra">
              Pizza zum Vergleichen bestellen
            </Link>
            <Link href="/pizzeria-saarlouis" className="btn-ghost !text-espresso !border-espresso/70 hover:!bg-espresso hover:!text-paper">
              Mehr zur Pizzeria
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
