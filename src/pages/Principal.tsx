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
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center pt-10 bg-hero transition-colors duration-300">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              
              {/* Desktop Layout */}
              <div className="hidden lg:block">
                <h1 className="text-4xl xl:text-5xl font-bold leading-tight mb-10 text-center text-hero">
                  Bem-vindo à <span className="text-primary">Igreja Renovada</span>
                </h1>
                <div className="grid grid-cols-2 gap-16 items-start">
                  <div>
                    <HeroVideo url="https://www.youtube.com/watch?v=rq9jfNiQZyY" />
                  </div>
                  <div className="flex flex-col gap-6">
                    <p className="text-lg xl:text-xl text-hero-subtitle">
                      A Igreja Renovada existe para aproximar as pessoas de Deus e ajudá-las a seguir os passos de Jesus.
                    </p>
                    {/* Action Buttons - Vertical Layout */}
                    <div className="space-y-4">
                      <Button size="lg" className="w-full justify-between rounded-2xl text-lg px-8 py-6 h-auto">
                        <div className="text-left">
                          <div className="font-semibold">Assista Online</div>
                        </div>
                        <ArrowRight className="w-6 h-6" />
                      </Button>
                      <Button size="lg" variant="outline" className="w-full justify-between rounded-2xl text-lg px-8 py-6 h-auto">
                        <div className="text-left">
                          <div className="font-semibold">Nossa Comunidade</div>
                        </div>
                        <ArrowRight className="w-6 h-6" />
                      </Button>
                      <Button size="lg" variant="outline" className="w-full justify-between rounded-2xl text-lg px-8 py-6 h-auto">
                        <div className="text-left">
                          <div className="font-semibold">Junte-se a Nós</div>
                        </div>
                        <ArrowRight className="w-6 h-6" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="block lg:hidden text-center">
                <h1 className="text-3xl font-bold leading-tight mb-6 text-hero">
                  Bem-vindo à <span className="text-primary">Igreja Renovada</span>
                </h1>
                <p className="text-base text-hero-subtitle mb-8 px-2">
                  A Igreja Renovada existe para aproximar as pessoas de Deus e ajudá-las a seguir os passos de Jesus.
                </p>
                <div className="mb-8">
                  <HeroVideo url="https://www.youtube.com/watch?v=rq9jfNiQZyY" />
                </div>
                {/* Action Buttons */}
                <div className="space-y-3 px-4">
                  <Button size="lg" className="w-full justify-between rounded-2xl text-base px-6 py-4 h-auto">
                    <span>Assista Online</span>
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="w-full justify-between rounded-2xl text-base px-6 py-4 h-auto">
                    <span>Nossa Comunidade</span>
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="w-full justify-between rounded-2xl text-base px-6 py-4 h-auto">
                    <span>Junte-se a Nós</span>
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Ministries Section - Cards com todos os 4 ministérios */}
        <CardsIniciais />

        {/* Contribution Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="rounded-3xl overflow-hidden shadow-church-lg gradient-contribute text-white">
                <CardContent className="p-8 md:p-12 text-center space-y-6 md:space-y-8">
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                      Sua Generosidade Faz a Diferença
                    </h2>
                    {/* Texto completo para desktop */}
                    <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto hidden md:block px-4">
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
                        className="bg-church-primary hover:bg-church-primary-dark text-white rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg px-8 py-3"
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