import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, webpageSchema, faqSchema } from "@/lib/schema";
import { faqItems as ALL_FAQ } from "@/data/faq";
import { BUSINESS, DEFAULT_OG_IMAGE } from "@/data/business";
import { Divider, Fleuron, OliveBranch, Tomato } from "@/components/Ornaments";

export type Crumb = { name: string; path: string };

export type LandingSection = {
  eyebrow?: string;
  heading: string;
  body: React.ReactNode;
};

export type LandingShellProps = {
  path: string;
  title: string;
  description: string;
  hero: {
    eyebrow: string;
    h1: string;
    subtitle: string;
  };
  breadcrumbs: Crumb[];
  sections: LandingSection[];
  faqSlugs?: string[]; // pick specific FAQ questions by substring match
  crossLinks?: { label: string; href: string; hint?: string }[];
  showQuickFacts?: boolean;
};

function pickFaq(slugs?: string[]) {
  if (!slugs || slugs.length === 0) return [];
  return ALL_FAQ.filter((f) =>
    slugs.some((s) => f.question.toLowerCase().includes(s.toLowerCase())),
  );
}

export default function LandingShell(props: LandingShellProps) {
  const {
    path,
    title,
    description,
    hero,
    breadcrumbs,
    sections,
    faqSlugs,
    crossLinks = [],
    showQuickFacts = true,
  } = props;

  const selectedFaq = pickFaq(faqSlugs);

  return (
    <>
      <JsonLd
        data={[
          webpageSchema({
            url: path,
            name: title,
            description,
            primaryImage: DEFAULT_OG_IMAGE.url,
          }),
          breadcrumbSchema(breadcrumbs.map((c) => ({ name: c.name, path: c.path }))),
          ...(selectedFaq.length > 0 ? [faqSchema(selectedFaq)] : []),
        ]}
      />
      <Navbar />

      <main className="bg-paper text-espresso">
        {/* Hero */}
        <section className="relative pt-28 sm:pt-32 md:pt-36 pb-14 sm:pb-20 md:pb-24 px-5 sm:px-6 lg:px-12 overflow-hidden bg-paper-deep/40 paper-grain">
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              background:
                "radial-gradient(60% 70% at 20% 20%, rgba(232,197,136,0.10), transparent 60%), radial-gradient(70% 80% at 90% 90%, rgba(181,167,103,0.10), transparent 65%)",
            }}
          />
          <div className="relative max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="font-display italic text-xs sm:text-sm text-espresso-soft/80 tracking-wide mb-6"
            >
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                {breadcrumbs.map((c, i) => {
                  const isLast = i === breadcrumbs.length - 1;
                  return (
                    <li key={c.path} className="flex items-center gap-2">
                      {i > 0 && <span className="text-terracotta/60">·</span>}
                      {isLast ? (
                        <span className="text-terracotta" aria-current="page">
                          {c.name}
                        </span>
                      ) : (
                        <Link
                          href={c.path}
                          className="hover:text-terracotta transition-colors"
                        >
                          {c.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>

            <div className="flex justify-start mb-4 text-terracotta">
              <Divider label={hero.eyebrow} />
            </div>

            <h1 className="display-xl text-[clamp(2.5rem,8vw,5.5rem)] text-espresso leading-[0.98] max-w-4xl">
              {hero.h1}
            </h1>

            <p className="font-serif text-espresso-soft text-lg sm:text-xl md:text-2xl leading-relaxed mt-6 max-w-3xl">
              {hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="btn-terra justify-center min-h-[48px] w-full sm:w-auto"
                aria-label="Anrufen zur Abholung: 0162 9906068"
              >
                <Tomato size={18} />
                Anrufen · {BUSINESS.phoneDisplay}
              </a>
              <Link
                href="/#menu"
                className="btn-ghost justify-center min-h-[48px] w-full sm:w-auto"
              >
                Zur Speisekarte
              </Link>
            </div>

            {showQuickFacts && (
              <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl">
                <QuickFact term="Adresse" desc={`${BUSINESS.address.street}, ${BUSINESS.address.locality}`} />
                <QuickFact term="Küche" desc="12–22 Uhr täglich" />
                <QuickFact term="Vorbestellung" desc="ab 11 Uhr" />
                <QuickFact term="Seit" desc={String(BUSINESS.founded)} />
              </dl>
            )}
          </div>
        </section>

        {/* Content Sections */}
        <section className="paper-grain relative py-14 sm:py-20 md:py-24 px-5 sm:px-6 lg:px-12 bg-paper overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-14 sm:space-y-20">
            {sections.map((s, i) => (
              <article key={i} className="relative">
                {s.eyebrow && (
                  <div className="font-display italic text-terracotta tracking-[0.3em] text-[0.7rem] uppercase mb-3">
                    {s.eyebrow}
                  </div>
                )}
                <h2 className="display-lg text-[clamp(1.8rem,4.5vw,3rem)] text-espresso leading-[1.1] mb-5">
                  {s.heading}
                </h2>
                <div className="prose-landing font-serif text-espresso-soft text-base sm:text-lg leading-relaxed space-y-4 max-w-3xl">
                  {s.body}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        {selectedFaq.length > 0 && (
          <section className="paper-grain relative py-14 sm:py-20 md:py-24 px-5 sm:px-6 lg:px-12 bg-paper-deep/40">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-start mb-4 text-terracotta">
                <Divider label="Fragen zu dieser Seite" />
              </div>
              <h2 className="display-lg text-[clamp(1.8rem,4.5vw,3rem)] text-espresso leading-[1.1] mb-6">
                Häufig gefragt
              </h2>
              <div className="divide-y divide-espresso/12 border-t border-b border-espresso/12">
                {selectedFaq.map((f) => (
                  <details key={f.question} className="py-4 group">
                    <summary className="flex items-start gap-3 cursor-pointer list-none font-display italic text-lg sm:text-xl text-espresso group-open:text-terracotta transition-colors min-h-[44px]">
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
              <p className="mt-6 font-display italic text-espresso-soft text-sm">
                Weitere Fragen findest du auf unserer{" "}
                <Link href="/faq" className="text-terracotta hover:underline underline-offset-4">
                  FAQ-Seite
                </Link>
                .
              </p>
            </div>
          </section>
        )}

        {/* Cross-links */}
        {crossLinks.length > 0 && (
          <section className="paper-grain relative py-14 sm:py-20 px-5 sm:px-6 lg:px-12 bg-paper">
            <div className="max-w-5xl mx-auto">
              <div className="flex justify-start mb-4 text-terracotta">
                <Divider label="Ebenfalls interessant" />
              </div>
              <h2 className="display-lg text-[clamp(1.6rem,4vw,2.5rem)] text-espresso leading-[1.1] mb-6">
                Verwandte Seiten
              </h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {crossLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="block relative p-5 sm:p-6 border border-espresso/15 hover:border-terracotta transition-colors group min-h-[88px]"
                    >
                      <div className="font-display italic text-terracotta tracking-wide text-xs uppercase mb-1">
                        {l.href}
                      </div>
                      <div className="font-display text-lg sm:text-xl text-espresso group-hover:text-terracotta transition-colors">
                        {l.label}
                      </div>
                      {l.hint && (
                        <div className="font-serif italic text-espresso-soft text-sm mt-1">
                          {l.hint}
                        </div>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Local CTA */}
        <section className="paper-grain relative py-16 sm:py-20 md:py-24 px-5 sm:px-6 lg:px-12 bg-paper-deep/60 border-t border-b border-espresso/12">
          <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_1fr] gap-8 items-center">
            <div>
              <div className="flex justify-start mb-3 text-terracotta">
                <OliveBranch size={30} />
              </div>
              <h2 className="display-lg text-[clamp(1.8rem,4.5vw,3rem)] text-espresso leading-[1.1] mb-3">
                Vorbestellung zur Abholung
              </h2>
              <p className="font-serif text-espresso-soft text-base sm:text-lg leading-relaxed max-w-md">
                Ruf uns an, wir bereiten deine Pizza frisch aus dem Steinofen vor
                und du holst sie in der Industriestraße 20 in Saarlouis ab.
                Vorbestellung ab 11 Uhr, Küche 12–22 Uhr täglich.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="btn-terra justify-center min-h-[52px]"
              >
                <Tomato size={18} />
                Anrufen · {BUSINESS.phoneDisplay}
              </a>
              <a
                href="https://maps.google.com/?q=Industriestraße+20,+66740+Saarlouis"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost justify-center min-h-[52px]"
              >
                Route zur Industriestraße 20
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function QuickFact({ term, desc }: { term: string; desc: string }) {
  return (
    <div className="border-l border-terracotta/50 pl-3">
      <dt className="font-display italic text-terracotta tracking-[0.25em] text-[0.65rem] uppercase mb-1">
        {term}
      </dt>
      <dd className="font-display text-espresso text-sm sm:text-base leading-snug">
        {desc}
      </dd>
    </div>
  );
}

