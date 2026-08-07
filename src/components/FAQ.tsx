"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Divider, Fleuron } from "./Ornaments";
import { faqItems } from "@/data/faq";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="paper-grain relative py-16 sm:py-20 md:py-28 px-5 sm:px-6 lg:px-12 overflow-hidden bg-paper"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex justify-center mb-4 sm:mb-5 text-terracotta">
            <Divider label="Häufige Fragen" />
          </div>
          <h2
            id="faq-heading"
            className="display-lg text-[clamp(2.25rem,6vw,4.5rem)] text-espresso leading-[1.05]"
          >
            Fragen zu unserer{" "}
            <span className="italic-display text-terracotta">Pizzeria</span> in
            Saarlouis
          </h2>
          <p className="font-display italic text-base sm:text-lg text-espresso-soft mt-3 tracking-wide max-w-2xl mx-auto">
            Das Wichtigste zu Öffnungszeiten, Bestellung, Abholung, Steinofen
            und Zutaten — schnell beantwortet.
          </p>
        </div>

        <div className="relative bg-paper-deep border border-paper-soft/15 depth-shadow">
          <div className="pointer-events-none absolute inset-2 sm:inset-3 border border-terracotta/25" />
          <div className="relative p-4 sm:p-6 md:p-10 divide-y divide-espresso/12">
            {faqItems.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.question} className="py-2 sm:py-3">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="w-full flex items-start gap-4 text-left py-3 min-h-[48px] group"
                  >
                    <span className="mt-1 shrink-0 text-terracotta transition-transform duration-300"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
                    >
                      <Fleuron size={18} />
                    </span>
                    <span className="flex-1 font-display italic text-lg sm:text-xl md:text-2xl text-espresso leading-snug group-hover:text-terracotta transition-colors">
                      {item.question}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-label={item.question}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: [0.2, 0.9, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="font-serif text-espresso-soft text-base sm:text-lg leading-relaxed pl-9 pr-2 pb-4 pt-1 max-w-prose">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-center font-display italic text-sm sm:text-base text-espresso-soft mt-8 tracking-wide">
          Noch eine Frage offen? Ruf uns an unter{" "}
          <a
            href="tel:+491629906068"
            className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline"
          >
            0162 9906068
          </a>
          .
        </p>
      </div>
    </section>
  );
}
