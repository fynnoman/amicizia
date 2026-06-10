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
import { SITE_URL } from "@/data/business";
import { Fleuron, OliveBranch, Tomato, Sun } from "@/components/Ornaments";

const PATH = "/pizzeria-saarlouis";

export const metadata: Metadata = buildMetadata(PATH);

const faq: FaqEntry[] = [
  {
    question: "Was macht eine echte Pizzeria in Saarlouis aus?",
    answer:
      "Ein echter Steinofen, frischer Teig mit langer Reifezeit, gute Tomaten aus Süditalien und Mozzarella, der nicht aus dem Tiefkühlfach kommt. Bei AMICIZIA in Saarlouis backen wir seit 2013 in einem Steinofen bei rund 400 °C — das ergibt den knusprigen Boden mit dem leicht rauchigen Geschmack, den du sonst nur in Italien findest.",
  },
  {
    question: "Wo genau liegt die Pizzeria AMICIZIA in Saarlouis?",
    answer:
      "Industriestraße 20, 66740 Saarlouis. Wir liegen verkehrsgünstig zwischen Innenstadt, Roden und Fraulautern. Parkplätze sind direkt vor der Tür. Aus Dillingen oder Saarwellingen bist du in unter 10 Minuten bei uns.",
  },
  {
    question: "Kann ich Pizza in Saarlouis online bestellen und abholen?",
    answer:
      "Ja. Über die Online-Bestellung wählst du deine Pizza, zahlst sicher per SumUp und holst sie ofenfrisch bei uns ab. Lieferung machen wir bewusst nicht — eine Steinofenpizza schmeckt am besten direkt aus dem Ofen, nicht nach 20 Minuten im Lieferthermo.",
  },
  {
    question: "Hat die Pizzeria täglich geöffnet?",
    answer:
      "Ja, wir haben sieben Tage die Woche geöffnet — Montag bis Donnerstag von 10:00–22:00 Uhr, Freitag und Samstag bis 23:00 Uhr, Sonntag von 11:00–22:00 Uhr.",
  },
  {
    question: "Gibt es vegetarische oder vegane Pizza-Optionen?",
    answer:
      "Vegetarisch ja — von der Margherita über die Quattro Formaggi bis zur Vegetariana. Vegan auf Anfrage: wir können viele Pizzen ohne Käse zubereiten, sprich uns gerne an.",
  },
  {
    question: "Wie viel kostet eine Pizza bei AMICIZIA in Saarlouis?",
    answer:
      "Unsere Pizzen liegen zwischen 9,90 € (Margherita) und 14,90 € (Prosciutto e Rucola). Wir bleiben bewusst in einem fairen Bereich — gute Zutaten, ehrlicher Preis.",
  },
];

