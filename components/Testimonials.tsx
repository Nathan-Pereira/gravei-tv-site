"use client";

import { Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const DEPOIMENTOS = [
  {
    quote:
      "Mandei um chapéu no zagueiro, escaneei o QR e em 30 segundos tava o vídeo no celular. Mando no story toda semana.",
    name: "Léo Mendes",
    role: "Pivô — Arena Vila Madalena",
    initials: "LM",
  },
  {
    quote:
      "Instalei o Gravei na minha quadra em janeiro. A galera começou a marcar racha aqui só pra postar os lances. Lotamos os horários da noite.",
    name: "Rafa Albuquerque",
    role: "Dono — Quadra do Rafa",
    initials: "RA",
  },
  {
    quote:
      "Mando os vídeos pros peneireiros e já consegui teste em dois clubes. Sem o Gravei eu não tinha como mostrar o que eu jogo.",
    name: "Bia Ferraz",
    role: "Atacante — sub-20",
    initials: "BF",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl">
          <span className="text-accent font-bold text-sm uppercase tracking-widest">
            Depoimentos
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase mt-4 text-foreground">
            A galera
            <br />
            <span className="text-accent">já tá usando.</span>
          </h2>
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {DEPOIMENTOS.map((d, i) => (
            <AnimatedSection key={d.name} delay={i * 0.1}>
              <figure className="relative h-full rounded-3xl card-elevated p-8">
                <Quote
                  className="absolute top-6 right-6 text-neon/40"
                  size={48}
                  strokeWidth={1.5}
                />
                <blockquote className="text-neutral-800 leading-relaxed text-[17px] relative">
                  &ldquo;{d.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 pt-6 border-t border-neutral-200">
                  <div className="grid place-items-center size-12 rounded-full bg-neon text-foreground font-display text-xl">
                    {d.initials}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{d.name}</div>
                    <div className="text-sm text-neutral-600">{d.role}</div>
                  </div>
                </figcaption>
              </figure>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
