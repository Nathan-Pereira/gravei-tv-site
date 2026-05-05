"use client";

import { Instagram, Youtube, Zap } from "lucide-react";

const FOOTER_LINKS = {
  Jogadores: [
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Recursos", href: "#recursos" },
    { label: "Indicar quadra", href: "/indicar" },
    { label: "FAQ", href: "#faq" },
  ],
  Quadras: [
    { label: "Por que instalar", href: "#para-quadras" },
    { label: "Solicitar orçamento", href: "mailto:quadras@gravei.tv" },
    { label: "Suporte ao parceiro", href: "mailto:suporte@gravei.tv" },
  ],
  Empresa: [
    { label: "Sobre", href: "#" },
    { label: "Contato", href: "mailto:contato@gravei.tv" },
    { label: "Privacidade", href: "#" },
    { label: "Termos de uso", href: "#" },
  ],
};

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.4a8.2 8.2 0 0 0 4.71 1.49V6.45a4.85 4.85 0 0 1-1.78-.16Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-neutral-200 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <span className="grid place-items-center size-8 rounded-md bg-neon">
                <Zap className="size-5 text-foreground" strokeWidth={3} />
              </span>
              <span className="font-display text-2xl tracking-wide text-foreground">
                GRAVEI<span className="text-accent">.TV</span>
              </span>
            </div>
            <p className="mt-4 text-neutral-600 max-w-md leading-relaxed">
              Câmeras nas quadras, vídeo direto no celular do atleta. Feito no
              Brasil, pra quem joga aqui.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="grid place-items-center size-10 rounded-full border border-neutral-200 bg-white text-neutral-700 hover:text-foreground hover:border-foreground transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="grid place-items-center size-10 rounded-full border border-neutral-200 bg-white text-neutral-700 hover:text-foreground hover:border-foreground transition-colors"
              >
                <TikTokIcon className="size-[18px]" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="grid place-items-center size-10 rounded-full border border-neutral-200 bg-white text-neutral-700 hover:text-foreground hover:border-foreground transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-bold uppercase tracking-widest text-sm text-foreground">
                  {title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-neutral-600 hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Gravei.tv — Cravou? Grava. Todos os
            direitos reservados.
          </p>
          <p className="text-sm text-neutral-500">
            Feito com <span className="text-accent">⚡</span> no Brasil.
          </p>
        </div>
      </div>
    </footer>
  );
}
