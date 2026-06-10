import Link from "next/link";
import { BUSINESS } from "@/data/business";
import { Sun, OliveBranch, Fleuron } from "@/components/Ornaments";

/**
 * NAP block used on subpages for consistent local signals. Includes
 * address, phone (tel:), opening hours, and a strong CTA to /kontakt.
 */
export default function LocalNapBlock() {
  return (
    <section
      aria-labelledby="nap-heading"
      className="paper-grain relative py-20 md:py-24 px-6 lg:px-12 bg-paper-deep/40 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
        <div className="flex items-center gap-3 mb-8 text-terracotta">
          <Fleuron size={18} />
          <h2
            id="nap-heading"
            className="font-display italic tracking-[0.3em] uppercase text-xs"
          >
            So findest du uns
          </h2>
          <span className="h-px flex-1 bg-terracotta/30" />
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <div className="relative bg-paper-deep border border-paper-soft/15 depth-shadow p-6">
            <div className="pointer-events-none absolute inset-2 border border-terracotta/25" />
            <div className="relative">
              <div className="flex items-center gap-3 text-terracotta mb-3">
                <OliveBranch size={22} />
                <span className="font-display italic text-xs tracking-[0.3em] uppercase">
                  Adresse
                </span>
              </div>
              <address className="not-italic font-display text-espresso text-lg leading-snug">
                {BUSINESS.address.street}
                <br />
                {BUSINESS.address.postalCode} {BUSINESS.address.locality}
              </address>
            </div>
          </div>

          <div className="relative bg-paper-deep border border-paper-soft/15 depth-shadow p-6">
            <div className="pointer-events-none absolute inset-2 border border-terracotta/25" />
            <div className="relative">
              <div className="flex items-center gap-3 text-terracotta mb-3">
                <Sun size={22} />
                <span className="font-display italic text-xs tracking-[0.3em] uppercase">
                  Öffnungszeiten
                </span>
              </div>
              <ul className="font-serif text-espresso text-sm leading-relaxed space-y-0.5">
                {BUSINESS.hours.weekdayText.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative bg-paper-deep border border-paper-soft/15 depth-shadow p-6">
            <div className="pointer-events-none absolute inset-2 border border-terracotta/25" />
            <div className="relative">
              <div className="flex items-center gap-3 text-terracotta mb-3">
                <Fleuron size={20} />
                <span className="font-display italic text-xs tracking-[0.3em] uppercase">
                  Kontakt
                </span>
              </div>
              <div className="space-y-2 font-serif text-espresso text-sm">
                <a
                  href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                  className="block text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline font-display italic text-lg"
                >
                  {BUSINESS.phoneDisplay}
                </a>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="block hover:text-terracotta underline-offset-4 hover:underline break-all"
                >
                  {BUSINESS.email}
                </a>
                <a
                  href={BUSINESS.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-terracotta underline-offset-4 hover:underline"
                >
                  Instagram {BUSINESS.socials.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/#order" className="btn-terra">
            Online bestellen
          </Link>
          <Link
            href="/reservierung"
            className="btn-ghost !text-espresso !border-espresso/70 hover:!bg-espresso hover:!text-paper"
          >
            Tisch reservieren
          </Link>
          <Link
            href="/kontakt"
            className="font-display italic text-terracotta hover:text-terracotta-deep tracking-wider underline-offset-4 hover:underline"
          >
            Route planen →
          </Link>
        </div>
      </div>
    </section>
  );
}
