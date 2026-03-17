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
    button
  }: { 
    button: typeof actionButtons[0]
  }) => (
    <Link to={button.link}>
      <Button 
        size="default"
        className={`w-full justify-between h-auto transform transition-all duration-300 hover:scale-[1.02] rounded-lg lg:rounded-2xl xl:rounded-3xl text-sm lg:text-base xl:text-lg px-4 lg:px-6 xl:px-8 py-2.5 lg:py-4 ${
          button.variant === "default"
            ? "!bg-[#009bde] hover:!bg-[#008ac6] !text-white !border-transparent"
            : "border-[#009bde] text-[#009bde] bg-white/90 dark:bg-slate-900/80 hover:bg-[#009bde] hover:text-white"
        } !shadow-none`}
        style={button.variant === "default" ? { backgroundColor: "#009bde", color: "#fff" } : undefined}
      >
        <div className="text-left">
          <div className="font-semibold">
            {button.text}
          </div>
        </div>
        <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
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
                    <HeroVideo url="https://www.youtube.com/embed/icicdqi7xVM" />
                  </div>

                  <div className="col-span-6 flex flex-col gap-4 xl:gap-6 2xl:gap-8">
                    {actionButtons.map((button) => (
                      <ActionButton key={button.id} button={button} />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 w-full max-w-xl lg:hidden pb-24 sm:pb-24">
                  {actionButtons.map((button) => (
                    <ActionButton key={button.id} button={button} />
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
                          className="bg-[#009bde] hover:bg-[#008ac6] text-white rounded-lg md:rounded-2xl xl:rounded-3xl transition-all duration-300 hover:scale-[1.02] !shadow-none px-8 py-3 xl:px-12 xl:py-6 2xl:px-16 2xl:py-8 text-base xl:text-xl 2xl:text-2xl font-semibold"
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