"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  categories,
  menuItems,
  categoryLabel,
  formatPrice,
  allergenLegend,
  type MenuItem,
  type MenuCategoryKey,
} from "@/data/menu";
import {
  Divider,
  Fleuron,
  OliveBranch,
} from "./Ornaments";

const ORDER: MenuCategoryKey[] = [
  "tradizionale",
  "speciale",
  "neuheiten",
  "pasta",
  "pizzabroetchen",
  "ciabatta",
  "salate",
  "snack",
  "dessert",
];

function MenuRow({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.2) }}
      className="group py-3.5 border-b border-espresso/12 last:border-0"
    >
      <div className="dot-leader">
        <div className="name flex items-baseline gap-2 flex-wrap">
          <span className="font-display text-espresso text-lg sm:text-xl md:text-2xl tracking-tight group-hover:text-terracotta transition-colors">
            {item.name}
          </span>
          {item.allergens && (
            <span className="font-display italic text-espresso-soft/60 text-[0.7rem] tracking-wider">
              ({item.allergens})
            </span>
          )}
          {item.popular && (
            <span className="font-display italic text-terracotta text-xs tracking-wider">
              · beliebt
            </span>
          )}
        </div>
        <span className="leader" aria-hidden />
        <span className="price font-display text-terracotta text-lg sm:text-xl md:text-2xl tabnum whitespace-nowrap">
          {formatPrice(item.price)} €
        </span>
      </div>
      {item.description && (
        <p className="font-serif italic text-espresso-soft text-sm sm:text-base mt-1.5 leading-relaxed max-w-prose">
          {item.description}
        </p>
      )}
    </motion.div>
  );
}

function CategoryBlock({
  cat,
  items,
}: {
  cat: MenuCategoryKey;
  items: MenuItem[];
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4 text-terracotta">
        <Fleuron size={18} />
        <h3 className="font-display italic text-xl sm:text-2xl md:text-3xl tracking-wide leading-tight">
          {categoryLabel[cat]}
        </h3>
        <span className="flex-1 h-px bg-terracotta/35" />
      </div>
      <div>
        {items.map((item, i) => (
          <MenuRow key={item.id} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function Menu() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] =
    useState<MenuCategoryKey | "all">("all");

  const filtered =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((it) => it.category === activeCategory);

  const grouped = ORDER.reduce((acc, k) => {
    acc[k] = filtered.filter((it) => it.category === k);
    return acc;
  }, {} as Record<MenuCategoryKey, MenuItem[]>);

  return (
    <section
      id="menu"
      ref={ref}
      className="paper-grain relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-12 bg-paper overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-4 text-terracotta"
          >
            <Divider label="Speisekarte" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-lg text-[clamp(2rem,7vw,5rem)] text-espresso leading-[1.05]"
          >
            Unsere <span className="italic-display text-terracotta">Küche</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display italic text-base sm:text-lg text-espresso-soft mt-3 tracking-wide"
          >
            Steinofen-Pizza, Pasta, Pizzabrötchen, Ciabatta, Salate und mehr.
          </motion.p>
        </div>

        {/* The menu paper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative bg-paper-deep border border-paper-soft/15 depth-shadow"
        >
          {/* Decorative outside borders — hidden on very small screens */}
          <div className="pointer-events-none absolute inset-2 sm:inset-3 border border-terracotta/35" />
          <div className="pointer-events-none absolute inset-4 sm:inset-5 border-t border-b border-terracotta/15 hidden sm:block" />
          <div className="grain-overlay" />

          <div className="relative p-5 sm:p-8 md:p-14">
            {/* Top crown */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 text-terracotta">
              <OliveBranch size={28} className="hidden sm:block" />
              <div className="text-center">
                <div className="font-display italic text-terracotta tracking-[0.35em] sm:tracking-[0.4em] text-[0.65rem] sm:text-[0.7rem] uppercase">
                  Familienbetrieb · seit 2013
                </div>
                <div className="display-lg text-terracotta text-2xl sm:text-3xl">
                  AMI<span className="italic-display">cizia</span>
                </div>
                <div className="font-display italic text-espresso text-xs sm:text-sm mt-1 tracking-wide">
                  Speisekarte
                </div>
              </div>
              <OliveBranch size={28} className="-scale-x-100 hidden sm:block" />
            </div>

            {/* Filter chips — scroll-x on mobile */}
            <div className="-mx-1 mb-8 sm:mb-10 overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 px-1 min-w-max sm:justify-center sm:flex-wrap sm:min-w-0">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key as MenuCategoryKey | "all")}
                    className={`shrink-0 px-4 sm:px-5 py-1.5 rounded-full font-display italic text-xs sm:text-sm tracking-wide border transition-all duration-300 ${
                      activeCategory === cat.key
                        ? "bg-terracotta text-paper border-terracotta"
                        : "bg-transparent text-espresso/70 border-espresso/30 hover:border-terracotta hover:text-terracotta"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Categories grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 gap-8 md:gap-x-14 md:gap-y-12"
              >
                {ORDER.map((k) =>
                  grouped[k].length > 0 ? (
                    <CategoryBlock key={k} cat={k} items={grouped[k]} />
                  ) : null
                )}
              </motion.div>
            </AnimatePresence>

            {/* Closing flourish */}
            <div className="flex items-center justify-center gap-3 mt-10 sm:mt-14 text-terracotta">
              <Fleuron size={18} />
            </div>

            <p className="text-center font-display italic text-sm sm:text-base md:text-lg text-espresso-soft mt-4 tracking-wide">
              Bestellung zur Abholung telefonisch — Vorbestellung ab 11:00 Uhr.
            </p>

            {/* Allergen legend */}
            <div className="mt-8 pt-5 border-t border-terracotta/20">
              <p className="font-display italic text-terracotta text-xs tracking-[0.25em] uppercase mb-2 text-center">
                Allergene
              </p>
              <p className="font-serif text-espresso-soft/80 text-xs sm:text-[13px] leading-relaxed text-center max-w-2xl mx-auto">
                {allergenLegend.map((a, i) => (
                  <span key={a.code}>
                    <strong className="text-espresso">{a.code}</strong> = {a.label}
                    {i < allergenLegend.length - 1 ? " · " : ""}
                  </span>
                ))}
              </p>
              <p className="font-serif italic text-espresso-soft/70 text-xs mt-2 text-center">
                Bei Fragen zu Allergenen und Zusatzstoffen wenden Sie sich bitte an unser Personal.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10 sm:mt-14"
        >
          <a href="#contact" className="btn-terra">
            Zur Adresse &amp; Anruf →
          </a>
          <p className="font-display italic text-espresso-soft text-xs sm:text-sm mt-4 tracking-wider">
            Anrufen, Bestellung aufnehmen, frisch bei uns abholen.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
