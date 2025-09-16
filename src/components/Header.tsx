import { Button } from "@/components/ui/button";
import { Church, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Church className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Igreja Esperança</span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Início
            </Link>
            <Link to="/sermoes" className="text-foreground hover:text-primary transition-colors">
              Sermões
            </Link>
            <Link to="/ministerios" className="text-foreground hover:text-primary transition-colors">
              Ministérios
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
            <Button className="hidden sm:inline-flex rounded-2xl">
              Doe Agora
            </Button>
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