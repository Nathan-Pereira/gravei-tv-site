"use client";

import { useState } from "react";
import { Search, MapPin, Zap, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { scrollToId } from "@/lib/utils";

const COURTS = [
  {
    name: "Arena Vila Madalena",
    city: "São Paulo, SP",
    neighborhood: "Vila Madalena",
    sports: ["Futsal", "Basquete"],
    cameras: 4,
  },
  {
    name: "Complexo Pinheiros",
    city: "São Paulo, SP",
    neighborhood: "Pinheiros",
    sports: ["Vôlei", "Futsal"],
    cameras: 3,
  },
  {
    name: "Quadra Central Moema",
    city: "São Paulo, SP",
    neighborhood: "Moema",
    sports: ["Basquete", "Futsal"],
    cameras: 2,
  },
  {
    name: "Arena Barra da Tijuca",
    city: "Rio de Janeiro, RJ",
    neighborhood: "Barra da Tijuca",
    sports: ["Futsal", "Vôlei"],
    cameras: 4,
  },
  {
    name: "Quadra Savassi Sport",
    city: "Belo Horizonte, MG",
    neighborhood: "Savassi",
    sports: ["Futsal"],
    cameras: 2,
  },
  {
    name: "Arena Boa Viagem",
    city: "Recife, PE",
    neighborhood: "Boa Viagem",
    sports: ["Vôlei", "Futsal", "Basquete"],
    cameras: 3,
  },
];

export default function CourtFinder() {
  const [query, setQuery] = useState("");

  const filtered = COURTS.filter(
    (c) =>
      query.trim() === "" ||
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.city.toLowerCase().includes(query.toLowerCase()) ||
      c.neighborhood.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="quadras" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-accent mb-4">
              <MapPin size={13} />
              Quadras parceiras
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground">
              ENCONTRE A QUADRA{" "}
              <span className="text-accent">GRAVEI.TV</span>{" "}
              MAIS PRÓXIMA
            </h2>
            <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
              Chegou na quadra, escaneou o QR Code e pronto — seus lances ficam
              gravados automaticamente.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="relative max-w-xl mx-auto mb-12">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              size={18}
            />
            <input
              type="text"
              placeholder="Buscar por cidade, bairro ou nome da quadra…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-xl border border-border bg-card pl-11 pr-4 py-3.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-neon transition"
            />
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length > 0 ? (
            filtered.map((court, i) => (
              <AnimatedSection key={court.name} delay={0.05 * i}>
                <div className="card-elevated flex flex-col gap-4 p-6 h-full">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-foreground text-lg leading-tight">
                        {court.name}
                      </h3>
                      <p className="text-muted text-sm mt-0.5 flex items-center gap-1">
                        <MapPin size={12} />
                        {court.city}
                      </p>
                    </div>
                    <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-neon px-2 py-0.5 text-xs font-bold text-foreground">
                      <Zap size={10} strokeWidth={3} />
                      {court.cameras} câm.
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {court.sports.map((sport) => (
                      <span
                        key={sport}
                        className="rounded-md border border-border px-2 py-0.5 text-xs text-muted"
                      >
                        {sport}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-2 border-t border-border">
                    <p className="text-xs text-muted flex items-center gap-1">
                      <span className="inline-block size-2 rounded-full bg-neon" />
                      QR Code ativo na quadra
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))
          ) : (
            <AnimatedSection className="sm:col-span-2 lg:col-span-3">
              <div className="rounded-2xl border border-dashed border-border bg-card py-16 text-center text-muted">
                Nenhuma quadra encontrada para &ldquo;{query}&rdquo;.
              </div>
            </AnimatedSection>
          )}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mt-14 rounded-2xl bg-card border border-border p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-bold text-foreground text-lg">
                Sua quadra não está aqui?
              </p>
              <p className="text-muted mt-1">
                Indique e ganhe{" "}
                <span className="font-semibold text-accent">
                  20 vídeos HD grátis
                </span>{" "}
                quando a instalação for concluída.
              </p>
            </div>
            <button
              onClick={() => scrollToId("indicar")}
              className="btn-neon-solid shrink-0 flex items-center gap-2"
            >
              Indicar minha quadra
              <ChevronRight size={16} />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
