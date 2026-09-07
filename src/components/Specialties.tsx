"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, FileCheck2, Users2, CheckCircle2 } from "lucide-react";

const specialties = [
  {
    icon: ShieldAlert,
    badge: "Atuação Prioritária",
    title: "Direito Penal & Tribunal do Júri",
    description:
      "Defesa técnica em inquéritos policiais, prisões em flagrante, audiências de custódia, habeas corpus e sustentações perante o Tribunal do Júri.",
  },
  {
    icon: FileCheck2,
    badge: "Consultoria e Recursos",
    title: "Licitações & Contratos Públicos",
    description:
      "Análise estratégica de editais, impugnações, recursos administrativos em certames públicos e atuação perante órgãos fiscalizadores.",
  },
  {
    icon: Users2,
    badge: "Benefícios e Planejamento",
    title: "Direito Previdenciário",
    description:
      "Planejamento minucioso, acompanhamento de requerimentos e recursos administrativos no INSS e ações de concessão ou revisão de benefícios.",
  },
];

export default function Specialties() {
  return (
    <section id="atuacao" className="relative z-10 py-20 border-t border-white/[0.06] bg-[#070D14]/40">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880]">
            Especialidades Jurídicas
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-white">
            Atuação técnica e assertiva para cada complexidade
          </h2>
          <p className="mt-3 text-sm text-slate-400 font-light">
            Fundamentação jurídica sólida e compromisso absoluto com o devido processo legal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialties.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="rounded-2xl p-7 glass-card glass-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#C5A880]/10 border border-[#C5A880]/20 flex items-center justify-center mb-6 text-[#C5A880]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A880]">
                    {item.badge}
                  </span>
                  <h3 className="mt-2 font-serif text-xl font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm text-slate-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.04] flex items-center text-xs text-slate-500 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] mr-2" />
                  Provimento 205/2021 OAB
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
