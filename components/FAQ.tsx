"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const FAQS = [
  {
    q: "Como funciona, em uma frase?",
    a: "A quadra tem câmeras Gravei instaladas, gravando o tempo todo. Quando rola um lance, você escaneia o QR Code da quadra com o celular, marca o lance e o vídeo cai direto no seu navegador.",
  },
  {
    q: "Preciso baixar algum app?",
    a: "Não. Tudo roda direto no navegador do celular. Aponta a câmera pro QR Code da quadra, abre o link, marca o lance. Simples assim.",
  },
  {
    q: "Em quais quadras posso usar?",
    a: "Só nas quadras com câmeras Gravei instaladas. A lista de quadras parceiras está no site, com mapa e disponibilidade. Se sua quadra preferida ainda não tem, indica pra gente — quem indica e fecha instalação ganha 20 vídeos HD grátis.",
  },
  {
    q: "Sou dono de quadra. Como instalo?",
    a: "A gente faz instalação chave na mão: câmeras, internet local, sistema e treinamento da equipe. O investimento varia conforme o tamanho da quadra (futsal, basquete, society) e tem opções à vista ou parceladas. Preenche o formulário acima ou fala com a gente em quadras@gravei.tv.",
  },
  {
    q: "Os vídeos ficam guardados por quanto tempo?",
    a: "Os lances marcados ficam disponíveis por 7 dias. Depois disso, são apagados automaticamente. O que você baixou é seu pra sempre.",
  },
  {
    q: "Tem como escolher o ângulo da câmera?",
    a: "Tem. As quadras Gravei têm múltiplas câmeras instaladas. Quando você marca um lance, o site mostra os ângulos disponíveis e você escolhe o melhor antes de baixar.",
  },
  {
    q: "Posso editar o vídeo antes de postar?",
    a: "Pode. Dá pra cortar começo e fim, aplicar slow motion no momento do lance, escolher formato (vertical, quadrado, horizontal) e exportar pronto pra Instagram, TikTok ou WhatsApp.",
  },
  {
    q: "Funciona em qual celular?",
    a: "Em qualquer celular com câmera (pra ler o QR) e navegador moderno. Como tudo é processado no servidor, não precisa de aparelho potente.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-24 md:py-32 border-t border-neutral-200"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <span className="text-accent font-bold text-sm uppercase tracking-widest">
            Perguntas frequentes
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase mt-4 text-foreground">
            Tira a dúvida.
            <br />
            <span className="text-accent">Depois grava.</span>
          </h2>
        </AnimatedSection>

        <div className="mt-16 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <AnimatedSection key={faq.q} delay={i * 0.04}>
                <div
                  className={`rounded-2xl border bg-white transition-colors ${
                    isOpen ? "border-accent/50 shadow-sm" : "border-neutral-200"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-lg text-foreground">
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`grid place-items-center size-8 rounded-full shrink-0 ${
                        isOpen
                          ? "bg-neon text-foreground"
                          : "bg-neutral-100 text-foreground"
                      }`}
                    >
                      <Plus size={18} strokeWidth={3} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 sm:px-6 pb-6 text-neutral-700 leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
