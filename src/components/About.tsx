"use client";

import Image from "next/image";
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
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="paper-grain relative pt-20 md:pt-24 pb-28 md:pb-32 px-6 lg:px-12 overflow-hidden bg-paper"
    >
      {/* Soft terracotta wash on right */}
      <div className="absolute top-20 -right-32 w-[480px] h-[480px] rounded-full bg-terracotta/[0.06] blur-[80px] hidden lg:block" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-5 text-terracotta"
          >
            <Divider label="II · Über uns" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-lg text-[clamp(2.5rem,6vw,5rem)] text-espresso"
          >
            Unsere <span className="italic-display text-terracotta">Geschichte</span>
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
                einer Großmutter, die nie aufgehört hat zu sagen{" "}
                <span className="font-hand text-terracotta text-2xl">
                  „iss, iss noch was!&quot;
                </span>
              </p>
              <p>
                Heute, zwölf Jahre und unzählige Pizzen später, sind wir
                immer noch dieselbe Familie. Nur der Ofen ist neuer.{" "}
                <span className="italic text-espresso">
                  Unser Teig ruht über Nacht, die Tomaten kommen aus
                  San&nbsp;Marzano, und der Mozzarella schmeckt nach
                  Süditalien.
                </span>
              </p>
              <p className="italic text-espresso-soft">
                &ldquo;Danke an alle, die uns schon kennen — und an alle,
                die jetzt das erste Mal an unseren Tisch kommen.&rdquo;
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
                — Familie AMICIZIA
              </div>
              <div className="font-display italic text-espresso-soft/70 text-sm mt-1 ml-1 tracking-wider">
                Saarlouis, mit italienischem Herz
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
                { value: "12+", label: "Jahre Erfahrung",  icon: <Sun size={18} /> },
                { value: "100%", label: "frisch jeden Tag", icon: <Tomato size={18} /> },
                { value: "∞",   label: "Liebe im Essen",   icon: <Fleuron size={18} /> },
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

          {/* Right: real photograph in a paper frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 1.5 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Outer paper frame */}
            <div className="relative bg-paper-soft border border-espresso/15 depth-shadow p-4 md:p-5">
              {/* Inner terracotta keyline */}
              <div className="pointer-events-none absolute inset-2 border border-terracotta/40 z-20" />

              {/* The image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-espresso/10">
                <Image
                  src="/photos/amicizia-2.jpg"
                  alt="Hände waschen eine frische Tomate im goldenen Abendlicht"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                {/* Subtle warm vignette over photo */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(70% 80% at 50% 60%, transparent 40%, rgba(42,24,16,0.45) 100%)",
                  }}
                />
                <div className="grain-overlay opacity-30" />
              </div>

              {/* Caption strip */}
              <div className="relative pt-4 flex items-center justify-between">
                <div>
                  <div className="font-hand text-terracotta text-2xl leading-none">
                    Frische jeden Tag.
                  </div>
                  <div className="font-display italic text-espresso-soft/80 text-xs tracking-[0.25em] uppercase mt-1">
                    aus unserer Küche · Saarlouis
                  </div>
                </div>
                <div className="text-terracotta">
                  <Fleuron size={18} />
                </div>
              </div>
            </div>

            {/* Floating circular stamp top-right */}
            <div className="absolute -top-10 -right-8 text-terracotta tilt-r animate-float pointer-events-none">
              <CircleStamp size={140} />
            </div>

            {/* Pinned "Aperto!" tag bottom-left */}
            <div className="absolute -bottom-6 -left-6 bg-paper-soft px-5 py-3 border border-espresso/15 depth-shadow tilt-l">
              <div className="font-hand text-terracotta text-2xl leading-none">
                Geöffnet!
              </div>
              <div className="font-display italic text-espresso-soft text-[10px] tracking-[0.3em] uppercase mt-1">
                den ganzen Tag
              </div>
            </div>

            {/* Decorative olive branch peeking from behind */}
            <div className="absolute -bottom-12 -right-4 text-olive/60 -z-10 hidden md:block">
              <OliveBranch size={120} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
