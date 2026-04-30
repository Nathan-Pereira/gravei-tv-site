# Gravei.tv — Landing Page

Landing page do **Gravei.tv** — sistema de captura de lances esportivos em quadras amadoras, **acessado direto pelo navegador via QR Code** instalado na quadra.

**Modelo:**
- **B2B (quadras):** vendemos a instalação de câmeras como diferencial competitivo.
- **B2C (jogadores):** acesso pelo QR Code da quadra → marca o lance → recebe o vídeo no celular. Sem app, sem cadastro.
- **Programa de indicação:** quem indica e fecha instalação ganha **20 vídeos HD grátis**.

> **Cravou? Grava.**

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (configuração via CSS — `@theme`)
- [Framer Motion](https://www.framer.com/motion/) — animações
- [Lucide React](https://lucide.dev) — ícones
- Fontes: **Inter** (corpo) e **Anton** (títulos display) via `next/font`
- SEO: meta tags, Open Graph, Twitter Card e JSON-LD `WebApplication`
- Tema: **light mode** (`#f7f7f7`) com verde elétrico `#39ff14` como cor de marca

## Como rodar

Pré-requisitos: Node.js 18.18+ (recomendado 20+).

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm run start
```

## Estrutura

```
.
├── app/
│   ├── layout.tsx        # Fontes, SEO, JSON-LD
│   ├── page.tsx          # Composição da landing
│   └── globals.css       # Tailwind v4 + tema light
├── components/
│   ├── Header.tsx          # Header sticky transparente → branco no scroll
│   ├── Hero.tsx            # "Cravou? Grava." + mockup
│   ├── PhoneMockup.tsx     # Mockup com indicação de QR ativo
│   ├── HowItWorks.tsx      # 3 passos: jogar → escanear QR → baixar vídeo
│   ├── Demo.tsx            # Buffer de 20s nas câmeras da quadra
│   ├── Features.tsx        # Grid de 6 recursos (sem app, multi-câmera, etc.)
│   ├── ForWho.tsx          # Perfis de jogadores
│   ├── ForVenues.tsx       # Pitch B2B (seção dramática preta)
│   ├── ReferYourCourt.tsx  # Formulário de indicação + 20 vídeos HD grátis
│   ├── Testimonials.tsx    # 3 depoimentos
│   ├── FAQ.tsx             # Accordion com 8 perguntas
│   ├── FinalCTA.tsx        # CTA verde com 2 caminhos (dono / jogador)
│   ├── Footer.tsx          # 3 colunas: Jogadores / Quadras / Empresa
│   ├── BackToTop.tsx       # Botão flutuante
│   └── AnimatedSection.tsx # Wrapper fade-in-up
├── lib/utils.ts            # cn(), scrollToId()
└── public/
    ├── favicon.svg
    └── og-image.svg
```

## Customização

### Cores (light mode)

Em [`app/globals.css`](app/globals.css), bloco `@theme`:

```css
@theme {
  --color-background: #f7f7f7;     /* fundo do site */
  --color-foreground: #0a0a0a;     /* texto principal */
  --color-muted: #525252;          /* texto secundário */
  --color-card: #ffffff;           /* fundo dos cards */
  --color-border: #e5e5e5;         /* bordas */

  --color-neon: #39ff14;           /* verde elétrico — botões, badges, glows */
  --color-accent: #16a34a;         /* verde escuro — pra texto verde sobre branco */
  --color-neon-glow: rgba(57, 255, 20, 0.45);

  --color-dark: #0a0a0a;           /* fundo de seções dramáticas (ForVenues) */
}
```

**Por que duas cores verdes?** O verde `#39ff14` é a cor de marca, mas tem contraste ruim como texto sobre `#f7f7f7`. Usamos `#16a34a` (`text-accent`) sempre que precisamos de texto verde sobre fundo claro, e `#39ff14` (`bg-neon`) em backgrounds, badges e botões CTA.

Helpers úteis:
- `.btn-neon-solid` — botão verde elétrico com texto preto
- `.btn-neon` — botão preto que vira verde no hover
- `.btn-ghost` — botão branco com borda
- `.card-elevated` — card branco com hover
- `.section-dark` — fundo preto pra seções dramáticas (ForVenues)

### Tipografia

[`app/layout.tsx`](app/layout.tsx) usa `next/font/google`. Pra trocar a fonte de display por Bebas Neue:

```ts
import { Inter, Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});
```

### Textos

Cada seção mantém seus textos como constantes no topo do componente:

- **Hero** — `components/Hero.tsx`
- **3 passos** — `components/HowItWorks.tsx` → `STEPS`
- **Recursos** — `components/Features.tsx` → `FEATURES`
- **Perfis de jogadores** — `components/ForWho.tsx` → `PERFIS`
- **Pitch B2B** — `components/ForVenues.tsx` → `BENEFITS` + métricas
- **Formulário de indicação** — `components/ReferYourCourt.tsx` → estado + cópia
- **Depoimentos** — `components/Testimonials.tsx` → `DEPOIMENTOS`
- **FAQ** — `components/FAQ.tsx` → `FAQS`
- **Footer** — `components/Footer.tsx` → `FOOTER_LINKS`

### Formulário de indicação

O componente `ReferYourCourt.tsx` tem um stub de submissão (`onSubmit`) que apenas simula um delay e mostra o estado de sucesso. Pra plugar num backend real (ex: Resend, Supabase, Airtable, Notion API):

```ts
async function onSubmit(e: FormEvent) {
  e.preventDefault();
  setLoading(true);
  await fetch("/api/refer", {
    method: "POST",
    body: JSON.stringify(form),
  });
  setLoading(false);
  setSubmitted(true);
}
```

E criar uma route handler em `app/api/refer/route.ts`.

### Metadados SEO

Em [`app/layout.tsx`](app/layout.tsx):
- `metadataBase` — domínio final
- `openGraph.images` — recomendado PNG 1200×630 em produção
- `jsonLd` — `WebApplication` (não é app de loja, é web)

## UX implementada

- Light mode (`#f7f7f7`) com verde elétrico como cor de marca
- Header sticky transparente → branco com blur ao scrollar
- Scroll suave entre seções
- `fade-in-up` em todos os elementos via `AnimatedSection`
- Microanimações (`cursor-magnetic`, hover lift, mockup flutuante)
- `prefers-reduced-motion` respeitado
- Botão "voltar ao topo" flutuante após 600px
- Formulário de indicação com estado de loading e tela de sucesso
- Lazy loading nativo de imagens, fontes via `next/font`

## Deploy

Recomendado: [Vercel](https://vercel.com).

```bash
npx vercel
```
