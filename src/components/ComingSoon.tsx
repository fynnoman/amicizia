"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const teasers = [
  {
    title: "Neue Gerichte",
    hint: "Saisonale Spezialitäten...",
    blurEmoji: "🍝",
  },
  {
    title: "Überraschung",
    hint: "Etwas ganz Neues...",
    blurEmoji: "🎉",
  },
  {
    title: "Events",
    hint: "Community & mehr...",
    blurEmoji: "🎶",
  },
];

export default function ComingSoon() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 lg:px-12 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-bordeaux text-sm tracking-[0.3em] uppercase font-medium mb-4"
          >
            Bleibt gespannt
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
          >
            Da kommt noch <span className="text-bordeaux">was</span> ✨
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-foreground/40 max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            Wir haben große Pläne... und ihr werdet die Ersten sein, die davon erfahren! 👀
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {teasers.map((teaser, i) => (
            <motion.div
              key={teaser.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white p-8 text-center hover:shadow-xl transition-all duration-500">
                {/* Blurred content - the "secret" */}
                <div className="relative mb-6">
                  <motion.span
                    className="text-6xl inline-block blur-md group-hover:blur-sm transition-all duration-700"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  >
                    {teaser.blurEmoji}
                  </motion.span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">{teaser.title}</h3>
                <p className="text-foreground/40 text-sm">{teaser.hint}</p>

                {/* Shimmer overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-bordeaux/5 to-transparent animate-shimmer pointer-events-none" />

                {/* Lock icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-bordeaux/5 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-bordeaux/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/amicizia.saarlouis/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-bordeaux font-medium hover:underline underline-offset-4 transition-all"
          >
            <span>Folgt uns auf Instagram für Updates</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
