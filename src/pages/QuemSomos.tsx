import Header from "@/components/Header";
import Footer from "@/components/Footer";
import videoSrc from "@/assets/videoplayback.mp4";
import pastorWilliam from "@/assets/Pastores/Untitled design/1.webp";
import pastorHuan from "@/assets/Pastores/Untitled design/3.webp";
import pastorPalma from "@/assets/Pastores/Untitled design/2.webp";
import presbiterosImg from "@/assets/Presbiteros/presbiteros.jpg";
import { DynamicBackgroundDesktop } from "@/components/DynamicBackgroundDesktop";
import { GlassCard } from "@/components/ui/glass-card";
import { useEffect, useState } from "react";

const QuemSomos = () => {
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

        <main className="flex-grow pt-36  pb-12">
          <div className="container mx-auto px-6 text-black dark:text-foreground">

          {/* Equipe Pastoral - movida para o topo conforme solicitado */}
          <section className="max-w-4xl mx-auto mb-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-semibold mb-4 text-foreground">Equipe Pastoral</h3>
              <p className="mb-24 leading-relaxed text-black dark:text-muted-foreground">
                Conheça os líderes que Deus levantou para servir e guiar a nossa comunidade. 
              </p>
            </div>

            <div className="space-y-16 md:space-y-20 xl:space-y-24">
              {/* Pastor William Poso */}
              <GlassCard className="relative p-6 md:p-10 xl:p-12 rounded-2xl md:rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl overflow-visible">
                {/* Imagem do Pastor - Responsiva */}
                <div className="absolute top-0 right-0 w-40 h-40 md:w-56 md:h-56 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 opacity-900 dark:opacity-100 pointer-events-none transition-transform duration-300 hover:scale-105">
                  <img 
                    src={pastorWilliam}
                    alt="Pastor William Poso"
                    fetchPriority="high"
                    loading="eager"
                    decoding="sync"
                    className="w-full h-full object-cover rounded-full translate-x-[15%] -translate-y-[25%] md:translate-x-[20%] md:-translate-y-[30%] xl:translate-x-[0%] xl:-translate-y-[15%]"
                    style={{
                      filter: 'grayscale(10%)'
                    }}
                  />
                </div>
                
                {/* Conteúdo do Card */}
                <div className="relative z-10 md:max-w-[60%] xl:max-w-[65%]">
                  <h4 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-church-primary mb-2 xl:mb-3">William Poso</h4>
                  <p className="font-medium text-foreground mb-10 xl:mb-4 text-sm md:text-base xl:text-lg 2xl:text-xl">Pastor Sênior</p>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base xl:text-lg 2xl:text-xl">
                    Com visão clara e sabedoria, <br></br>o pastor William lidera nossa igreja, garantindo que nosso caminho esteja sempre alinhado com os ensinamentos de Cristo e o propósito de Deus para nossa comunidade.
                  </p>
                </div>
              </GlassCard>

              {/* Pastor Huan Marvyn */}
              <GlassCard className="relative p-6 md:p-10 xl:p-12 rounded-2xl md:rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl overflow-visible">
                {/* Imagem do Pastor - Responsiva */}
                <div className="absolute top-0 right-0 w-40 h-40 md:w-56 md:h-56 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 opacity-90 dark:opacity-100 pointer-events-none transition-transform duration-300 hover:scale-105">
                  <img 
                    src={pastorHuan}
                    alt="Pastor Huan Marvyn"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover rounded-full translate-x-[15%] -translate-y-[35%] md:translate-x-[20%] md:-translate-y-[25%] xl:translate-x-[0%] xl:-translate-y-[15%]"
                    style={{
                      filter: 'grayscale(10%)'
                    }}
                  />
                </div>
                
                {/* Conteúdo do Card */}
                <div className="relative z-10 md:max-w-[60%] xl:max-w-[65%]">
                  <h4 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-church-primary mb-2 xl:mb-3">Huan Marvyn</h4>
                  <p className="font-medium text-foreground mb-9 xl:mb-4 text-sm md:text-base xl:text-lg 2xl:text-xl">Pastor das Crianças</p>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base xl:text-lg 2xl:text-xl">
                    Com criatividade e muito carinho, o pastor Huan se dedica a semear a Palavra de Deus no coração dos nossos pequenos. Ele lidera o ministério infantil, construindo uma base sólida de fé para a próxima geração.
                  </p>
                </div>
              </GlassCard>

              {/* Pastor Wilian Palma */}
              <GlassCard className="relative p-6 md:p-10 xl:p-12 rounded-2xl md:rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl overflow-visible">
                {/* Imagem do Pastor - Responsiva */}
                <div className="absolute top-0 right-0 w-40 h-40 md:w-56 md:h-56 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 opacity-90 dark:opacity-100 pointer-events-none transition-transform duration-300 hover:scale-105">
                  <img src={pastorPalma}
                    alt="Pastor Wilian Palma"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover rounded-full translate-x-[15%] -translate-y-[35%] md:translate-x-[20%] md:-translate-y-[30%] xl:translate-x-[0%] xl:-translate-y-[15%]"
                    style={{
                      filter: 'grayscale(10%)'
                    }}
                  />
                </div>
                
                {/* Conteúdo do Card */}
                <div className="relative z-10 md:max-w-[60%] xl:max-w-[65%]">
                  <h4 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-church-primary mb-2 xl:mb-3">Wilian Palma</h4>
                  <p className="font-medium text-foreground mb-9 xl:mb-4 text-sm md:text-base xl:text-lg 2xl:text-xl">Pastor dos Jovens</p>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base xl:text-lg 2xl:text-xl">
                    O pastor Wilian caminha <br></br>ao lado da nossa juventude, conectando os desafios do dia a dia com uma fé vibrante e relevante. Ele inspira nossos jovens a viverem um relacionamento profundo e verdadeiro com Jesus.
                  </p>
                </div>
              </GlassCard>
            </div>
          </section>

          {/* Conselho de Presbíteros */}
          <section className="max-w-4xl mx-auto mb-12 mt-16 md:mt-24">
            <GlassCard className="relative p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-lg overflow-hidden">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-semibold mb-4 text-foreground">Conselho de Presbíteros</h3>
                <p className="leading-relaxed text-black dark:text-muted-foreground">
                  Homens de Deus que compõem o conselho atual da igreja, auxiliando na liderança e no cuidado com a Igreja.
                </p>
              </div>
              
               <img 
                 src={presbiterosImg} 
                 alt="Conselho de Presbíteros" 
                 className="w-full h-auto rounded-xl md:rounded-2xl object-cover"
               />
            </GlassCard>
          </section>

          {/* Seção principal: vídeo (esquerda) + conteúdo (direita) em desktop */}
          <section className="max-w-6xl mx-auto mb-20 mt-12 md:mt-24 xl:mt-40 xl:mb-24 2xl:mt-48 2xl:mb-28">
              {/* Video - esquerda */}
              <div className="order-1 md:order-1">
                <div className="aspect-video rounded-3xl overflow-hidden shadow-lg xl:rounded-[2rem] 2xl:rounded-[2.5rem] xl:shadow-2xl bg-black">
                  <video
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-full h-full object-cover"
                    preload="metadata"
                  >
                    Seu navegador não suporta a tag de vídeo.
                  </video>
                </div>
              </div>
            </section>


          {/* Cards abaixo do vídeo e do texto, ocupando largura total */}
          <section className="max-w-6xl mx-auto mb-12 xl:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <GlassCard className="p-6 rounded-2xl shadow transition-all duration-300">
                <h3 className="text-3xl font-semibold mb-4 text-foreground">Nossa Missão</h3>
                <p className="text-muted-foreground">A Igreja Renovada existe para aproximar as pessoas de Deus e ajudá-las a seguir os passos de Jesus.</p>
              </GlassCard>

              <GlassCard className="p-6 rounded-2xl shadow transition-all duration-300">
                <h3 className="text-3xl font-semibold mb-4 text-foreground">Visão</h3>
                <p className="text-muted-foreground">Ver pessoas transformadas pelo poder do evangelho e impactando suas famílias e a cidade.</p>
              </GlassCard>

              <GlassCard className="p-6 rounded-2xl shadow transition-all duration-300">
                <h3 className="text-3xl font-semibold mb-4 text-foreground">Valores</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li><strong className="text-foreground">ADORAÇÃO</strong>: Ninguém pode fazer mais do que Deus.</li>
                  <li><strong className="text-foreground">COMUNHÃO</strong>: Ninguém pode viver sozinho.</li>
                  <li><strong className="text-foreground">DISCIPULADO</strong>: Pessoas transformadas crescem.</li>
                  <li><strong className="text-foreground">MINISTÉRIO</strong>: Pessoas salvas servem pessoas.</li>
                  <li><strong className="text-foreground">MISSÃO</strong>: Pessoas encontradas encontram pessoas.</li>
                  <li><strong className="text-foreground">CELEBRAÇÃO</strong>: Domingo, melhor dia da semana.</li>
                  <li><strong className="text-foreground">EXCELÊNCIA</strong>: A excelência glorifica a Deus e inspira pessoas.</li>
                </ul>
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

export default QuemSomos;

