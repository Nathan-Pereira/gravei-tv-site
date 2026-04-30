"use client";

import { motion } from "framer-motion";
import { Download, Sparkles, QrCode, MapPin } from "lucide-react";

export default function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -4 }}
      animate={{ opacity: 1, y: 0, rotate: -4 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      className="relative w-[260px] sm:w-[300px] md:w-[340px] aspect-[9/19] mx-auto"
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative size-full"
      >
        <div className="absolute -inset-8 gradient-radial blur-2xl opacity-90" />

        <div className="relative size-full rounded-[3rem] border-[10px] border-neutral-900 bg-neutral-900 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] overflow-hidden">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 w-28 h-6 bg-black rounded-full" />

          <div className="relative size-full bg-white p-3 pt-8 flex flex-col">
            <div className="flex items-center justify-between text-[10px] text-neutral-600 px-2 pb-2">
              <span className="font-semibold">20:14</span>
              <span className="flex items-center gap-1 text-accent font-bold">
                <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                NA QUADRA
              </span>
            </div>

            <div className="px-2 pb-2 flex items-center gap-1.5">
              <MapPin size={12} className="text-neutral-500" />
              <div className="text-[11px] font-bold text-neutral-900">
                Arena Vila Madalena
              </div>
            </div>

            <div className="relative flex-1 rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-black border border-neutral-200">
              <div className="absolute inset-0 grid-bg-dark opacity-50" />

              <svg
                className="absolute inset-0 size-full"
                viewBox="0 0 200 400"
                fill="none"
                aria-hidden
              >
                <rect x="20" y="40" width="160" height="320" rx="6" stroke="rgba(57,255,20,0.5)" strokeWidth="1" />
                <line x1="20" y1="200" x2="180" y2="200" stroke="rgba(57,255,20,0.5)" strokeWidth="1" />
                <circle cx="100" cy="200" r="22" stroke="rgba(57,255,20,0.5)" strokeWidth="1" />
                <circle cx="100" cy="200" r="2" fill="#39FF14" />
              </svg>

              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-sm text-[10px] font-bold border border-white/10 flex items-center gap-1 text-white">
                  <span className="size-1.5 rounded-full bg-red-500 animate-pulse" />
                  AO VIVO
                </span>
                <span className="px-2 py-0.5 rounded-full bg-neon text-foreground text-[10px] font-bold flex items-center gap-1">
                  <QrCode size={10} strokeWidth={3} />
                  QR ATIVO
                </span>
              </div>

              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute top-12 left-3 right-3"
              >
                <div className="rounded-xl bg-white border border-neutral-200 p-2.5 shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="grid place-items-center size-7 rounded-full bg-neon shrink-0">
                      <Sparkles size={13} className="text-foreground" strokeWidth={2.5} />
                    </span>
                    <div className="flex-1">
                      <div className="text-[10px] font-bold leading-tight text-neutral-900">
                        Lance salvo!
                      </div>
                      <div className="text-[9px] text-neutral-500">
                        Pronto pra baixar no seu celular
                      </div>
                    </div>
                  </div>
                  <button className="mt-2 w-full rounded-md bg-foreground text-white py-1.5 text-[10px] font-bold flex items-center justify-center gap-1.5">
                    <Download size={10} strokeWidth={3} />
                    Baixar vídeo
                  </button>
                </div>
              </motion.div>

              <div className="absolute bottom-20 left-3 right-3 flex items-end gap-0.5 h-10">
                {Array.from({ length: 32 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-neon rounded-sm"
                    animate={{
                      height: [
                        `${20 + Math.random() * 60}%`,
                        `${20 + Math.random() * 80}%`,
                        `${20 + Math.random() * 60}%`,
                      ],
                    }}
                    transition={{
                      duration: 1 + Math.random(),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.05,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="pt-3 flex items-center justify-center gap-3">
              <div className="grid place-items-center size-10 rounded-xl border-2 border-neutral-200 bg-white">
                <QrCode size={20} className="text-foreground" strokeWidth={2} />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                  Você está em
                </div>
                <div className="text-xs font-bold text-neutral-900">
                  gravei.tv/quadra/4
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
