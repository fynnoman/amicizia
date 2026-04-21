"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background — static gradient, no heavy animations */}
      <div className="absolute inset-0 bg-gradient-to-br from-bordeaux via-bordeaux to-bordeaux-dark">
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-bordeaux-light/15 blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-bordeaux-dark/20 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 w-full max-w-[90vw] mx-auto">
        {/* Handwritten tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/60 mb-6"
          style={{ fontFamily: "var(--font-caveat)" }}
        >
          seit über 12 Jahren mit Herz
        </motion.p>

        {/* Main heading — responsive, no clipping */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className="text-[clamp(3rem,12vw,11rem)] font-bold text-white tracking-[0.05em] leading-[0.9] mb-6"
        >
          AMICIZIA
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-white/35 text-xs md:text-sm tracking-[0.4em] uppercase mb-8"
        >
          Freundschaft · Familie · Essen
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-24 h-px bg-white/25 mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-white/70 text-base md:text-lg font-light mb-3"
        >
          Pizza · Pasta · con Amore
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-white/35 text-sm mb-12"
        >
          📍 Saarlouis · 🚗 Lieferung & Abholung · 🕒 Den ganzen Tag
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#menu"
            className="px-10 py-4 bg-white text-bordeaux text-sm font-semibold tracking-wider uppercase rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-white/10"
          >
            Speisekarte
          </a>
          <a
            href="https://www.lieferando.de/speisekarte/amicizia-66111"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border border-white/20 text-white text-sm font-semibold tracking-wider uppercase rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-[1.03] hover:border-white/40"
          >
            Jetzt bestellen
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator — simple CSS animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/25 text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-2">
          <div className="w-0.5 h-1.5 bg-white/30 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
