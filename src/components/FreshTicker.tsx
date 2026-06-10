"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChefHat, Fleuron, Tomato } from "./Ornaments";

const dailySpecials = [
  {
    name: "Pizza Tartufo",
    description: "Trüffelcreme, Büffelmozzarella, Rucola, Parmesan",
    price: "16,90",
  },
  {
    name: "Margherita Speziale",
    description: "San-Marzano-Tomaten, Fior di Latte, frisches Basilikum",
    price: "9,90",
  },
  {
    name: "Prosciutto e Rucola",
    description: "Parmaschinken 24 Mt., Rucola, Parmesan, gutes Olivenöl",
    price: "14,90",
  },
];

export default function FreshTicker() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setI((p) => (p + 1) % dailySpecials.length);
    }, 8000);
    return () => clearInterval(t);
  }, []);

  const s = dailySpecials[i];

  return (
    <section ref={ref} className="py-16 md:py-20 px-6 lg:px-12 bg-paper">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        {/* Wood hook for the chalkboard */}
        <div className="flex justify-center mb-2">
          <div className="w-2 h-6 bg-espresso-soft rounded-full" />
        </div>

        <div className="chalkboard relative p-8 md:p-12 tilt-xs">
          {/* Chef hat top-left */}
          <div className="absolute -top-3 -left-3 bg-paper-deep text-paper-soft px-3 py-2 rotate-[-8deg] border border-paper-soft/20 depth-shadow">
            <div className="flex items-center gap-2">
              <ChefHat size={18} />
              <span className="font-display italic text-xs tracking-[0.25em] uppercase">
                Heute in der Küche
              </span>
            </div>
          </div>

          {/* live dot */}
          <div className="flex items-center gap-3 mb-6 text-paper-soft/70">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-pulse-dot" />
            <span className="font-display italic tracking-[0.25em] uppercase text-xs">
              frisch aus dem Ofen
            </span>
            {/* keep German */}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
            >
              <div className="font-hand text-paper-soft text-5xl md:text-7xl leading-none">
                {s.name}
              </div>
              <p className="font-hand text-paper-soft/80 text-xl md:text-2xl mt-4 max-w-2xl leading-snug">
                {s.description}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <span className="font-hand text-terracotta-soft text-4xl md:text-5xl">
                  {s.price} €
                </span>
                <span className="font-hand text-paper-soft/40 text-lg">
                  · nur heute
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* indicator dots */}
          <div className="flex gap-2 mt-8">
            {dailySpecials.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Spezial ${k + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  k === i ? "w-10 bg-paper-soft" : "w-2 bg-paper-soft/30"
                }`}
              />
            ))}
          </div>

          {/* Corner ornaments */}
          <div className="absolute bottom-3 right-3 text-paper-soft/40">
            <Tomato size={22} />
          </div>
          <div className="absolute top-3 right-3 text-paper-soft/30">
            <Fleuron size={16} />
          </div>
        </div>

        <p className="mt-6 text-center font-display italic text-espresso-soft text-sm tracking-wider">
          unsere Tafel ändert sich täglich — frag uns, was heute auf den Teller kommt.
        </p>
      </motion.div>
    </section>
  );
}
