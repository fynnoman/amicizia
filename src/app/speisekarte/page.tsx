import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import JsonLd from "@/components/JsonLd";
import {
  webpageSchema,
  breadcrumbSchema,
  menuSchema,
} from "@/lib/schema";
import { menuItems, categoryLabel, allergenLegend } from "@/data/menu";
import { DEFAULT_OG_IMAGE, BUSINESS } from "@/data/business";
import { Divider, Tomato } from "@/components/Ornaments";

const PATH = "/speisekarte";
const TITLE = "Speisekarte · AMICIZIA Pizzeria Saarlouis";
const DESCRIPTION =
  "Speisekarte AMICIZIA Saarlouis: Steinofen-Pizzen (Tradizionale, Speciale, Neuheiten 15,90 €), Ciabatta, Pizzabrötchen, Pasta, Burrata-Salate und Dessert. Preise und Allergene inklusive.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH },
};

export default function SpeisekartePage() {
  const menuSections = Array.from(
    menuItems.reduce((acc, it) => {
      const list = acc.get(it.category) ?? [];
      list.push({ name: it.name, description: it.description, price: it.price });
      acc.set(it.category, list);
      return acc;
    }, new Map<string, { name: string; description?: string; price: number }[]>()),
  ).map(([cat, items]) => ({
    name: categoryLabel[cat as keyof typeof categoryLabel] ?? cat,
    items,
  }));

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
            { name: "Speisekarte", path: PATH },
          ]),
          menuSchema({ url: PATH, sections: menuSections }),
        ]}
      />
      <Navbar />

      <main className="bg-paper text-espresso">
        <section className="relative pt-28 sm:pt-32 md:pt-36 pb-8 sm:pb-12 px-5 sm:px-6 lg:px-12 bg-paper-deep/40 paper-grain">
          <div className="max-w-5xl mx-auto">
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
                  Speisekarte
                </li>
              </ol>
            </nav>

            <div className="flex justify-start mb-4 text-terracotta">
              <Divider label="Speisekarte · AMICIZIA" />
            </div>

            <h1 className="display-xl text-[clamp(2.5rem,8vw,5rem)] text-espresso leading-[0.98] max-w-4xl">
              Speisekarte — Pizza, Ciabatta, Pasta und mehr in Saarlouis.
            </h1>
            <p className="font-serif text-espresso-soft text-lg sm:text-xl md:text-2xl leading-relaxed mt-6 max-w-3xl">
              Alle Positionen der AMICIZIA-Karte mit Preisen, Beschreibungen und
              Allergen-Kennzeichnung. Bestellung zur Abholung telefonisch unter{" "}
              <a
                href={`tel:${BUSINESS.phone}`}
                className="text-terracotta hover:underline underline-offset-4"
              >
                {BUSINESS.phoneDisplay}
              </a>{" "}
              — Vorbestellung ab 11 Uhr, Küche 12–22 Uhr täglich.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="btn-terra justify-center min-h-[48px]"
              >
                <Tomato size={18} />
                Anrufen · {BUSINESS.phoneDisplay}
              </a>
              <Link
                href="/#menu"
                className="btn-ghost justify-center min-h-[48px]"
              >
                Interaktive Ansicht mit Filter
              </Link>
            </div>
          </div>
        </section>

        <Menu />

        <section className="paper-grain relative py-14 sm:py-20 px-5 sm:px-6 lg:px-12 bg-paper-deep/40">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-start mb-4 text-terracotta">
              <Divider label="Allergene · Legende" />
            </div>
            <h2 className="display-lg text-[clamp(1.8rem,4.5vw,3rem)] text-espresso leading-[1.1] mb-4">
              Allergene auf der Karte
            </h2>
            <p className="font-serif text-espresso-soft text-base sm:text-lg leading-relaxed">
              Jede Position ist mit den relevanten Allergen-Codes markiert:
            </p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-2 font-serif text-espresso-soft text-base">
              {allergenLegend.map((a) => (
                <li key={a.code} className="border-l border-terracotta/50 pl-3">
                  <strong className="text-espresso">{a.code}</strong> — {a.label}
                </li>
              ))}
            </ul>
            <p className="font-serif italic text-espresso-soft/80 text-sm mt-4">
              Bei weiteren Fragen zu Allergenen oder Zusatzstoffen sprich uns
              gern direkt an.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
