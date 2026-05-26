"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 px-6 lg:px-12 overflow-hidden pattern-autumn"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cream -skew-x-12 translate-x-20 hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-bordeaux text-sm tracking-[0.3em] uppercase font-medium mb-4"
            >
              Wer wir sind
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight"
            >
              Mehr als nur
              <br />
              <span className="text-bordeaux">ein Restaurant</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, rotate: 2 }}
              animate={isInView ? { opacity: 1, rotate: -1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-2xl text-bordeaux/40 mb-8 -rotate-1"
            >
              AMICIZIA — Authentische italienische Küche
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-16 h-[2px] bg-bordeaux mb-8 origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-foreground/70 leading-relaxed mb-6"
            >
              Wir sind ein lokales Restaurant in Saarlouis. Leidenschaft für gutes Essen steht für
              uns an erster Stelle.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-foreground/70 leading-relaxed mb-6"
            >
              Auch wenn unser Standort neu ist, sind wir im Geschäft schon seit
              über 12 Jahren. Mit viel Erfahrung, Liebe zum Detail und der
              Freude, unsere Gäste glücklich zu machen, haben wir jetzt unseren
              neuen Platz gefunden.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-lg text-foreground/50 leading-relaxed mb-8 italic"
            >
              &ldquo;Danke an alle, die uns schon unterstützen – und an alle,
              die uns noch entdecken werden&rdquo; ❤️
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-10"
            >
              {[
                { value: "12+", label: "Jahre Erfahrung" },
                { value: "—", label: "Team" },
                { value: "∞", label: "Liebe im Essen" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-3xl font-bold text-bordeaux">
                    {stat.value}
                  </span>
                  <p className="text-xs text-foreground/40 mt-1 tracking-wide">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-bordeaux">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <p className="text-3xl font-bold tracking-wider mb-2">AMICIZIA</p>
                  <p className="text-white/40 tracking-[0.2em] text-xs uppercase mb-4">Industriestraße 20 · Saarlouis</p>
                  <p className="text-white/60 text-xl -rotate-3">con amore</p>
                </div>
              </div>
              <div className="absolute inset-4 border border-white/10 rounded-2xl" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5">
              <p className="text-xs text-foreground/40 mb-0.5">Geöffnet</p>
              <p className="text-lg font-bold text-bordeaux">Den ganzen Tag</p>
              <p className="text-xs text-foreground/30">Ab 10:00 Uhr</p>
            </div>

            <div className="absolute -top-4 -right-4 bg-bordeaux rounded-2xl shadow-xl px-5 py-3">
              <p className="text-white text-lg">AMICIZIA</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
