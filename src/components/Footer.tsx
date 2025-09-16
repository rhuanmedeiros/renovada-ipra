import { Button } from "@/components/ui/button";
import { Church, Instagram, Youtube, MapPin, Clock, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Church className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Igreja Esperança</span>
            </div>
            <p className="text-muted-foreground">
              Uma comunidade acolhedora onde você pode crescer em fé, encontrar propósito e fazer a diferença.
            </p>
            {/* Social Links */}
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="rounded-xl">
                <Youtube className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-xl">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <Link to="/sermoes" className="block text-muted-foreground hover:text-primary transition-colors">
                Sermões
              </Link>
              <Link to="/ministerios" className="block text-muted-foreground hover:text-primary transition-colors">
                Ministérios
              </Link>
              <Link to="/eventos" className="block text-muted-foreground hover:text-primary transition-colors">
                Eventos
              </Link>
              <Link to="/doe" className="block text-muted-foreground hover:text-primary transition-colors">
                Doações
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground text-sm">
                  Rua da Esperança, 123<br />Centro, São Paulo - SP
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground text-sm">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground text-sm">contato@igrejaesperanca.com</span>
              </div>
            </div>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="font-semibold mb-4">Horários de Culto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-muted-foreground mt-1" />
                <div>
                  <p className="text-sm font-medium">Domingo</p>
                  <p className="text-muted-foreground text-sm">9h e 19h</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-muted-foreground mt-1" />
                <div>
                  <p className="text-sm font-medium">Quarta-feira</p>
                  <p className="text-muted-foreground text-sm">19h30 - Oração</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Igreja Esperança. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacidade" className="text-muted-foreground text-sm hover:text-primary">
                Privacidade
              </Link>
              <Link to="/termos" className="text-muted-foreground text-sm hover:text-primary">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;