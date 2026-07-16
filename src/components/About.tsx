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
      className="paper-grain relative pt-14 sm:pt-20 md:pt-24 pb-20 sm:pb-24 md:pb-32 px-5 sm:px-6 lg:px-12 overflow-hidden bg-paper"
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

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 sm:gap-14 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-display italic text-2xl sm:text-3xl md:text-4xl text-espresso leading-snug mb-6 sm:mb-7"
            >
              Italienische Küche,
              <br />
              geführt als{" "}
              <span className="text-terracotta">Familienbetrieb.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 sm:space-y-5 font-serif text-base sm:text-lg leading-relaxed text-espresso-soft"
            >
              <p>
                AMICIZIA wurde 2013 in Saarlouis gegründet. Inhaber Rezar
                bringt über 21 Jahre Erfahrung im Handel und in der
                Führung eigener Betriebe mit. Aus diesem Hintergrund heraus
                entstand der Wunsch, eine Pizzeria aufzubauen, in der jeder
                Schritt kontrolliert und in der Küche selbst gearbeitet wird.
              </p>
              <p>
                Aus einem kleinen Standort ist über die Jahre ein
                etablierter Betrieb geworden. Heute steht AMICIZIA für
                Steinofen-Pizza, hausgemachte Wraps und Ciabatta sowie einen
                geregelten Ablauf mit fester Öffnungszeit und persönlicher
                Betreuung an der Theke.
              </p>
            </motion.div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-9"
            >
              <div className="font-display italic text-2xl text-terracotta">
                AMICIZIA · Familienbetrieb seit 2013
              </div>
              <div className="font-display italic text-espresso-soft/70 text-sm mt-1 tracking-wider">
                Industriestraße 20 · Saarlouis
              </div>
            </motion.div>

            {/* Stats — vintage style */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-6 sm:gap-10 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-espresso/15"
            >
              {[
                { value: "2013", label: "Gründungsjahr",     icon: <Sun size={18} /> },
                { value: "21+",  label: "Jahre Erfahrung",   icon: <Tomato size={18} /> },
                { value: "12–22", label: "Küche geöffnet",   icon: <Fleuron size={18} /> },
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
            <div className="relative bg-paper-deep border border-paper-soft/15 depth-shadow p-4 md:p-5">
              {/* Inner terracotta keyline */}
              <div className="pointer-events-none absolute inset-2 border border-terracotta/40 z-20" />

              {/* The image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-paper-soft/5">
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
                      "radial-gradient(70% 80% at 50% 60%, transparent 40%, rgba(0,0,0,0.65) 100%)",
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

            {/* Floating circular stamp top-right — hidden on small screens */}
            <div className="hidden sm:block absolute -top-10 -right-8 text-terracotta tilt-r animate-float pointer-events-none">
              <CircleStamp size={140} />
            </div>

            {/* Pinned opening-hours tag bottom-left — hidden on small screens */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 bg-paper-deep px-5 py-3 border border-paper-soft/15 depth-shadow tilt-l">
              <div className="font-display text-terracotta text-lg leading-none">
                Küche 12–22 Uhr
              </div>
              <div className="font-display italic text-espresso-soft text-[10px] tracking-[0.3em] uppercase mt-1">
                Vorbestellung ab 11 Uhr
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
