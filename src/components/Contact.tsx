"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Divider, Sun, Fleuron, OliveBranch } from "./Ornaments";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="paper-grain relative py-28 md:py-32 px-6 lg:px-12 overflow-hidden bg-paper-deep/40"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-5 text-terracotta"
          >
            <Divider label="VIII · Contatti" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-lg text-[clamp(2.5rem,6vw,5rem)] text-espresso"
          >
            Vieni a{" "}
            <span className="italic-display text-terracotta">trovarci</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-hand text-2xl text-espresso-soft mt-3"
          >
            Industriestraße 20 — die Tür ist offen.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
          {/* Left: Postcard info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative"
          >
            <div className="postcard p-8 md:p-10 relative">
              <div className="grain-overlay" />

              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="font-display italic text-terracotta tracking-[0.4em] text-[0.7rem] uppercase">
                      Cartolina da
                    </div>
                    <div className="display-lg text-terracotta text-3xl mt-1">
                      Saarlouis
                    </div>
                  </div>
                  {/* "stamp" */}
                  <div className="border-2 border-terracotta px-3 py-2 rotate-3">
                    <div className="font-display italic text-terracotta text-[10px] leading-none">
                      DAL
                    </div>
                    <div className="font-display text-terracotta text-xl leading-none">
                      2013
                    </div>
                  </div>
                </div>

                <div className="space-y-7">
                  <InfoRow
                    icon={<OliveBranch size={22} />}
                    title="Indirizzo · Adresse"
                  >
                    Industriestraße 20<br />66740 Saarlouis
                  </InfoRow>

                  <InfoRow
                    icon={<Sun size={22} />}
                    title="Orari · Öffnungszeiten"
                  >
                    tutti i giorni · jeden Tag
                    <br />
                    <span className="font-hand text-terracotta text-2xl">
                      dalle 10:00 →
                    </span>
                  </InfoRow>

                  <InfoRow
                    icon={<Fleuron size={20} />}
                    title="Resta in contatto · Instagram"
                  >
                    <a
                      href="https://www.instagram.com/amicizia.saarlouis/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline"
                    >
                      @amicizia.saarlouis
                    </a>
                  </InfoRow>
                </div>

                <div className="mt-8 pt-6 border-t border-dashed border-espresso/25 font-hand text-2xl text-espresso-soft -rotate-1">
                  ti aspettiamo ♡
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative overflow-hidden border border-espresso/15 depth-shadow">
              <div className="pointer-events-none absolute inset-2 border border-terracotta/30 z-10" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.5!2d6.7514!3d49.3137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795b07c8caa7e1b%3A0x0!2sIndustriestr.+20%2C+66740+Saarlouis!5e0!3m2!1sde!2sde!4v1680000000000!5m2!1sde!2sde"
                width="100%"
                height="520"
                style={{ border: 0, filter: "saturate(0.85) sepia(0.18) hue-rotate(-8deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AMICIZIA Standort"
                className="w-full"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-7 left-6 right-6 bg-paper-soft border border-espresso/15 depth-shadow p-5 flex items-center justify-between"
            >
              <div>
                <div className="font-display italic text-terracotta text-xs tracking-[0.25em] uppercase">
                  La nostra casa
                </div>
                <p className="font-display text-espresso text-xl mt-1">
                  AMICIZIA Trattoria
                </p>
                <p className="font-serif italic text-espresso-soft text-sm">
                  Industriestraße 20 · Saarlouis
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Industriestraße+20,+66740+Saarlouis"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-terra !py-2 !px-4 !text-[0.7rem]"
              >
                Route
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="shrink-0 w-10 h-10 border border-terracotta/40 flex items-center justify-center text-terracotta">
        {icon}
      </div>
      <div>
        <h3 className="font-display italic text-terracotta text-xs tracking-[0.25em] uppercase mb-1">
          {title}
        </h3>
        <p className="font-serif text-espresso text-lg leading-snug">
          {children}
        </p>
      </div>
    </div>
  );
}
