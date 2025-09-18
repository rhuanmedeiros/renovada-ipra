import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center" style={{backgroundColor: '#e2e5e9c0'}}>
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              
              {/* Desktop Layout */}
              <div className="hidden lg:block">
                <h1 className="text-4xl xl:text-5xl font-bold leading-tight mb-10 text-center">
                  Bem-vindo à <span className="text-primary">Igreja Renovada</span>
                </h1>
                <div className="grid grid-cols-2 gap-16 items-start">
                  <div>
                    <HeroVideo url="https://www.youtube.com/watch?v=rq9jfNiQZyY" />
                  </div>
                  <div className="flex flex-col gap-6">
                    <p className="text-lg xl:text-xl text-muted-foreground">
                      A Igreja Renovada existe para aproximar as pessoas de Deus e ajudá-las a seguir os passos de Jesus.
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
                          <div className="font-semibold">Conheça nossa comunidade</div>
                        </div>
                        <ArrowRight className="w-6 h-6" />
                      </Button>
                      <Button size="lg" variant="outline" className="w-full justify-between rounded-2xl text-lg px-8 py-6 h-auto">
                        <div className="text-left">
                          <div className="font-semibold">Faça parte da nossa missão</div>
                        </div>
                        <ArrowRight className="w-6 h-6" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="block lg:hidden text-center">
                <h1 className="text-3xl font-bold leading-tight mb-6">
                  Bem-vindo à <span className="text-primary">Igreja Renovada</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  A Igreja Renovada existe para aproximar as pessoas de Deus e ajudá-las a seguir os passos de Jesus.
                </p>
                <div className="mb-8">
                  <HeroVideo url="https://www.youtube.com/watch?v=rq9jfNiQZyY" />
                </div>
                {/* Action Buttons */}
                <div className="space-y-4">
                  <Button size="lg" className="w-full justify-between rounded-2xl text-lg px-8 py-6 h-auto">
                    <span>Assista Online</span>
                    <ArrowRight className="w-6 h-6" />
                  </Button>
                  <Button size="lg" variant="outline" className="w-full justify-between rounded-2xl text-lg px-8 py-6 h-auto">
                    <span>Conheça nossa comunidade</span>
                    <ArrowRight className="w-6 h-6" />
                  </Button>
                  <Button size="lg" variant="outline" className="w-full justify-between rounded-2xl text-lg px-8 py-6 h-auto">
                    <span>Faça parte da nossa missão</span>
                    <ArrowRight className="w-6 h-6" />
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
                <CardContent className="p-12 text-center space-y-8">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Sua Generosidade Faz a Diferença
                    </h2>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                      Cada contribuição nos ajuda a impactar vidas, apoiar nossa comunidade 
                      e expandir o Reino de Deus.
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <Link to="/doacoes">
                      <Button size="lg" variant="secondary" className="rounded-2xl text-lg px-8 py-6">
                        <Heart className="w-5 h-5 mr-2" />
                        Doe Agora
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
    </div>
  );
};

export default Index;