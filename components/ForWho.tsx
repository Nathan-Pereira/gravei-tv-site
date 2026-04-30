"use client";

import AnimatedSection from "./AnimatedSection";

const PERFIS = [
  {
    initials: "JF",
    name: "Jogador de futsal",
    desc: "Gol de bicicleta no racha de quinta? Salva e manda no grupo da firma.",
    color: "from-emerald-400/30 to-neon/30",
  },
  {
    initials: "BB",
    name: "Atleta de basquete",
    desc: "Toco, enterrada, three na cara. Se cravou, tem que ter prova em vídeo.",
    color: "from-orange-400/30 to-yellow-300/30",
  },
  {
    initials: "VL",
    name: "Jogador de vôlei",
    desc: "Cortada, bloqueio, ace de saque. Postou, ninguém duvida do seu jogo.",
    color: "from-blue-400/30 to-purple-400/30",
  },
  {
    initials: "TR",
    name: "Treinador",
    desc: "Salva os melhores momentos do treino pra usar em análise tática e motivação do time.",
    color: "from-red-400/30 to-pink-400/30",
  },
  {
    initials: "AS",
    name: "Aspirante a profissional",
    desc: "Monta seu portfólio em vídeo pra mandar pra peneireiros, agentes e olheiros.",
    color: "from-purple-400/30 to-fuchsia-400/30",
  },
  {
    initials: "+1",
    name: "Qualquer jogador",
    desc: "Se você joga numa quadra Gravei e gosta de mostrar serviço, é pra você.",
    color: "from-neon/40 to-emerald-400/30",
  },
];

export default function ForWho() {
  return (
    <section
      id="para-quem"
      className="relative py-24 md:py-32 border-t border-neutral-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl">
          <span className="text-accent font-bold text-sm uppercase tracking-widest">
            Pra jogadores
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase mt-4 text-foreground">
            Pra quem
            <br />
            <span className="text-accent">manda bem</span> na quadra.
          </h2>
          <p className="mt-6 text-lg text-neutral-700">
            Não importa o esporte. Se você joga numa quadra Gravei, é pra você.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PERFIS.map((p, i) => (
            <AnimatedSection
              key={p.name}
              delay={i * 0.06}
              className="group"
            >
              <div className="relative h-full overflow-hidden rounded-2xl card-elevated p-7">
                <div
                  className={`absolute -top-12 -right-12 size-40 rounded-full bg-gradient-to-br ${p.color} blur-2xl opacity-70 group-hover:opacity-100 transition-opacity`}
                />
                <div className="relative">
                  <div className="grid place-items-center size-14 rounded-full bg-neutral-100 border border-neutral-200 font-display text-2xl text-foreground group-hover:bg-neon group-hover:border-neon transition-colors">
                    {p.initials}
                  </div>
                  <h3 className="mt-5 font-bold text-xl text-foreground">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-neutral-600 leading-relaxed text-[15px]">
                    {p.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
