"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Gift, Send, CheckCircle2, MapPin, User, Phone, Building2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

type FormState = {
  yourName: string;
  yourContact: string;
  courtName: string;
  courtCity: string;
  courtContact: string;
  notes: string;
};

const INITIAL: FormState = {
  yourName: "",
  yourContact: "",
  courtName: "",
  courtCity: "",
  courtContact: "",
  notes: "",
};

export default function ReferYourCourt() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section
      id="indicar"
      className="relative py-24 md:py-32 border-t border-neutral-200 overflow-hidden"
    >
      <div
        className="absolute inset-0 gradient-radial opacity-60"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <AnimatedSection className="lg:col-span-5">
            <span className="text-accent font-bold text-sm uppercase tracking-widest">
              Indique sua quadra preferida
            </span>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase mt-4 text-foreground">
              Indica.
              <br />
              <span className="text-accent">Ganha R$100.</span>
            </h2>
            <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
              Sua quadra do coração ainda não tem Gravei? Conta pra gente.
              Quando a indicação virar instalação, você ganha{" "}
              <span className="text-foreground font-bold">R$100</span>{" "}
              pra usar como quiser.
            </p>

            <div className="mt-10 rounded-3xl bg-foreground text-white p-8 relative overflow-hidden">
              <div
                className="absolute -top-12 -right-12 size-48 rounded-full bg-neon/30 blur-3xl"
                aria-hidden
              />
              <div className="relative">
                <div className="grid place-items-center size-14 rounded-2xl bg-neon text-foreground">
                  <Gift size={28} strokeWidth={2.2} />
                </div>
                <div className="mt-6 font-display text-7xl text-neon">
                  R$100
                </div>
                <div className="font-bold text-xl mt-1">
                  em dinheiro, no seu bolso
                </div>
                <p className="mt-3 text-white/70 leading-relaxed">
                  Quando você indica e a gente fecha a instalação, você recebe
                  R$100. Sem letra miúda, sem prazo de validade.
                </p>

                <ul className="mt-6 space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-neon shrink-0" />
                    Vale pra qualquer quadra do Brasil
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-neon shrink-0" />
                    Pode indicar quantas quiser
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-neon shrink-0" />
                    Recompensa cumulativa por quadra fechada
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-neutral-200 p-6 sm:p-10 shadow-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: "spring" }}
                    className="grid place-items-center size-20 rounded-full bg-neon mx-auto"
                  >
                    <CheckCircle2 size={40} strokeWidth={2.5} className="text-foreground" />
                  </motion.div>
                  <h3 className="mt-6 font-display text-4xl uppercase text-foreground">
                    Indicação recebida!
                  </h3>
                  <p className="mt-3 text-neutral-700 max-w-sm mx-auto leading-relaxed">
                    A gente já vai entrar em contato com a quadra. Quando
                    fechar instalação, você recebe{" "}
                    <span className="font-bold text-foreground">R$100</span>.
                  </p>
                  <button
                    onClick={() => {
                      setForm(INITIAL);
                      setSubmitted(false);
                    }}
                    className="mt-8 btn-ghost rounded-full px-6 py-3 cursor-magnetic"
                  >
                    Indicar outra quadra
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display text-3xl uppercase text-foreground">
                      Sobre você
                    </h3>
                    <div className="mt-4 grid sm:grid-cols-2 gap-4">
                      <Field
                        icon={User}
                        label="Seu nome"
                        placeholder="Léo Mendes"
                        value={form.yourName}
                        onChange={(v) => update("yourName", v)}
                        required
                      />
                      <Field
                        icon={Phone}
                        label="WhatsApp ou e-mail"
                        placeholder="(11) 9 9999-9999"
                        value={form.yourContact}
                        onChange={(v) => update("yourContact", v)}
                        required
                      />
                    </div>
                  </div>

                  <div className="border-t border-neutral-200 pt-6">
                    <h3 className="font-display text-3xl uppercase text-foreground">
                      Sobre a quadra
                    </h3>
                    <div className="mt-4 grid sm:grid-cols-2 gap-4">
                      <Field
                        icon={Building2}
                        label="Nome da quadra"
                        placeholder="Arena Vila Madalena"
                        value={form.courtName}
                        onChange={(v) => update("courtName", v)}
                        required
                      />
                      <Field
                        icon={MapPin}
                        label="Cidade"
                        placeholder="São Paulo, SP"
                        value={form.courtCity}
                        onChange={(v) => update("courtCity", v)}
                        required
                      />
                      <div className="sm:col-span-2">
                        <Field
                          icon={Phone}
                          label="Contato da quadra (opcional)"
                          placeholder="@arenavila ou (11) 9 9999-9999"
                          value={form.courtContact}
                          onChange={(v) => update("courtContact", v)}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Por que essa quadra?{" "}
                          <span className="font-normal text-neutral-500">
                            (opcional)
                          </span>
                        </label>
                        <textarea
                          rows={3}
                          value={form.notes}
                          onChange={(e) => update("notes", e.target.value)}
                          placeholder="Tem racha lotado toda quinta, jogadores postam muito no story, etc."
                          className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-foreground transition-colors resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-neon-solid w-full rounded-full px-7 py-4 text-base inline-flex items-center justify-center gap-2 cursor-magnetic disabled:opacity-60"
                  >
                    {loading ? "Enviando..." : "Indicar quadra"}
                    {!loading && <Send size={18} strokeWidth={3} />}
                  </button>

                  <p className="text-xs text-neutral-500 text-center leading-relaxed">
                    Ao indicar, você concorda em receber atualizações sobre a
                    instalação. Não compartilhamos seus dados.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function Field({
  icon: Icon,
  label,
  placeholder,
  value,
  onChange,
  required,
}: {
  icon: typeof User;
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-bold text-foreground mb-2">
        {label}
        {required && <span className="text-accent ml-0.5">*</span>}
      </span>
      <div className="relative">
        <Icon
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-xl border border-neutral-300 bg-white pl-11 pr-4 py-3 text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-foreground transition-colors"
        />
      </div>
    </label>
  );
}
