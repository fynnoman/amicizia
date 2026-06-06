"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  CircleStamp,
  OliveBranch,
  Divider,
  Sun,
  Tomato,
  Fleuron,
} from "./Ornaments";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="paper-grain relative py-28 md:py-36 px-6 lg:px-12 overflow-hidden bg-paper"
    >
      {/* Soft terracotta wash on right */}
      <div className="absolute top-20 -right-32 w-[480px] h-[480px] rounded-full bg-terracotta/[0.06] blur-[80px] hidden lg:block" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-5 text-terracotta"
          >
            <Divider label="II · La Famiglia" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-lg text-[clamp(2.5rem,6vw,5rem)] text-espresso"
          >
            La nostra <span className="italic-display text-terracotta">storia</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-hand text-2xl text-espresso-soft mt-2"
          >
            seit über zwölf Jahren am gleichen Tisch
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-display italic text-3xl md:text-4xl text-espresso leading-snug mb-7"
            >
              Wir sind kein Restaurant.
              <br />
              Wir sind eine <span className="text-terracotta">Familie,</span>{" "}
              die kocht.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-5 font-serif text-lg leading-relaxed text-espresso-soft"
            >
              <p>
                Angefangen hat alles 2013 — mit einem Ofen, einem Traum und
                einer Großmutter, die nie aufgehört hat zu rufen{" "}
                <span className="font-hand text-terracotta text-2xl">
                  „mangia, mangia!&quot;
                </span>
              </p>
              <p>
                Heute, zwölf Jahre und unzählige Pizzen später, sind wir
                immer noch dieselbe Familie. Nur der Ofen ist neuer.{" "}
                <span className="italic text-espresso">
                  Der Teig ruht über Nacht, die Tomaten sind aus San Marzano,
                  und der Mozzarella schmeckt nach Süditalien.
                </span>
              </p>
              <p className="italic text-espresso-soft">
                &ldquo;Danke an alle, die uns schon gefunden haben — und an
                alle, die jetzt das erste Mal an unseren Tisch kommen.&rdquo;
              </p>
            </motion.div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-9"
            >
              <div className="font-hand text-4xl text-terracotta -rotate-3">
                — la famiglia AMICIZIA
              </div>
              <div className="font-display italic text-espresso-soft/70 text-sm mt-1 ml-1 tracking-wider">
                Saarlouis, Italia nel cuore
              </div>
            </motion.div>

            {/* Stats — vintage style */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-10 mt-10 pt-8 border-t border-espresso/15"
            >
              {[
                { value: "12+", label: "anni di forno", icon: <Sun size={18} /> },
                { value: "00:00", label: "ore di sonno", icon: <Tomato size={18} /> },
                { value: "∞",   label: "amore", icon: <Fleuron size={18} /> },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="display-lg text-terracotta text-4xl">{stat.value}</div>
                  <div className="flex items-center gap-2 mt-1 text-espresso-soft">
                    <span className="text-terracotta">{stat.icon}</span>
                    <span className="font-display italic text-sm tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: framed visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* The framed card */}
            <div className="postcard p-6 md:p-8 aspect-[4/5] flex flex-col items-center justify-between text-center relative overflow-hidden">
              {/* paper grain inside */}
              <div className="grain-overlay" />

              {/* top mark */}
              <div className="relative z-10">
                <div className="font-display italic text-terracotta tracking-[0.4em] text-xs">
                  EST. MMXIII
                </div>
                <div className="mt-2 text-terracotta">
                  <Fleuron size={20} />
                </div>
              </div>

              {/* center */}
              <div className="relative z-10 px-3">
                <div className="font-display italic text-espresso-soft tracking-[0.2em] text-xs uppercase">
                  Trattoria
                </div>
                <h3
                  className="display-xl text-terracotta mt-1 leading-none"
                  style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)" }}
                >
                  AMI<span className="italic-display">cizia</span>
                </h3>
                <div className="mt-3 font-hand text-2xl text-espresso">
                  — con amore —
                </div>
                <div className="mt-3 font-display italic text-espresso-soft text-sm tracking-wider">
                  Industriestraße 20 · Saarlouis
                </div>
              </div>

              {/* bottom */}
              <div className="relative z-10 flex items-center gap-3 text-espresso-soft">
                <OliveBranch size={26} />
                <div className="font-display italic text-xs tracking-[0.3em]">
                  TUTTI I GIORNI · 10:00 →
                </div>
                <OliveBranch size={26} className="-scale-x-100" />
              </div>
            </div>

            {/* Floating stamp top-right */}
            <div className="absolute -top-8 -right-6 text-terracotta tilt-r animate-float">
              <CircleStamp size={140} />
            </div>

            {/* Floating "Aperto" tag bottom-left */}
            <div className="absolute -bottom-6 -left-6 bg-paper-soft px-5 py-3 border border-espresso/15 depth-shadow tilt-l">
              <div className="font-hand text-terracotta text-2xl leading-none">
                Aperto!
              </div>
              <div className="font-display italic text-espresso-soft text-[10px] tracking-[0.3em] uppercase mt-1">
                den ganzen Tag
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
