import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import WhatsAppFloat from "@/components/ui/whatsapp-float";
import { useToast } from "@/hooks/use-toast";
import { 
  Heart, 
  CreditCard, 
  Smartphone, 
  ShoppingCart,
  ExternalLink,
  Copy,
  Check
} from "lucide-react";
import { useState } from "react";

const Doacoes = () => {
  useScrollToTop(); // Garante scroll para o topo ao carregar
  
  const { toast } = useToast();
  const [copiedPix, setCopiedPix] = useState(false);
  const [showQuiloModal, setShowQuiloModal] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
    
    toast({
      title: "Dados copiados!",
      description: "As informações foram copiadas para sua área de transferência.",
      duration: 3000,
    });
  };

  const copyBankData = () => {
    const bankData = `Banco: Sicredi (748)
Agência: 0718
Conta Corrente: 80381-2
Favorecido: Igreja Renovada de Astorga
CNPJ: 01.570.203/0001-86`;
    
    navigator.clipboard.writeText(bankData);
    toast({
      title: "Dados bancários copiados!",
      description: "Todas as informações bancárias foram copiadas para sua área de transferência.",
      duration: 3000,
    });
  };

  const handleQuiloDoAmor = () => {
    setShowQuiloModal(true);
  };

  const goToQuiloSite = () => {
    window.open('https://quilodoamor.paginaexemplo.site/', '_blank');
    setShowQuiloModal(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-hero transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-hero">
                Sua <span className="text-primary">Generosidade</span> Faz a Diferença
              </h1>
              <p className="text-xl text-hero-subtitle mb-8">
                Cada contribuição nos ajuda a impactar vidas, apoiar nossa comunidade 
                e expandir o Reino de Deus.
              </p>
            </div>
          </div>
        </section>

        {/* Doações Financeiras */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Doações Financeiras</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* PIX */}
                <Card className="rounded-3xl shadow-lg flex flex-col">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Smartphone className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">PIX</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col">
                    <div className="flex-1 space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Chave PIX (CNPJ):</p>
                        <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                          <span className="font-mono text-sm flex-1">01.570.203/0001-86</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyToClipboard('01.570.203/0001-86')}
                            className="h-8 w-8 p-0"
                          >
                            {copiedPix ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Favorecido:</p>
                        <p className="font-semibold">Igreja Renovada de Astorga</p>
                      </div>
                    </div>
                    <Button className="w-full bg-church-primary hover:bg-church-primary-dark text-white rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                      <Smartphone className="w-4 h-4 mr-2" />
                      Doar via PIX
                    </Button>
                  </CardContent>
                </Card>

                {/* Transferência Bancária */}
                <Card className="rounded-3xl shadow-lg flex flex-col">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CreditCard className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Transferência Bancária</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col">
                    <div className="flex-1">
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground">Banco:</p>
                          <p className="font-semibold">Sicredi (748)</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Agência:</p>
                          <p className="font-semibold">0718</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Conta Corrente:</p>
                          <p className="font-semibold">80381-2</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Favorecido:</p>
                          <p className="font-semibold">Igreja Renovada de Astorga</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">CNPJ:</p>
                          <p className="font-semibold">01.570.203/0001-86</p>
                        </div>
                      </div>
                    </div>
                    <Button 
                      onClick={copyBankData}
                      className="w-full bg-church-primary hover:bg-church-primary-dark text-white rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                    >
                      <CreditCard className="w-4 h-4 mr-2" />
                      Copiar Dados Bancários
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Campanha do Quilo do Amor */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="rounded-3xl overflow-hidden shadow-lg">
                <CardContent className="p-12 text-center space-y-8">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                    <ShoppingCart className="w-10 h-10 text-orange-600" />
                  </div>
                  
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Campanha do Quilo do Amor
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                      Ajude famílias necessitadas doando alimentos não perecíveis. 
                      Sua contribuição faz a diferença na vida de quem mais precisa.
                    </p>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-2xl">
                    <h3 className="text-lg font-semibold mb-3">Como funciona:</h3>
                    <ul className="text-left space-y-2 max-w-lg mx-auto">
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-primary text-white rounded-full text-sm flex items-center justify-center mt-0.5 flex-shrink-0">1</span>
                        <span>Acesse nossa plataforma online</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-primary text-white rounded-full text-sm flex items-center justify-center mt-0.5 flex-shrink-0">2</span>
                        <span>Escolha qual alimento você deseja doar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-primary text-white rounded-full text-sm flex items-center justify-center mt-0.5 flex-shrink-0">3</span>
                        <span>Confirme sua doação para evitar duplicatas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-primary text-white rounded-full text-sm flex items-center justify-center mt-0.5 flex-shrink-0">4</span>
                        <span>Traga o alimento na data combinada</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex justify-center">
                    <Button 
                      size="lg" 
                      onClick={handleQuiloDoAmor}
                      className="bg-church-primary hover:bg-church-primary-dark text-white rounded-2xl text-lg px-8 py-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                    >
                      <Heart className="w-5 h-5 mr-2" />
                      Participar da Campanha
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Modal Quilo do Amor */}
        {showQuiloModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[90] p-4">
            <Card className="max-w-md w-full rounded-3xl">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-3">Sistema de Doação Inteligente</h3>
                  <p className="text-muted-foreground">
                    Nossa plataforma permite que você veja em tempo real quais alimentos 
                    são mais necessários, evitando excesso de itens do mesmo tipo e 
                    garantindo uma distribuição equilibrada.
                  </p>
                </div>

                <div className="space-y-3">
                  <Button 
                    onClick={goToQuiloSite}
                    className="w-full bg-church-primary hover:bg-church-primary-dark text-white rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Acessar Plataforma
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setShowQuiloModal(false)}
                    className="w-full rounded-2xl border-church-primary text-church-primary hover:bg-church-primary hover:text-white transition-all duration-300"
                  >
                    Fechar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Impacto */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Nosso Impacto</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">250+</div>
                  <p className="text-muted-foreground">Famílias Assistidas</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">1.5k</div>
                  <p className="text-muted-foreground">Quilos de Alimentos</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">12</div>
                  <p className="text-muted-foreground">Meses de Campanha</p>
                </div>
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

export default Doacoes;