"use client";

import React from "react";
import { PhoneCall } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass-header">
      <div className="max-w-6xl mx-auto px-5 h-20 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-serif text-base sm:text-lg tracking-wider font-semibold text-white uppercase">
            Machado Advocacia & Assessoria Jurídica
          </span>
          <span className="text-[11px] text-[#C5A880] tracking-widest uppercase font-mono">
            OAB/TO 13.254 • Pau D&apos;Arco – TO
          </span>
        </div>

        <a
          href="tel:5563992565455"
          className="hidden sm:inline-flex items-center gap-2 text-xs font-mono tracking-wider text-slate-300 hover:text-white border border-white/10 px-4 py-2 rounded-full transition-colors hover:border-[#C5A880]/40 hover:bg-white/[0.04]"
        >
          <PhoneCall className="w-3.5 h-3.5 text-[#C5A880]" />
          Plantão: (63) 99256-5455
        </a>
      </div>
    </header>
  );
}
