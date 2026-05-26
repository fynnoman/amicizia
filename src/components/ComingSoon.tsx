"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ComingSoon() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 px-6 lg:px-12 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-foreground mb-4"
        >
          Folgt uns auf Instagram
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-foreground/60"
        >
          Aktuelle Angebote und Einblicke findet ihr auf unserem Instagram-Kanal.
        </motion.p>
        <div className="mt-6">
          <a
            href="https://www.instagram.com/amicizia.saarlouis/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-bordeaux text-white rounded-full"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
