import Header from "@/components/Header";
import Footer from "@/components/Footer";
import videoSrc from "@/assets/videoplayback.mp4";

const QuemSomos = () => {
  return (
  <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-church-primary/25 dark:from-slate-900 dark:to-church-primary/20">
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
              {/* Pastor Willian Poso */}
              <div className="relative p-6 md:p-10 xl:p-12 bg-white dark:bg-slate-900 rounded-2xl md:rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl overflow-visible">
                {/* Imagem do Pastor - Responsiva */}
                <div className="absolute top-0 right-0 w-40 h-40 md:w-56 md:h-56 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 opacity-90 dark:opacity-70 pointer-events-none transition-transform duration-300 hover:scale-105">
                  <img 
                    src="/src/assets/Pastores/Untitled design/1.png"
                    alt="Pastor Willian Poso"
                    className="w-full h-full object-cover rounded-full translate-x-[15%] -translate-y-[25%] md:translate-x-[20%] md:-translate-y-[30%] xl:translate-x-[0%] xl:-translate-y-[15%]"
                    style={{
                      filter: 'grayscale(30%)'
                    }}
                  />
                </div>
                
                {/* Conteúdo do Card */}
                <div className="relative z-10 md:max-w-[60%] xl:max-w-[65%]">
                  <h4 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-church-primary mb-2 xl:mb-3">Willian Poso</h4>
                  <p className="font-medium text-foreground mb-10 xl:mb-4 text-sm md:text-base xl:text-lg 2xl:text-xl">Pastor Sênior</p>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base xl:text-lg 2xl:text-xl">
                    Com visão clara e sabedoria, <br></br>o pastor Willian lidera nossa igreja, garantindo que nosso caminho esteja sempre alinhado com os ensinamentos de Cristo e o propósito de Deus para nossa comunidade.
                  </p>
                </div>
              </div>

              {/* Pastor Huan Marvyn */}
              <div className="relative p-6 md:p-10 xl:p-12 bg-white dark:bg-slate-900 rounded-2xl md:rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl overflow-visible">
                {/* Imagem do Pastor - Responsiva */}
                <div className="absolute top-0 right-0 w-40 h-40 md:w-56 md:h-56 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 opacity-90 dark:opacity-70 pointer-events-none transition-transform duration-300 hover:scale-105">
                  <img 
                    src="/src/assets/Pastores/Untitled design/3.png"
                    alt="Pastor Huan Marvyn"
                    className="w-full h-full object-cover rounded-full translate-x-[15%] -translate-y-[35%] md:translate-x-[20%] md:-translate-y-[25%] xl:translate-x-[0%] xl:-translate-y-[15%]"
                    style={{
                      filter: 'grayscale(30%)'
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
              </div>

              {/* Pastor Wilian Palma */}
              <div className="relative p-6 md:p-10 xl:p-12 bg-white dark:bg-slate-900 rounded-2xl md:rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl overflow-visible">
                {/* Imagem do Pastor - Responsiva */}
                <div className="absolute top-0 right-0 w-40 h-40 md:w-56 md:h-56 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 opacity-90 dark:opacity-70 pointer-events-none transition-transform duration-300 hover:scale-105">
                  <img 
                    src="/src/assets/Pastores/Untitled design/2.png"
                    alt="Pastor Wilian Palma"
                    className="w-full h-full object-cover rounded-full translate-x-[15%] -translate-y-[35%] md:translate-x-[20%] md:-translate-y-[30%] xl:translate-x-[0%] xl:-translate-y-[15%]"
                    style={{
                      filter: 'grayscale(30%)'
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
              </div>
            </div>
          </section>

          {/* Seção principal: vídeo (esquerda) + conteúdo (direita) em desktop */}
          <section className="max-w-6xl mx-auto mb-20 mt-12 md:mt-24 xl:mt-40 xl:mb-24 2xl:mt-48 2xl:mb-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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

              {/* Conteúdo - direita (alinhado verticalmente) */}
              <div className="order-2 md:order-2 flex flex-col justify-center">
                <h2 className="text-3xl font-semibold mb-4 text-foreground">Nossa Comunidade</h2>
                <p className="mb-6 text-black dark:text-muted-foreground">
                  A Igreja Renovada existe para aproximar as pessoas de Deus e ajudá-las a seguir os passos de Jesus.
                </p>
              </div>
            </div>
          </section>


          {/* Cards abaixo do vídeo e do texto, ocupando largura total */}
          <section className="max-w-6xl mx-auto mb-12 xl:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow transition-all duration-300">
                <h3 className="text-3xl font-semibold mb-4 text-foreground">Nossa Missão</h3>
                <p className="text-muted-foreground">Amar a Deus e ao próximo, discipular vidas e servir a comunidade com compaixão.</p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow transition-all duration-300">
                <h3 className="text-3xl font-semibold mb-4 text-foreground">Visão</h3>
                <p className="text-muted-foreground">Ver pessoas transformadas pelo poder do evangelho e impactando suas famílias e a cidade.</p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow transition-all duration-300">
                <h3 className="text-3xl font-semibold mb-4 text-foreground">Valores</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Adoração</li>
                  <li>Comunhão</li>
                  <li>Missão</li>
                </ul>
              </div>
            </div>
          </section>

          
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default QuemSomos;
