import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import SubPageHero from "@/components/seo/SubPageHero";
import LocalNapBlock from "@/components/seo/LocalNapBlock";
import RelatedPages from "@/components/seo/RelatedPages";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo-metadata";
import { breadcrumbSchema, webpageSchema, menuSchema, restaurantSchema } from "@/lib/schema";
import { menuItems, formatPrice, categoryEmoji } from "@/data/menu";
import { Fleuron } from "@/components/Ornaments";

const PATH = "/speisekarte";
export const metadata: Metadata = buildMetadata(PATH);

const sectionsConfig = [
  { key: "pizza", label: "Pizza vom Steinofen", desc: "48 h gereifter Teig, San-Marzano-Tomaten, Fior di Latte." },
  { key: "ciabatta", label: "Ciabatta", desc: "Knusprig gebacken, mit Kräutern oder herzhaft belegt." },
  { key: "wrap", label: "Wraps", desc: "Schnell, frisch, ideal zum Mitnehmen." },
] as const;

export default function SpeisekartePage() {
  const trail = [
    { name: "Start", path: "/" },
    { name: "Speisekarte", path: PATH },
  ];

  const menuSections = sectionsConfig.map((sec) => ({
    name: sec.label,
    items: menuItems
      .filter((m) => m.category === sec.key)
      .map((m) => ({ name: m.name, description: m.description, price: m.price })),
  }));

  return (
    <>
      <Navbar />
      <JsonLd
        data={[
          restaurantSchema(),
          breadcrumbSchema(trail),
          webpageSchema({
            url: PATH,
            name: "Speisekarte AMICIZIA Saarlouis — Pizza, Pasta, Ciabatta",
            description:
              "Komplette Speisekarte unserer italienischen Trattoria in Saarlouis: Steinofenpizza, Ciabatta, Wraps. Alle Preise.",
          }),
          menuSchema({ url: PATH, sections: menuSections }),
        ]}
      />

      <Breadcrumbs trail={trail} />

      <SubPageHero
        eyebrow="Karte"
        title="Unsere"
        italicTail="Speisekarte"
        lead="Klein, ehrlich, jeden Tag frisch gemacht. Komplette Karte für Steinofenpizza, Ciabatta und Wraps — mit Preisen, Beschreibung, Zutaten."
      />

      {sectionsConfig.map((sec) => (
        <section
          key={sec.key}
          className="relative py-16 px-6 lg:px-12 first-of-type:pt-0"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-3 text-terracotta">
              <Fleuron size={20} />
              <span className="font-display italic text-terracotta tracking-[0.35em] uppercase text-[0.78rem]">
                {categoryEmoji[sec.key]} {sec.label}
              </span>
              <span className="h-px flex-1 bg-terracotta/30" />
            </div>
            <p className="font-hand text-espresso-soft text-xl mb-8">{sec.desc}</p>

            <div className="space-y-5">
              {menuItems
                .filter((m) => m.category === sec.key)
                .map((m) => (
                  <article key={m.id} className="border-b border-paper-soft/15 pb-5">
                    <div className="dot-leader">
                      <div className="name">
                        <h3 className="font-display text-espresso text-xl inline">
                          {m.name}
                        </h3>
                        {m.popular && (
                          <span className="ml-2 font-display italic text-terracotta text-xs tracking-[0.25em] uppercase">
                            · beliebt
                          </span>
                        )}
                      </div>
                      <span className="leader" />
                      <span className="price font-display text-terracotta text-xl">
                        {formatPrice(m.price)} €
                      </span>
                    </div>
                    <p className="font-serif italic text-espresso-soft text-base leading-relaxed mt-2">
                      {m.description}
                    </p>
                  </article>
                ))}
            </div>
          </div>
        </section>
      ))}

      <section className="relative py-16 px-6 lg:px-12 bg-paper-deep/40">
        <div className="max-w-3xl mx-auto text-center">
          <div className="font-hand text-3xl text-terracotta mb-6">
            Was die Karte nicht zeigt
          </div>
          <p className="font-serif text-espresso-soft text-lg leading-relaxed">
            Saisonale Specials, hausgemachte Pasta des Tages und kleine Antipasti
            wechseln je nach Tag und Markt. Frag vor Ort nach — wir erzählen dir gerne,
            was die Küche heute besonders schön im Griff hat.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/#order" className="btn-terra">
              Jetzt bestellen
            </Link>
            <Link
              href="/reservierung"
              className="btn-ghost !text-espresso !border-espresso/70 hover:!bg-espresso hover:!text-paper"
            >
              Reservieren
            </Link>
          </div>
        </div>
      </section>

      <LocalNapBlock />
      <RelatedPages path={PATH} />
      <Footer />
    </>
  );
}
