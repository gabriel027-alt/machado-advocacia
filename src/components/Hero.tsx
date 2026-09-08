"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#03070C] pt-12 pb-20 md:pt-20 md:pb-28">
      
      {/* 2. Correção do Fundo em Vídeo (Hero Background) com Fonte CDN Estável */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-20 filter brightness-75 contrast-125"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
            type="video/mp4"
          />
        </video>
        {/* Camada de fusão dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#03070C]/70 via-[#03070C]/90 to-[#03070C]" />
      </div>

      {/* Conteúdo Principal com relative z-10 */}
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Lado Esquerdo — Texto Editorial de Alta Autoridade */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start space-y-7"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/25 text-[#C5A880] text-xs font-mono uppercase tracking-widest backdrop-blur-md">
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

          {/* 1. Lado Direito — Correção Definitiva da Foto do Dr. Belgo (belgo.jpg) com Zoom 170% */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-[400px] lg:max-w-none rounded-2xl overflow-hidden editorial-card p-2 shadow-2xl gold-border-glow">
              
              {/* Container da Imagem com Altura Fixa e Recorte Controlado */}
              <div className="h-[480px] sm:h-[540px] relative overflow-hidden rounded-xl bg-[#03070C]">
                
                {/* Micro-Badge Discreto no Canto Superior */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-[#03070C]/85 border border-[#C5A880]/40 text-[#C5A880] text-[10px] font-mono uppercase tracking-widest backdrop-blur-md shadow-md">
                  ATUAÇÃO COMBATIVA • OAB/TO
                </div>

                {/* Imagem do Dr. Belgo com Zoom Focado de 170% no Busto e Rosto */}
                <Image
                  src="/belgo.jpg"
                  alt="Dr. Belgo Conceição Machado - Advogado OAB/TO 13.254"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  priority
                  className="object-cover object-[50%_12%] scale-[1.7] origin-top translate-y-2"
                />

                {/* Vinheta Escura Suave na Base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#03070C] via-[#03070C]/40 to-transparent z-10 pointer-events-none"></div>

                {/* Legenda Estritamente Colada na Base Inferior */}
                <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl editorial-header flex items-center justify-between border border-white/10 shadow-2xl z-20">
                  <div>
                    <h3 className="text-xs font-serif font-semibold text-white tracking-wide">
                      Belgo Conceição Machado
                    </h3>
                    <p className="text-[10px] text-[#C5A880] font-mono mt-0.5">
                      OAB/TO 13.254 • Titular da Banca
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
