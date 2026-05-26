"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const KONAMI_CODE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "KeyB", "KeyA",
];

export default function EasterEgg() {
  const [triggered, setTriggered] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const [inputSequence, setInputSequence] = useState<string[]>([]);

  const triggerEasterEgg = useCallback(() => {
    if (triggered) return;
    setTriggered(true);

    // Reset after animation
    setTimeout(() => {
      setTriggered(false);
      setLogoClicks(0);
      setInputSequence([]);
    }, 4000);
  }, [triggered]);

  // Konami code listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newSequence = [...inputSequence, e.code].slice(-KONAMI_CODE.length);
      setInputSequence(newSequence);

      if (
        newSequence.length === KONAMI_CODE.length &&
        newSequence.every((key, i) => key === KONAMI_CODE[i])
      ) {
        triggerEasterEgg();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [inputSequence, triggerEasterEgg]);

  // Triple-click on logo
  useEffect(() => {
    const handleLogoClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-logo]")) {
        const newClicks = logoClicks + 1;
        setLogoClicks(newClicks);
        if (newClicks >= 3) {
          triggerEasterEgg();
        }
        // Reset click count after 1.5s
        setTimeout(() => setLogoClicks(0), 1500);
      }
    };

    window.addEventListener("click", handleLogoClick);
    return () => window.removeEventListener("click", handleLogoClick);
  }, [logoClicks, triggerEasterEgg]);

  return (
    <AnimatePresence>
      {triggered && (
        <>
          {/* Overlay flash */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-bordeaux pointer-events-none"
          />

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            className="fixed inset-0 z-[102] flex items-center justify-center pointer-events-none"
          >
            <div className="bg-white rounded-3xl shadow-2xl px-12 py-8 text-center">
              <p className="text-2xl font-bold text-bordeaux">Buon Appetito!</p>
              <p className="text-foreground/40 text-sm mt-1">Du hast das Easter Egg gefunden.</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
