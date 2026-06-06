"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Fleuron, Tomato, OliveBranch } from "./Ornaments";

const KONAMI_CODE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "KeyB", "KeyA",
];

export default function EasterEgg() {
  const [triggered, setTriggered] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const [inputSequence, setInputSequence] = useState<string[]>([]);

  const trigger = useCallback(() => {
    if (triggered) return;
    setTriggered(true);
    setTimeout(() => {
      setTriggered(false);
      setLogoClicks(0);
      setInputSequence([]);
    }, 4500);
  }, [triggered]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const seq = [...inputSequence, e.code].slice(-KONAMI_CODE.length);
      setInputSequence(seq);
      if (
        seq.length === KONAMI_CODE.length &&
        seq.every((k, i) => k === KONAMI_CODE[i])
      ) trigger();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [inputSequence, trigger]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("[data-logo]")) {
        const n = logoClicks + 1;
        setLogoClicks(n);
        if (n >= 3) trigger();
        setTimeout(() => setLogoClicks(0), 1500);
      }
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [logoClicks, trigger]);

  return (
    <AnimatePresence>
      {triggered && (
        <>
          {/* Warm flash */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.45, 0] }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[100] bg-terracotta pointer-events-none"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ delay: 0.25, duration: 0.55, type: "spring" }}
            className="fixed inset-0 z-[102] flex items-center justify-center pointer-events-none"
          >
            <div className="relative bg-paper-soft border border-espresso/20 depth-shadow px-14 py-10 text-center max-w-md">
              <div className="pointer-events-none absolute inset-2 border border-terracotta/40" />
              <div className="flex justify-center text-terracotta mb-2">
                <Fleuron size={28} />
              </div>
              <p className="font-hand text-terracotta text-5xl leading-none">
                Buon appetito!
              </p>
              <p className="font-display italic text-espresso-soft text-sm mt-3 tracking-wider">
                hai trovato un piccolo segreto della casa.
              </p>
              <div className="flex justify-center gap-4 mt-4 text-terracotta">
                <Tomato size={24} />
                <OliveBranch size={24} />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
