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
import {
  breadcrumbSchema,
  webpageSchema,
  faqSchema,
  restaurantSchema,
} from "@/lib/schema";
import { menuItems, formatPrice } from "@/data/menu";
import { SITE_URL } from "@/data/business";
import { Fleuron } from "@/components/Ornaments";

const PATH = "/pizza-saarlouis";

export const metadata: Metadata = buildMetadata(PATH);

const faq: FaqEntry[] = [
  {
    question: "Wo gibt es gute Pizza in Saarlouis?",
    answer:
      "In der Industriestraße 20. AMICIZIA backt Pizza in Saarlouis seit 2013 im Steinofen — handgemacht, mit 48 Stunden Teigreife und San-Marzano-Tomaten. Wir liegen zentral und bedienen Gäste aus Saarlouis, Roden, Fraulautern, Dillingen und Saarwellingen.",
  },
  {
    question: "Kann ich die Pizza in Saarlouis vorbestellen?",
    answer:
      "Ja, am bequemsten online über die Bestellfunktion auf der Startseite. Du wählst deine Pizza, bezahlst sicher per SumUp und holst frisch aus dem Ofen bei uns ab. Das vermeidet Wartezeit und du bekommst sie wirklich heiß.",
  },
  {
    question: "Was kostet eine Pizza in Saarlouis bei AMICIZIA?",
    answer:
      "Die Margherita gibt es ab 9,90 €. Belegte Pizzen wie Diavola oder Quattro Formaggi liegen bei 12,90–13,90 €, Prosciutto e Rucola bei 14,90 €. Wir halten die Preise bewusst fair — gute Zutaten sollen für alle bezahlbar bleiben.",
  },
  {
    question: "Gibt es Pizza zum Mitnehmen oder Liefern in Saarlouis?",
    answer:
      "Pizza zum Mitnehmen ja — ofenfrisch in 10–15 Minuten ab Bestellung abholbereit. Lieferung machen wir nicht: eine Steinofenpizza verliert nach 20 Minuten im Lieferthermo zu viel von dem, was sie ausmacht. Wir wollen, dass sie bei dir so ankommt, wie wir sie aus dem Ofen holen.",
  },
  {
    question: "Welche Pizza-Sorten gibt es bei AMICIZIA?",
    answer:
      "Die Klassiker, die wir wirklich beherrschen: Margherita, Diavola, Quattro Formaggi, Prosciutto e Rucola, Vegetariana. Wir haben bewusst eine kleine Karte — lieber fünf Pizzen, die zuverlässig top sind, als 80, die alle nur mittelmäßig werden.",
  },
];

const pizzas = menuItems.filter((m) => m.category === "pizza");

