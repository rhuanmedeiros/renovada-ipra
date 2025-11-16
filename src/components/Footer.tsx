import { Button } from "@/components/ui/button";
import { Church, Instagram, Youtube, MapPin, Clock, Phone, Mail, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import iconRenovada from "@/assets/ICON-RENOVADA.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-700">
      <div className="container mx-auto px-4 py-16 xl:py-20 2xl:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12 2xl:gap-16 mb-8 xl:mb-12 2xl:mb-16">
          {/* Logo and Description */}
          <div className="space-y-4 xl:space-y-6 2xl:space-y-8">
            <div className="flex items-center space-x-2 xl:space-x-3 2xl:space-x-4">
              <img src={iconRenovada} alt="Logo Renovada" className="w-10 h-10 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16 object-contain" />
              <span className="text-xl xl:text-2xl 2xl:text-3xl font-bold text-white">IGREJA RENOVADA</span>
            </div>
            <p className="text-slate-300 xl:text-lg 2xl:text-xl leading-relaxed">
              A Igreja Renovada existe para aproximar as pessoas de Deus e ajudá-las a seguir os passos de Jesus.
            </p>
            {/* Social Links */}
            <div className="flex space-x-2 xl:space-x-3 2xl:space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-xl xl:rounded-2xl hover:bg-slate-800 text-slate-300 hover:text-white xl:h-12 xl:w-12 2xl:h-16 2xl:w-16"
                asChild
              >
                <a 
                  href="https://www.youtube.com/@renovadaigreja" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-xl xl:rounded-2xl hover:bg-slate-800 text-slate-300 hover:text-white xl:h-12 xl:w-12 2xl:h-16 2xl:w-16"
                asChild
              >
                <a 
                  href="https://www.instagram.com/renovadaigreja/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-xl xl:rounded-2xl hover:bg-slate-800 text-slate-300 hover:text-white xl:h-12 xl:w-12 2xl:h-16 2xl:w-16"
                asChild
              >
                <a 
                  href="https://www.facebook.com/renovadaigreja" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-xl xl:rounded-2xl hover:bg-slate-800 text-slate-300 hover:text-white xl:h-12 xl:w-12 2xl:h-16 2xl:w-16"
                asChild
              >
                <a 
                  href="https://x.com/renovadaigreja" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Twitter/X"
                >
                  <Twitter className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 xl:mb-6 2xl:mb-8 text-white text-lg xl:text-xl 2xl:text-2xl">Links Rápidos</h3>
            <div className="space-y-2 xl:space-y-3 2xl:space-y-4">
              <Link to="/sermoes" className="block text-slate-300 hover:text-white transition-colors xl:text-lg 2xl:text-xl">
                Sermões
              </Link>
              <Link to="/ministerios" className="block text-slate-300 hover:text-white transition-colors xl:text-lg 2xl:text-xl">
                Ministérios
              </Link>
              <Link to="/eventos" className="block text-slate-300 hover:text-white transition-colors xl:text-lg 2xl:text-xl">
                Eventos
              </Link>
              <Link to="/doacoes" className="block text-slate-300 hover:text-white transition-colors xl:text-lg 2xl:text-xl">
                Doações
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 xl:mb-6 2xl:mb-8 text-white text-lg xl:text-xl 2xl:text-2xl">Contato</h3>
            <div className="space-y-3 xl:space-y-4 2xl:space-y-6">
              <div className="flex items-start space-x-2 xl:space-x-3 2xl:space-x-4">
                <MapPin className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 text-slate-400 mt-1" />
                <span className="text-slate-300 text-sm xl:text-base 2xl:text-lg leading-relaxed">
                  Camilo Ramalho Mata 181<br />Astorga, PR, Brazil<br />86730-000
                </span>
              </div>
              <div className="flex items-center space-x-2 xl:space-x-3 2xl:space-x-4">
                <Phone className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 text-slate-400" />
                <span className="text-slate-300 text-sm xl:text-base 2xl:text-lg">+55 44 99861-9596</span>
              </div>
              <div className="flex items-center space-x-2 xl:space-x-3 2xl:space-x-4">
                <Mail className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 text-slate-400" />
                <span className="text-slate-300 text-sm xl:text-base 2xl:text-lg">contato@renovada.org</span>
              </div>
            </div>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="font-semibold mb-4 xl:mb-6 2xl:mb-8 text-white text-lg xl:text-xl 2xl:text-2xl">Horários</h3>
            <div className="space-y-3 xl:space-y-4 2xl:space-y-6">
              <div className="flex items-start space-x-2 xl:space-x-3 2xl:space-x-4">
                <Clock className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 text-slate-400 mt-1" />
                <div>
                  <p className="text-sm xl:text-base 2xl:text-lg font-medium text-white">Cultos Domingo</p>
                  <p className="text-slate-300 text-sm xl:text-base 2xl:text-lg">10h e 18h</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 xl:space-x-3 2xl:space-x-4">
                <Clock className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 text-slate-400 mt-1" />
                <div>
                  <p className="text-sm xl:text-base 2xl:text-lg font-medium text-white">Oração Terça</p>
                  <p className="text-slate-300 text-sm xl:text-base 2xl:text-lg">19h</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 xl:space-x-3 2xl:space-x-4">
                <Clock className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 text-slate-400 mt-1" />
                <div>
                  <p className="text-sm xl:text-base 2xl:text-lg font-medium text-white">Aliança Sábados</p>
                  <p className="text-slate-300 text-sm xl:text-base 2xl:text-lg">19h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 xl:pt-12 2xl:pt-16">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-y-4">
            <p className="text-slate-400 text-sm xl:text-base 2xl:text-lg">
              © 2024 Igreja Renovada. Todos os direitos reservados.
            </p>
            <p className="text-slate-400 text-sm xl:text-base 2xl:text-lg">
                Construído com amor por{' '}
                <a
                  href="https://geniusite.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white"
                >
                  GeniuSite
                </a>
            </p>
            <div className="flex space-x-4 xl:space-x-6 2xl:space-x-8">
              <Link to="/privacidade" className="text-slate-400 text-sm xl:text-base 2xl:text-lg hover:text-white">
                Privacidade
              </Link>
              <Link to="/termos" className="text-slate-400 text-sm xl:text-base 2xl:text-lg hover:text-white">
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
