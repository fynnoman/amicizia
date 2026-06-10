import type { Metadata } from "next";
import Link from "next/link";
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
import { BUSINESS } from "@/data/business";

const PATH = "/reservierung";
export const metadata: Metadata = buildMetadata(PATH);

const faq: FaqEntry[] = [
  {
    question: "Wie reserviere ich einen Tisch beim Italiener in Saarlouis?",
    answer:
      "Am schnellsten per Telefon. Für größere Gruppen oder besondere Anlässe gerne auch per E-Mail oder Instagram-Direct-Message. Wir melden uns innerhalb weniger Stunden zurück.",
  },
  {
    question: "Bis wann sollte ich reservieren?",
    answer:
      "Für Wochentage reicht oft der gleiche Tag. Für Freitag- und Samstagabend empfehlen wir 1–3 Tage vorher zu reservieren — vor allem ab 19 Uhr.",
  },
  {
    question: "Kann ich für Geburtstage oder Firmenessen reservieren?",
    answer:
      "Ja, ab 6 Personen erstellen wir gerne ein abgestimmtes Menü oder reservieren einen ruhigeren Bereich. Sprich uns am besten direkt an.",
  },
  {
    question: "Sind Hunde willkommen?",
    answer:
      "Ruhige, leinengeführte Hunde sind in unserem Außenbereich willkommen. Im Innenraum nach Absprache.",
  },
];

export default function ReservierungPage() {
  const trail = [
    { name: "Start", path: "/" },
    { name: "Reservierung", path: PATH },
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
            name: "Tisch reservieren in Saarlouis — AMICIZIA",
            description:
              "Tisch reservieren beim Italiener AMICIZIA in Saarlouis. Per Telefon, E-Mail oder Instagram. Gruppen und Anlässe willkommen.",
          }),
          faqSchema(faq),
        ]}
      />

      <Breadcrumbs trail={trail} />

      <SubPageHero
        eyebrow="Reservierung"
        title="Tisch"
        italicTail="reservieren"
        lead="Damit dein Tisch in unserer Trattoria di Famiglia bereitsteht: kurz reservieren. Per Telefon, E-Mail oder Instagram-DM. Wir melden uns schnell zurück."
      />

      <section className="relative py-16 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-5">
            <a
              href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
              className="group relative bg-paper-deep border border-paper-soft/15 depth-shadow p-6 block"
            >
              <div className="pointer-events-none absolute inset-2 border border-terracotta/30" />
              <div className="relative">
                <div className="font-display italic text-terracotta tracking-[0.3em] text-[0.7rem] uppercase mb-2">
                  Telefon
                </div>
                <div className="font-display text-2xl text-espresso group-hover:text-terracotta transition-colors">
                  {BUSINESS.phoneDisplay}
                </div>
                <p className="font-serif italic text-espresso-soft text-sm mt-2">
                  Der schnellste Weg. Wir gehen zu unseren Öffnungszeiten ran.
                </p>
              </div>
            </a>

            <a
              href={`mailto:${BUSINESS.email}?subject=Reservierungsanfrage`}
              className="group relative bg-paper-deep border border-paper-soft/15 depth-shadow p-6 block"
            >
              <div className="pointer-events-none absolute inset-2 border border-terracotta/30" />
              <div className="relative">
                <div className="font-display italic text-terracotta tracking-[0.3em] text-[0.7rem] uppercase mb-2">
                  E-Mail
                </div>
                <div className="font-display text-xl text-espresso group-hover:text-terracotta transition-colors break-all">
                  {BUSINESS.email}
                </div>
                <p className="font-serif italic text-espresso-soft text-sm mt-2">
                  Für Gruppen, besondere Anlässe oder spezifische Wünsche.
                </p>
              </div>
            </a>

            <a
              href={BUSINESS.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-paper-deep border border-paper-soft/15 depth-shadow p-6 block sm:col-span-2"
            >
              <div className="pointer-events-none absolute inset-2 border border-terracotta/30" />
              <div className="relative">
                <div className="font-display italic text-terracotta tracking-[0.3em] text-[0.7rem] uppercase mb-2">
                  Instagram-DM
                </div>
                <div className="font-display text-xl text-espresso group-hover:text-terracotta transition-colors">
                  {BUSINESS.socials.instagramHandle}
                </div>
                <p className="font-serif italic text-espresso-soft text-sm mt-2">
                  Schreib uns direkt eine Nachricht — wir antworten meist innerhalb
                  weniger Stunden.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="paper-grain relative py-20 md:py-24 px-6 lg:px-12 bg-paper-deep/40">
        <div className="max-w-3xl mx-auto">
          <h2 className="display-lg text-[clamp(1.8rem,3.5vw,2.5rem)] text-espresso leading-tight">
            Reservierung — wenn du gut planen willst
          </h2>
          <div className="space-y-5 mt-8 font-serif text-espresso-soft text-base leading-relaxed">
            <p>
              In Saarlouis sind wir an Wochenenden oft gut gebucht. Wenn du sicher
              gehen willst, dass dein Lieblingstisch bereit steht oder dass wir
              Platz für die ganze Gruppe haben, ist Reservierung der Weg.
            </p>
            <p>
              Für besondere Anlässe — Geburtstage, kleine Firmenfeiern, Familientreffen —
              richten wir uns ein. Wir können einen ruhigeren Bereich vorbereiten, ein
              abgestimmtes Menü vorschlagen und Allergien oder Wünsche im Voraus klären.
            </p>
            <p>
              Wer einfach spontan vorbeikommt, ist genauso willkommen. Dann gilt:
              früh kommen, Wartezeit einplanen oder kurz vorab anrufen, um zu fragen,
              wie voll wir gerade sind.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/kontakt"
              className="btn-terra"
            >
              Adresse &amp; Route
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
