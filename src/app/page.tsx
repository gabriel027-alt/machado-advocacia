import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import About from "@/components/About";
import TrustGuarantees from "@/components/TrustGuarantees";
import TriageForm from "@/components/TriageForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#03070C] relative">
      {/* 1. Navegação Fixa (Header.tsx com botão Falar com Advogado -> #triagem) */}
      <Header />

      {/* 2. Hero (com vídeo local /hero-bg.mp4) */}
      <Hero />

      {/* 3. Especialidades (Áreas de Atuação com Numeração Editorial) */}
      <Specialties />

      {/* 4. Autoridade da Banca (Trajetória & Filosofia da Banca) */}
      <About />

      {/* 5. TrustGuarantees (Quebra de Objeções: Sigilo LGPD, Prontidão 24h e Abrangência) */}
      <TrustGuarantees />

      {/* 6. TriageForm (Triagem Ética de Casos) */}
      <TriageForm />

      {/* 7. FAQ (Perguntas Frequentes em Acordeão + Bloco Discreto de Plantão Criminal) */}
      <FAQ />

      {/* 8. Rodapé Institucional */}
      <Footer />

      {/* Botão Flutuante Global Fixado no Canto Inferior Direito (fixed bottom-5 right-5 z-50) */}
      <FloatingCall />
    </main>
  );
}
