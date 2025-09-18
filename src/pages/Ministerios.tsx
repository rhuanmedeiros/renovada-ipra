import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MinisteriosSection from "@/components/MinisteriosSection";

const Ministerios = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* A seção de ministérios foi extraída para um componente reutilizável */}
        <MinisteriosSection />
      </main>
      <Footer />
    </div>
  );
};

export default Ministerios;