export default function PizzeriaSaarlouisPage() {
  const trail = [
    { name: "Start", path: "/" },
    { name: "Pizzeria Saarlouis", path: PATH },
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
            name: "Pizzeria in Saarlouis — AMICIZIA Trattoria",
            description:
              "Familiengeführte Pizzeria in Saarlouis mit echtem Steinofen, San-Marzano-Tomaten und 48 h Teigreife. Industriestraße 20, seit 2013.",
            primaryImage: `${SITE_URL}/photos/amicizia-1.jpg`,
          }),
          faqSchema(faq),
        ]}
      />

      <Breadcrumbs trail={trail} />

      <SubPageHero
        eyebrow="I · Pizzeria in Saarlouis"
        title="Pizzeria in Saarlouis"
        italicTail="mit echtem Steinofen"
        lead="AMICIZIA ist seit 2013 die familiengeführte Trattoria in Saarlouis für authentische Steinofenpizza. 48 Stunden Teigreife, San-Marzano-Tomaten, frischer Mozzarella und ein Ofen bei rund 400 °C — wie in Neapel, nur näher."
      />

      {/* Hero photo strip */}
      <section className="relative max-w-6xl mx-auto px-6 lg:px-12 mb-20">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { src: "/photos/amicizia-1.jpg", alt: "Steinofenpizza Margherita aus der Pizzeria AMICIZIA in Saarlouis" },
            { src: "/photos/amicizia-2.jpg", alt: "Frische Tomaten in der Küche der Pizzeria AMICIZIA Saarlouis" },
            { src: "/photos/amicizia-3.jpg", alt: "Innenraum der italienischen Trattoria AMICIZIA in Saarlouis" },
          ].map((p, i) => (
            <div key={i} className="relative aspect-[4/5] overflow-hidden border border-paper-soft/15 depth-shadow">
              <div className="pointer-events-none absolute inset-2 border border-terracotta/30 z-10" />
              <Image src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Why AMICIZIA */}
      <section className="paper-grain relative py-20 md:py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto relative">
          <div className="flex items-center gap-3 mb-10 text-terracotta">
            <Fleuron size={18} />
            <h2 className="font-display italic tracking-[0.3em] uppercase text-xs">
              Was unsere Pizzeria in Saarlouis ausmacht
            </h2>
            <span className="h-px flex-1 bg-terracotta/30" />
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            <article>
              <div className="text-terracotta mb-3"><Sun size={28} /></div>
              <h3 className="display-lg text-3xl text-espresso leading-tight">
                Echter Steinofen, kein Elektroofen
              </h3>
              <p className="font-serif text-espresso-soft mt-3 leading-relaxed">
                Unser Steinofen läuft mit echter Hitze — rund 400 °C, mal mehr, mal weniger,
                je nach Tageszeit und Auslastung. Der Boden wird dadurch in unter 90 Sekunden
                knusprig, ohne dass die Beläge austrocknen. Das ist der Unterschied, den man
                schmeckt: dieser leicht rauchige Geschmack, den ein Elektroofen oder eine
                Lieferpizza nie hinbekommen.
              </p>
            </article>

            <article>
              <div className="text-terracotta mb-3"><OliveBranch size={28} /></div>
              <h3 className="display-lg text-3xl text-espresso leading-tight">
                48 Stunden Teigreife
              </h3>
              <p className="font-serif text-espresso-soft mt-3 leading-relaxed">
                Unser Pizzateig ruht 48 Stunden im Kühlraum. Das macht ihn bekömmlich, leicht
                im Magen und gibt ihm Aroma. Wir wiegen jeden Teigling einzeln aus und ziehen
                ihn von Hand — kein Walzwerk, keine fertigen Böden. So bekommt jede Pizza in
                unserer Pizzeria in Saarlouis ihren typischen Rand mit Blasen.
              </p>
            </article>

            <article>
              <div className="text-terracotta mb-3"><Tomato size={28} /></div>
              <h3 className="display-lg text-3xl text-espresso leading-tight">
                San-Marzano-Tomaten & Fior di Latte
              </h3>
              <p className="font-serif text-espresso-soft mt-3 leading-relaxed">
                Auf der Pizza kommt das, was auch in Italien drauf käme: San-Marzano-Tomaten
                aus dem Süden, Fior-di-Latte-Mozzarella, gutes Olivenöl, frisches Basilikum.
                Keine Tütensauce, kein Industriekäse. Wenn es bei uns „Margherita" heißt,
                meinen wir die echte — drei Zutaten, sauber gemacht.
              </p>
            </article>

            <article>
              <div className="text-terracotta mb-3"><Fleuron size={28} /></div>
              <h3 className="display-lg text-3xl text-espresso leading-tight">
                Familie, nicht Franchise
              </h3>
              <p className="font-serif text-espresso-soft mt-3 leading-relaxed">
                AMICIZIA gehört einer Familie aus Saarlouis. Es gibt keine Zentrale, keinen
                Konzern, kein Tiefkühl-Logo. Die Person am Ofen ist meistens auch die, die
                dich vorne begrüßt. Das ist unsere Vorstellung von Trattoria di Famiglia:
                klein, ehrlich, persönlich.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Big content block: why Saarlouis matters */}
      <section className="relative py-20 md:py-24 px-6 lg:px-12 bg-paper-deep/40">
        <div className="max-w-4xl mx-auto relative">
          <h2 className="display-lg text-[clamp(2rem,4vw,3rem)] text-espresso leading-tight">
            Warum eine <span className="italic-display text-terracotta">Pizzeria in Saarlouis</span> sein muss, was sie verspricht
          </h2>
          <div className="space-y-5 mt-8 font-serif text-espresso-soft text-lg leading-relaxed">
            <p>
              In Saarlouis gibt es viele Lokale, die sich Pizzeria nennen. Aber „Pizzeria"
              ist mehr als ein Schild über der Tür. Es ist ein Versprechen: dass der Boden
              dünn ist, der Rand fluffig, die Tomate säuerlich-süß und der Käse cremig
              schmilzt, statt zu gummiartigen Fäden zu werden. Wer in Saarlouis Pizza isst,
              merkt sofort, wer dieses Versprechen einlöst.
            </p>
            <p>
              Unsere Pizzeria liegt mitten in Saarlouis, in der{" "}
              <Link href="/kontakt" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Industriestraße 20
              </Link>
              . Von der Innenstadt zu Fuß erreichbar, mit dem Auto schnell aus Roden,
              Fraulautern, Dillingen oder Saarwellingen angefahren. Parken direkt vor der
              Tür. Wer es eilig hat, bestellt online und holt ab. Wer Zeit mitbringt, setzt
              sich rein — wir haben absichtlich kleine Tische, weil eine{" "}
              <Link href="/trattoria-saarlouis" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                echte Trattoria
              </Link>
              {" "}laut ist, eng ist, lebt.
            </p>
            <p>
              Wenn du nach „<strong className="text-espresso">Pizzeria Saarlouis</strong>",
              „<Link href="/pizza-saarlouis" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">Pizza Saarlouis</Link>",
              „<Link href="/steinofen-pizza-saarlouis" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">Steinofen Pizza Saarlouis</Link>" oder
              „<Link href="/beste-pizza-saarlouis" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">beste Pizza Saarlouis</Link>"
              {" "}suchst — du landest bei uns aus einem Grund: weil wir seit über zehn
              Jahren genau diese Kategorien ehrlich bedienen. Steinofen statt Elektro.
              48 h Teig statt Tütenmehl. Familie statt Filiale.
            </p>
            <p>
              Eine gute Pizzeria in Saarlouis erkennst du an drei Dingen: dass der Inhaber
              da ist, dass der Ofen heiß ist, und dass die Karte überschaubar bleibt. Eine
              Karte mit 80 Pizzen ist kein gutes Zeichen — niemand bekommt 80 Pizzen jeden
              Tag gleich gut hin. Bei uns stehen die Klassiker, die wir wirklich beherrschen:
              Margherita, Diavola, Quattro Formaggi, Prosciutto e Rucola, Vegetariana.
              Wenn du die ganze Karte sehen willst — sie liegt offen auf{" "}
              <Link href="/speisekarte" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                /speisekarte
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Inline CTA strip */}
      <section className="relative py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <div className="font-hand text-3xl text-terracotta mb-6">
            Schon hungrig?
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/#order" className="btn-terra">
              Pizza online bestellen
            </Link>
            <Link href="/speisekarte" className="btn-ghost !text-espresso !border-espresso/70 hover:!bg-espresso hover:!text-paper">
              Speisekarte ansehen
            </Link>
            <Link href="/reservierung" className="font-display italic text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline tracking-wider">
              Tisch reservieren →
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
