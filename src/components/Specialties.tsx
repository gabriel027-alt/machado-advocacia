"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, FileCheck2, Users2, ArrowUpRight, Scale } from "lucide-react";

const specialties = [
  {
    index: "01",
    icon: ShieldAlert,
    badge: "Atuação Prioritária & Urgências",
    title: "Direito Penal & Tribunal do Júri",
    description:
      "Defesa técnica ostensiva em inquéritos policiais, prisões em flagrante, audiências de custódia, habeas corpus e sustentações orais perante o Tribunal do Júri.",
  },
  {
    index: "02",
    icon: FileCheck2,
    badge: "Consultoria e Contratações",
    title: "Licitações & Contratos Públicos",
    description:
      "Análise estratégica de editais, impugnações, recursos administrativos em certames licitatórios e atuação em processos administrativos perante órgãos fiscalizadores.",
  },
  {
    index: "03",
    icon: Users2,
    badge: "Planejamento e Benefícios",
    title: "Direito Previdenciário",
    description:
      "Planejamento minucioso, acompanhamento de requerimentos e recursos administrativos no INSS, além de ações judiciais de concessão ou revisão de benefícios.",
  },
];

export default function Specialties() {
  return (
    <section id="atuacao" className="relative z-10 py-24 border-t border-white/10 bg-[#050A10]/50 overflow-hidden">
      
      {/* 3. Marca d'Água Jurídica Monumental em Escala Gigante (Zero Custo de Dados) */}
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 opacity-[0.03] text-[#C5A880] pointer-events-none select-none scale-[3.5]">
        <Scale className="w-96 h-96" />
      </div>

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        
        {/* Cabeçalho de Seção Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880]">
              Áreas de Excelência Jurídica
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Atuação técnica e assertiva para demandas de alta relevância
            </h2>
          </div>
          <p className="text-sm text-slate-400 font-light max-w-sm">
            Fundamentação jurídica sólida, condução ético-disciplinar e compromisso absoluto com o devido processo legal.
          </p>
        </div>

        {/* Grid de Cards Editoriais com CTA de Consulta */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {specialties.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl p-8 editorial-card editorial-card-hover hover:border-t-[#C5A880] transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-3xl font-bold text-[#C5A880]/30 group-hover:text-[#C5A880]/60 transition-colors">
                      {item.index}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-[#C5A880]/10 border border-[#C5A880]/20 flex items-center justify-center text-[#C5A880]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A880] block mb-2">
                    {item.badge}
                  </span>

                  <h3 className="font-serif text-xl font-semibold text-white group-hover:text-[#C5A880] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm text-slate-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-8 border-t border-white/10 flex items-center justify-between text-xs text-[#C5A880] font-mono">
                  <a
                    href="#triagem"
                    className="inline-flex items-center gap-1 hover:underline text-[#C5A880] group-hover:text-white transition-colors"
                  >
                    <span>Consultar Caso Desta Área</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
