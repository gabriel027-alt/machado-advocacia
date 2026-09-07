"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Scale } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative z-10 pt-14 pb-20 md:pt-20 md:pb-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Conteúdo de Texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/20 text-[#C5A880] text-xs font-mono uppercase tracking-widest backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              Atuação Jurídica Estratégica
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight text-white">
              Rigor técnico e defesa incansável para resguardar seus direitos fundamentais.
            </h1>

            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl font-light">
              Assessoria jurídica de alta precisão em Direito Penal, Tribunal do Júri, Licitações e causas previdenciárias. Condução ética, transparente e focada em segurança processual.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#triagem"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-[#C5A880] to-[#b39369] text-[#04080D] font-medium text-sm tracking-wide shadow-lg shadow-[#C5A880]/10 hover:brightness-110 transition-all hover:scale-[1.02]"
              >
                Iniciar Triagem de Caso
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#atuacao"
                className="inline-flex items-center justify-center px-6 py-4 rounded-lg border border-white/10 text-slate-300 text-sm hover:bg-white/[0.04] transition-colors"
              >
                Conhecer Especialidades
              </a>
            </div>

            <div className="pt-6 grid grid-cols-3 gap-6 border-t border-white/[0.08] w-full max-w-lg">
              <div>
                <div className="text-xl font-serif text-white font-medium">OAB/TO</div>
                <div className="text-xs text-slate-500 font-mono mt-0.5">Nº 13.254</div>
              </div>
              <div>
                <div className="text-xl font-serif text-white font-medium">Tribunal do Júri</div>
                <div className="text-xs text-slate-500 font-mono mt-0.5">Defesa Técnica</div>
              </div>
              <div>
                <div className="text-xl font-serif text-white font-medium">Sigilo Legal</div>
                <div className="text-xs text-slate-500 font-mono mt-0.5">Ética e Discrição</div>
              </div>
            </div>
          </motion.div>

          {/* Imagem / Card com Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-[380px] lg:max-w-none rounded-2xl overflow-hidden glass-card p-2 shadow-2xl">
              <div className="relative h-[440px] sm:h-[480px] w-full rounded-xl overflow-hidden bg-slate-900">
                <Image
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=900"
                  alt="Belgo Conceição Machado"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04080D] via-transparent to-black/20"></div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-header flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-serif font-medium text-white">Belgo Conceição Machado</h3>
                  <p className="text-xs text-[#C5A880] font-mono">OAB/TO 13.254</p>
                </div>
                <Scale className="w-6 h-6 text-[#C5A880]/80" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
