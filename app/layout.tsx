import type { Metadata, Viewport } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f7f7f7",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gravei.tv"),
  title: {
    default: "Gravei.tv — Cravou? Grava.",
    template: "%s | Gravei.tv",
  },
  description:
    "Quadras com câmeras Gravei capturam todos os lances. Escaneia o QR Code da quadra, marca o lance e leva o vídeo direto pro celular. Sem app, sem cadastro.",
  keywords: [
    "gravar lances esportivos",
    "câmeras em quadras",
    "QR code quadra esportiva",
    "futsal",
    "basquete",
    "vôlei",
    "instalação de câmeras quadra",
    "indicar quadra",
    "gravei.tv",
  ],
  authors: [{ name: "Gravei.tv" }],
  creator: "Gravei.tv",
  publisher: "Gravei.tv",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://gravei.tv",
    siteName: "Gravei.tv",
    title: "Gravei.tv — Cravou? Grava.",
    description:
      "Câmeras nas quadras. Escaneia o QR Code, marca o lance e leva o vídeo direto pro celular. Sem app, sem cadastro.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Gravei.tv — App para gravar seus melhores lances",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gravei.tv — Cravou? Grava.",
    description:
      "Quadras com câmeras Gravei. Escaneia o QR e leva o vídeo do lance pro celular.",
    images: ["/og-image.svg"],
    creator: "@graveitv",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "sports",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Gravei.tv",
  applicationCategory: "SportsApplication",
  browserRequirements: "Requires a modern browser with camera (for QR scanning)",
  description:
    "Sistema de captura retroativa de lances esportivos em quadras parceiras. Acesso direto pelo navegador via QR Code instalado na quadra.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "1280",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${anton.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
