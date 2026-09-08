"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, ExternalLink, PhoneCall } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: "plantao",
    category: "Atendimento 24h",
    question: "Como funciona o atendimento de plantão para urgências criminais?",
    answer:
      "A banca mantém canal de prontidão técnica imediata 24 horas para casos de flagrante delito, prisão preventiva, busca e apreensão e audiências de custódia. O acompanhamento é prestado de forma prioritária presencialmente em delegacias e fóruns em qualquer horário, inclusive nos finais de semana e feriados.",
  },
  {
    id: "sigilo",
    category: "Privacidade & LGPD",
    question: "Como é garantido o sigilo das informações prestadas?",
    answer:
      "Todas as informações compartilhadas durante o atendimento presencial ou virtual estão estritamente resguardadas pelo sigilo profissional incondicional, conforme estabelecido no Estatuto da Advocacia (Lei 8.906/94), no Código de Ética da OAB (Provimento 205/2021) e nas diretrizes de proteção de dados da LGPD.",
  },
  {
    id: "abrangencia",
    category: "Cobertura Geográfica",
    question: "Qual é a abrangência territorial de atuação do escritório?",
    answer:
      "O escritório possui sede na Comarca de Pau D'Arco – TO e atua de forma abrangente em Palmas, Araguaína e todas as comarcas do Estado do Tocantins. Adicionalmente, a banca realiza sustentações orais e impetração de recursos em instâncias superiores perante o Superior Tribunal de Justiça (STJ) e o Supremo Tribunal Federal (STF) em Brasília.",
  },
  {
    id: "honorarios",
    category: "Contratação & Transparência",
    question: "Como funciona a definição de honorários e a contratação?",
    answer:
      "A atuação é pautada pela total transparência ética. Após a triagem inicial e análise da complexidade técnica do caso, é apresentada uma proposta de honorários com fundamentação na Tabela de Honorários da OAB/TO. Todos os termos são formalizados por meio de contrato escrito prévio, sem taxas ocultas ou surpresas contratuais.",
  },
];

const PHONE_NUMBER = "5563992565455";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("plantao");

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    "Olá, Dr. Belgo Machado. Tenho uma dúvida urgente sobre um caso / procedimento em andamento."
  )}`;

  return (
    <section id="faq" className="relative z-10 py-24 border-t border-white/10 bg-[#03070C]">
      <div className="max-w-4xl mx-auto px-5">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/20 text-[#C5A880] text-xs font-mono uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Esclarecimentos Jurídicos
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white leading-tight">
            Perguntas Frequentes & Transparência
          </h2>
          <p className="mt-3 text-sm text-slate-300 font-light leading-relaxed">
            Respostas objetivas para assegurar a clareza ética e a segurança antes da sua consulta inicial.
          </p>
        </div>

        {/* Acordeão Interativo */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-white/10 bg-[#070E17]/60 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-[#C5A880]/30"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 transition-colors hover:bg-white/[0.02]"
                >
                  <div className="flex flex-col space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A880]">
                      {item.category}
                    </span>
                    <span className="font-serif text-lg sm:text-xl font-medium text-white">
                      {item.question}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                    isOpen
                      ? "border-[#C5A880] bg-[#C5A880]/15 text-[#C5A880]"
                      : "border-white/15 bg-white/5 text-slate-400"
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-7 pt-2 text-sm sm:text-base text-slate-300 font-light leading-relaxed border-t border-white/5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* 3. Bloco Discreto de Fechamento Pós-FAQ */}
        <div className="mt-12 rounded-2xl border border-[#C5A880]/30 bg-[#070E17]/80 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880]">
              Atendimento Imediato de Emergência
            </span>
            <p className="font-serif text-base sm:text-lg font-medium text-white">
              Dúvida urgente sobre prisão ou procedimento em andamento? Fale diretamente no plantão criminal.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#C5A880] text-[#03070C] font-semibold text-xs sm:text-sm tracking-wide hover:brightness-110 transition-all shrink-0 shadow-lg shadow-[#C5A880]/15"
          >
            <PhoneCall className="w-4 h-4" />
            Falar no Plantão Criminal
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