export default function PizzaSaarlouisPage() {
  const trail = [
    { name: "Start", path: "/" },
    { name: "Pizzeria Saarlouis", path: "/pizzeria-saarlouis" },
    { name: "Pizza Saarlouis", path: PATH },
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
            name: "Pizza in Saarlouis — Steinofenfrisch bei AMICIZIA",
            description:
              "Pizza in Saarlouis aus dem Steinofen. 48 h Teigreife, San-Marzano-Tomaten, Fior di Latte. Die Klassiker, die wir wirklich beherrschen.",
            primaryImage: `${SITE_URL}/photos/amicizia-1.jpg`,
          }),
          faqSchema(faq),
        ]}
      />

      <Breadcrumbs trail={trail} />

      <SubPageHero
        eyebrow="II · Pizza in Saarlouis"
        title="Pizza in Saarlouis"
        italicTail="aus dem Steinofen"
        lead="Die echte italienische Pizza in Saarlouis — knuspriger Boden, fluffiger Rand, klar belegt. Kein Industriekäse, kein Backofen aus dem Großhandel. 48 Stunden Teigreife und ein Steinofen, der seine Hitze ernst nimmt."
      />

      {/* Hero photo */}
      <section className="relative max-w-6xl mx-auto px-6 lg:px-12 mb-20">
        <div className="relative aspect-[16/8] overflow-hidden border border-paper-soft/15 depth-shadow">
          <div className="pointer-events-none absolute inset-2 border border-terracotta/30 z-10" />
          <Image
            src="/photos/amicizia-1.jpg"
            alt="Frische Steinofenpizza aus Saarlouis — knuspriger Boden mit San-Marzano-Tomaten und Fior di Latte"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Pizza craft sections */}
      <section className="relative py-20 md:py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="display-lg text-[clamp(2rem,4vw,3rem)] text-espresso leading-tight">
            Was unsere <span className="italic-display text-terracotta">Pizza in Saarlouis</span> anders macht
          </h2>
          <div className="space-y-5 mt-8 font-serif text-espresso-soft text-lg leading-relaxed">
            <p>
              Pizza klingt simpel: Teig, Tomate, Käse, Ofen. Genau deshalb ist sie so
              schwer richtig zu machen. Jede Zutat steht für sich. Wenn die Tomate
              wässrig ist, schmeckt die ganze Pizza wässrig. Wenn der Käse aus der
              Tüte kommt, schmeckt sie nach Tüte. Wenn der Boden im Heißluftofen
              gebacken wird, fehlt die Kruste. Genau hier setzen wir an.
            </p>
            <p>
              Unser Teig reift 48 Stunden im Kühlraum. Das ist nicht Marketing,
              sondern Chemie: lange Reifezeit baut komplexe Aromen auf, macht den
              Teig leichter verdaulich und gibt dem Rand die typische, offene
              Struktur mit Blasen. Du schmeckst es im Hintergrund — eine leichte
              Säure, fast wie bei einem guten Brot. Wer Pizza in Saarlouis isst,
              ohne das jemals erlebt zu haben, wird beim ersten Bissen verstehen,
              was wir meinen.
            </p>
            <p>
              Die Tomate ist San Marzano, aus dem Süden Italiens. Sie ist säuerlich,
              hat wenig Wasser und schmeckt nach Tomate, nicht nach Süße. Der
              Mozzarella ist Fior di Latte — kein Industriekäse, sondern frischer
              Kuhmilch-Mozzarella, der beim Schmelzen cremig wird statt gummiartig.
              Olivenöl kommt direkt aus Italien, das Basilikum ist frisch geschnitten.
            </p>
            <p>
              Der{" "}
              <Link href="/steinofen-pizza-saarlouis" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Steinofen
              </Link>
              {" "}läuft bei rund 400 °C. In unter 90 Sekunden ist die Pizza fertig.
              Der Boden bekommt diese kleinen schwarzen Punkte, die ein Heißluftofen
              nie hinbekommt — das ist Karamellisierung, nicht „Verbrennung". Es ist
              das, was den Unterschied zwischen Pizza und{" "}
              <em>echter</em> Pizza ausmacht.
            </p>
          </div>
        </div>
      </section>

      {/* Pizza varieties */}
      <section className="paper-grain relative py-20 md:py-24 px-6 lg:px-12 bg-paper-deep/40">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-10 text-terracotta">
            <Fleuron size={18} />
            <h2 className="font-display italic tracking-[0.3em] uppercase text-xs">
              Unsere Pizza-Sorten in Saarlouis
            </h2>
            <span className="h-px flex-1 bg-terracotta/30" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pizzas.map((p) => (
              <article
                key={p.id}
                className="relative bg-paper-deep border border-paper-soft/15 depth-shadow p-6"
              >
                <div className="pointer-events-none absolute inset-2 border border-terracotta/25" />
                <div className="relative">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="font-display text-espresso text-2xl">{p.name}</h3>
                    <span className="font-display text-terracotta text-xl tabnum">{formatPrice(p.price)} €</span>
                  </div>
                  <p className="font-serif italic text-espresso-soft text-base leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/speisekarte" className="font-display italic text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline tracking-wider">
              Komplette Speisekarte ansehen →
            </Link>
          </div>
        </div>
      </section>

      {/* Inline CTA */}
      <section className="relative py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-hand text-3xl text-terracotta mb-6">
            Direkt mit Pizza bei dir auf dem Tisch?
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/pizza-bestellen-saarlouis" className="btn-terra">
              Pizza online bestellen
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
