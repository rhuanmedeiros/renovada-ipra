import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SermonSeries from "@/components/SermonSeries";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { sermonSeriesData } from "@/data/sermons";
import WhatsAppFloat from "@/components/ui/whatsapp-float";

const Sermons = () => {
  useScrollToTop(); // Garante scroll para o topo ao carregar
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 xl:pt-24 2xl:pt-28">
        {/* Hero Section com Imagem */}
        <section className="relative">
          <div 
            className="h-[180px] sm:h-[220px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] overflow-hidden"
            style={{
              backgroundImage: "url('/Celebracao.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          
          {/* Subtítulo abaixo da imagem no mobile e sobre a imagem em telas maiores */}
          <div className="md:absolute md:bottom-0 md:left-0 md:right-0 p-4 sm:p-6 md:p-8 xl:p-12 2xl:p-16 bg-gray-50 md:bg-transparent">
            <div className="container mx-auto">
              <div className="max-w-2xl sm:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto text-center">
                <p className="text-gray-800 md:text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium md:drop-shadow-lg leading-relaxed">
                  Explore nossa biblioteca de mensagens bíblicas que irão fortalecer sua fé e 
                  inspirar seu crescimento espiritual.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sermon Series */}
        <section className="py-16 xl:py-20 2xl:py-24">
          <div className="container mx-auto px-4">
            {sermonSeriesData.map((series) => (
              <SermonSeries key={series.id} series={series} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Sermons;