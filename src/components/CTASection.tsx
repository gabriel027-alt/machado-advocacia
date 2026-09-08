"use client";

import React from "react";
import { ExternalLink, PhoneCall, ShieldCheck } from "lucide-react";

const PHONE_NUMBER = "5563992565455";

export default function CTASection() {
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    "Olá, Dr. Belgo Machado. Gostaria de uma consulta presencial/virtual sobre meu caso."
  )}`;

  return (
    <section className="relative z-10 py-20 border-t border-white/10 bg-[#03070C]">
      <div className="max-w-5xl mx-auto px-5">
        <div className="rounded-3xl border border-[#C5A880]/30 bg-gradient-to-r from-[#070E17] via-[#0A1422] to-[#070E17] p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          
          {/* Efeito Glow de Fundo */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(197,168,128,0.12),transparent_70%)] pointer-events-none"></div>

          <div className="space-y-3 max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/25 text-[#C5A880] text-xs font-mono uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" />
              Atendimento Direto & Sigiloso
            </div>
            
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-white leading-snug">
              Não encontrou sua dúvida? Fale diretamente com o Dr. Belgo Machado
            </h2>
            
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Atendimento imediato para casos urgentes, prisões em flagrante, análise de edital de licitação e demandas previdenciárias.
            </p>
          </div>

          <div className="relative z-10 shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-[#C5A880] via-[#d4ba94] to-[#a68960] text-[#03070C] font-semibold text-sm shadow-xl shadow-[#C5A880]/15 hover:brightness-110 transition-all hover:scale-[1.02] w-full sm:w-auto"
            >
              Falar no WhatsApp
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl border border-white/15 text-slate-200 text-sm font-medium hover:bg-white/[0.05] transition-all w-full sm:w-auto font-mono"
            >
              <PhoneCall className="w-4 h-4 text-[#C5A880]" />
              Ligar Agora
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
