"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, Lock } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative z-10 pt-12 pb-20 md:pt-20 md:pb-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Lado Esquerdo — Texto Editorial */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start space-y-7"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/25 text-[#C5A880] text-xs font-mono uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" />
              Advocacia de Alta Precisão & Defesa Técnica
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.12] tracking-tight text-white">
              Defesa incansável e <span className="gold-gradient-text">rigor técnico</span> em causas de alta complexidade.
            </h1>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl font-light">
              Boutique jurídica especializada na advocacia criminal combativa, sustentações perante o Tribunal do Júri, assessoria em licitações públicas e concessões previdenciárias.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#triagem"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-[#C5A880] via-[#d4ba94] to-[#a68960] text-[#03070C] font-semibold text-sm tracking-wide shadow-xl shadow-[#C5A880]/10 hover:brightness-110 transition-all hover:scale-[1.01]"
              >
                Iniciar Triagem de Caso
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#atuacao"
                className="inline-flex items-center justify-center px-7 py-4 rounded-lg border border-white/15 text-slate-200 text-sm font-medium hover:bg-white/[0.05] transition-all"
              >
                Especialidades
              </a>
            </div>

            {/* Credenciais Finais */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-white/10 w-full max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-serif text-white font-semibold">OAB/TO</div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">Nº 13.254</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-serif text-white font-semibold">Tribunal do Júri</div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">Atuação Penal</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-serif text-white font-semibold">Sigilo Absoluto</div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">Ética Profissional</div>
              </div>
            </div>
          </motion.div>

          {/* Lado Direito — Imagem Local /belgo.jpg em Moldura Editorial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-[400px] lg:max-w-none rounded-2xl overflow-hidden editorial-card p-2.5 shadow-2xl gold-border-glow">
              <div className="relative h-[460px] sm:h-[520px] w-full rounded-xl overflow-hidden bg-[#070E17]">
                <Image
                  src="/belgo.jpg"
                  alt="Dr. Belgo Conceição Machado - Advogado OAB/TO 13.254"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  priority
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03070C] via-transparent to-black/20"></div>
              </div>

              {/* Tag de Apresentação Sobreposta */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl editorial-header flex items-center justify-between border border-white/10">
                <div>
                  <h3 className="text-sm font-serif font-semibold text-white tracking-wide">
                    Belgo Conceição Machado
                  </h3>
                  <p className="text-xs text-[#C5A880] font-mono mt-0.5">
                    OAB/TO 13.254 • Titular da Banca
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] shrink-0">
                  <Award className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
