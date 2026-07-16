"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Divider, OliveBranch, Fleuron } from "./Ornaments";

export default function ChefShowcase() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      ref={ref}
      className="relative w-full h-[58vh] md:h-[62vh] overflow-hidden bg-paper-deep"
      aria-label="In unserer Küche"
    >
      {/* Photograph — chef tossing herbs, golden hour */}
      <Image
        src="/photos/amicizia-3.jpg"
        alt="In der Küche von AMICIZIA — frische Kräuter im goldenen Licht"
        fill
        sizes="100vw"
        priority={false}
        className="object-cover scale-105 animate-[kenburns_32s_ease-in-out_infinite_alternate]"
      />

      {/* Deep ink cinematic gradient */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 35%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.92) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-10 pointer-events-none mix-blend-soft-light opacity-50"
        style={{
          background:
            "radial-gradient(60% 60% at 55% 50%, rgba(232,197,136,0.45), transparent 70%)",
        }}
      />
      <div className="grain-overlay z-10 opacity-35" />

      {/* Decorative olive sprigs at corners */}
      <div className="absolute top-8 left-6 md:left-10 text-paper-soft/40 z-20 hidden md:block animate-float">
        <OliveBranch size={70} />
      </div>
      <div
        className="absolute bottom-8 right-6 md:right-10 text-paper-soft/40 z-20 hidden md:block animate-float"
        style={{ animationDelay: "1.4s" }}
      >
        <OliveBranch size={70} className="-scale-x-100" />
      </div>

      {/* Centerpiece copy */}
      <div className="relative z-20 h-full flex items-center justify-center px-6">
        <div className="max-w-3xl text-center text-paper-soft">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center mb-5 text-paper-soft/70"
          >
            <Divider label="Aus unserer Küche" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="display-xl text-[clamp(2.6rem,8vw,6.5rem)] leading-[0.95] text-paper-soft"
          >
            Frische Kräuter,
            <br />
            <span className="italic-display text-terracotta-soft">
              ein Steinofen
            </span>
            <br />
            und viel Zeit.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="font-serif text-paper-soft/80 text-lg md:text-xl mt-6 max-w-xl mx-auto leading-relaxed"
          >
            Jeden Morgen knetet jemand bei uns Teig. Jeden Mittag duftet die
            Küche nach Basilikum, Knoblauch und gutem Olivenöl. Das ist
            kein Konzept — das ist einfach, wie wir es machen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="flex items-center justify-center gap-3 mt-7 text-paper-soft/60"
          >
            <span className="h-px w-10 bg-paper-soft/45" />
            <Fleuron size={14} />
            <span className="font-hand text-2xl text-terracotta-soft">
              wie bei der Familie zuhause
            </span>
            <Fleuron size={14} />
            <span className="h-px w-10 bg-paper-soft/45" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
