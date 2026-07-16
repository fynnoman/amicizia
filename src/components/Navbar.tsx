"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fleuron } from "./Ornaments";

const navLinks = [
  { name: "Über uns",    href: "#about" },
  { name: "Geschichte",  href: "#timeline" },
  { name: "Speisekarte", href: "#menu" },
  { name: "Kontakt",     href: "#contact" },
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
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group" data-logo>
            <span
              className={`transition-colors duration-500 ${
                scrolled ? "text-terracotta" : "text-paper-soft"
              }`}
            >
              <Fleuron size={22} />
            </span>
            <span className="flex flex-col leading-none">
              <span
                className={`font-display text-[1.45rem] tracking-[0.22em] transition-colors duration-500 ${
                  scrolled ? "text-espresso" : "text-paper-soft"
                }`}
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 60' }}
              >
                AMICIZIA
              </span>
              <span
                className={`font-display italic text-[0.72rem] tracking-[0.28em] uppercase mt-0.5 transition-colors duration-500 ${
                  scrolled ? "text-terracotta" : "text-paper-soft/80"
                }`}
              >
                Familienbetrieb · Saarlouis
              </span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative font-display italic text-[1rem] transition-colors duration-300 ${
                  scrolled
                    ? "text-espresso hover:text-terracotta"
                    : "text-paper-soft hover:text-paper"
                } after:absolute after:left-1/2 after:-bottom-1 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+4968311234567"
              className="btn-terra !py-2.5 !px-5 !text-[0.7rem]"
            >
              Anrufen
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
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
            className="paper-grain fixed inset-0 z-40 bg-paper flex flex-col items-center justify-center gap-7"
          >
            <Fleuron size={28} className="text-terracotta" />
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.08 }}
                className="font-display italic text-4xl text-espresso hover:text-terracotta transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href="tel:+4968311234567"
              onClick={() => setMobileOpen(false)}
              className="btn-terra mt-4"
            >
              Anrufen zur Abholung
            </motion.a>
            <span className="font-display italic text-base text-espresso-soft mt-2 tracking-wide">
              Vorbestellung ab 11:00 · Küche 12:00 – 22:00
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
