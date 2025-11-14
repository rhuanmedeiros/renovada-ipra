import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import WhatsAppFloat from "@/components/ui/whatsapp-float";
import { DynamicBackgroundDesktop } from "@/components/DynamicBackgroundDesktop";
import MobileHeroBackground from "@/components/MobileHeroBackground";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CardsIniciais from "@/components/CardsIniciais";
import HeroVideo from "@/components/HeroVideo";

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
      link: "/quem-somos"
    },
    {
      id: 3,
      text: "Junte-se a Nós",
      variant: "outline" as const,
      link: "/cultos"
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
        className={`w-full justify-between h-auto transform transition-all duration-300 hover:scale-[1.02] ${
          isDesktop 
            ? "rounded-2xl xl:rounded-3xl text-base xl:text-lg 2xl:text-xl px-6 xl:px-8 2xl:px-8 py-4 xl:py-6 2xl:py-8" 
            : "rounded-lg text-sm px-4 py-2.5"
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
    <div className="relative min-h-screen bg-background lg:bg-transparent">
      <Header />
      
      <main className="relative">
        {/* Hero Section with Dynamic Background Desktop */}
        <DynamicBackgroundDesktop>
          <section className="relative min-h-screen flex flex-col justify-end items-center pt-20 md:pt-24 xl:pt-28 2xl:pt-32 pb-12 md:pb-20 xl:pb-28 overflow-hidden">
            <MobileHeroBackground />
            <div className="container mx-auto px-6">
              <div className="max-w-7xl xl:max-w-8xl 2xl:max-w-9xl mx-auto">
                <div className="hidden lg:grid grid-cols-12 gap-6 xl:gap-8 2xl:gap-10 items-center">
                  <div className="col-span-6">
                    <HeroVideo url="https://www.youtube.com/watch?v=6wSmLkafMyU" />
                  </div>

                  <div className="col-span-6 flex flex-col gap-4 xl:gap-6 2xl:gap-8">
                    {actionButtons.map((button) => (
                      <ActionButton key={button.id} button={button} isDesktop={true} />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 w-full max-w-xl lg:hidden pb-24 sm:pb-24">
                  {actionButtons.map((button) => (
                    <ActionButton key={button.id} button={button} isDesktop={false} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </DynamicBackgroundDesktop>

        <div className="bg-background/95 backdrop-blur-sm">
          {/* Ministries Section - Cards com todos os 4 ministérios */}
          <CardsIniciais />

          {/* Contribution Section */}
          <section className="py-20 xl:py-28 2xl:py-32">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
                <Card className="rounded-lg md:rounded-2xl xl:rounded-3xl 2xl:rounded-[2.5rem] overflow-hidden shadow-church-lg xl:shadow-2xl gradient-contribute text-white transform transition-all duration-300 hover:scale-[1.01] xl:hover:scale-[1.02]">
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
                          className="bg-church-primary hover:bg-church-primary-dark text-white dark:text-black rounded-lg md:rounded-2xl xl:rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg px-8 py-3 xl:px-12 xl:py-6 2xl:px-16 2xl:py-8 text-base xl:text-xl 2xl:text-2xl font-semibold"
                        >
                          Contribua
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;