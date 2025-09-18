import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  const [copiedPix, setCopiedPix] = useState(false);
  const [showQuiloModal, setShowQuiloModal] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
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
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Sua <span className="text-primary">Generosidade</span> Faz a Diferença
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Cada contribuição nos ajuda a impactar vidas, apoiar nossa comunidade 
                e expandir o Reino de Deus através de diferentes formas de doação.
              </p>
            </div>
          </div>
        </section>

        {/* Doações Financeiras */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Doações Financeiras</h2>
              
              {/* Alerta sobre dados fictícios */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-8 text-center">
                <p className="text-yellow-800 font-medium">
                  ⚠️ Os dados bancários apresentados são fictícios e servem apenas para demonstração
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* PIX */}
                <Card className="rounded-3xl shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Smartphone className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">PIX</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Chave PIX (CNPJ):</p>
                      <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                        <span className="font-mono text-sm flex-1">12.345.678/0001-90</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard('12.345.678/0001-90')}
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
                    <Button className="w-full rounded-2xl">
                      <Smartphone className="w-4 h-4 mr-2" />
                      Doar via PIX
                    </Button>
                  </CardContent>
                </Card>

                {/* Transferência Bancária */}
                <Card className="rounded-3xl shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CreditCard className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Transferência Bancária</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-muted-foreground">Banco:</p>
                        <p className="font-semibold">Banco do Brasil (001)</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Agência:</p>
                        <p className="font-semibold">1234-5</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Conta Corrente:</p>
                        <p className="font-semibold">67890-1</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Favorecido:</p>
                        <p className="font-semibold">Igreja Renovada de Astorga</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">CNPJ:</p>
                        <p className="font-semibold">12.345.678/0001-90</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full rounded-2xl">
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
                  
                  <div className="bg-slate-50 p-6 rounded-2xl">
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

                  <Button 
                    size="lg" 
                    onClick={handleQuiloDoAmor}
                    className="rounded-2xl text-lg px-8 py-6"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Participar da Campanha
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Modal Quilo do Amor */}
        {showQuiloModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
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
                    className="w-full rounded-2xl"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Acessar Plataforma
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setShowQuiloModal(false)}
                    className="w-full rounded-2xl"
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
    </div>
  );
};

export default Doacoes;