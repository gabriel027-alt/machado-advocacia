"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock, Globe2, ShieldAlert, CheckSquare } from "lucide-react";

const guarantees = [
  {
    icon: Lock,
    title: "Sigilo Absoluto e LGPD Jurídica",
    description:
      "Prerrogativa inegociável resguardada pelo Art. 7º do Estatuto da Advocacia (Lei 8.906/94). Nenhuma informação ou dado compartilhado durante a triagem é exposto a terceiros.",
  },
  {
    icon: Globe2,
    title: "Atuação Sem Fronteiras (TO & Brasília)",
    description:
      "Processos 100% digitalizados (PJe/e-Proc/e-STJ), permitindo atuação ostensiva e sustentações orais em todo o Estado do Tocantins e perante os Tribunais Superiores (STJ e STF) em Brasília.",
  },
  {
    icon: ShieldAlert,
    title: "Prontidão Imediata em Flagrantes",
    description:
      "Atendimento técnico emergencial 24h para prisões em flagrante, cumprimento de mandados e audiências de custódia, realizado diretamente pelo titular da banca, sem intermediários.",
  },
  {
    icon: CheckSquare,
    title: "Análise de Viabilidade Ética",
    description:
      "Diagnóstico prévio transparente e ético. A banca aceita exclusivamente causas com real viabilidade jurídica e interesse legítimo, evitando aventuras judiciais onerosas.",
  },
];

export default function TrustGuarantees() {
  return (
    <section id="garantias" className="relative z-10 py-24 border-t border-white/10 bg-[#03070C]">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880]">
            Blindagem Ética & Segurança
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-white leading-tight">
            Garantias e Prerrogativas Fundamentais
          </h2>
          <p className="mt-3 text-sm text-slate-300 font-light leading-relaxed">
            Transparência absoluta e rigor ético em todas as etapas da condução processual.
          </p>
        </div>

        {/* Grid de 4 Blocos de Garantia */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guarantees.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl p-7 sm:p-8 editorial-card border border-white/10 hover:border-[#C5A880]/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#C5A880]/10 border border-[#C5A880]/20 flex items-center justify-center text-[#C5A880] mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-white mb-3 group-hover:text-[#C5A880] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-[#C5A880]/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
                  Garantia Constitucional & OAB
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
