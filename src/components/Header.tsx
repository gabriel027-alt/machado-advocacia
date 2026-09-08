"use client";

import React from "react";
import { Scale } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#03070C]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-5 h-20 flex items-center justify-between">
        
        {/* Identidade Institucional */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md border border-[#C5A880]/30 bg-[#C5A880]/10 flex items-center justify-center text-[#C5A880] shrink-0">
            <Scale className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg tracking-wider font-semibold text-white uppercase">
              MACHADO ADVOCACIA
            </span>
            <span className="text-[10px] sm:text-[11px] text-[#C5A880] tracking-widest uppercase font-mono font-medium">
              BOUTIQUE JURÍDICA • OAB/TO 13.254
            </span>
          </div>
        </div>

        {/* Botão Direto em Dourado Elegante */}
        <a
          href="#triagem"
          className="inline-flex items-center justify-center bg-[#C5A880] text-[#03070C] text-xs font-semibold px-4 py-2.5 rounded-md hover:brightness-110 transition-all shadow-md hover:shadow-[#C5A880]/20 tracking-wide"
        >
          FALAR COM O ADVOGADO
        </a>

      </div>
    </header>
  );
}
