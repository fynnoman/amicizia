import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import SubPageHero from "@/components/seo/SubPageHero";
import LocalNapBlock from "@/components/seo/LocalNapBlock";
import RelatedPages from "@/components/seo/RelatedPages";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo-metadata";
import { breadcrumbSchema, webpageSchema, restaurantSchema } from "@/lib/schema";
import { SITE_URL } from "@/data/business";

const PATH = "/ueber-uns";
export const metadata: Metadata = buildMetadata(PATH);

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}${PATH}#aboutpage`,
  name: "Über AMICIZIA Saarlouis",
  url: `${SITE_URL}${PATH}`,
  about: { "@id": `${SITE_URL}/#restaurant` },
  inLanguage: "de-DE",
};

export default function UeberUnsPage() {
  const trail = [
    { name: "Start", path: "/" },
    { name: "Über uns", path: PATH },
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
            name: "Über AMICIZIA — Die Familie hinter der Trattoria in Saarlouis",
            description:
              "Seit 2013 in Saarlouis: die Geschichte hinter AMICIZIA, unser Steinofen, unsere Familie. Warum wir tun, was wir tun.",
            primaryImage: `${SITE_URL}/photos/amicizia-3.jpg`,
          }),
          aboutPageSchema,
        ]}
      />

      <Breadcrumbs trail={trail} />

      <SubPageHero
        eyebrow="Über uns"
        title="Die Familie hinter"
        italicTail="AMICIZIA"
        lead="Seit 2013 führen wir AMICIZIA als familiengeführte Trattoria in Saarlouis. Kein Konzern, keine Filiale, keine Zentrale. Was du auf dem Teller bekommst, machen die Leute, die du beim Reinkommen siehst."
      />

      <section className="relative max-w-6xl mx-auto px-6 lg:px-12 mb-20">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { src: "/photos/amicizia-3.jpg", alt: "Trattoria-Atmosphäre bei AMICIZIA in Saarlouis" },
            { src: "/photos/amicizia-2.jpg", alt: "Küche bei AMICIZIA — Familie in Aktion" },
            { src: "/photos/amicizia-1.jpg", alt: "Pizza aus dem Steinofen bei AMICIZIA Saarlouis" },
          ].map((p, i) => (
            <div key={i} className="relative aspect-[4/5] overflow-hidden border border-paper-soft/15 depth-shadow">
              <div className="pointer-events-none absolute inset-2 border border-terracotta/30 z-10" />
              <Image src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-20 md:py-24 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="display-lg text-[clamp(2rem,4vw,3rem)] text-espresso leading-tight">
            Wie alles <span className="italic-display text-terracotta">angefangen</span> hat
          </h2>
          <div className="space-y-5 mt-8 font-serif text-espresso-soft text-lg leading-relaxed">
            <p>
              Wir haben AMICIZIA 2013 in Saarlouis eröffnet, weil uns gefehlt hat,
              was wir aus Italien kennen: eine kleine Trattoria, in der man sich
              setzt, isst, redet, lacht — und nicht das Gefühl hat, dass man als
              Tisch Nummer 8 abgearbeitet wird. Eine{" "}
              <Link href="/trattoria-saarlouis" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Trattoria di Famiglia
              </Link>
              .
            </p>
            <p>
              Der Steinofen war von Anfang an das Herzstück. Wir haben uns gegen
              Elektroöfen entschieden, gegen Tütensaucen, gegen tiefgekühlten
              Mozzarella. Das macht den Alltag aufwendiger — und das ist genau der
              Punkt. Jede{" "}
              <Link href="/pizza-saarlouis" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Pizza in Saarlouis
              </Link>
              , die wir backen, gibt diesen Aufwand zurück.
            </p>
            <p>
              Über zehn Jahre später machen wir das immer noch genauso. Karte
              überschaubar, Zutaten ehrlich, Atmosphäre echt. Die meisten unserer
              Gäste kommen wieder — und das ist die einzige Kennzahl, die uns
              wirklich interessiert.
            </p>
          </div>

          <h2 className="display-lg text-[clamp(2rem,4vw,3rem)] text-espresso leading-tight mt-16">
            Was uns wichtig ist
          </h2>
          <div className="space-y-5 mt-8 font-serif text-espresso-soft text-lg leading-relaxed">
            <p>
              <strong className="text-espresso">Frische jeden Tag.</strong> Wir
              kaufen so ein, dass wir am Ende des Tages so gut wie nichts wegwerfen.
              Das geht nur mit einer kleinen Karte und genauer Planung.
            </p>
            <p>
              <strong className="text-espresso">Faire Preise.</strong> Gute italienische
              Küche soll nicht für besondere Anlässe reserviert sein. Pizza ab
              9,90 €, Pasta-Klassiker im fairen Mittelfeld. Wer wiederkommen will,
              soll das ohne Bedenken können.
            </p>
            <p>
              <strong className="text-espresso">Persönlich, nicht professionell.</strong>{" "}
              Es gibt keine Hostess mit Headset. Du wirst von uns selbst begrüßt,
              und wenn du wiederkommst, erkennen wir dich. Das funktioniert nur,
              weil wir klein bleiben.
            </p>
            <p>
              <strong className="text-espresso">Nähe statt Reichweite.</strong> Wir
              wollen das Lokal für Saarlouis und Umgebung sein. Aus{" "}
              <Link href="/italiener-dillingen" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Dillingen
              </Link>
              , aus Roden, aus Fraulautern, aus Wallerfangen — wir freuen uns über
              jeden, der vorbeischaut.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-16 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="font-hand text-3xl text-terracotta mb-6">
            Wir freuen uns auf dich.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/reservierung" className="btn-terra">
              Tisch reservieren
            </Link>
            <Link href="/speisekarte" className="btn-ghost !text-espresso !border-espresso/70 hover:!bg-espresso hover:!text-paper">
              Speisekarte ansehen
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
