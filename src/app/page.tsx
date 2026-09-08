import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import About from "@/components/About";
import TrustGuarantees from "@/components/TrustGuarantees";
import TriageForm from "@/components/TriageForm";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#03070C] relative">
      {/* 1. Navegação Fixa */}
      <Header />

      {/* 2. Hero (Vídeo de Fundo e Foto com Zoom Preservado) */}
      <Hero />

      {/* 3. Especialidades (Áreas de Atuação) */}
      <Specialties />

      {/* 4. Autoridade da Banca & Filosofia */}
      <About />

      {/* 5. TrustGuarantees (Quebra de Objeções, Sigilo LGPD e Prontidão 24h) */}
      <TrustGuarantees />

      {/* 6. TriageForm (Triagem Ética de Casos — Ponto de Ação do Lead) */}
      <TriageForm />

      {/* 7. FAQ (Perguntas Frequentes & Esclarecimentos Éticos) */}
      <FAQ />

      {/* 8. CTASection (Chamada Final de Fechamento Antes do Rodapé) */}
      <CTASection />

      {/* 9. Rodapé Institucional */}
      <Footer />

      {/* Botão Flutuante de Urgência 24h (Fixed) */}
      <FloatingCall />
    </main>
  );
}
