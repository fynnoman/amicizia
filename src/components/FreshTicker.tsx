"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const dailySpecials = [
  { name: "Lasagne della Mamma", description: "Hausgemacht mit Liebe & extra Käse", emoji: "🍝" },
  { name: "Pizza Truffle", description: "Trüffelcreme, Mozzarella, Rucola, Parmesan", emoji: "🍕" },
  { name: "Risotto ai Funghi", description: "Cremiges Pilzrisotto mit frischen Kräutern", emoji: "🍚" },
];

export default function FreshTicker() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSpecial, setCurrentSpecial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecial((prev) => (prev + 1) % dailySpecials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="py-16 px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-bordeaux via-bordeaux-dark to-bordeaux p-8 md:p-12">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }} />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse-dot" />
                <span className="text-white/60 text-xs tracking-[0.2em] uppercase font-medium">
                  Frisch aus der Küche
                </span>
              </div>
            </div>

            {/* Special Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSpecial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-6"
              >
                <motion.span
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="text-5xl md:text-6xl hidden sm:block"
                >
                  {dailySpecials[currentSpecial].emoji}
                </motion.span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {dailySpecials[currentSpecial].name}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base">
                    {dailySpecials[currentSpecial].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots indicator */}
            <div className="flex gap-2 mt-8">
              {dailySpecials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSpecial(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === currentSpecial ? "w-8 bg-white" : "w-1.5 bg-white/30"
                  }`}
                />
              ))}
            </div>

            {/* Handwritten note */}
            <p
              className="text-white/30 text-lg mt-6 -rotate-2"
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              ↑ Papas Empfehlung heute!
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
