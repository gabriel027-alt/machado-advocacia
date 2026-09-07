"use client";

import React from "react";
import { MapPin, FileText, Scale } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#020408] py-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start justify-between">
          
          {/* Coluna Institucional */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <Scale className="w-5 h-5 text-[#C5A880]" />
              <span className="font-serif text-base font-semibold text-white tracking-wide uppercase">
                Machado Advocacia & Assessoria Jurídica
              </span>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed max-w-md font-light">
              <MapPin className="w-4 h-4 text-[#C5A880] mt-0.5 shrink-0" />
              <span>Avenida Araguaia, Nº 572, Centro, Pau D&apos;Arco - TO, CEP 77785-000</span>
            </div>

            <div className="text-xs font-mono text-[#C5A880]">
              Responsável Técnico: Belgo Conceição Machado — OAB/TO 13.254
            </div>
          </div>

          {/* Coluna Ético-Legal OAB */}
          <div className="md:col-span-6 md:text-right space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-mono text-slate-300">
              <FileText className="w-3.5 h-3.5 text-[#C5A880]" />
              Conformidade com o Provimento Nº 205/2021 do CFOAB
            </div>
            
            <p className="text-[11px] text-slate-400 font-light leading-relaxed max-w-md md:ml-auto">
              <strong>Aviso Legal Ético:</strong> As informações apresentadas neste site possuem finalidade exclusivamente informativa e educacional. Não constituem consulta jurídica formal nem promessa de resultado processual.
            </p>
          </div>

        </div>

        {/* Linha de Direitos Autorais */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <span>© 2026 Machado Advocacia. Todos os direitos reservados.</span>
          <span>Excelência técnica, sigilo profissional e rigor ético.</span>
        </div>
      </div>
    </footer>
  );
}
