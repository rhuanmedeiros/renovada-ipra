import { Button } from "@/components/ui/button";
import { Church, Instagram, Youtube, MapPin, Clock, Phone, Mail, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-700">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/ICON-RENOVADA.png" alt="Logo Renovada" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold text-white">Igreja Renovada</span>
            </div>
            <p className="text-slate-300">
              A Igreja Renovada existe para aproximar as pessoas de Deus e ajudá-las a seguir os passos de Jesus.
            </p>
            {/* Social Links */}
            <div className="flex space-x-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white"
                asChild
              >
                <a 
                  href="https://www.youtube.com/@renovadaigreja" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white"
                asChild
              >
                <a 
                  href="https://www.instagram.com/renovadaigreja/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white"
                asChild
              >
                <a 
                  href="https://www.facebook.com/renovadaigreja" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white"
                asChild
              >
                <a 
                  href="https://x.com/renovadaigreja" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Twitter/X"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Links Rápidos</h3>
            <div className="space-y-2">
              <Link to="/sermoes" className="block text-slate-300 hover:text-white transition-colors">
                Sermões
              </Link>
              <Link to="/ministerios" className="block text-slate-300 hover:text-white transition-colors">
                Ministérios
              </Link>
              <Link to="/eventos" className="block text-slate-300 hover:text-white transition-colors">
                Eventos
              </Link>
              <Link to="/doacoes" className="block text-slate-300 hover:text-white transition-colors">
                Doações
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-slate-400 mt-1" />
                <span className="text-slate-300 text-sm">
                  Camilo Ramalho Matta 181<br />Astorga, PR, Brazil<br />86730-000
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-slate-400" />
                <span className="text-slate-300 text-sm">+55 44 9861-9596</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-slate-400" />
                <span className="text-slate-300 text-sm">contato@renovada.org</span>
              </div>
            </div>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Horários</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-slate-400 mt-1" />
                <div>
                  <p className="text-sm font-medium text-white">Cultos Domingo</p>
                  <p className="text-slate-300 text-sm">10h e 18h</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-slate-400 mt-1" />
                <div>
                  <p className="text-sm font-medium text-white">Oração Terça</p>
                  <p className="text-slate-300 text-sm">19h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Igreja Renovada. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacidade" className="text-slate-400 text-sm hover:text-white">
                Privacidade
              </Link>
              <Link to="/termos" className="text-slate-400 text-sm hover:text-white">
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
