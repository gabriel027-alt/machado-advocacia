"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

const PHONE_NUMBER = "5563992565455";

export default function FloatingCall() {
  return (
    <a
      href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
        "Olá, Dr. Belgo Machado. Gostaria de atendimento de emergência / plantão 24h."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#10B981] hover:bg-[#0da673] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all border-2 border-[#C5A880]/40 group"
      aria-label="Atendimento via WhatsApp 24h"
    >
      {/* Anel Pulsante Verde */}
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75 pointer-events-none"></span>
      
      <MessageCircle className="w-7 h-7 group-hover:scale-105 transition-transform" />
    </a>
  );
}
