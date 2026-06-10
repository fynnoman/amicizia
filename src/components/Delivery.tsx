"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Divider, ForkKnife, Sun, OliveBranch, Fleuron } from "./Ornaments";

const features = [
  {
    icon: <ForkKnife size={28} />,
    title: "Frisch abholen",
    subtitle: "Abholung",
    body:
      "Bestelle online, bezahle bequem — und hole deine Pizza ofenfrisch bei uns ab. Schneller geht's nicht.",
  },
  {
    icon: <Sun size={28} />,
    title: "Bei uns essen",
    subtitle: "Vor Ort",
    body:
      "Unser Tisch ist gedeckt. Komm wie du bist, bleib so lange du willst. Der Espresso geht aufs Haus.",
  },
];

export default function Delivery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section
      ref={ref}
      className="relative py-28 md:py-32 px-6 lg:px-12 bg-paper-deep overflow-hidden text-paper-soft border-y border-terracotta/25"
    >
      {/* texture and accents */}
      <div className="grain-overlay opacity-30" />
      <div className="absolute -top-20 -right-12 text-paper-soft/10 animate-float">
        <OliveBranch size={220} />
      </div>
      <div
        className="absolute -bottom-12 -left-12 text-paper-soft/10 animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <OliveBranch size={220} className="-scale-x-100" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-5 text-paper-soft/85"
          >
            <Divider label="VI · Abholen oder bleiben" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-lg text-[clamp(2.5rem,6vw,5rem)] text-paper-soft"
          >
            Komm{" "}
            <span className="italic-display text-paper-soft/85">vorbei</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-hand text-2xl text-paper-soft/85 mt-3"
          >
            Hol's bei uns ab oder bleib zum Essen — beides ist richtig.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
              className="relative bg-paper text-espresso p-8 border border-terracotta/30 depth-shadow group hover:-translate-y-1 transition-transform duration-500"
            >
              <div className="pointer-events-none absolute inset-2 border border-terracotta/30" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4 text-terracotta">
                  {f.icon}
                  <span className="font-display italic text-xs tracking-[0.3em] uppercase">
                    {f.subtitle}
                  </span>
                </div>
                <h3 className="display-lg text-3xl text-espresso">
                  {f.title}
                </h3>
                <p className="font-serif text-espresso-soft text-base leading-relaxed mt-3">
                  {f.body}
                </p>
                <div className="flex items-center gap-3 mt-6 text-terracotta">
                  <Fleuron size={16} />
                  <span className="font-display italic text-sm tracking-wider">
                    willkommen
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#order"
            className="inline-flex items-center gap-2 px-8 py-3 bg-terracotta text-paper font-display italic tracking-wider rounded-full hover:bg-terracotta-deep hover:text-paper transition-colors"
          >
            <ForkKnife size={18} />
            Jetzt bestellen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
