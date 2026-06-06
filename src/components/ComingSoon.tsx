"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Fleuron, OliveBranch } from "./Ornaments";

export default function ComingSoon() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="paper-grain relative py-20 px-6 lg:px-12 bg-paper overflow-hidden"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-4 text-terracotta"
        >
          <OliveBranch size={36} />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="display-lg text-3xl md:text-4xl text-espresso"
        >
          Folgt uns auf{" "}
          <span className="italic-display text-terracotta">Instagram</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-hand text-2xl text-espresso-soft mt-2"
        >
          frische Bilder, kleine Geschichten, manchmal Sonderangebote.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6"
        >
          <a
            href="https://www.instagram.com/amicizia.saarlouis/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-terra"
          >
            <Fleuron size={14} />
            @amicizia.saarlouis
          </a>
        </motion.div>
      </div>
    </section>
  );
}
