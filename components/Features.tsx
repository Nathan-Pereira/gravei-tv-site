"use client";

import {
  Rewind,
  Layers,
  Scissors,
  Stamp,
  Instagram,
  QrCode,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const FEATURES = [
  {
    icon: QrCode,
    title: "Sem app, sem cadastro",
    desc: "Tudo direto no navegador. Escaneia o QR Code da quadra e tá dentro. Funciona em qualquer celular.",
    badge: null,
  },
  {
    icon: Rewind,
    title: "Gravação retroativa",
    desc: "Apertou depois do lance? O sistema já tinha gravado. Lance épico nunca mais escapa.",
    badge: null,
  },
  {
    icon: Layers,
    title: "Multi-câmera",
    desc: "Várias câmeras na quadra ao mesmo tempo. Você escolhe o melhor ângulo do seu lance.",
    badge: null,
  },
  {
    icon: Stamp,
    title: "Marca da quadra",
    desc: "Vídeo sai com o nome do local. A quadra ganha exposição, você ganha credibilidade.",
    badge: null,
  },
  {
    icon: Scissors,
    title: "Edição rápida",
    desc: "Corta começo e fim, slow motion no momento do lance e exporta no formato certo pra cada rede.",
    badge: null,
  },
  {
    icon: Instagram,
    title: "Stories & TikTok",
    desc: "Compartilha em um toque. Vídeo já sai otimizado pra Instagram, TikTok, WhatsApp e Shorts.",
    badge: null,
  },
];

export default function Features() {
  return (
    <section
      id="recursos"
      className="relative py-24 md:py-32 border-t border-neutral-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl">
          <span className="text-accent font-bold text-sm uppercase tracking-widest">
            Recursos
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase mt-4 text-foreground">
            Tudo o que você
            <br />
            <span className="text-accent">precisa.</span> Nada que sobra.
          </h2>
        </AnimatedSection>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <AnimatedSection
              key={f.title}
              delay={i * 0.06}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl card-elevated p-7">
                {f.badge && (
                  <span className="absolute top-5 right-5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-neon/20 text-accent border border-accent/30">
                    {f.badge}
                  </span>
                )}
                <span className="grid place-items-center size-12 rounded-xl bg-neon text-foreground">
                  <f.icon size={24} />
                </span>
                <h3 className="mt-5 font-bold text-xl text-foreground">{f.title}</h3>
                <p className="mt-2 text-neutral-600 leading-relaxed text-[15px]">
                  {f.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
