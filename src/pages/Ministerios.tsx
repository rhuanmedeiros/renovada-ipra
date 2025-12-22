import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MinisteriosSection from "@/components/MinisteriosSection";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import WhatsAppFloat from "@/components/ui/whatsapp-float";
import { DynamicBackgroundDesktop } from "@/components/DynamicBackgroundDesktop";
import { useEffect, useState } from "react";

const Ministerios = () => {
  useScrollToTop(); // Garante scroll para o topo ao carregar
  const [overlayOpacity, setOverlayOpacity] = useState(0.85);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      // Start more opaque and reveal the photo background as the user scrolls.
      const nextOpacity = Math.max(0.35, 0.85 - (y / 800));
      setOverlayOpacity(nextOpacity);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
  <DynamicBackgroundDesktop enableMobile>
    <div className="min-h-screen flex flex-col relative">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-black transition-opacity duration-300"
        style={{ opacity: overlayOpacity }}
      />
      <Header />
        <main className="pt-20">
          {/* A seção de ministérios foi extraída para um componente reutilizável */}
          <MinisteriosSection />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
  </DynamicBackgroundDesktop>
  );
};

export default Ministerios;
