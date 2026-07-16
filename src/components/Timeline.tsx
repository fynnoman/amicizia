"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Divider, Fleuron, OliveBranch } from "./Ornaments";

const milestones = [
  {
    year: "vor 2013",
    title: "21 Jahre Handel",
    description:
      "Inhaber Rezar arbeitet über zwei Jahrzehnte im Handel und in der Führung eigener Betriebe. Aus dieser Erfahrung entsteht die Idee, eine eigene Pizzeria zu eröffnen.",
  },
  {
    year: "2013",
    title: "Gründung von AMICIZIA",
    description:
      "AMICIZIA wird in Saarlouis gegründet. Der Betrieb startet mit klarem Konzept: Steinofen-Pizza, hausgemachte Beilagen, kurze Wege in der Küche.",
  },
  {
    year: "2015 – 2018",
    title: "Aufbau des Stammgeschäfts",
    description:
      "Das Sortiment wird um Ciabatta und Wraps erweitert. Feste Abläufe und ein wiederkehrender Kundenstamm etablieren den Betrieb im Saarlouiser Zentrum.",
  },
  {
    year: "2019 – 2022",
    title: "Konsolidierung",
    description:
      "AMICIZIA wächst kontrolliert. Öffnungszeiten, Einkauf und Personalstruktur werden professionalisiert. Der Betrieb läuft zuverlässig sieben Tage die Woche.",
  },
  {
    year: "2025",
    title: "Standort Industriestraße 20",
    description:
      "AMICIZIA arbeitet aus dem heutigen Standort in der Industriestraße 20. Steinofen, Küche und Theke sind auf den bestehenden Betriebsablauf ausgerichtet.",
  },
];

function ItemDesktop({
  item,
  index,
}: {
  item: typeof milestones[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative grid grid-cols-[1fr_auto_1fr] gap-6 items-center">
      {/* left card slot */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -30 : 0 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.25 }}
        className={isEven ? "text-right pr-8" : "opacity-0 pointer-events-none"}
      >
        {isEven && <Content item={item} alignRight />}
      </motion.div>

      {/* center marker */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="relative z-10 w-14 h-14 rounded-full bg-paper border-2 border-terracotta flex items-center justify-center text-terracotta depth-shadow"
      >
        <Fleuron size={20} />
      </motion.div>

      {/* right slot */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 0 : 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.25 }}
        className={isEven ? "opacity-0 pointer-events-none" : "pl-8"}
      >
        {!isEven && <Content item={item} />}
      </motion.div>
    </div>
  );
}

function Content({
  item,
  alignRight,
}: {
  item: typeof milestones[0];
  alignRight?: boolean;
}) {
  return (
    <div className={alignRight ? "inline-block text-right" : "inline-block"}>
      <span
        className="block display-lg text-5xl text-terracotta/30"
        style={{ fontVariationSettings: '"opsz" 144' }}
      >
        {item.year}
      </span>
      <h3 className="font-display italic text-2xl text-espresso mt-1">
        {item.title}
      </h3>
      <p className="font-serif text-espresso-soft text-base leading-relaxed mt-2 max-w-sm">
        {item.description}
      </p>
    </div>
  );
}

function ItemMobile({
  item,
  index,
}: {
  item: typeof milestones[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="relative flex gap-5">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-11 h-11 rounded-full bg-paper border-2 border-terracotta flex items-center justify-center text-terracotta shrink-0"
        >
          <Fleuron size={16} />
        </motion.div>
        {index < milestones.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-px flex-1 bg-terracotta/25 origin-top mt-1"
          />
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="pb-12 -mt-1"
      >
        <span className="block display-lg text-3xl text-terracotta/30">
          {item.year}
        </span>
        <h3 className="font-display italic text-xl text-espresso mt-1">
          {item.title}
        </h3>
        <p className="font-serif text-espresso-soft text-sm leading-relaxed mt-2">
          {item.description}
        </p>
      </motion.div>
    </div>
  );
}

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="timeline"
      ref={ref}
      className="paper-grain relative py-28 md:py-32 px-6 lg:px-12 overflow-hidden bg-paper-deep/40"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-5 text-terracotta"
          >
            <Divider label="III · Unsere Reise" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-lg text-[clamp(2.5rem,6vw,5rem)] text-espresso"
          >
            Vom Handel zum{" "}
            <span className="italic-display text-terracotta">Steinofen</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display italic text-lg text-espresso-soft mt-4 tracking-wide"
          >
            Ein Familienbetrieb, aufgebaut aus über zwei Jahrzehnten Erfahrung.
          </motion.p>

          <div className="mt-6 flex justify-center text-terracotta">
            <OliveBranch size={48} />
          </div>
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.3 }}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-terracotta/25 origin-top"
          />
          <div className="space-y-20">
            {milestones.map((item, i) => (
              <ItemDesktop key={item.year} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden">
          {milestones.map((item, i) => (
            <ItemMobile key={item.year} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
