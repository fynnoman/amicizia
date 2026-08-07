import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import {
  webpageSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/schema";
import { faqItems } from "@/data/faq";
import { DEFAULT_OG_IMAGE, BUSINESS } from "@/data/business";
import { Divider, Fleuron, Tomato } from "@/components/Ornaments";

const PATH = "/faq";
const TITLE = "FAQ · AMICIZIA Pizzeria Saarlouis — häufige Fragen";
const DESCRIPTION =
  "Häufige Fragen zu AMICIZIA in Saarlouis: Öffnungszeiten, Bestellung, Abholung, Steinofen, Preise, vegetarische Pizza, Allergene, Zahlung und Reservierung.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH },
};

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          webpageSchema({
            url: PATH,
            name: TITLE,
            description: DESCRIPTION,
            primaryImage: DEFAULT_OG_IMAGE.url,
          }),
          breadcrumbSchema([
            { name: "Start", path: "/" },
            { name: "FAQ", path: PATH },
          ]),
          faqSchema(faqItems),
        ]}
      />
      <Navbar />

      <main className="bg-paper text-espresso">
        <section className="relative pt-28 sm:pt-32 md:pt-36 pb-10 sm:pb-16 px-5 sm:px-6 lg:px-12 bg-paper-deep/40 paper-grain">
          <div className="max-w-4xl mx-auto">
            <nav
              aria-label="Breadcrumb"
              className="font-display italic text-xs sm:text-sm text-espresso-soft/80 mb-6"
            >
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-terracotta transition-colors">
                    Start
                  </Link>
                </li>
                <li className="text-terracotta/60">·</li>
                <li className="text-terracotta" aria-current="page">
                  FAQ
                </li>
              </ol>
            </nav>

            <div className="flex justify-start mb-4 text-terracotta">
              <Divider label="Häufige Fragen · AMICIZIA" />
            </div>

            <h1 className="display-xl text-[clamp(2.5rem,8vw,5rem)] text-espresso leading-[0.98] max-w-4xl">
              FAQ — Fragen zu unserer Pizzeria in Saarlouis.
            </h1>
            <p className="font-serif text-espresso-soft text-lg sm:text-xl leading-relaxed mt-6 max-w-3xl">
              Öffnungszeiten, Bestellung, Steinofen, Preise, vegetarische
              Optionen, Allergene und Zahlung — hier findest du die Antworten
              auf die häufigsten Fragen zu AMICIZIA.
            </p>
          </div>
        </section>

        <section className="paper-grain relative py-14 sm:py-20 px-5 sm:px-6 lg:px-12 bg-paper">
          <div className="max-w-3xl mx-auto">
            <div className="divide-y divide-espresso/12 border-t border-b border-espresso/12">
              {faqItems.map((f) => (
                <details key={f.question} className="py-4 group">
                  <summary className="flex items-start gap-3 cursor-pointer list-none font-display italic text-lg sm:text-xl md:text-2xl text-espresso group-open:text-terracotta transition-colors min-h-[44px]">
                    <span className="mt-1 shrink-0 text-terracotta">
                      <Fleuron size={16} />
                    </span>
                    <span>{f.question}</span>
                  </summary>
                  <p className="font-serif text-espresso-soft text-base sm:text-lg leading-relaxed pl-7 pr-2 pt-3 pb-1 max-w-prose">
                    {f.answer}
                  </p>
                </details>
              ))}
            </div>
            <p className="mt-8 font-display italic text-espresso-soft text-sm sm:text-base tracking-wide">
              Deine Frage ist nicht dabei? Ruf uns an unter{" "}
              <a
                href={`tel:${BUSINESS.phone}`}
                className="text-terracotta underline-offset-4 hover:underline"
              >
                {BUSINESS.phoneDisplay}
              </a>
              , wir helfen gern.
            </p>
            <div className="mt-8">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="btn-terra justify-center min-h-[48px]"
              >
                <Tomato size={18} />
                Anrufen · {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
