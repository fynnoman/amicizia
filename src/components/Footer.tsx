"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Fleuron, OliveBranch, CircleStamp } from "./Ornaments";

const pizzaLinks = [
  { label: "Pizzeria Saarlouis", href: "/pizzeria-saarlouis" },
  { label: "Pizza Saarlouis", href: "/pizza-saarlouis" },
  { label: "Steinofen-Pizza", href: "/steinofen-pizza-saarlouis" },
  { label: "Beste Pizza", href: "/beste-pizza-saarlouis" },
  { label: "Pizza bestellen", href: "/pizza-bestellen-saarlouis" },
];

const italyLinks = [
  { label: "Italiener Saarlouis", href: "/italiener-saarlouis" },
  { label: "Italienisches Restaurant", href: "/italienisches-restaurant-saarlouis" },
  { label: "Trattoria Saarlouis", href: "/trattoria-saarlouis" },
  { label: "Italienisch essen", href: "/italienisch-essen-saarlouis" },
];

const supportLinks = [
  { label: "Speisekarte", href: "/speisekarte" },
  { label: "Reservierung", href: "/reservierung" },
  { label: "Öffnungszeiten", href: "/oeffnungszeiten" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "FAQ", href: "/faq" },
];

const areaLinks = [
  { label: "Italiener Dillingen", href: "/italiener-dillingen" },
  { label: "Pizzeria Saarwellingen", href: "/pizzeria-saarwellingen" },
  { label: "Italiener Roden", href: "/italiener-roden" },
  { label: "Italiener Fraulautern", href: "/italiener-fraulautern" },
  { label: "Italiener Wallerfangen", href: "/italiener-wallerfangen" },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <footer
      ref={ref}
      className="relative bg-paper-deep text-paper-soft pt-20 pb-10 px-6 lg:px-12 overflow-hidden border-t border-paper-soft/10"
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

        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          {/* Brand + NAP */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center gap-3">
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
            </Link>
            <address className="not-italic font-serif text-paper-soft/65 text-base leading-relaxed mt-5">
              Industriestraße 20<br />
              66740 Saarlouis<br />
              <span className="font-display italic text-paper-soft/55 text-sm">
                täglich · ab 10:00 Uhr
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
              Pizza in Saarlouis
            </h4>
            <ul className="space-y-2">
              {pizzaLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-paper-soft/60 hover:text-paper-soft transition-colors duration-300 font-display italic text-sm"
                  >
                    {l.label}
                  </Link>
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
              Italiener &amp; Trattoria
            </h4>
            <ul className="space-y-2">
              {italyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-paper-soft/60 hover:text-paper-soft transition-colors duration-300 font-display italic text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-display italic text-terracotta-soft tracking-[0.3em] text-xs uppercase mt-7 mb-3">
              Aus der Umgebung
            </h4>
            <ul className="space-y-2">
              {areaLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-paper-soft/60 hover:text-paper-soft transition-colors duration-300 font-display italic text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-display italic text-terracotta-soft tracking-[0.3em] text-xs uppercase mb-5">
              Service
            </h4>
            <ul className="space-y-2">
              {supportLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-paper-soft/60 hover:text-paper-soft transition-colors duration-300 font-display italic text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
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
