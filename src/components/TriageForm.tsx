"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ExternalLink, ArrowLeft, Check } from "lucide-react";

const areas = [
  "Direito Penal / Tribunal do Júri",
  "Licitações e Contratos Públicos",
  "Direito Previdenciário (INSS)",
  "Outra Demanda Jurídica",
];

const urgencies = [
  {
    title: "Urgente (Prisão em flagrante / Audiência próxima)",
    tag: "Imediata",
    tagColor: "border-red-500/30 text-red-400 bg-red-500/10",
  },
  {
    title: "Processo em andamento / Necessidade de defesa",
    tag: "Em curso",
    tagColor: "border-yellow-500/30 text-yellow-400 bg-yellow-500/10",
  },
  {
    title: "Consulta preventiva / Planejamento",
    tag: "Preventivo",
    tagColor: "border-slate-500/30 text-slate-400 bg-slate-500/10",
  },
];

const PHONE_NUMBER = "5563992565455";

export default function TriageForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedArea, setSelectedArea] = useState<string>("");
  const [selectedUrgency, setSelectedUrgency] = useState<string>("");

  const handleSelectArea = (area: string) => {
    setSelectedArea(area);
  };

  const handleSelectUrgency = (urgency: string) => {
    setSelectedUrgency(urgency);
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Olá, Dr. Belgo Machado. Gostaria de atendimento:\n\n• Área da demanda: ${selectedArea}\n• Situação/Urgência: ${selectedUrgency}`
    );
    return `https://wa.me/${PHONE_NUMBER}?text=${text}`;
  };

  return (
    <section id="triagem" className="relative z-10 py-20 border-t border-white/[0.06] bg-[#070D14]/60">
      <div className="max-w-2xl mx-auto px-5">
        <div className="text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880]">
            Filtro de Atendimento
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-white">
            Triagem Preliminar
          </h2>
          <p className="mt-2 text-sm text-slate-400 font-light">
            Selecione os detalhes da sua demanda para prosseguir com o encaminhamento formal.
          </p>
        </div>

        {/* Card do Formulário com Glassmorphism */}
        <div className="rounded-2xl glass-card p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
          
          {/* Barra de Progresso Visual */}
          <div className="w-full bg-white/[0.06] h-1.5 rounded-full mb-8 overflow-hidden">
            <motion.div
              className="bg-gradient-to-r from-[#C5A880] to-[#10B981] h-full rounded-full"
              initial={{ width: "50%" }}
              animate={{ width: step === 1 ? "50%" : "100%" }}
              transition={{ duration: 0.4 }}
            />
          </div>

          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <label className="block text-sm font-medium text-slate-200">
                  1. Selecione a área da demanda:
                </label>
                
                <div className="grid grid-cols-1 gap-2.5">
                  {areas.map((area) => {
                    const isSelected = selectedArea === area;
                    return (
                      <button
                        key={area}
                        type="button"
                        onClick={() => handleSelectArea(area)}
                        className={`w-full text-left px-4 py-3.5 rounded-xl border transition-all flex justify-between items-center ${
                          isSelected
                            ? "border-[#C5A880] bg-[#C5A880]/10 text-white shadow-lg shadow-[#C5A880]/5"
                            : "border-white/10 bg-white/[0.02] text-slate-300 hover:bg-white/[0.05] hover:border-white/20"
                        }`}
                      >
                        <span className="text-sm font-medium">{area}</span>
                        {isSelected ? (
                          <Check className="w-4 h-4 text-[#C5A880]" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-slate-600" />
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    disabled={!selectedArea}
                    onClick={() => setStep(2)}
                    className={`px-6 py-3 rounded-lg bg-[#C5A880] text-[#04080D] font-medium text-sm transition-all flex items-center gap-2 ${
                      selectedArea
                        ? "hover:brightness-110 shadow-lg shadow-[#C5A880]/10 cursor-pointer"
                        : "opacity-40 cursor-not-allowed"
                    }`}
                  >
                    Avançar para Situação
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <label className="block text-sm font-medium text-slate-200">
                  2. Qual a urgência ou momento do processo?
                </label>

                <div className="grid grid-cols-1 gap-2.5">
                  {urgencies.map((item) => {
                    const isSelected = selectedUrgency === item.title;
                    return (
                      <button
                        key={item.title}
                        type="button"
                        onClick={() => handleSelectUrgency(item.title)}
                        className={`w-full text-left p-4 rounded-xl border transition-all flex justify-between items-center ${
                          isSelected
                            ? "border-[#C5A880] bg-[#C5A880]/10 text-white shadow-lg shadow-[#C5A880]/5"
                            : "border-white/10 bg-white/[0.02] text-slate-300 hover:bg-white/[0.05] hover:border-white/20"
                        }`}
                      >
                        <span className="text-sm font-medium pr-2">{item.title}</span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 border rounded ${item.tagColor}`}>
                          {item.tag}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-6 flex items-center justify-between border-t border-white/[0.08]">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white underline font-mono transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Voltar etapa
                  </button>

                  {selectedUrgency ? (
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-medium text-sm bg-[#10B981] hover:bg-[#0da673] text-white shadow-lg shadow-[#10B981]/20 transition-all animate-pulse"
                    >
                      Prosseguir para o WhatsApp
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-medium text-sm bg-white/10 text-slate-500 cursor-not-allowed"
                    >
                      Selecione a situação
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
