import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SermonSeries from "@/components/SermonSeries";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { sermonSeriesData } from "@/data/sermons";
import WhatsAppFloat from "@/components/ui/whatsapp-float";
import celebracaoImg from "@/assets/Celebracao.webp";

const Sermons = () => {
  useScrollToTop(); // Garante scroll para o topo ao carregar
  
  return (
  <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-church-primary/25 dark:from-slate-900 dark:to-church-primary/20">
  <Header />

  {/* Remover padding-top inicial para que o hero comece no topo da página (atrás do header fixo) */}
  <main className="pt-0 xl:pt-0 2xl:pt-28">
        {/* Hero Section com Imagem */}
        <section className="relative">
          <div 
            className="h-[280px] sm:h-[220px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] overflow-hidden"
            style={{
              backgroundImage: `url(${celebracaoImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          
          {/* Subtítulo abaixo da imagem em todas as larguras (não sobrepor a imagem) */}
          <div className="p-4 sm:p-6 md:p-8 xl:p-12 2xl:p-16 bg-gray-50">
            <div className="container mx-auto">
              <div className="max-w-2xl sm:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto text-center">
                <p className="text-gray-800 md:text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium md:drop-shadow-lg leading-relaxed">
                  Explore nossas mensagens que irão inspirar seu crescimento espiritual.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sermon Series */}
        <section className="py-0 xl:py-18 2xl:py-24">
          <div className="container mx-auto px-2 sm:px-4">
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