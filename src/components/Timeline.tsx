"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    year: "2013",
    title: "Der Anfang",
    description: "Alles begann mit einem Traum und einem kleinen Ofen. Mama und Papa wagten den Sprung – mit nichts als Leidenschaft.",
    emoji: "🌱",
  },
  {
    year: "2015",
    title: "Erste Stammgäste",
    description: "Wort hat sich rumgesprochen. Die ersten Stammgäste kamen – und kommen bis heute. Manche sogar jeden Tag.",
    emoji: "🤝",
  },
  {
    year: "2018",
    title: "Die Kids steigen ein",
    description: "Aus dem Familienprojekt wurde ein echter Familienbetrieb. Jetzt helfen alle vier mit – jeder auf seine Art.",
    emoji: "👨‍👩‍👧‍👦",
  },
  {
    year: "2022",
    title: "12 Jahre Erfahrung",
    description: "Über ein Jahrzehnt Leidenschaft, tausende Pizzen, unzählige glückliche Gesichter. Wir haben noch lange nicht genug.",
    emoji: "🎂",
  },
  {
    year: "2025",
    title: "Neuer Standort, neue Energie",
    description: "AMICIZIA hat ein neues Zuhause gefunden – Industriestraße 20 in Saarlouis. Frischer Look, gleiche Liebe.",
    emoji: "📍",
  },
  {
    year: "Zukunft",
    title: "Da kommt noch was...",
    description: "Wir haben große Pläne. Bleibt gespannt – das Beste kommt noch! ✨",
    emoji: "🚀",
  },
];

function TimelineItem({ item, index }: { item: typeof milestones[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-center justify-center">
      {/* Center dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-bordeaux border-4 border-white shadow-lg flex items-center justify-center text-lg"
      >
        {item.emoji}
      </motion.div>

      {/* Content card */}
      <div className="grid grid-cols-2 gap-8 w-full">
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 0 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`${isEven ? "text-right pr-12" : "col-start-2 pl-12"}`}
        >
          <span
            className="text-4xl md:text-5xl font-bold text-bordeaux/20"
            style={item.year === "Zukunft" ? { fontFamily: "var(--font-caveat)" } : {}}
          >
            {item.year}
          </span>
          <h3 className="text-xl font-bold text-foreground mt-2 mb-2">{item.title}</h3>
          <p className="text-foreground/50 text-sm leading-relaxed">{item.description}</p>
        </motion.div>
      </div>
    </div>
  );
}

// Mobile timeline item
function TimelineMobileItem({ item, index }: { item: typeof milestones[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="relative flex gap-6">
      {/* Line + dot */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-10 h-10 rounded-full bg-bordeaux flex items-center justify-center text-sm flex-shrink-0 shadow-lg"
        >
          {item.emoji}
        </motion.div>
        {index < milestones.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-px flex-1 bg-bordeaux/20 origin-top"
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="pb-12"
      >
        <span
          className="text-2xl font-bold text-bordeaux/30"
          style={item.year === "Zukunft" ? { fontFamily: "var(--font-caveat)" } : {}}
        >
          {item.year}
        </span>
        <h3 className="text-lg font-bold text-foreground mt-1 mb-2">{item.title}</h3>
        <p className="text-foreground/50 text-sm leading-relaxed">{item.description}</p>
      </motion.div>
    </div>
  );
}

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 lg:px-12 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-bordeaux text-sm tracking-[0.3em] uppercase font-medium mb-4"
          >
            Unsere Reise
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
          >
            12+ Jahre <span className="text-bordeaux">Geschichte</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-foreground/40"
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            Jeder Meilenstein erzählt eine Geschichte ❤️
          </motion.p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Center line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-bordeaux/15 origin-top"
          />

          <div className="space-y-20">
            {milestones.map((item, i) => (
              <TimelineItem key={item.year} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden">
          {milestones.map((item, i) => (
            <TimelineMobileItem key={item.year} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
