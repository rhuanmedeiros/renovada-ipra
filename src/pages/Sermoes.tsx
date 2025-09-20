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
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-section">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
              Mensagens <span className="text-primary">Transformadoras</span>
            </h1>
            {/* Texto completo para desktop */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto hidden md:block">
              Explore nossa biblioteca de mensagens bíblicas que irão fortalecer sua fé e 
              inspirar seu crescimento espiritual.
            </p>
            {/* Texto reduzido para mobile */}
            <p className="text-base text-muted-foreground block md:hidden px-2">
              Mensagens que fortalecem sua fé e crescimento espiritual.
            </p>
          </div>
        </section>

        {/* Sermon Series */}
        <section className="py-16">
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