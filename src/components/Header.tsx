"use client";

import React from "react";
import { PhoneCall, Scale } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 editorial-header">
      <div className="max-w-6xl mx-auto px-5 h-22 py-4 flex items-center justify-between">
        
        {/* Identidade Institucional */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg border border-[#C5A880]/30 bg-[#C5A880]/10 flex items-center justify-center text-[#C5A880] shrink-0">
            <Scale className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg tracking-wider font-semibold text-white uppercase">
              Machado Advocacia
            </span>
            <span className="text-[10px] sm:text-[11px] text-[#C5A880] tracking-widest uppercase font-mono">
              Boutique Jurídica • OAB/TO 13.254
            </span>
          </div>
        </div>

        {/* Plantão Urgente */}
        <a
          href="tel:5563992565455"
          className="hidden sm:inline-flex items-center gap-2.5 text-xs font-mono tracking-wider text-slate-300 hover:text-white border border-white/10 hover:border-[#C5A880]/40 px-5 py-2.5 rounded-full transition-all bg-white/[0.02] hover:bg-white/[0.05]"
        >
          <PhoneCall className="w-3.5 h-3.5 text-[#C5A880]" />
          Plantão 24h: (63) 99256-5455
        </a>

      </div>
    </header>
  );
}
