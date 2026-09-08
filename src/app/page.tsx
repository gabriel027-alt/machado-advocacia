import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import About from "@/components/About";
import TriageForm from "@/components/TriageForm";
import TrustGuarantees from "@/components/TrustGuarantees";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#03070C]">
      {/* 1. Navegação Fixa */}
      <Header />

      {/* 2. Hero com Vídeo de Fundo Real e Foto Ajustada */}
      <Hero />

      {/* 3. Especialidades com Numeração Editorial */}
      <Specialties />

      {/* 4. Autoridade da Banca & Filosofia */}
      <About />

      {/* 5. Triagem Ética de Casos (Ponto Focal de Conversão) */}
      <TriageForm />

      {/* 6. Quebra de Objeções e Blindagem Ética */}
      <TrustGuarantees />

      {/* 7. Perguntas Frequentes em Acordeão */}
      <FAQ />

      {/* 8. Rodapé Institucional */}
      <Footer />
    </main>
  );
}
