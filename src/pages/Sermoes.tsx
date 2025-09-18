import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SermonSeries from "@/components/SermonSeries";
import { sermonSeriesData } from "@/data/sermons";

const Sermons = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-section">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Mensagens <span className="text-primary">Transformadoras</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore nossa biblioteca de mensagens bíblicas que irão fortalecer sua fé e 
              inspirar seu crescimento espiritual.
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
    </div>
  );
};

export default Sermons;