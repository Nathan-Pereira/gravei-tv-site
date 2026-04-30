"use client";

import { motion } from "framer-motion";
import { MapPin, QrCode, Download } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const STEPS = [
  {
    icon: MapPin,
    title: "Joga numa quadra Gravei",
    desc: "As câmeras já estão instaladas e gravando. Você só faz o que sabe: jogar. Sem tripé, sem app pra baixar, sem nada.",
  },
  {
    icon: QrCode,
    title: "Escaneia o QR Code da quadra",
    desc: "Tem um QR Code no muro. Aponta a câmera, abre o site da sua quadra. Cravou? Toca pra salvar os 20 segundos do lance.",
  },
  {
    icon: Download,
    title: "Recebe o vídeo na hora",
    desc: "O vídeo cai no seu celular em segundos, direto pelo navegador. Posta no story, manda no grupo, salva pra sempre.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative py-24 md:py-32 border-t border-neutral-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl">
          <span className="text-accent font-bold text-sm uppercase tracking-widest">
            Como funciona
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase mt-4 text-foreground">
            Três toques.
            <br />
            <span className="text-accent">Lance salvo.</span>
          </h2>
          <p className="mt-6 text-lg text-neutral-700 max-w-2xl">
            Sem app. Sem cadastro. Tudo direto no navegador, escaneando o QR
            Code que tá na quadra.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {STEPS.map((step, i) => (
            <AnimatedSection
              key={step.title}
              delay={i * 0.12}
              className="group relative"
            >
              <div className="relative h-full rounded-3xl card-elevated p-8">
                <div className="absolute -top-5 left-8">
                  <span className="font-display text-6xl text-accent">
                    0{i + 1}
                  </span>
                </div>

                <motion.div
                  whileHover={{ rotate: -8, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mt-6 grid place-items-center size-16 rounded-2xl bg-neon text-foreground"
                >
                  <step.icon size={32} strokeWidth={2.2} />
                </motion.div>

                <h3 className="mt-6 font-display text-3xl uppercase text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-neutral-700 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
