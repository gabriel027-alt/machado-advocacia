import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import About from "@/components/About";
import TriageForm from "@/components/TriageForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#03070C]">
      <Header />
      <Hero />
      <Specialties />
      <About />
      <TriageForm />
      <Footer />
    </main>
  );
}
