"use client";

import React from "react";
import { Scale } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#03070C]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-5 h-20 flex items-center justify-between">
        
        {/* Lado Esquerdo: Identidade Institucional */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md border border-[#C5A880]/30 bg-[#C5A880]/10 flex items-center justify-center text-[#C5A880] shrink-0">
            <Scale className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-sm sm:text-base tracking-wider font-semibold text-white uppercase">
              MACHADO ADVOCACIA
            </span>
            <span className="text-[9px] sm:text-[10px] text-[#C5A880] tracking-widest uppercase font-mono font-medium">
              BOUTIQUE JURÍDICA • OAB/TO 13.254
            </span>
          </div>
        </div>

        {/* Espaço Central: Menu de Navegação Editorial (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7">
          <a
            href="#atuacao"
            className="text-xs font-mono tracking-widest text-slate-400 hover:text-[#C5A880] transition-colors uppercase"
          >
            Especialidades
          </a>
          <a
            href="#sobre"
            className="text-xs font-mono tracking-widest text-slate-400 hover:text-[#C5A880] transition-colors uppercase"
          >
            A Banca
          </a>
          <a
            href="#garantias"
            className="text-xs font-mono tracking-widest text-slate-400 hover:text-[#C5A880] transition-colors uppercase"
          >
            Garantias
          </a>
          <a
            href="#triagem"
            className="text-xs font-mono tracking-widest text-slate-400 hover:text-[#C5A880] transition-colors uppercase"
          >
            Triagem
          </a>
          <a
            href="#faq"
            className="text-xs font-mono tracking-widest text-slate-400 hover:text-[#C5A880] transition-colors uppercase"
          >
            FAQ
          </a>
        </nav>

        {/* Lado Direito: Botão de Ação Responsivo */}
        <div>
          {/* Versão Desktop */}
          <a
            href="#triagem"
            className="hidden sm:inline-flex items-center justify-center bg-[#C5A880] hover:bg-[#d4ba94] text-[#03070C] px-5 py-2.5 rounded-md font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-[#C5A880]/10"
          >
            FALAR COM O ADVOGADO
          </a>

          {/* Versão Mobile Compacta */}
          <a
            href="#triagem"
            className="sm:hidden inline-flex items-center justify-center bg-[#C5A880] text-[#03070C] px-3 py-1.5 text-[11px] rounded font-semibold tracking-wider uppercase shadow-md"
          >
            ATENDIMENTO
          </a>
        </div>

      </div>
    </header>
  );
}
