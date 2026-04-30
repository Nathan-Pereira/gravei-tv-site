"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Megaphone,
  Wrench,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Diferencial competitivo",
    desc: "Atletas escolhem quadras com Gravei. Vire a referência da região.",
  },
  {
    icon: Users,
    title: "Mais retenção",
    desc: "Quem grava lance épico volta na semana seguinte pra cravar de novo.",
  },
  {
    icon: Megaphone,
    title: "Marketing orgânico",
    desc: "Cada vídeo postado leva o nome da sua quadra pros stories e TikTok.",
  },
  {
    icon: Wrench,
    title: "Instalação chave na mão",
    desc: "Câmeras, internet, sistema. A gente cuida de tudo. Você só joga.",
  },
];

export default function ForVenues() {
  return (
    <section
      id="para-quadras"
      className="relative py-24 md:py-32 section-dark overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg-dark opacity-40" aria-hidden />
      <div
        className="absolute -top-20 right-0 size-[500px] rounded-full bg-neon/10 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute bottom-0 -left-20 size-[400px] rounded-full bg-neon/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-neon mb-6">
              Pra donos de quadras
            </span>

            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase">
              Sua quadra
              <br />
              <span className="text-neon">virou destino.</span>
            </h2>

            <p className="mt-6 text-lg text-white/75 leading-relaxed max-w-lg">
              Instala câmeras Gravei na sua quadra e oferece o que nenhuma
              outra dá: o atleta sai com o vídeo do lance no celular. Cada
              dunk postado é uma propaganda gratuita do seu negócio.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5">
                <div className="font-display text-3xl text-neon">+38%</div>
                <div className="text-xs text-white/60 mt-1 leading-tight">
                  ocupação média
                </div>
              </div>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5">
                <div className="font-display text-3xl text-neon">+4x</div>
                <div className="text-xs text-white/60 mt-1 leading-tight">
                  alcance no Insta
                </div>
              </div>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5">
                <div className="font-display text-3xl text-neon">90d</div>
                <div className="text-xs text-white/60 mt-1 leading-tight">
                  payback médio
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contato-quadras"
                className="btn-neon-solid rounded-full px-7 py-4 text-base inline-flex items-center justify-center gap-2 cursor-magnetic"
              >
                Quero instalar
                <ArrowRight size={18} strokeWidth={3} />
              </a>
              <a
                href="mailto:quadras@gravei.tv"
                className="rounded-full px-7 py-4 text-base font-bold inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 transition-colors cursor-magnetic"
              >
                Falar com vendas
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="grid sm:grid-cols-2 gap-4">
              {BENEFITS.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-neon/40 transition-colors"
                >
                  <span className="grid place-items-center size-11 rounded-xl bg-neon text-foreground">
                    <b.icon size={22} />
                  </span>
                  <h3 className="mt-4 font-bold text-lg">{b.title}</h3>
                  <p className="mt-2 text-white/70 text-[14px] leading-relaxed">
                    {b.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-neon/40 bg-gradient-to-br from-neon/15 to-transparent p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-neon">
                Como ganhamos juntos
              </div>
              <p className="mt-2 text-white/85 leading-relaxed">
                Você paga a instalação uma vez (ou parcela) e fica com uma{" "}
                <span className="font-bold text-white">
                  comissão recorrente
                </span>{" "}
                de cada vídeo premium baixado pelos jogadores na sua quadra.
                Quanto mais cravam, mais entra no seu caixa.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
