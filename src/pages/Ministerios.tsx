import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MinisteriosSection from "@/components/MinisteriosSection";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import WhatsAppFloat from "@/components/ui/whatsapp-float";

const Ministerios = () => {
  useScrollToTop(); // Garante scroll para o topo ao carregar
  
  return (
    <div className="min-h-screen bg-background">
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
