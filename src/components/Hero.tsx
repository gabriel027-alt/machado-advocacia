"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#03070C] pt-10 pb-20 md:pt-16 md:pb-28">
      
      {/* 2. Reposicionamento e Destaque do Vídeo da Balança */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-[75%_center] lg:object-[82%_center] opacity-40 filter brightness-95 contrast-125"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        
        {/* Gradiente direcional: escurece a coluna de texto à esquerda e revela a balança à direita */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#03070C] via-[#03070C]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03070C] via-transparent to-[#03070C]/40" />
      </div>

      {/* Conteúdo Principal com relative z-10 */}
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Lado Esquerdo — Tipografia e Copy Refinadas em Caixa Alta e Baixa */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* Tag Superior (Pill) */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#03070C]/80 border border-white/10 text-[#C5A880] text-xs font-mono uppercase tracking-widest backdrop-blur-md shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              DEFESA TÉCNICA & ATUAÇÃO COMBATIVA
            </div>

            {/* 4. Título Principal em Caixa Alta e Baixa */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.12] tracking-tight text-white">
              Defesa Incansável e <span className="gold-gradient-text">Rigor Técnico</span> em Causas de Alta Complexidade.
            </h1>

            {/* Subtítulo Equilibrado */}
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-xl">
              Boutique jurídica especializada na defesa penal ostensiva, sustentações perante o Tribunal do Júri, assessoria estratégica em licitações públicas e concessões previdenciárias.
            </p>

            {/* Botões de Ação */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#triagem"
                className="inline-flex items-center justify-center bg-[#C5A880] hover:bg-[#d4ba94] text-[#03070C] font-semibold py-3.5 px-8 rounded-lg text-sm tracking-wide shadow-xl shadow-[#C5A880]/15 hover:brightness-110 transition-all hover:scale-[1.01] w-full sm:w-auto"
              >
                INICIAR TRIAGEM DE CASO ➔
              </a>
              <a
                href="#atuacao"
                className="inline-flex items-center justify-center border border-white/15 text-white py-3.5 px-7 rounded-lg text-sm font-medium hover:bg-white/5 transition-all w-full sm:w-auto"
              >
                ÁREAS DE ATUAÇÃO
              </a>
            </div>

            {/* Grid de Métricas no Rodapé da Hero em 3 Colunas Organizadas */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-white/10 w-full max-w-lg">
              <div>
                <div className="text-xs font-mono font-semibold text-white tracking-wider uppercase">DEFESA PENAL</div>
                <div className="text-xs text-[#C5A880] font-serif mt-0.5">Tribunal do Júri</div>
              </div>
              <div>
                <div className="text-xs font-mono font-semibold text-white tracking-wider uppercase">SIGILO TOTAL</div>
                <div className="text-xs text-[#C5A880] font-serif mt-0.5">Ética & Rigor</div>
              </div>
              <div>
                <div className="text-xs font-mono font-semibold text-white tracking-wider uppercase">ATENDIMENTO</div>
                <div className="text-xs text-[#C5A880] font-serif mt-0.5">Prioritário 24h</div>
              </div>
            </div>
          </motion.div>

          {/* 3. Lado Direito — Correção Integral do Card do Advogado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-[400px] lg:max-w-none border border-[#C5A880]/30 rounded-2xl bg-[#070E17]/80 backdrop-blur-md p-2 shadow-2xl">
              
              {/* Container da Imagem */}
              <div className="relative h-[480px] sm:h-[540px] rounded-xl overflow-hidden bg-[#03070C]">
                
                {/* Micro-Badge Discreto no Canto Superior */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-[#03070C]/85 border border-[#C5A880]/40 text-[#C5A880] text-[10px] font-mono uppercase tracking-widest backdrop-blur-md shadow-md">
                  ATUAÇÃO COMBATIVA • OAB/TO
                </div>

                {/* Imagem do Dr. Belgo (scale-[1.75] origin-top) */}
                <Image
                  src="/belgo.jpg"
                  alt="Dr. Belgo Conceição Machado - Advogado OAB/TO 13.254"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  priority
                  className="object-cover object-[50%_10%] scale-[1.75] origin-top"
                />

                {/* Fusão de estúdio: Vinheta e Gradiente Lateral/Vertical */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#03070C] via-transparent to-transparent opacity-90 pointer-events-none z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#03070C]/70 via-transparent to-[#03070C]/70 pointer-events-none z-10" />

                {/* Barra do Nome Colada na Base Interior */}
                <div className="absolute bottom-3 inset-x-3 bg-[#03070C]/90 backdrop-blur-md border border-white/10 p-3 rounded-lg flex items-center justify-between z-20">
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
