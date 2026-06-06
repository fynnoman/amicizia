"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Fleuron, OliveBranch, CircleStamp } from "./Ornaments";

const quickLinks = [
  { label: "Start", href: "#hero" },
  { label: "Über uns", href: "#about" },
  { label: "Speisekarte", href: "#menu" },
  { label: "Bestellen", href: "#order" },
  { label: "Kontakt", href: "#contact" },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <footer
      ref={ref}
      className="relative bg-espresso text-paper-soft pt-20 pb-10 px-6 lg:px-12 overflow-hidden"
    >
      {/* Top deckle: warm light */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(60% 80% at 20% 10%, rgba(183,62,44,0.45), transparent 60%), radial-gradient(60% 80% at 90% 90%, rgba(107,100,40,0.25), transparent 65%)",
        }}
      />
      <div className="grain-overlay opacity-25" />

      <div className="relative max-w-7xl mx-auto">
        {/* Decorative top */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-12 text-paper-soft/60"
        >
          <span className="h-px flex-1 bg-paper-soft/15" />
          <Fleuron size={18} />
          <span className="font-display italic tracking-[0.4em] text-xs uppercase">
            Trattoria di Famiglia
          </span>
          <Fleuron size={18} />
          <span className="h-px flex-1 bg-paper-soft/15" />
        </motion.div>

        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <CircleStamp size={70} className="text-terracotta-soft/80" />
              <div>
                <div
                  className="display-lg text-paper-soft text-2xl tracking-[0.18em] leading-none"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 60' }}
                >
                  AMICIZIA
                </div>
                <div className="font-hand text-terracotta-soft text-xl -mt-0.5">
                  trattoria di famiglia
                </div>
              </div>
            </div>
            <p className="font-serif text-paper-soft/55 text-base leading-relaxed mt-5 max-w-sm">
              Eine kleine italienische Familien-Trattoria in Saarlouis.
              Seit 2013 — Pizza, pasta &amp; piccoli piaceri della casa.
            </p>
            <p className="font-hand text-terracotta-soft text-2xl mt-4">
              schön, dass du da bist ♡
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display italic text-terracotta-soft tracking-[0.3em] text-xs uppercase mb-5">
              Navigation
            </h4>
            <div className="space-y-2.5">
              {quickLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="flex items-center gap-2 text-paper-soft/55 hover:text-paper-soft transition-colors duration-300 font-display italic text-base group"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-terracotta-soft">
                    →
                  </span>
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display italic text-terracotta-soft tracking-[0.3em] text-xs uppercase mb-5">
              So findest du uns
            </h4>
            <div className="space-y-3 font-serif text-paper-soft/65 text-base leading-relaxed">
              <p>
                Industriestraße 20
                <br />
                66740 Saarlouis
              </p>
              <p className="font-display italic text-paper-soft/70 text-sm">
                täglich geöffnet · ab 10:00 Uhr
              </p>
              <a
                href="https://www.instagram.com/amicizia.saarlouis/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-paper-soft hover:text-terracotta-soft transition-colors duration-300"
              >
                <Fleuron size={14} />
                @amicizia.saarlouis
              </a>
            </div>
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
            Mit Liebe gemacht in Saarlouis.
            <OliveBranch size={14} className="-scale-x-100" />
          </p>
        </div>
      </div>
    </footer>
  );
}
