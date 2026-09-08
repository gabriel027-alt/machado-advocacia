"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock, ShieldAlert, Award, Scale } from "lucide-react";

export default function About() {
  return (
    <section className="relative z-10 py-24 border-t border-white/10 bg-[#03070C] overflow-hidden">
      
      {/* 3. Marca d'Água Jurídica Monumental em Escala Gigante (Zero Custo de Dados) */}
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 opacity-[0.03] text-[#C5A880] pointer-events-none select-none scale-[3.5]">
        <Scale className="w-96 h-96" />
      </div>

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.01] to-transparent p-8 sm:p-14 editorial-card"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Lado Esquerdo — Manifestação Editorial */}
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880]">
                Trajetória & Filosofia da Banca
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white leading-snug">
                &ldquo;A defesa técnica intransigente das prerrogativas fundamentais é o pilar da justiça.&rdquo;
              </h2>

              <div className="space-y-4 text-slate-300 font-light text-sm sm:text-base leading-relaxed">
                <p>
                  Sob liderança do Dr. <strong className="font-medium text-white">Belgo Conceição Machado</strong>, o escritório atua com dedicação personalizada para cada causa, priorizando o estudo aprofundado da doutrina e da jurisprudência mais recente dos tribunais superiores.
                </p>
                <p>
                  Com especialização pós-graduada em Direito Penal e ampla vivência na tribuna do Tribunal do Júri, a banca combina a velocidade combativa necessária para medidas de urgência à densidade estratégica exigida no âmbito consultivo e licitatório.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-white/5 bg-white/[0.01]">
                  <Lock className="w-5 h-5 text-[#C5A880] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-slate-200 block text-sm font-medium">Sigilo Legal & Ética</span>
                    <span className="text-xs text-slate-400">Atendimento estritamente resguardado pelas prerrogativas da OAB.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-white/5 bg-white/[0.01]">
                  <ShieldAlert className="w-5 h-5 text-[#C5A880] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-slate-200 block text-sm font-medium">Prontidão para Urgências</span>
                    <span className="text-xs text-slate-400">Acompanhamento prioritário em procedimentos criminais e custódia.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado Direito — Ficha Técnica em Card Dark */}
            <div className="lg:col-span-4 rounded-2xl bg-[#03070C] border border-white/10 p-7 space-y-5 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Responsável Técnico
                </span>
                <Award className="w-4 h-4 text-[#C5A880]" />
              </div>

              <div>
                <h3 className="text-xl font-serif font-semibold text-white">
                  Belgo Conceição Machado
                </h3>
                <p className="text-xs text-[#C5A880] font-mono mt-1">
                  OAB/TO Nº 13.254
                </p>
              </div>

              <div className="pt-2 text-xs text-slate-400 space-y-2.5 font-mono">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
                  Pós-graduado em Direito Penal
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
                  Especialista no Tribunal do Júri
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
                  Consultor em Licitações Públicas
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
                  Comarca de Pau D&apos;Arco – TO
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
