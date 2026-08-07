"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Fleuron } from "./Ornaments";

const navLinks = [
  { name: "Speisekarte",     href: "/speisekarte" },
  { name: "Öffnungszeiten",  href: "/oeffnungszeiten" },
  { name: "Über uns",        href: "/ueber-uns" },
  { name: "FAQ",             href: "/faq" },
  { name: "Kontakt",         href: "/kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-paper/95 backdrop-blur-md shadow-[0_8px_24px_-12px_rgba(0,0,0,0.8)] border-b border-espresso/15"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" data-logo aria-label="AMICIZIA — Pizzeria Saarlouis, Startseite">
            <span
              className={`transition-colors duration-500 ${
                scrolled ? "text-terracotta" : "text-paper-soft"
              }`}
            >
              <Fleuron size={22} />
            </span>
            <span className="flex flex-col leading-none">
              <span
                className={`font-display text-[1.15rem] sm:text-[1.45rem] tracking-[0.22em] transition-colors duration-500 ${
                  scrolled ? "text-espresso" : "text-paper-soft"
                }`}
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 60' }}
              >
                AMICIZIA
              </span>
              <span
                className={`font-display italic text-[0.6rem] sm:text-[0.72rem] tracking-[0.22em] sm:tracking-[0.28em] uppercase mt-0.5 transition-colors duration-500 ${
                  scrolled ? "text-terracotta" : "text-paper-soft/80"
                }`}
              >
                Pizza · Saarlouis
              </span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-display italic text-[0.95rem] lg:text-[1rem] transition-colors duration-300 ${
                  scrolled
                    ? "text-espresso hover:text-terracotta"
                    : "text-paper-soft hover:text-paper"
                } after:absolute after:left-1/2 after:-bottom-1 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+491629906068"
              className="btn-terra !py-2.5 !px-5 !text-[0.7rem]"
              aria-label="Anrufen: 0162 9906068"
            >
              Anrufen
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col justify-center gap-1.5 p-3 -mr-3 min-h-[44px] min-w-[44px]"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                mobileOpen
                  ? "rotate-45 translate-y-2 bg-terracotta"
                  : scrolled
                  ? "bg-espresso"
                  : "bg-paper-soft"
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                mobileOpen
                  ? "opacity-0"
                  : scrolled
                  ? "bg-espresso"
                  : "bg-paper-soft"
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                mobileOpen
                  ? "-rotate-45 -translate-y-2 bg-terracotta"
                  : scrolled
                  ? "bg-espresso"
                  : "bg-paper-soft"
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="paper-grain fixed inset-0 z-40 bg-paper flex flex-col items-center justify-center gap-6 px-6 overflow-y-auto py-24"
            role="dialog"
            aria-modal="true"
            aria-label="Hauptnavigation"
          >
            <Fleuron size={28} className="text-terracotta" />
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.08 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display italic text-3xl sm:text-4xl text-espresso hover:text-terracotta transition-colors min-h-[44px] flex items-center"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href="tel:+491629906068"
              onClick={() => setMobileOpen(false)}
              className="btn-terra mt-4 min-h-[48px] w-full sm:w-auto justify-center"
              aria-label="Jetzt anrufen zur Abholung: 0162 9906068"
            >
              Anrufen · 0162 9906068
            </motion.a>
            <span className="font-display italic text-sm sm:text-base text-espresso-soft mt-2 tracking-wide text-center">
              Vorbestellung ab 11:00 · Küche 12:00 – 22:00
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
