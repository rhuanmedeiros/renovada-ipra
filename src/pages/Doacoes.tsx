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
import { DynamicBackgroundDesktop } from "@/components/DynamicBackgroundDesktop";

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
    window.open('https://quilodoamor.renovada.org/', '_blank');
    setShowQuiloModal(false);
  };

  return (
  <DynamicBackgroundDesktop enableMobile={true}>
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="pt-16">
        {/* Doações Financeiras */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Contribua</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* PIX */}
                <Card className="rounded-lg md:rounded-2xl xl:rounded-3xl shadow-lg flex flex-col transform transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader className="text-center pb-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Smartphone className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl">PIX</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col px-6">
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
                    <Button className="w-full bg-church-primary hover:bg-church-primary-dark text-white rounded-lg md:rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                      <Smartphone className="w-4 h-4 mr-2" />
                      Doar via PIX
                    </Button>
                  </CardContent>
                </Card>

                {/* Transferência Bancária */}
                <Card className="rounded-lg md:rounded-2xl xl:rounded-3xl shadow-lg flex flex-col transform transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader className="text-center pb-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CreditCard className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl">Transferência Bancária</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col px-6">
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
                      className="w-full bg-church-primary hover:bg-church-primary-dark text-white rounded-lg md:rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
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

        {/* Seção Generosidade */}
        <section className="py-8 md:py-12 bg-gradient-section">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                Sua <span className="text-primary">Generosidade</span> Faz a Diferença
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                Cada contribuição nos ajuda a impactar vidas, apoiar nossa comunidade 
                e expandir o Reino de Deus.
              </p>
            </div>
          </div>
        </section>

        {/* Campanha do Quilo do Amor */}
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-section">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="max-w-3xl mx-auto">
              <Card className="rounded-lg md:rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.01]">
                <CardContent className="p-6 md:p-8 lg:p-10 text-center space-y-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                    <ShoppingCart className="w-8 h-8 md:w-10 md:h-10 text-orange-600" />
                  </div>
                  
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      Campanha do Quilo do Amor
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                      Ajude famílias necessitadas doando alimentos não perecíveis. 
                      Sua contribuição faz a diferença na vida de quem mais precisa.
                    </p>
                  </div>
                  
                  <div className="bg-muted p-4 md:p-6 rounded-xl">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">Como funciona:</h3>
                    <ul className="text-left space-y-2 max-w-lg mx-auto">
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-primary text-white rounded-full text-sm flex items-center justify-center mt-0.5 flex-shrink-0">1</span>
                        <span className="text-sm md:text-base">Acesse nossa plataforma online</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-primary text-white rounded-full text-sm flex items-center justify-center mt-0.5 flex-shrink-0">2</span>
                        <span className="text-sm md:text-base">Escolha qual alimento você deseja doar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-primary text-white rounded-full text-sm flex items-center justify-center mt-0.5 flex-shrink-0">3</span>
                        <span className="text-sm md:text-base">Confirme sua doação para evitar duplicatas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-primary text-white rounded-full text-sm flex items-center justify-center mt-0.5 flex-shrink-0">4</span>
                        <span className="text-sm md:text-base">Traga o alimento na data combinada</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex justify-center">
                    <Button 
                      size="lg" 
                      onClick={handleQuiloDoAmor}
                      className="bg-church-primary hover:bg-church-primary-dark text-white rounded-lg md:rounded-2xl text-base md:text-lg px-6 py-4 md:px-8 md:py-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
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
            <Card className="max-w-md w-full rounded-lg md:rounded-2xl xl:rounded-3xl">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                
                <div>
                  <h3 className="text-3xl font-semibold mb-4 text-foreground">Sistema de Doação Inteligente</h3>
                  <p className="text-muted-foreground">
                    Nossa plataforma permite que você veja em tempo real quais alimentos 
                    são mais necessários, evitando excesso de itens do mesmo tipo e 
                    garantindo uma distribuição equilibrada.
                  </p>
                </div>

                <div className="space-y-3">
                  <Button 
                    onClick={goToQuiloSite}
                    className="w-full bg-church-primary hover:bg-church-primary-dark text-white rounded-lg md:rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Acessar Plataforma
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setShowQuiloModal(false)}
                    className="w-full rounded-lg md:rounded-2xl border-church-primary text-church-primary hover:bg-church-primary hover:text-white transition-all duration-300"
                  >
                    Fechar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Impacto */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Nosso Impacto</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary">30+</div>
                  <p className="text-sm md:text-base text-muted-foreground">Famílias Assistidas</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary">500kg</div>
                  <p className="text-sm md:text-base text-muted-foreground">Quilos de Alimentos</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary">12</div>
                  <p className="text-sm md:text-base text-muted-foreground">Meses de Campanha</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  </DynamicBackgroundDesktop>
  );
};

export default Doacoes;