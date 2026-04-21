"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Start", href: "#hero" },
  { name: "Über uns", href: "#about" },
  { name: "Speisekarte", href: "#menu" },
  { name: "Kontakt", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
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
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3" data-logo>
            <span
              className={`text-2xl font-bold tracking-[0.2em] transition-colors duration-500 ${
                scrolled ? "text-bordeaux" : "text-white"
              }`}
            >
              AMICIZIA
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wider uppercase transition-colors duration-300 hover:text-bordeaux ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://www.lieferando.de/speisekarte/amicizia-66111"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-bordeaux text-white text-sm font-medium tracking-wider uppercase rounded-full hover:bg-bordeaux-dark transition-all duration-300 hover:scale-105"
            >
              Bestellen
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
                  ? "rotate-45 translate-y-2 bg-bordeaux"
                  : scrolled
                  ? "bg-foreground"
                  : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                mobileOpen
                  ? "opacity-0"
                  : scrolled
                  ? "bg-foreground"
                  : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                mobileOpen
                  ? "-rotate-45 -translate-y-2 bg-bordeaux"
                  : scrolled
                  ? "bg-foreground"
                  : "bg-white"
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-2xl font-medium tracking-wider text-foreground hover:text-bordeaux transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              href="https://www.lieferando.de/speisekarte/amicizia-66111"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="px-8 py-3 bg-bordeaux text-white text-lg font-medium tracking-wider rounded-full hover:bg-bordeaux-dark transition-all"
            >
              Bestellen
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
