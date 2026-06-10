"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Fleuron, OliveBranch, Tomato } from "./Ornaments";

export default function PhotoBanner() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Background photo drifts vertically as you scroll for a true parallax feel
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.25, 1.18, 1.25]);

  // Foreground copy rises into view
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], ["35%", "0%", "-25%"]);
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0]
  );

  // Side photographs scroll-in
  const leftCardY = useTransform(scrollYProgress, [0, 1], ["50%", "-30%"]);
  const leftCardRot = useTransform(scrollYProgress, [0, 1], [-2, -6]);
  const rightCardY = useTransform(scrollYProgress, [0, 1], ["60%", "-20%"]);
  const rightCardRot = useTransform(scrollYProgress, [0, 1], [3, 8]);

  return (
    <section
      ref={ref}
      className="relative h-[120vh] md:h-[140vh] overflow-hidden bg-espresso"
      aria-label="Frische Zutaten — jeden Tag"
    >
      {/* Parallax background photo */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ y: bgY, scale: bgScale }}
      >
        <Image
          src="/photos/amicizia-1.jpg"
          alt="Frische Tomaten unter fließendem Wasser"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Deep ink cinematic gradient over photo */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.42) 35%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.95) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-10 pointer-events-none mix-blend-soft-light opacity-50"
        style={{
          background:
            "radial-gradient(70% 70% at 50% 45%, rgba(232,197,136,0.45), transparent 70%)",
        }}
      />
      <div className="grain-overlay z-10 opacity-40" />

      {/* Sticky centerpiece — text that rises with scroll */}
      <div className="sticky top-0 h-screen flex items-center justify-center z-20 px-6">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="text-center text-paper-soft max-w-3xl"
        >
          <div className="flex justify-center mb-5 text-paper-soft/75">
            <Fleuron size={22} />
          </div>
          <div className="font-display italic tracking-[0.4em] text-[0.72rem] md:text-xs uppercase text-paper-soft/70 mb-4">
            Was bei uns auf den Teller kommt
          </div>
          <h2 className="display-xl text-paper-soft text-[clamp(3rem,9vw,7.5rem)] leading-[0.92]">
            Frisch.
            <br />
            <span className="italic-display text-terracotta-soft">Ehrlich.</span>
            <br />
            Jeden Tag.
          </h2>
          <p className="font-serif text-paper-soft/80 text-lg md:text-xl leading-relaxed mt-7 max-w-xl mx-auto">
            San-Marzano-Tomaten, frischer Mozzarella, gutes Olivenöl —
            und ein Teig, der über Nacht ruht. Keine Tricks,
            keine Abkürzungen. Nur das, was schmeckt.
          </p>
          <div className="flex items-center justify-center gap-3 mt-7 text-paper-soft/70">
            <span className="h-px w-10 bg-paper-soft/50" />
            <span className="font-hand text-2xl text-terracotta-soft">
              wie bei uns zuhause
            </span>
            <span className="h-px w-10 bg-paper-soft/50" />
          </div>
        </motion.div>
      </div>

      {/* Floating side polaroids — extra eye candy */}
      <motion.div
        style={{ y: leftCardY, rotate: leftCardRot }}
        className="hidden lg:block absolute left-6 xl:left-16 top-[40%] z-20 polaroid w-[220px] will-change-transform"
      >
        <span className="tape" />
        <div className="relative w-full aspect-square overflow-hidden bg-espresso/10">
          <Image
            src="/photos/amicizia-2.jpg"
            alt="Tomate wird unter Wasser gewaschen"
            fill
            sizes="220px"
            className="object-cover"
          />
        </div>
        <div className="font-hand text-terracotta text-xl mt-3 px-1 leading-none">
          mit den Händen.
        </div>
      </motion.div>

      <motion.div
        style={{ y: rightCardY, rotate: rightCardRot }}
        className="hidden lg:block absolute right-6 xl:right-16 top-[28%] z-20 polaroid w-[240px] will-change-transform"
      >
        <span className="tape" />
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-espresso/10">
          <Image
            src="/photos/amicizia-3.jpg"
            alt="Frische Kräuter über dem Salat"
            fill
            sizes="240px"
            className="object-cover"
          />
        </div>
        <div className="font-hand text-terracotta text-xl mt-3 px-1 leading-none">
          frische Kräuter, jeden Tag.
        </div>
      </motion.div>

      {/* Decorative olive branches at corners */}
      <div className="absolute bottom-10 left-6 text-paper-soft/35 z-20 hidden md:block animate-float">
        <OliveBranch size={70} />
      </div>
      <div
        className="absolute top-10 right-6 text-paper-soft/35 z-20 hidden md:block animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <Tomato size={50} />
      </div>
    </section>
  );
}
