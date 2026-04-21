"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reviews = [
  {
    text: "Beste Pizza in Saarlouis, keine Diskussion! Der Teig ist perfekt und die Zutaten super frisch. Komme jede Woche!",
    author: "Marcel K.",
    rating: 5,
    source: "Google",
  },
  {
    text: "Familiäre Atmosphäre und unglaublich leckeres Essen. Die Lasagne schmeckt wie bei meiner Nonna in Italien 🇮🇹",
    author: "Sofia L.",
    rating: 5,
    source: "Lieferando",
  },
  {
    text: "Schnelle Lieferung, alles war heiß und frisch. Die Pasta Arrabiata hat genau den richtigen Kick!",
    author: "Tim B.",
    rating: 5,
    source: "Lieferando",
  },
  {
    text: "Endlich ein guter Italiener in der Gegend! Man merkt, dass hier mit Liebe gekocht wird. Absolut empfehlenswert.",
    author: "Anna M.",
    rating: 5,
    source: "Google",
  },
  {
    text: "Die Ciabatta Piccante ist ein Traum! Und die Portion ist riesig. Preis-Leistung top. ❤️",
    author: "Lisa R.",
    rating: 5,
    source: "Google",
  },
  {
    text: "Meine Kinder lieben die Pizza von AMICIZIA. Und ehrlich? Ich auch. Bestes Familienessen ever.",
    author: "Jens P.",
    rating: 5,
    source: "Lieferando",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-bordeaux" : "text-foreground/10"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-bordeaux text-sm tracking-[0.3em] uppercase font-medium mb-4"
          >
            Was andere sagen
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
          >
            Unsere <span className="text-bordeaux">Gäste</span> sprechen
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-foreground/40"
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            Echte Bewertungen, echte Liebe 💕
          </motion.p>
        </div>
      </div>

      {/* Row 1: Scroll left — CSS only */}
      <div className="mb-6 overflow-hidden">
        <div className="flex gap-6 testimonial-row-left">
          {[...reviews.slice(0, 3), ...reviews.slice(0, 3), ...reviews.slice(0, 3), ...reviews.slice(0, 3)].map((review, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[360px] bg-white rounded-2xl p-6 border border-foreground/5"
            >
              <StarRating rating={review.rating} />
              <p className="text-foreground/60 text-sm leading-relaxed mt-4 mb-5">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-foreground text-sm">{review.author}</p>
                <span className="text-[10px] tracking-wider uppercase text-foreground/30 font-medium bg-foreground/5 px-2 py-1 rounded-full">
                  {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Scroll right — CSS only */}
      <div className="overflow-hidden">
        <div className="flex gap-6 testimonial-row-right">
          {[...reviews.slice(3), ...reviews.slice(3), ...reviews.slice(3), ...reviews.slice(3)].map((review, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[360px] bg-white rounded-2xl p-6 border border-foreground/5"
            >
              <StarRating rating={review.rating} />
              <p className="text-foreground/60 text-sm leading-relaxed mt-4 mb-5">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-foreground text-sm">{review.author}</p>
                <span className="text-[10px] tracking-wider uppercase text-foreground/30 font-medium bg-foreground/5 px-2 py-1 rounded-full">
                  {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
