"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Fleuron, OliveBranch, CircleStamp } from "./Ornaments";

const sectionLinks = [
  { label: "Über uns",    href: "#about" },
  { label: "Geschichte",  href: "#timeline" },
  { label: "Speisekarte", href: "#menu" },
  { label: "Kontakt",     href: "#contact" },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <footer
      ref={ref}
      className="relative bg-paper-deep text-paper-soft pt-14 sm:pt-20 pb-10 px-5 sm:px-6 lg:px-12 overflow-hidden border-t border-paper-soft/10"
    >
      {/* Top deckle: warm champagne glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(60% 80% at 20% 10%, rgba(232,197,136,0.18), transparent 60%), radial-gradient(60% 80% at 90% 90%, rgba(181,167,103,0.16), transparent 65%)",
        }}
      />
      <div className="grain-overlay opacity-25" />

      <div className="relative max-w-7xl mx-auto">
        {/* Decorative top */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-12 text-paper-soft/60"
        >
          <span className="h-px flex-1 bg-paper-soft/15" />
          <Fleuron size={16} />
          <span className="font-display italic tracking-[0.28em] sm:tracking-[0.4em] text-[0.65rem] sm:text-xs uppercase whitespace-nowrap">
            Familienbetrieb · Saarlouis
          </span>
          <Fleuron size={16} />
          <span className="h-px flex-1 bg-paper-soft/15" />
        </motion.div>

        <div className="grid md:grid-cols-[1.6fr_1fr_1fr] gap-8 sm:gap-10">
          {/* Brand + NAP */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <a href="#hero" className="flex items-center gap-3">
              <CircleStamp size={70} className="text-terracotta-soft/80" />
              <div>
                <div
                  className="display-lg text-paper-soft text-2xl tracking-[0.18em] leading-none"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 60' }}
                >
                  AMICIZIA
                </div>
                <div className="font-display italic text-terracotta-soft text-sm tracking-[0.25em] uppercase mt-1">
                  Familienbetrieb · seit 2013
                </div>
              </div>
            </a>
            <address className="not-italic font-serif text-paper-soft/65 text-base leading-relaxed mt-5">
              Industriestraße 20<br />
              66740 Saarlouis<br />
              <span className="font-display italic text-paper-soft/55 text-sm">
                täglich · Vorbestellung ab 11:00, Küche 12:00 – 22:00
              </span>
            </address>
            <a
              href="https://www.instagram.com/amicizia.saarlouis/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-paper-soft hover:text-terracotta-soft transition-colors duration-300"
            >
              <Fleuron size={14} />
              @amicizia.saarlouis
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display italic text-terracotta-soft tracking-[0.3em] text-xs uppercase mb-5">
              Sektionen
            </h4>
            <ul className="space-y-2">
              {sectionLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-paper-soft/60 hover:text-paper-soft transition-colors duration-300 font-display italic text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display italic text-terracotta-soft tracking-[0.3em] text-xs uppercase mb-5">
              Bestellung
            </h4>
            <p className="font-serif text-paper-soft/70 text-sm leading-relaxed">
              Bestellungen zur Abholung werden ausschließlich telefonisch
              entgegengenommen. Vorbestellung ab 11:00 Uhr möglich, Küche
              von 12:00 bis 22:00 Uhr geöffnet.
            </p>
            <a
              href="tel:+4968311234567"
              className="inline-flex items-center gap-2 mt-4 text-paper-soft hover:text-terracotta-soft transition-colors duration-300 font-display italic text-sm"
            >
              <Fleuron size={14} />
              Jetzt anrufen
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-px bg-paper-soft/12 my-10 origin-left"
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 font-serif italic text-paper-soft/45 text-xs">
          <p>© {new Date().getFullYear()} AMICIZIA · Saarlouis. Alle Rechte vorbehalten.</p>
          <p className="flex items-center gap-2">
            <OliveBranch size={14} />
            Familienbetrieb aus Saarlouis.
            <OliveBranch size={14} className="-scale-x-100" />
          </p>
        </div>
      </div>
    </footer>
  );
}
