import { Button } from "@/components/ui/button";
import { Church, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/ICON-RENOVADA.png" alt="Logo Renovada" className="w-12 h-10 object-contain" />
            <span className="text-xl font-bold">Igreja Renovada</span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/ministerios" className="text-foreground hover:text-primary transition-colors">
              Ministérios
            </Link>
            <Link to="/sermoes" className="text-foreground hover:text-primary transition-colors">
              Sermões
            </Link>
            <Link to="/eventos" className="text-foreground hover:text-primary transition-colors">
              Eventos
            </Link>
            <Link to="/contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Link to="/doacoes">
              <Button className="hidden sm:inline-flex rounded-2xl">
                Doe Agora
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;