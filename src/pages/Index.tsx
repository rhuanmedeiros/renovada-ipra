import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Play, 
  Calendar, 
  Heart, 
  Users, 
  Baby, 
  Zap, 
  Youtube, 
  Instagram,
  Hammer,
  UserCheck
} from "lucide-react";
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
            <div className="max-w-6xl mx-auto">
              {/* Video */}
              <div className="mb-12">
                <div className="aspect-video rounded-3xl overflow-hidden shadow-church-lg mb-6">
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

              {/* Hero Content */}
              <div className="text-center space-y-8">
                <div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                    Bem-vindo à{" "}
                    <span className="text-primary">Igreja Esperança</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                    Uma comunidade onde você encontra propósito, cresce na fé e 
                    descobre o amor transformador de Deus.
                  </p>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="rounded-2xl text-lg px-8 py-6">
                    <Play className="w-5 h-5 mr-2" />
                    Assista Online
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-2xl text-lg px-8 py-6">
                    <Calendar className="w-5 h-5 mr-2" />
                    Planeje Sua Visita
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <Card className="rounded-2xl shadow-church hover:shadow-church-lg transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Zap className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Jovens</CardTitle>
                  <p className="text-muted-foreground">
                    Um espaço para jovens crescerem na fé, fazerem amizades e descobrirem seu propósito.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-church hover:shadow-church-lg transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Baby className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Crianças</CardTitle>
                  <p className="text-muted-foreground">
                    Programas especiais para crianças aprenderem sobre Deus de forma divertida e segura.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-church hover:shadow-church-lg transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Hammer className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Projeto Reforma</CardTitle>
                  <p className="text-muted-foreground">
                    Participe da renovação do nosso espaço para melhor servir a comunidade.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-church hover:shadow-church-lg transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Pequenos Grupos</CardTitle>
                  <p className="text-muted-foreground">
                    Conecte-se em grupos menores para crescimento espiritual e relacionamentos profundos.
                  </p>
                </CardContent>
              </Card>
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