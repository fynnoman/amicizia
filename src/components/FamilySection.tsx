"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const familyMembers = [
  {
    name: "Mama",
    role: "Das Herz der Küche",
    emoji: "👩‍🍳",
    favorite: "Lasagne al Forno",
    funFact: "Kennt jedes Rezept auswendig – und improvisiert trotzdem immer.",
    color: "from-bordeaux to-bordeaux-dark",
  },
  {
    name: "Papa",
    role: "Der Teig-Meister",
    emoji: "👨‍🍳",
    favorite: "Pizza Margherita",
    funFact: "Sagt: 'Der Teig muss ruhen!' – genau wie er am Sonntag.",
    color: "from-bordeaux-dark to-bordeaux",
  },
  {
    name: "Tochter",
    role: "Die Qualitätskontrolle",
    emoji: "👧",
    favorite: "Tagliatelle al Salmone",
    funFact: "Probiert ALLES – bevor es die Gäste bekommen. Muss ja schmecken!",
    color: "from-bordeaux to-bordeaux-light",
  },
  {
    name: "Sohn",
    role: "Der Kreative",
    emoji: "👦",
    favorite: "Pizza Diavola",
    funFact: "Hat die verrücktesten Pizza-Ideen. Manche funktionieren sogar!",
    color: "from-bordeaux-light to-bordeaux",
  },
];

export default function FamilySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-32 px-6 lg:px-12 bg-cream overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle, var(--bordeaux) 1px, transparent 1px)`,
        backgroundSize: "30px 30px",
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-bordeaux text-sm tracking-[0.3em] uppercase font-medium mb-4"
          >
            Lerne uns kennen
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
          >
            Die <span className="text-bordeaux">Familie</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-foreground/40"
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            Hover mal drüber – wir beißen nicht! 😄
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {familyMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              onMouseEnter={() => setHoveredMember(i)}
              onMouseLeave={() => setHoveredMember(null)}
              className="group relative cursor-pointer"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-3">
                {/* Emoji avatar */}
                <div className={`relative h-48 bg-gradient-to-br ${member.color} flex items-center justify-center overflow-hidden`}>
                  <motion.span
                    animate={hoveredMember === i ? { scale: 1.3, rotate: [0, -10, 10, 0] } : { scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-7xl relative z-10"
                  >
                    {member.emoji}
                  </motion.span>
                  {/* Decorative circles */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
                  <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-white/5" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-bordeaux text-sm font-medium mb-3">{member.role}</p>

                  {/* Expanded on hover */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    hoveredMember === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    <div className="pt-3 border-t border-foreground/5">
                      <p className="text-sm text-foreground/50 mb-2">
                        <span className="font-semibold text-foreground/70">Lieblingsgericht:</span>{" "}
                        {member.favorite}
                      </p>
                      <p className="text-sm text-foreground/40 italic" style={{ fontFamily: "var(--font-caveat)" }}>
                        &ldquo;{member.funFact}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Peek hint when not hovered */}
                  <div className={`transition-all duration-500 ${
                    hoveredMember === i ? "opacity-0 h-0" : "opacity-100"
                  }`}>
                    <p className="text-xs text-foreground/30 mt-2">Hover für mehr →</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
