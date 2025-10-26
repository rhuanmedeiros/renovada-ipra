import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { schedule } from "@/data/schedule";

const Cultos = () => {
  const handleLocationClick = () => {
    const address = "Camilo Ramalho Mata 181, Astorga, PR, Brazil";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-28 pb-12 bg-background">
        <div className="container mx-auto px-6">
          <section className="text-center py-12">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Cultos e Horários</h1>
          </section>

          <section className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-lg shadow p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Agenda Semanal</h2>
            <div className="space-y-4">
              {schedule.map((s) => (
                <div key={s.id} className="flex items-center justify-between border-b last:border-b-0 pb-2">
                  <div className="text-lg font-medium text-foreground">{s.day}</div>
                  <div className="text-muted-foreground">{s.times.join(' • ')}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Seção de Mapa */}
          <section className="py-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Nossa Localização</h2>
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                Encontre-nos facilmente em Astorga, Paraná. Clique no mapa para abrir no Google Maps 
                e obter direções detalhadas até nossa igreja.
              </p>
              
              <Card className="rounded-3xl overflow-hidden shadow-xl bg-white dark:bg-slate-900">
                <CardContent className="p-0">
                  <div className="relative">
                    {/* Google Maps Embed */}
                    <div className="w-full h-[400px] md:h-[500px] relative">
                      <iframe
                        src="https://maps.google.com/maps?q=Camilo+Ramalho+Mata+181,+Astorga,+PR,+Brazil&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-3xl"
                      ></iframe>
                    </div>
                    
                    {/* Overlay com informações */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <Card className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-0">
                        <CardContent className="p-4">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                            <div>
                              <h3 className="font-bold text-lg text-foreground">Igreja Renovada</h3>
                              <p className="text-sm text-muted-foreground">
                                Camilo Ramalho Mata, 181 - Astorga, PR
                              </p>
                            </div>
                            <Button 
                              onClick={handleLocationClick}
                              className="bg-church-primary hover:bg-church-primary-dark text-white rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Abrir no Maps
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cultos;
