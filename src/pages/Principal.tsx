import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import WhatsAppFloat from "@/components/ui/whatsapp-float";
import { 
  Play, 
  Calendar, 
  Heart, 
  Youtube, 
  Instagram,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { latestSermon } from "@/data/sermons";
import HeroVideo from "@/components/HeroVideo";
import CardsIniciais from "@/components/CardsIniciais";

const Index = () => {
  useScrollToTop(); // Garante scroll para o topo ao carregar
  
  // Dados centralizados dos botões de ação
  const actionButtons = [
    {
      id: 1,
      text: "Series de Mensagens",
      variant: "default" as const,
      link: "/sermoes"
    },
    {
      id: 2,
      text: "Nossa Comunidade",
      variant: "outline" as const,
      link: "/ministerios"
    },
    {
      id: 3,
      text: "Junte-se a Nós",
      variant: "outline" as const,
      link: "/contato"
    }
  ];

  // Componente reutilizável para os botões de ação
  const ActionButton = ({ 
    button, 
    isDesktop = false 
  }: { 
    button: typeof actionButtons[0], 
    isDesktop?: boolean 
  }) => (
    <Link to={button.link}>
      <Button 
        size={isDesktop ? "lg" : "default"}
        variant={button.variant}
        className={`w-full justify-between rounded-2xl xl:rounded-3xl h-auto transform transition-all duration-300 hover:scale-[1.02] ${
          isDesktop 
            ? "text-base xl:text-lg 2xl:text-xl px-6 xl:px-8 2xl:px-8 py-4 xl:py-6 2xl:py-8" 
            : "text-sm px-4 py-2.5"
        }`}
      >
        <div className={isDesktop ? "text-left" : ""}>
          <div className={isDesktop ? "font-semibold" : ""}>
            {button.text}
          </div>
        </div>
        <ArrowRight className={isDesktop ? "w-5 h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8" : "w-4 h-4"} />
      </Button>
    </Link>
  );
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center pt-10 md:pt-24 xl:pt-28 2xl:pt-32 bg-hero transition-colors duration-300">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl xl:max-w-8xl 2xl:max-w-9xl mx-auto">
              
              {/* Desktop Layout */}
              <div className="hidden lg:block">
                <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold leading-tight mb-6 xl:mb-8 2xl:mb-10 text-center text-hero">
                  Bem-vindo à <span className="text-primary">Igreja Renovada</span>
                </h1>
                <p className="text-base xl:text-lg 2xl:text-xl text-hero-subtitle leading-relaxed text-center mb-10 xl:mb-16 2xl:mb-20 max-w-4xl mx-auto">
                  A Igreja Renovada existe para aproximar as pessoas de Deus e ajudá-las a seguir os passos de Jesus.
                </p>
                <div className="grid grid-cols-2 gap-16 xl:gap-20 2xl:gap-24 items-center">
                  <div>
                    <HeroVideo url="https://www.youtube.com/watch?v=rq9jfNiQZyY" />
                  </div>
                  <div className="flex flex-col gap-6 xl:gap-8 2xl:gap-10 justify-center">
                    {/* Action Buttons - Vertical Layout */}
                    <div className="flex flex-col gap-4 xl:gap-6 2xl:gap-8">
                      {actionButtons.map(button => (
                        <ActionButton key={button.id} button={button} isDesktop={true} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="block lg:hidden text-center">
                <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-hero">
                  Bem-vindo à <span className="text-primary">Igreja Renovada</span>
                </h1>
                <p className="text-sm md:text-base text-hero-subtitle mb-8 leading-relaxed max-w-lg mx-auto">
                  A Igreja Renovada existe para aproximar as pessoas de Deus e ajudá-las a seguir os passos de Jesus.
                </p>
                <div className="mb-8 max-w-2xl mx-auto">
                  <HeroVideo url="https://www.youtube.com/watch?v=rq9jfNiQZyY" />
                </div>
                {/* Action Buttons - Alinhados com o vídeo */}
                <div className="flex flex-col gap-3 max-w-2xl mx-auto">
                  {actionButtons.map(button => (
                    <ActionButton key={button.id} button={button} isDesktop={false} />
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Ministries Section - Cards com todos os 4 ministérios */}
        <CardsIniciais />

        {/* Contribution Section */}
        <section className="py-20 xl:py-28 2xl:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
              <Card className="rounded-3xl xl:rounded-[2rem] 2xl:rounded-[2.5rem] overflow-hidden shadow-church-lg xl:shadow-2xl gradient-contribute text-white transform transition-all duration-300 hover:scale-[1.01] xl:hover:scale-[1.02]">
                <CardContent className="p-8 md:p-12 xl:p-16 2xl:p-20 text-center space-y-6 md:space-y-8 xl:space-y-12 2xl:space-y-16">
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-3 md:mb-4 xl:mb-6 2xl:mb-8">
                      Sua Generosidade Faz a Diferença
                    </h2>
                    {/* Texto completo para desktop */}
                    <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl opacity-90 max-w-2xl xl:max-w-4xl 2xl:max-w-5xl mx-auto hidden md:block px-4 leading-relaxed">
                      Cada contribuição nos ajuda a impactar vidas, apoiar nossa comunidade 
                      e expandir o Reino de Deus.
                    </p>
                    {/* Texto reduzido para mobile */}
                    <p className="text-base opacity-90 block md:hidden px-2">
                      Cada contribuição impacta vidas e expande o Reino de Deus.
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <Link to="/doacoes">
                      <Button 
                        size="lg"
                        className="bg-church-primary hover:bg-church-primary-dark text-white dark:text-black rounded-2xl xl:rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg px-8 py-3 xl:px-12 xl:py-6 2xl:px-16 2xl:py-8 text-base xl:text-xl 2xl:text-2xl font-semibold"
                      >
                        Doar Agora
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;