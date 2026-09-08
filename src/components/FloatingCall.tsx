"use client";

import React from "react";
import { PhoneCall } from "lucide-react";

const PHONE_NUMBER = "5563992565455";

export default function FloatingCall() {
  return (
    <a
      href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
        "Olá, Dr. Belgo Machado. Preciso de atendimento de emergência / plantão 24h."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 bg-[#070E17]/90 border border-[#C5A880]/40 backdrop-blur-md text-[#C5A880] px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-all flex items-center gap-2.5 group"
      aria-label="Plantão de Urgência 24h"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]"></span>
      </span>

      <PhoneCall className="w-4 h-4 text-[#C5A880] group-hover:rotate-12 transition-transform" />
      
      <span className="text-xs font-mono font-medium tracking-wide text-slate-100">
        Plantão 24h: <span className="text-[#C5A880]">(63) 99256-5455</span>
      </span>
    </a>
  );
}
