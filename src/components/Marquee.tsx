"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Fleuron } from "./Ornaments";

const familyQuotes = [
  { text: "Krosse Kruste, ehrlicher Geschmack.", author: "Gast" },
  { text: "Pizza wie bei Nonna — nur in Saarlouis.", author: "Gast" },
  { text: "Der Steinofen macht den Unterschied.", author: "Gast" },
  { text: "Frischer geht nicht.", author: "Gast" },
];

const marqueeWords = [
  "Pizza", "frisch", "handgemacht", "Steinofen",
  "Saarlouis", "ofenfrisch", "knusprig", "Familie",
  "mit Liebe gemacht", "Amicizia", "seit 2013",
];

export default function Marquee() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const quote = familyQuotes[currentQuote].text;
    if (isTyping) {
      if (displayedText.length < quote.length) {
        const t = setTimeout(() => {
          setDisplayedText(quote.slice(0, displayedText.length + 1));
        }, 55);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setIsTyping(false), 3200);
        return () => clearTimeout(t);
      }
    } else {
      setDisplayedText("");
      setCurrentQuote((p) => (p + 1) % familyQuotes.length);
      setIsTyping(true);
    }
  }, [displayedText, isTyping, currentQuote]);

  return (
    <div className="relative bg-espresso overflow-hidden">
      {/* Family quote — typewriter */}
      <div className="py-6 border-b border-paper-soft/10">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-center min-h-[44px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center flex items-center gap-3 flex-wrap justify-center"
            >
              <span className="font-hand text-paper-soft/75 text-2xl md:text-3xl leading-none">
                &ldquo;{displayedText}
                <span className="animate-blink text-paper-soft/40">|</span>&rdquo;
              </span>
              {displayedText === familyQuotes[currentQuote].text && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="font-display italic text-paper-soft/45 text-sm tracking-wider"
                >
                  — {familyQuotes[currentQuote].author}
                </motion.span>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Scrolling marquee with fleurons */}
      <div className="py-4 overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap">
          <span className="marquee-content font-display italic text-paper-soft/50 text-lg tracking-[0.18em]">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <span key={i} className="inline-flex items-center">
                  {marqueeWords.map((w, j) => (
                    <span key={j} className="inline-flex items-center">
                      <span className="mx-5">{w}</span>
                      <span className="mx-2 text-terracotta-soft/70 inline-flex">
                        <Fleuron size={10} />
                      </span>
                    </span>
                  ))}
                </span>
              ))}
          </span>
        </div>
      </div>
    </div>
  );
}
