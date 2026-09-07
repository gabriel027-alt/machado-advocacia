"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock, Clock } from "lucide-react";

export default function About() {
  return (
    <section className="relative z-10 py-20 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.03] to-transparent p-8 sm:p-12 glass-card"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880]">
                Trajetória Profissional
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white leading-tight">
                A defesa das prerrogativas exige técnica apurada e dedicação minuciosa ao processo.
              </h2>
              <div className="space-y-4 text-slate-300 font-light text-sm sm:text-base leading-relaxed">
                <p>
                  Sob liderança de <strong className="font-medium text-white">Belgo Conceição Machado</strong>, o escritório atua com foco nas garantias constitucionais e na salvaguarda dos direitos de pessoas físicas e jurídicas.
                </p>
                <p>
                  Com especialização pós-graduada em Direito Penal e vivência prática na tribuna do Tribunal do Júri, a banca conjuga agilidade combativa para medidas de urgência à densidade analítica requerida na esfera consultiva.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-[#C5A880] mt-1 shrink-0" />
                  <div>
                    <span className="text-slate-200 block text-sm font-medium">Sigilo Profissional Absoluto</span>
                    <span className="text-xs text-slate-400">Atendimento estritamente resguardado pelo sigilo legal e ético.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C5A880] mt-1 shrink-0" />
                  <div>
                    <span className="text-slate-200 block text-sm font-medium">Prontidão para Flagrantes</span>
                    <span className="text-xs text-slate-400">Acompanhamento prioritário de procedimentos urgentes em custódia.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-2xl bg-[#04080D]/90 border border-white/10 p-6 space-y-4 shadow-xl">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Responsável Técnico</div>
              <div>
                <div className="text-lg font-serif font-semibold text-white">Belgo Conceição Machado</div>
                <div className="text-sm text-[#C5A880] font-mono">OAB/TO 13.254</div>
              </div>
              <div className="border-t border-white/[0.08] pt-4 text-xs text-slate-400 space-y-2 font-mono">
                <p>• Especialista em Licitações</p>
                <p>• Pós-graduado em Direito Penal</p>
                <p>• Atuante no Tribunal do Júri</p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
