"use client";

import React from "react";
import { MapPin, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#020508] py-14">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          <div className="md:col-span-6 space-y-3">
            <span className="font-serif text-base font-semibold text-white tracking-wide block">
              Machado Advocacia & Assessoria Jurídica
            </span>
            <div className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed max-w-md font-light">
              <MapPin className="w-4 h-4 text-[#C5A880] mt-0.5 shrink-0" />
              <span>Avenida Araguaia, Nº 572, Centro, Pau D&apos;Arco - TO, CEP 77785-000</span>
            </div>
            <div className="text-xs font-mono text-[#C5A880]">
              Responsável Técnico: Belgo Conceição Machado — OAB/TO 13.254
            </div>
          </div>

          <div className="md:col-span-6 md:text-right space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/[0.03] border border-white/10 text-[11px] font-mono text-slate-400">
              <FileText className="w-3.5 h-3.5 text-[#C5A880]" />
              Conformidade com o Provimento Nº 205/2021 do CFOAB
            </div>
            <p className="text-[11px] text-slate-500 font-light leading-relaxed max-w-md md:ml-auto">
              <strong>Aviso Legal Ético:</strong> As informações contidas neste portal eletrônico possuem finalidade estritamente informativa. Não constituem consulta jurídica formal nem garantia de resultados processuais.
            </p>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-mono">
          <span>© 2026 Machado Advocacia. Todos os direitos reservados.</span>
          <span>Segurança, discrição e rigor técnico.</span>
        </div>
      </div>
    </footer>
  );
}
