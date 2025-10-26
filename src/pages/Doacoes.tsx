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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-church-primary/25 dark:from-slate-900 dark:to-church-primary/20">
      <Header />
      
      <main className="pt-16">
        {/* Doações Financeiras */}
        <section className="py-20 xl:py-28 2xl:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto">
              <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center mb-8 xl:mb-12 2xl:mb-16">Contribua</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12 2xl:gap-16">
                {/* PIX */}
                <Card className="rounded-lg md:rounded-2xl xl:rounded-3xl 2xl:rounded-[2.5rem] shadow-lg xl:shadow-2xl flex flex-col transform transition-all duration-300 hover:scale-[1.02] xl:hover:scale-[1.03]">
                  <CardHeader className="text-center pb-4 xl:pb-6 2xl:pb-8">
                    <div className="w-16 h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 xl:mb-6 2xl:mb-8">
                      <Smartphone className="w-8 h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 text-primary" />
                    </div>
                    <CardTitle className="text-2xl xl:text-3xl 2xl:text-4xl">PIX</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 xl:space-y-6 2xl:space-y-8 flex-1 flex flex-col px-6 xl:px-8 2xl:px-10">
                    <div className="flex-1 space-y-4 xl:space-y-6 2xl:space-y-8">
                      <div>
                        <p className="text-sm xl:text-base 2xl:text-lg text-muted-foreground mb-2 xl:mb-3 2xl:mb-4">Chave PIX (CNPJ):</p>
                        <div className="flex items-center gap-2 xl:gap-3 2xl:gap-4 p-3 xl:p-4 2xl:p-5 bg-muted rounded-lg xl:rounded-xl 2xl:rounded-2xl">
                          <span className="font-mono text-sm xl:text-base 2xl:text-lg flex-1">01.570.203/0001-86</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyToClipboard('01.570.203/0001-86')}
                            className="h-8 w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12 p-0"
                          >
                            {copiedPix ? <Check className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6" /> : <Copy className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6" />}
                          </Button>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm xl:text-base 2xl:text-lg text-muted-foreground mb-2 xl:mb-3 2xl:mb-4">Favorecido:</p>
                        <p className="font-semibold xl:text-lg 2xl:text-xl">Igreja Renovada de Astorga</p>
                      </div>
                    </div>
                    <Button className="w-full bg-church-primary hover:bg-church-primary-dark text-white rounded-lg md:rounded-2xl xl:rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg xl:py-4 2xl:py-5 xl:text-lg 2xl:text-xl">
                      <Smartphone className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 mr-2" />
                      Doar via PIX
                    </Button>
                  </CardContent>
                </Card>

                {/* Transferência Bancária */}
                <Card className="rounded-lg md:rounded-2xl xl:rounded-3xl 2xl:rounded-[2.5rem] shadow-lg xl:shadow-2xl flex flex-col transform transition-all duration-300 hover:scale-[1.02] xl:hover:scale-[1.03]">
                  <CardHeader className="text-center pb-4 xl:pb-6 2xl:pb-8">
                    <div className="w-16 h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 xl:mb-6 2xl:mb-8">
                      <CreditCard className="w-8 h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 text-primary" />
                    </div>
                    <CardTitle className="text-2xl xl:text-3xl 2xl:text-4xl">Transferência Bancária</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 xl:space-y-6 2xl:space-y-8 flex-1 flex flex-col px-6 xl:px-8 2xl:px-10">
                    <div className="flex-1">
                      <div className="space-y-3 xl:space-y-4 2xl:space-y-6">
                        <div>
                          <p className="text-sm xl:text-base 2xl:text-lg text-muted-foreground">Banco:</p>
                          <p className="font-semibold xl:text-lg 2xl:text-xl">Sicredi (748)</p>
                        </div>
                        <div>
                          <p className="text-sm xl:text-base 2xl:text-lg text-muted-foreground">Agência:</p>
                          <p className="font-semibold xl:text-lg 2xl:text-xl">0718</p>
                        </div>
                        <div>
                          <p className="text-sm xl:text-base 2xl:text-lg text-muted-foreground">Conta Corrente:</p>
                          <p className="font-semibold xl:text-lg 2xl:text-xl">80381-2</p>
                        </div>
                        <div>
                          <p className="text-sm xl:text-base 2xl:text-lg text-muted-foreground">Favorecido:</p>
                          <p className="font-semibold xl:text-lg 2xl:text-xl">Igreja Renovada de Astorga</p>
                        </div>
                        <div>
                          <p className="text-sm xl:text-base 2xl:text-lg text-muted-foreground">CNPJ:</p>
                          <p className="font-semibold xl:text-lg 2xl:text-xl">01.570.203/0001-86</p>
                        </div>
                      </div>
                    </div>
                    <Button 
                      onClick={copyBankData}
                      className="w-full bg-church-primary hover:bg-church-primary-dark text-white rounded-lg md:rounded-2xl xl:rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg xl:py-4 2xl:py-5 xl:text-lg 2xl:text-xl"
                    >
                      <CreditCard className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 mr-2" />
                      Copiar Dados Bancários
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Generosidade */}
        <section className="py-10 xl:py-16 2xl:py-20 bg-gradient-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-6 xl:mb-8 2xl:mb-12">
                Sua <span className="text-primary">Generosidade</span> Faz a Diferença
              </h2>
              <p className="text-xl xl:text-2xl 2xl:text-3xl text-muted-foreground mb-8 leading-relaxed">
                Cada contribuição nos ajuda a impactar vidas, apoiar nossa comunidade 
                e expandir o Reino de Deus.
              </p>
            </div>
          </div>
        </section>

        {/* Campanha do Quilo do Amor */}
        <section className="py-8 xl:py-28 2xl:py-32 bg-gradient-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
              <Card className="rounded-lg md:rounded-2xl xl:rounded-3xl 2xl:rounded-[2.5rem] overflow-hidden shadow-lg xl:shadow-2xl transform transition-all duration-300 hover:scale-[1.01] xl:hover:scale-[1.02]">
                <CardContent className="p-12 xl:p-16 2xl:p-20 text-center space-y-8 xl:space-y-12 2xl:space-y-16">
                  <div className="w-20 h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                    <ShoppingCart className="w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 text-orange-600" />
                  </div>
                  
                  <div>
                    <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 xl:mb-6 2xl:mb-8">
                      Campanha do Quilo do Amor
                    </h2>
                    <p className="text-lg xl:text-2xl 2xl:text-3xl text-muted-foreground max-w-2xl xl:max-w-4xl 2xl:max-w-5xl mx-auto leading-relaxed">
                      Ajude famílias necessitadas doando alimentos não perecíveis. 
                      Sua contribuição faz a diferença na vida de quem mais precisa.
                    </p>
                  </div>
                  
                  <div className="bg-muted p-6 xl:p-8 2xl:p-10 rounded-2xl xl:rounded-3xl">
                    <h3 className="text-3xl font-semibold mb-4 text-foreground">Como funciona:</h3>
                    <ul className="text-left space-y-2 xl:space-y-3 2xl:space-y-4 max-w-lg xl:max-w-2xl 2xl:max-w-3xl mx-auto">
                      <li className="flex items-start gap-2 xl:gap-3 2xl:gap-4">
                        <span className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 bg-primary text-white rounded-full text-sm xl:text-base 2xl:text-lg flex items-center justify-center mt-0.5 flex-shrink-0">1</span>
                        <span className="xl:text-lg 2xl:text-xl">Acesse nossa plataforma online</span>
                      </li>
                      <li className="flex items-start gap-2 xl:gap-3 2xl:gap-4">
                        <span className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 bg-primary text-white rounded-full text-sm xl:text-base 2xl:text-lg flex items-center justify-center mt-0.5 flex-shrink-0">2</span>
                        <span className="xl:text-lg 2xl:text-xl">Escolha qual alimento você deseja doar</span>
                      </li>
                      <li className="flex items-start gap-2 xl:gap-3 2xl:gap-4">
                        <span className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 bg-primary text-white rounded-full text-sm xl:text-base 2xl:text-lg flex items-center justify-center mt-0.5 flex-shrink-0">3</span>
                        <span className="xl:text-lg 2xl:text-xl">Confirme sua doação para evitar duplicatas</span>
                      </li>
                      <li className="flex items-start gap-2 xl:gap-3 2xl:gap-4">
                        <span className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 bg-primary text-white rounded-full text-sm xl:text-base 2xl:text-lg flex items-center justify-center mt-0.5 flex-shrink-0">4</span>
                        <span className="xl:text-lg 2xl:text-xl">Traga o alimento na data combinada</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex justify-center">
                    <Button 
                      size="lg" 
                      onClick={handleQuiloDoAmor}
                      className="bg-church-primary hover:bg-church-primary-dark text-white rounded-lg md:rounded-2xl xl:rounded-3xl text-lg xl:text-xl 2xl:text-2xl px-8 py-6 xl:px-12 xl:py-8 2xl:px-16 2xl:py-10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                    >
                      <Heart className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8 mr-2" />
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
        <section className="py-8 xl:py-28 2xl:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto text-center">
              <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-8 xl:mb-12 2xl:mb-16">Nosso Impacto</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12 2xl:gap-16">
                <div className="space-y-2 xl:space-y-4 2xl:space-y-6">
                  <div className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-primary">250+</div>
                  <p className="text-muted-foreground xl:text-lg 2xl:text-xl">Famílias Assistidas</p>
                </div>
                <div className="space-y-2 xl:space-y-4 2xl:space-y-6">
                  <div className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-primary">1.5k</div>
                  <p className="text-muted-foreground xl:text-lg 2xl:text-xl">Quilos de Alimentos</p>
                </div>
                <div className="space-y-2 xl:space-y-4 2xl:space-y-6">
                  <div className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-primary">12</div>
                  <p className="text-muted-foreground xl:text-lg 2xl:text-xl">Meses de Campanha</p>
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