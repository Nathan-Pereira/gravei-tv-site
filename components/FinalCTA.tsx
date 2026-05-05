"use client";

import { motion } from "framer-motion";
import { Building2, Gift, ArrowRight } from "lucide-react";
import Link from "next/link";
import { scrollToId } from "@/lib/utils";

export default function FinalCTA() {
  return (
    <section
      id="comecar"
      className="relative py-24 md:py-32 overflow-hidden bg-neon text-foreground"
    >
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden>
        <div
          className="size-full"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div
        className="absolute -top-20 -left-20 size-80 rounded-full bg-black/10 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-20 -right-20 size-96 rounded-full bg-black/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block font-bold text-sm uppercase tracking-widest bg-foreground text-neon px-4 py-1.5 rounded-full"
        >
          Pré-lançamento aberto
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase"
        >
          Cravei?
          <br />
          Gravei!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-foreground/85 max-w-2xl mx-auto font-medium"
        >
          Tá pronto pra ter Gravei na sua quadra ou na quadra que você joga?
          Tem dois caminhos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto"
        >
          <button
            onClick={() => scrollToId("para-quadras")}
            className="cursor-magnetic group flex flex-col items-start gap-2 bg-foreground text-white rounded-3xl p-6 sm:p-8 hover:bg-neutral-900 transition-colors text-left"
          >
            <span className="grid place-items-center size-12 rounded-xl bg-neon text-foreground">
              <Building2 size={24} strokeWidth={2.2} />
            </span>
            <span className="font-display text-3xl uppercase mt-3">
              Sou dono de quadra
            </span>
            <span className="text-white/70 text-sm">
              Quero instalar Gravei na minha quadra e virar destino dos
              atletas da região.
            </span>
            <span className="mt-3 inline-flex items-center gap-1.5 text-neon font-bold text-sm">
              Pedir orçamento
              <ArrowRight size={16} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <Link
            href="/indicar"
            className="cursor-magnetic group flex flex-col items-start gap-2 bg-foreground text-white rounded-3xl p-6 sm:p-8 hover:bg-neutral-900 transition-colors text-left"
          >
            <span className="grid place-items-center size-12 rounded-xl bg-neon text-foreground">
              <Gift size={24} strokeWidth={2.2} />
            </span>
            <span className="font-display text-3xl uppercase mt-3">
              Sou jogador
            </span>
            <span className="text-white/70 text-sm">
              Indica sua quadra preferida e ganha R$100 quando fechar
              instalação.
            </span>
            <span className="mt-3 inline-flex items-center gap-1.5 text-neon font-bold text-sm">
              Indicar quadra
              <ArrowRight size={16} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-sm text-foreground/60 font-medium"
        >
          Também rola dúvida? Manda no{" "}
          <a
            href="mailto:contato@gravei.tv"
            className="underline underline-offset-4 hover:text-foreground"
          >
            contato@gravei.tv
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
