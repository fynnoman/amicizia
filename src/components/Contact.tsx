"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 px-6 lg:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-bordeaux text-sm tracking-[0.3em] uppercase font-medium mb-4"
            >
              Komm vorbei
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight"
            >
              Findest du
              <br />
              <span className="text-bordeaux">uns hier</span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-16 h-[2px] bg-bordeaux mb-10 origin-left"
            />

            {/* Info Cards */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start gap-5 p-6 rounded-2xl bg-cream hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-bordeaux/10 flex items-center justify-center flex-shrink-0 text-xl">
                  📍
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Adresse</h3>
                  <p className="text-foreground/60">
                    Industriestraße 20
                    <br />
                    66740 Saarlouis
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start gap-5 p-6 rounded-2xl bg-cream hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-bordeaux/10 flex items-center justify-center flex-shrink-0 text-xl">
                  🕒
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    Öffnungszeiten
                  </h3>
                  <p className="text-foreground/60">
                    Den ganzen Tag geöffnet
                    <br />
                    Ab 10:00 Uhr
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-start gap-5 p-6 rounded-2xl bg-cream hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-bordeaux/10 flex items-center justify-center flex-shrink-0 text-xl">
                  📱
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    Social Media
                  </h3>
                  <a
                    href="https://www.instagram.com/amicizia.saarlouis/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bordeaux font-medium hover:underline"
                  >
                    @amicizia.saarlouis
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Map Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.5!2d6.7514!3d49.3137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795b07c8caa7e1b%3A0x0!2sIndustriestr.+20%2C+66740+Saarlouis!5e0!3m2!1sde!2sde!4v1680000000000!5m2!1sde!2sde"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AMICIZIA Standort"
                className="w-full"
              />
            </div>

            {/* Floating card on map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-6 left-6 right-6 bg-white rounded-2xl shadow-xl p-6 flex items-center justify-between"
            >
              <div>
                <p className="font-bold text-foreground">AMICIZIA</p>
                <p className="text-sm text-foreground/50">
                  Industriestraße 20, Saarlouis
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Industriestraße+20,+66740+Saarlouis"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-bordeaux text-white text-xs font-semibold tracking-wider uppercase rounded-full hover:bg-bordeaux-dark transition-all duration-300 whitespace-nowrap"
              >
                Route planen
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
