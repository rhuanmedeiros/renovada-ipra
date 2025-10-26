import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import WhatsAppFloat from "@/components/ui/whatsapp-float";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Copy,
  Check,
  Clock,
  Users,
  ExternalLink
} from "lucide-react";
import { useState } from "react";
import { schedule } from "@/data/schedule";

const Contato = () => {
  useScrollToTop(); // Garante scroll para o topo ao carregar
  
  const { toast } = useToast();
  const [copiedData, setCopiedData] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedData(type);
    setTimeout(() => setCopiedData(null), 2000);
    
    toast({
      title: "Copiado!",
      description: `${type} foi copiado para sua área de transferência.`,
      duration: 3000,
    });
  };

  const handlePhoneClick = () => {
    window.open('tel:+554432341284', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:contato@renovada.org', '_blank');
  };

  const handleLocationClick = () => {
    const address = "Camilo Ramalho Mata 181, Astorga, PR, Brazil";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 xl:pt-24 2xl:pt-28">
        {/* Informações de Contato - Clean Version */}
        <section className="py-20 xl:py-28 2xl:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
              <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center mb-12 xl:mb-16 2xl:mb-20">Estamos aqui para ouvir você <br></br>Orar juntos e caminhar ao seu lado</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 2xl:gap-12 mb-12 xl:mb-16 2xl:mb-20">
                {/* Telefone */}
                <Card className="rounded-lg md:rounded-2xl xl:rounded-3xl shadow-lg xl:shadow-2xl text-center group hover:shadow-xl xl:hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02] xl:hover:scale-[1.03]">
                  <CardContent className="p-6 xl:p-8 2xl:p-10">
                    <div className="w-14 h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 xl:mb-6 2xl:mb-8 group-hover:bg-blue-500/20 transition-colors duration-300">
                      <Phone className="w-7 h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 text-blue-500" />
                    </div>
                    <h3 className="font-semibold text-lg xl:text-xl 2xl:text-2xl mb-2 xl:mb-3 2xl:mb-4">Telefone</h3>
                    <div className="flex items-center gap-2 justify-center mb-3 xl:mb-4 2xl:mb-6">
                      <span className="text-sm xl:text-base 2xl:text-lg font-medium">(44) 3234-1284</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard('(44) 3234-1284', 'Telefone')}
                        className="h-6 w-6 xl:h-8 xl:w-8 2xl:h-10 2xl:w-10 p-0"
                      >
                        {copiedData === 'Telefone' ? 
                          <Check className="w-3 h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 text-green-500" /> : 
                          <Copy className="w-3 h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5" />
                        }
                      </Button>
                    </div>
                    <Button 
                      size="sm"
                      onClick={handlePhoneClick}
                      className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 xl:px-6 2xl:px-8 xl:py-3 2xl:py-4 xl:text-base 2xl:text-lg"
                    >
                      Ligar
                    </Button>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="rounded-lg md:rounded-2xl xl:rounded-3xl shadow-lg xl:shadow-2xl text-center group hover:shadow-xl xl:hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02] xl:hover:scale-[1.03]">
                  <CardContent className="p-6 xl:p-8 2xl:p-10">
                    <div className="w-14 h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 xl:mb-6 2xl:mb-8 group-hover:bg-blue-500/20 transition-colors duration-300">
                      <Mail className="w-7 h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 text-blue-500" />
                    </div>
                    <h3 className="font-semibold text-lg xl:text-xl 2xl:text-2xl mb-2 xl:mb-3 2xl:mb-4">Email</h3>
                    <div className="flex items-center gap-2 justify-center mb-3 xl:mb-4 2xl:mb-6">
                      <span className="text-sm xl:text-base 2xl:text-lg font-medium break-all">contato@renovada.org</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard('contato@renovada.org', 'Email')}
                        className="h-6 w-6 xl:h-8 xl:w-8 2xl:h-10 2xl:w-10 p-0 flex-shrink-0"
                      >
                        {copiedData === 'Email' ? 
                          <Check className="w-3 h-3 text-green-500" /> : 
                          <Copy className="w-3 h-3" />
                        }
                      </Button>
                    </div>
                    <Button 
                      size="sm"
                      onClick={handleEmailClick}
                      className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4"
                    >
                      Enviar
                    </Button>
                  </CardContent>
                </Card>

                {/* Endereço */}
                <Card className="rounded-lg md:rounded-2xl xl:rounded-3xl shadow-lg text-center group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                      <MapPin className="w-7 h-7 text-blue-500" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Endereço</h3>
                    <div className="mb-3">
                      <p className="text-sm font-medium">Camilo Ramalho Mata, 181</p>
                      <p className="text-xs text-muted-foreground">Astorga - PR</p>
                    </div>
                    <Button 
                      size="sm"
                      onClick={handleLocationClick}
                      className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4"
                    >
                      Ver Mapa
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mapa Interativo */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Nossa Localização</h2>
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                Encontre-nos facilmente em Astorga, Paraná. Clique no mapa para abrir no Google Maps 
                e obter direções detalhadas até nossa igreja.
              </p>
              
              <Card className="rounded-lg md:rounded-2xl xl:rounded-3xl overflow-hidden shadow-xl">
                <CardContent className="p-0">
                  <div className="relative">
                    {/* Google Maps Embed */}
                    <div className="w-full h-[400px] md:h-[500px] relative">
                      <iframe
                        src="https://maps.google.com/maps?q=Camilo+Ramalho+Mata+181,+Astorga,+PR,+Brazil&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-3xl"
                      ></iframe>
                    </div>
                    
                    {/* Overlay com informações */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <Card className="bg-white/95 backdrop-blur-sm border-0">
                        <CardContent className="p-4">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                            <div>
                              <h3 className="font-bold text-lg">Igreja Renovada</h3>
                              <p className="text-sm text-muted-foreground">
                                Camilo Ramalho Mata, 181 - Astorga, PR
                              </p>
                            </div>
                            <Button 
                              onClick={handleLocationClick}
                              className="bg-church-primary hover:bg-church-primary-dark text-white rounded-lg md:rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Abrir no Maps
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Horários de Cultos (dados compartilhados) */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="rounded-lg md:rounded-2xl xl:rounded-3xl overflow-hidden shadow-lg bg-white dark:bg-slate-900">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-church-primary/10 dark:bg-church-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-10 h-10 text-church-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Horários dos Cultos</h2>
                    <p className="text-xl text-muted-foreground">Venha adorar e celebrar conosco em nossa programação semanal</p>
                  </div>

                  <div className="max-w-md mx-auto">
                    <div className="space-y-4">
                      {schedule.map((s) => (
                        <div key={s.id} className="flex items-center justify-between p-4 rounded-2xl border group transition-all duration-300" style={{background: 'transparent'}}>
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${s.id === 'sabados' ? 'bg-orange-500' : 'bg-church-primary'}`}></div>
                            <div>
                              <span className="font-semibold text-lg text-foreground">{s.day}</span>
                              {s.note && <div className="text-xs text-muted-foreground">{s.note}</div>}
                            </div>
                          </div>
                          <div className="text-right">
                            {s.times.map((t) => (
                              <div key={t} className={`font-bold ${s.id === 'sabados' ? 'text-orange-500' : 'text-church-primary'} text-lg`}>{t}</div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl border border-yellow-200 dark:border-yellow-800">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                        <span className="font-semibold text-yellow-800 dark:text-yellow-200">Dica</span>
                      </div>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300">Recomendamos chegar 15 minutos antes do início do culto para um melhor acolhimento.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Chamada para Ação */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Venha Fazer Parte da Nossa <span className="text-primary">Família</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Não importa de onde você vem ou qual é sua história, há um lugar para você aqui. 
                Nossa comunidade está pronta para recebê-lo de braços abertos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={handleLocationClick}
                  className="bg-church-primary hover:bg-church-primary-dark text-white rounded-lg md:rounded-2xl text-lg px-8 py-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Como Chegar
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={handleEmailClick}
                  className="rounded-lg md:rounded-2xl text-lg px-8 py-6 border-church-primary text-church-primary hover:bg-church-primary hover:text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Nos Envie um Email
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Contato;