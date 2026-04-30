"use client";

import { motion } from "framer-motion";
import { Rewind, Video, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function Demo() {
  return (
    <section className="relative py-24 md:py-32 border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <span className="text-accent font-bold text-sm uppercase tracking-widest">
              A mágica
            </span>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase mt-4 text-foreground">
              Buffer de
              <br />
              <span className="text-accent">20 segundos</span>
            </h2>
            <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
              As câmeras da quadra nunca param de gravar — mas só{" "}
              <span className="text-foreground font-semibold">salvam</span>{" "}
              quando você manda. É como dar replay no que acabou de acontecer:
              apertou, os últimos 20s viram vídeo no seu celular.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                {
                  icon: Video,
                  title: "Câmeras profissionais fixas",
                  desc: "Vários ângulos da quadra capturando ao mesmo tempo.",
                },
                {
                  icon: Rewind,
                  title: "Captura o passado",
                  desc: "Aperta depois do lance e o sistema recupera os 20s anteriores.",
                },
                {
                  icon: Zap,
                  title: "Direto no seu celular",
                  desc: "Do toque ao vídeo no navegador em menos de 30 segundos.",
                },
              ].map((item, i) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <span className="grid place-items-center size-10 rounded-lg bg-neon text-foreground shrink-0">
                    <item.icon size={20} />
                  </span>
                  <div>
                    <h4 className="font-bold text-lg text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-neutral-600">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-200 bg-neutral-950">
              <div className="absolute inset-0 grid-bg-dark opacity-30" />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white">
                    Buferizando
                  </span>
                </div>
                <span className="font-display text-sm text-neon">00:20</span>
              </div>

              <div className="absolute inset-0 grid place-items-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="size-72 rounded-full border-2 border-neon"
                />
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="absolute size-96 rounded-full border-2 border-neon"
                />
                <span className="absolute font-display text-7xl md:text-8xl text-neon">
                  20s
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                <div className="flex items-end gap-1 h-16">
                  {Array.from({ length: 60 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-neon rounded-sm"
                      animate={{
                        height: [
                          `${15 + Math.random() * 70}%`,
                          `${15 + Math.random() * 85}%`,
                          `${15 + Math.random() * 70}%`,
                        ],
                      }}
                      transition={{
                        duration: 1.2 + Math.random() * 0.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.03,
                      }}
                    />
                  ))}
                </div>
                <p className="mt-4 text-xs text-white/70 text-center uppercase tracking-widest">
                  Aperte qualquer hora pra salvar
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
