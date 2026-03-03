import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GlassCard, GlassCardContent } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Clock } from "lucide-react";
import { schedule } from "@/data/schedule";
import { DynamicBackgroundDesktop } from "@/components/DynamicBackgroundDesktop";
import { useEffect, useState } from "react";

const Cultos = () => {
  const [overlayOpacity, setOverlayOpacity] = useState(0.85);

  const handleLocationClick = () => {
    const address = "Camilo Ramalho Mata 181, Astorga, PR, Brazil";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

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

    <main className="flex-grow pt-16 pb-12">
          <div className="container mx-auto px-2">
         {/* Horários de Cultos (dados compartilhados) */}
            <section className="py-20">
            <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <GlassCard className="rounded-lg md:rounded-2xl xl:rounded-3xl overflow-hidden shadow-lg">
                <GlassCardContent className="p-8 md:p-12">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-church-primary/10 dark:bg-church-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-10 h-10 text-church-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">Horários dos Cultos</h2>
                    <p className="text-xs text-muted-foreground">Venha adorar e celebrar conosco.</p>
                  </div>

                  <div className="max-w-md mx-auto">
                    <div className="space-y-4">
                      {schedule.map((s) => (
                        <div key={s.id} className="flex items-center justify-between p-4 rounded-2xl border group transition-all duration-300" style={{background: 'transparent'}}>
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${s.id.startsWith('sabados') ? 'bg-orange-500' : 'bg-church-primary'}`}></div>
                            <div>
                              <span className="font-semibold text-lg text-foreground">{s.day}</span>
                              {s.note && <div className="text-xs text-muted-foreground">{s.note}</div>}
                            </div>
                          </div>
                          <div className="text-right">
                            {s.times.map((t) => (
                              <div key={t} className={`font-bold ${s.id.startsWith('sabados') ? 'text-orange-500' : 'text-church-primary'} text-lg`}>{t}</div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl border border-yellow-200 dark:border-yellow-800">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                        <span className="font-semibold text-yellow-800 dark:text-yellow-200">Dica</span>
                      </div>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300">Recomendamos chegar 15 minutos antes do início do culto para um melhor acolhimento.</p>
                    </div>
                  </div>
                </GlassCardContent>
              </GlassCard>
            </div>
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
              
              <GlassCard className="rounded-3xl overflow-hidden shadow-xl">
                <GlassCardContent className="p-0">
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
                      <GlassCard className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-0">
                        <GlassCardContent className="p-4">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                            <div>
                              <h3 className="text-3xl font-semibold mb-4 text-foreground">Igreja Renovada</h3>
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
                        </GlassCardContent>
                      </GlassCard>
                    </div>
                  </div>
                </GlassCardContent>
              </GlassCard>
            </div>
          </section>
          </div>
        </main>

        <Footer />
      </div>
  </DynamicBackgroundDesktop>
  );
};

export default Cultos;
