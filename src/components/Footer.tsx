"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer ref={ref} className="bg-foreground text-white py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold tracking-[0.2em] mb-4">
              AMICIZIA
            </h3>
            <p className="text-white/50 leading-relaxed text-sm">
              Ein Familienbetrieb mit Herz – seit über 12 Jahren. Frische Pizza,
              Pasta und mehr, jeden Tag in Saarlouis.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white/80 mb-6">
              Quick Links
            </h4>
            <div className="space-y-3">
              {["Start", "Über uns", "Speisekarte", "Kontakt"].map((link) => (
                <a
                  key={link}
                  href={`#${
                    link === "Start"
                      ? "hero"
                      : link === "Über uns"
                      ? "about"
                      : link === "Speisekarte"
                      ? "menu"
                      : "contact"
                  }`}
                  className="block text-white/40 hover:text-white transition-colors duration-300 text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white/80 mb-6">
              Kontakt
            </h4>
            <div className="space-y-3 text-sm text-white/40">
              <p>Industriestraße 20</p>
              <p>66740 Saarlouis</p>
              <a
                href="https://www.instagram.com/amicizia.saarlouis/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors duration-300"
              >
                Instagram: @amicizia.saarlouis
              </a>
              <a
                href="https://www.lieferando.de/speisekarte/amicizia-66111"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors duration-300"
              >
                Lieferando Speisekarte
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-px bg-white/10 mb-8"
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>© {new Date().getFullYear()} AMICIZIA. Alle Rechte vorbehalten.</p>
          <p>
            Mit ❤️ gemacht in Saarlouis
          </p>
        </div>
      </div>
    </footer>
  );
}
