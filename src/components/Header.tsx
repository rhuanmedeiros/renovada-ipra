import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ui/theme-toggle";

// Itens do menu unificados - edite aqui para adicionar/remover itens
const menuItems = [
  { to: "/ministerios", label: "Ministérios" },
  { to: "/sermoes", label: "Sermões" },
  { to: "/contato", label: "Contato" }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-[100] transition-colors duration-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <img src="/ICON-RENOVADA.png" alt="Logo Renovada" className="w-12 h-10 object-contain" />
            <span className="text-xl font-bold">Igreja Renovada</span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link 
                key={item.to}
                to={item.to} 
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <Link to="/doacoes">
              <div className="hidden sm:inline-flex">
                <Button 
                  size="sm"
                  className="bg-church-primary hover:bg-church-primary-dark text-white dark:text-black rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                  Doar Agora
                </Button>
              </div>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent p-2" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link 
                  key={item.to}
                  to={item.to} 
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Theme Toggle for Mobile */}
              <div className="flex items-center justify-start py-2">
                <ThemeToggle />
              </div>
              
              <Link to="/doacoes" onClick={closeMenu}>
                <div className="w-full mt-2">
                  <Button 
                    size="sm"
                    className="w-full bg-church-primary hover:bg-church-primary-dark text-white dark:text-black rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  >
                    Doar Agora
                  </Button>
                </div>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;