import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Play, 
  Calendar, 
  Heart, 
  Youtube, 
  Instagram
} from "lucide-react";
import ministerioJovens from "@/assets/ministerio-jovens.jpg";
import ministerioCriancas from "@/assets/ministerio-criancas.jpg";
import projetoReforma from "@/assets/projeto-reforma.jpg";
import pequenosGrupos from "@/assets/pequenos-grupos.jpg";
import { Link } from "react-router-dom";
import { latestSermon } from "@/data/sermons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center bg-gradient-section pt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              
              {/* Desktop Layout */}
              <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                {/* Video Column */}
                <div>
                  <div className="aspect-video rounded-3xl overflow-hidden shadow-church-lg">
                    <iframe
                      src={latestSermon.url}
                      title={latestSermon.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* Content Column */}
                <div className="space-y-8">
                  <div>
                    <h1 className="text-4xl xl:text-5xl font-bold leading-tight mb-6">
                      Bem-vindo à{" "}
                      <span className="text-primary">Igreja Esperança</span>
                    </h1>
                    <p className="text-lg xl:text-xl text-muted-foreground mb-8">
                      Uma comunidade onde você encontra propósito, cresce na fé e 
                      descobre o amor transformador de Deus.
                    </p>
                  </div>
                  
                  {/* Action Buttons - Vertical Layout */}
                  <div className="space-y-4">
                    <Button size="lg" className="w-full justify-start rounded-2xl text-lg px-8 py-6 h-auto">
                      <Play className="w-6 h-6 mr-4" />
                      <div className="text-left">
                        <div className="font-semibold">Assista Online</div>
                        <div className="text-sm opacity-80">Acompanhe nossos cultos ao vivo</div>
                      </div>
                    </Button>
                    
                    <Button size="lg" variant="outline" className="w-full justify-start rounded-2xl text-lg px-8 py-6 h-auto">
                      <Calendar className="w-6 h-6 mr-4" />
                      <div className="text-left">
                        <div className="font-semibold">Planeje Sua Visita</div>
                        <div className="text-sm opacity-80">Conheça nossa comunidade</div>
                      </div>
                    </Button>
                    
                    <Button size="lg" variant="outline" className="w-full justify-start rounded-2xl text-lg px-8 py-6 h-auto">
                      <Heart className="w-6 h-6 mr-4" />
                      <div className="text-left">
                        <div className="font-semibold">Contribua</div>
                        <div className="text-sm opacity-80">Faça parte da nossa missão</div>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden">
                {/* Video */}
                <div className="mb-8">
                  <div className="aspect-video rounded-3xl overflow-hidden shadow-church-lg">
                    <iframe
                      src={latestSermon.url}
                      title={latestSermon.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                
                {/* Buttons Only - No title/subtitle */}
                <div className="space-y-4">
                  <Button size="lg" className="w-full justify-start rounded-2xl text-lg px-6 py-4 h-auto">
                    <Play className="w-5 h-5 mr-3" />
                    <span className="font-semibold">Assista Online</span>
                  </Button>
                  
                  <Button size="lg" variant="outline" className="w-full justify-start rounded-2xl text-lg px-6 py-4 h-auto">
                    <Calendar className="w-5 h-5 mr-3" />
                    <span className="font-semibold">Planeje Sua Visita</span>
                  </Button>
                  
                  <Button size="lg" variant="outline" className="w-full justify-start rounded-2xl text-lg px-6 py-4 h-auto">
                    <Heart className="w-5 h-5 mr-3" />
                    <span className="font-semibold">Contribua</span>
                  </Button>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Conecte-se Conosco
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              <Link to="/sermoes">
                <Card className="group cursor-pointer hover:shadow-church transition-all duration-300 rounded-2xl border-2 hover:border-primary/20">
                  <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Play className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-lg">Sermões</h3>
                  </CardContent>
                </Card>
              </Link>

              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Card className="group cursor-pointer hover:shadow-church transition-all duration-300 rounded-2xl border-2 hover:border-primary/20">
                  <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Youtube className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-lg">YouTube</h3>
                  </CardContent>
                </Card>
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Card className="group cursor-pointer hover:shadow-church transition-all duration-300 rounded-2xl border-2 hover:border-primary/20">
                  <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Instagram className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-lg">Instagram</h3>
                  </CardContent>
                </Card>
              </a>

              <Link to="/eventos">
                <Card className="group cursor-pointer hover:shadow-church transition-all duration-300 rounded-2xl border-2 hover:border-primary/20">
                  <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Calendar className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-lg">Eventos</h3>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/doe">
                <Card className="group cursor-pointer hover:shadow-church transition-all duration-300 rounded-2xl border-2 hover:border-primary/20">
                  <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Heart className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-lg">Doações</h3>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Ministries Section */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Conheça nossos Ministérios
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Encontre seu lugar e propósito através dos nossos diversos ministérios
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl shadow-church-lg group cursor-pointer">
                <div className="aspect-[16/10] bg-cover bg-center" style={{ backgroundImage: `url(${ministerioJovens})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-3">Ministério de Jovens</h3>
                    <p className="text-lg mb-6 opacity-90">
                      Um espaço para jovens crescerem na fé, fazerem amizades e descobrirem seu propósito.
                    </p>
                    <Button className="rounded-2xl px-6 py-3">
                      Saiba Mais
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl shadow-church-lg group cursor-pointer">
                <div className="aspect-[16/10] bg-cover bg-center" style={{ backgroundImage: `url(${ministerioCriancas})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-3">Ministério Infantil</h3>
                    <p className="text-lg mb-6 opacity-90">
                      Programas especiais para crianças aprenderem sobre Deus de forma divertida e segura.
                    </p>
                    <Button className="rounded-2xl px-6 py-3">
                      Saiba Mais
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl shadow-church-lg group cursor-pointer">
                <div className="aspect-[16/10] bg-cover bg-center" style={{ backgroundImage: `url(${projetoReforma})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-3">Projeto Reforma</h3>
                    <p className="text-lg mb-6 opacity-90">
                      Participe da renovação do nosso espaço para melhor servir a comunidade.
                    </p>
                    <Button className="rounded-2xl px-6 py-3">
                      Participar
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl shadow-church-lg group cursor-pointer">
                <div className="aspect-[16/10] bg-cover bg-center" style={{ backgroundImage: `url(${pequenosGrupos})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-3">Pequenos Grupos</h3>
                    <p className="text-lg mb-6 opacity-90">
                      Conecte-se em grupos menores para crescimento espiritual e relacionamentos profundos.
                    </p>
                    <Button className="rounded-2xl px-6 py-3">
                      Encontrar Grupo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" className="rounded-2xl text-lg px-8 py-6">
                      <Heart className="w-5 h-5 mr-2" />
                      Doe Agora
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-2xl text-lg px-8 py-6 border-white/20 text-white hover:bg-white/10">
                      Saiba Mais
                    </Button>
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