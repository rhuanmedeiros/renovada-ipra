import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MinisteriosSection from "@/components/MinisteriosSection";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import WhatsAppFloat from "@/components/ui/whatsapp-float";

const Ministerios = () => {
  useScrollToTop(); // Garante scroll para o topo ao carregar
  
  return (
  <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-church-primary/25 dark:from-slate-900 dark:to-church-primary/20">
      <Header />
      <main className="pt-20">
        {/* A seção de ministérios foi extraída para um componente reutilizável */}
        <MinisteriosSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Ministerios;
