"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "🚗",
    title: "Lieferung",
    description: "Direkt zu dir nach Hause – bequem über Lieferando bestellen.",
  },
  {
    icon: "🥡",
    title: "Abholung",
    description:
      "Bestell vor und hol dein Essen frisch bei uns ab – kein Warten.",
  },
  {
    icon: "🍽️",
    title: "Vor Ort genießen",
    description:
      "Komm vorbei und genieße dein Essen direkt bei uns im Foodspot.",
  },
];

export default function Delivery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 lg:px-12 bg-bordeaux overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-80 h-80 border-2 border-white/5 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -left-20 w-60 h-60 border-2 border-white/5 rounded-full"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-white/60 text-sm tracking-[0.3em] uppercase font-medium mb-4"
          >
            So bekommst du dein Essen
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Lieferung & Abholung
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-[2px] bg-white/40 mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="group text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="text-5xl mb-6 inline-block"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://www.lieferando.de/speisekarte/amicizia-66111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 bg-white text-bordeaux text-sm font-bold tracking-wider uppercase rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Jetzt bei Lieferando bestellen
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
