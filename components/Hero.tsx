"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Star } from "lucide-react";
import { scrollToId } from "@/lib/utils";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div
        className="absolute -top-40 -left-40 size-[600px] rounded-full bg-neon/20 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute top-1/2 -right-40 size-[500px] rounded-full bg-neon/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-neon/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent mb-6"
            >
              <span className="size-2 rounded-full bg-accent animate-pulse" />
              Em pré-lançamento
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] uppercase text-foreground"
            >
              Cravou?
              <br />
              <span className="text-accent">Grava.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 max-w-xl text-lg sm:text-xl text-neutral-700 leading-relaxed"
            >
              Quadras com câmeras Gravei capturam todos os lances o tempo
              todo. Cravou um drible? Escaneia o QR Code da quadra e leva o
              vídeo direto pro celular.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollToId("para-quadras")}
                className="btn-neon-solid rounded-full px-7 py-4 text-base inline-flex items-center justify-center gap-2 cursor-magnetic"
              >
                Quero na minha quadra
                <ArrowRight size={18} strokeWidth={3} />
              </button>
              <button
                onClick={() => scrollToId("como-funciona")}
                className="btn-ghost rounded-full px-7 py-4 text-base inline-flex items-center justify-center gap-2 cursor-magnetic"
              >
                Como funciona
                <ArrowDown size={18} />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-neutral-600"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-accent text-accent"
                  />
                ))}
                <span className="ml-2 font-semibold text-foreground">4.9</span>
              </div>
              <div className="h-4 w-px bg-neutral-300" />
              <span>
                <span className="font-semibold text-foreground">+40 quadras</span>{" "}
                já equipadas
              </span>
              <div className="h-4 w-px bg-neutral-300" />
              <span>
                <span className="font-semibold text-foreground">+12 mil</span>{" "}
                atletas na fila
              </span>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
