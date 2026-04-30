"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { scrollToId, cn } from "@/lib/utils";

const NAV = [
  { href: "como-funciona", label: "Como funciona" },
  { href: "quadras", label: "Quadras" },
  { href: "para-quadras", label: "Pra quadras" },
  { href: "indicar", label: "Indicar quadra" },
  { href: "faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function go(id: string) {
    setOpen(false);
    scrollToId(id);
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur-lg border-b border-neutral-200"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => scrollToId("topo")}
            className="flex items-center gap-2 cursor-magnetic"
            aria-label="Gravei.tv início"
          >
            <span className="grid place-items-center size-8 rounded-md bg-neon">
              <Zap className="size-5 text-foreground" strokeWidth={3} />
            </span>
            <span className="font-display text-2xl tracking-wide text-foreground">
              GRAVEI<span className="text-accent">.TV</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <button
                key={item.href}
                onClick={() => go(item.href)}
                className="text-sm text-neutral-700 hover:text-foreground transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => go("para-quadras")}
              className="btn-neon-solid rounded-full px-5 py-2 text-sm cursor-magnetic"
            >
              Quero instalar
            </button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center size-10 rounded-md border border-neutral-300 bg-white"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-neutral-200 bg-white/95 backdrop-blur-lg"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV.map((item) => (
                <button
                  key={item.href}
                  onClick={() => go(item.href)}
                  className="text-left py-3 px-3 rounded-lg text-base font-medium hover:bg-neutral-100"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => go("para-quadras")}
                className="btn-neon-solid rounded-full px-5 py-3 mt-2"
              >
                Quero instalar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
