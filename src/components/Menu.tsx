"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  categories,
  menuItems,
  formatPrice,
  type MenuItem,
  type MenuCategoryKey,
} from "@/data/menu";
import {
  Divider,
  Fleuron,
  PizzaSlice,
  PastaSwirl,
  Wheat,
  OliveBranch,
  Tomato,
} from "./Ornaments";

const categoryIcon: Record<MenuCategoryKey, React.ReactNode> = {
  pizza: <PizzaSlice size={26} />,
  ciabatta: <Wheat size={26} />,
  wrap: <PastaSwirl size={26} />,
};

const categoryLabel: Record<MenuCategoryKey, string> = {
  pizza: "Pizze · al forno",
  ciabatta: "Ciabatte · dal panificio",
  wrap: "Wraps · alla casa",
};

function MenuRow({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="group py-4 border-b border-espresso/12 last:border-0"
    >
      <div className="dot-leader">
        <div className="name flex items-baseline gap-2">
          <span className="font-display text-espresso text-xl md:text-2xl tracking-tight group-hover:text-terracotta transition-colors">
            {item.name}
          </span>
          {item.popular && (
            <span className="font-hand text-terracotta text-base -rotate-3">
              ★ il preferito
            </span>
          )}
        </div>
        <span className="leader" aria-hidden />
        <span className="price font-display text-terracotta text-xl md:text-2xl tabnum">
          {formatPrice(item.price)} €
        </span>
      </div>
      <p className="font-serif italic text-espresso-soft text-base mt-1 max-w-prose">
        {item.description}
      </p>
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
      <div className="flex items-center gap-3 mb-5 text-terracotta">
        <span>{categoryIcon[cat]}</span>
        <h3 className="font-display italic text-2xl md:text-3xl tracking-wide">
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
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] =
    useState<MenuItem["category"] | "all">("all");

  const filtered =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((it) => it.category === activeCategory);

  const grouped: Record<MenuCategoryKey, MenuItem[]> = {
    pizza: [],
    ciabatta: [],
    wrap: [],
  };
  filtered.forEach((it) => grouped[it.category].push(it));

  return (
    <section
      id="menu"
      ref={ref}
      className="paper-grain relative py-28 md:py-36 px-6 lg:px-12 bg-paper overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-5 text-terracotta"
          >
            <Divider label="IV · Il Menu" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-lg text-[clamp(2.5rem,6vw,5rem)] text-espresso"
          >
            La nostra <span className="italic-display text-terracotta">cucina</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-hand text-2xl text-espresso-soft mt-3"
          >
            klein, ehrlich, jeden Tag frisch gemacht.
          </motion.p>
        </div>

        {/* The menu paper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative bg-paper-soft border border-espresso/15 depth-shadow"
        >
          {/* Decorative outside borders */}
          <div className="pointer-events-none absolute inset-3 border border-terracotta/35" />
          <div className="pointer-events-none absolute inset-5 border-t border-b border-terracotta/15" />
          <div className="grain-overlay" />

          <div className="relative p-8 md:p-14">
            {/* Top crown */}
            <div className="flex items-center justify-center gap-4 mb-8 text-terracotta">
              <OliveBranch size={36} />
              <div className="text-center">
                <div className="font-display italic text-terracotta tracking-[0.4em] text-[0.7rem] uppercase">
                  Trattoria
                </div>
                <div className="display-lg text-terracotta text-3xl">
                  AMI<span className="italic-display">cizia</span>
                </div>
                <div className="font-hand text-espresso text-base -mt-1">
                  il menu della casa
                </div>
              </div>
              <OliveBranch size={36} className="-scale-x-100" />
            </div>

            {/* Filter chips — paper tone, italic */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-5 py-1.5 rounded-full font-display italic text-sm tracking-wide border transition-all duration-300 ${
                    activeCategory === cat.key
                      ? "bg-espresso text-paper-soft border-espresso"
                      : "bg-transparent text-espresso/70 border-espresso/30 hover:border-terracotta hover:text-terracotta"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Categories grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 gap-10 md:gap-x-16 md:gap-y-12"
              >
                {(["pizza", "ciabatta", "wrap"] as MenuCategoryKey[]).map((k) =>
                  grouped[k].length > 0 ? (
                    <CategoryBlock key={k} cat={k} items={grouped[k]} />
                  ) : null
                )}
              </motion.div>
            </AnimatePresence>

            {/* Closing flourish */}
            <div className="flex items-center justify-center gap-3 mt-14 text-terracotta">
              <Tomato size={22} />
              <Fleuron size={20} />
              <Wheat size={22} />
            </div>

            <p className="text-center font-hand text-2xl md:text-3xl text-espresso-soft mt-4 -rotate-1">
              buon appetito ♡
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <a href="#order" className="btn-terra">
            Ordina &amp; ritira →
          </a>
          <p className="font-display italic text-espresso-soft text-sm mt-4 tracking-wider">
            online vorbestellen, frisch bei uns abholen
          </p>
        </motion.div>
      </div>
    </section>
  );
}
