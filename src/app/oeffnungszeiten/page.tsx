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
import { breadcrumbSchema, webpageSchema, restaurantSchema } from "@/lib/schema";
import { BUSINESS } from "@/data/business";
import { Sun } from "@/components/Ornaments";

const PATH = "/oeffnungszeiten";
export const metadata: Metadata = buildMetadata(PATH);

export default function OeffnungszeitenPage() {
  const trail = [
    { name: "Start", path: "/" },
    { name: "Öffnungszeiten", path: PATH },
  ];

  const days = [
    { label: "Montag", hours: "10:00 – 22:00" },
    { label: "Dienstag", hours: "10:00 – 22:00" },
    { label: "Mittwoch", hours: "10:00 – 22:00" },
    { label: "Donnerstag", hours: "10:00 – 22:00" },
    { label: "Freitag", hours: "10:00 – 23:00", accent: true },
    { label: "Samstag", hours: "10:00 – 23:00", accent: true },
    { label: "Sonntag", hours: "11:00 – 22:00" },
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
            name: "Öffnungszeiten AMICIZIA Saarlouis",
            description:
              "Aktuelle Öffnungszeiten der Pizzeria & Trattoria AMICIZIA in Saarlouis. Täglich geöffnet, Industriestraße 20.",
          }),
        ]}
      />

      <Breadcrumbs trail={trail} />

      <SubPageHero
        eyebrow="Öffnungszeiten"
        title="Wann wir"
        italicTail="geöffnet haben"
        lead={`Sieben Tage die Woche. ${BUSINESS.address.street}, ${BUSINESS.address.postalCode} ${BUSINESS.address.locality}.`}
      />

      <section className="relative py-16 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-paper-deep border border-paper-soft/15 depth-shadow p-8 md:p-10">
            <div className="pointer-events-none absolute inset-3 border border-terracotta/30" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6 text-terracotta">
                <Sun size={24} />
                <div className="font-display italic tracking-[0.3em] uppercase text-xs">
                  Reguläre Zeiten
                </div>
              </div>
              <ul className="divide-y divide-paper-soft/10">
                {days.map((d) => (
                  <li key={d.label} className="flex items-baseline justify-between py-3">
                    <span className={`font-display ${d.accent ? "text-terracotta" : "text-espresso"} text-lg`}>
                      {d.label}
                    </span>
                    <span className="font-display text-espresso text-lg tabnum">
                      {d.hours}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-hand text-2xl text-terracotta-soft">
                Küche bis 30 Minuten vor Schließung.
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-5 font-serif text-espresso-soft text-base leading-relaxed">
            <p>
              <strong className="text-espresso">Feiertage:</strong> Wir haben an
              den meisten gesetzlichen Feiertagen im Saarland geöffnet. Heiligabend
              und 1. Januar sind die Ausnahmen — beide Tage geschlossen. Schau für
              Sondertage gerne kurz auf unserem{" "}
              <Link
                href={BUSINESS.socials.instagram}
                className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline"
              >
                Instagram-Profil
              </Link>
              {" "}vorbei oder ruf uns an.
            </p>
            <p>
              <strong className="text-espresso">Bestellungen:</strong> Online-Bestellung
              für Pizza ist während aller Öffnungszeiten möglich. Letzte Bestellung
              ca. 30 Minuten vor Küchenschluss.
            </p>
            <p>
              <strong className="text-espresso">Reservierung:</strong> Empfohlen für
              Freitag und Samstag ab 19 Uhr. Mehr dazu auf der{" "}
              <Link href="/reservierung" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Reservierungs-Seite
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <LocalNapBlock />
      <RelatedPages path={PATH} />
      <Footer />
    </>
  );
}
