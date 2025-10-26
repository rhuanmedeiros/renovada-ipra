import Header from "@/components/Header";
import Footer from "@/components/Footer";
import videoSrc from "@/assets/videoplayback.mp4";

const QuemSomos = () => {
  return (
  <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-church-primary/25 dark:from-slate-900 dark:to-church-primary/20">
      <Header />

      <main className="flex-grow pt-28 pb-12">
        <div className="container mx-auto px-6 text-black dark:text-foreground">

          {/* Equipe Pastoral - movida para o topo conforme solicitado */}
          <section className="max-w-4xl mx-auto mb-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-semibold mb-4 text-foreground">Equipe Pastoral</h3>
              <p className="mb-8 leading-relaxed text-black dark:text-muted-foreground">
                Conheça os líderes que Deus levantou para servir e guiar a nossa comunidade. Na Igreja Renovada de Astorga, nossa equipe pastoral é dedicada a cuidar da nossa família da fé, ensinando a Palavra e liderando com coração de servo.
              </p>
            </div>

            <div className="space-y-8">
              {/* Pastor Willian Poso */}
              <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <h4 className="text-xl font-semibold text-church-primary mb-2">Pastor Willian Poso</h4>
                <p className="font-medium text-foreground mb-3">Pastor Sênior</p>
                <p className="text-muted-foreground leading-relaxed">
                  Com sabedoria e uma visão clara, o pastor Willian lidera nossa igreja, garantindo que nosso caminho esteja sempre alinhado com os ensinamentos de Cristo e o propósito de Deus para nossa comunidade.
                </p>
              </div>

              {/* Pastor Huan Marvyn */}
              <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <h4 className="text-xl font-semibold text-church-primary mb-2">Pastor Huan Marvyn</h4>
                <p className="font-medium text-foreground mb-3">Pastor das Crianças</p>
                <p className="text-muted-foreground leading-relaxed">
                  Com criatividade e muito carinho, o pastor Huan se dedica a semear a Palavra de Deus no coração dos nossos pequenos. Ele lidera o ministério infantil, construindo uma base sólida de fé para a próxima geração.
                </p>
              </div>

              {/* Pastor Wilian Palma */}
              <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <h4 className="text-xl font-semibold text-church-primary mb-2">Pastor Wilian Palma</h4>
                <p className="font-medium text-foreground mb-3">Pastor dos Jovens</p>
                <p className="text-muted-foreground leading-relaxed">
                  O pastor Wilian caminha ao lado da nossa juventude, conectando os desafios do dia a dia com uma fé vibrante e relevante. Ele inspira nossos jovens a viverem um relacionamento profundo e verdadeiro com Jesus.
                </p>
              </div>
            </div>
          </section>

          {/* Seção principal: vídeo (esquerda) + conteúdo (direita) em desktop */}
          <section className="max-w-6xl mx-auto mb-16 xl:mb-20 2xl:mb-24">
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
                  A Igreja Renovada busca acolher pessoas de todas as idades. Aqui você encontrará ministérios para crianças, jovens, famílias e oportunidades de servir.
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
