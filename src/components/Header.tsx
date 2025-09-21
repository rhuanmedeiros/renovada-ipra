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
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-[9999] transition-colors duration-200">
      <div className="container mx-auto px-6 py-4 xl:py-6 2xl:py-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <img src="/ICON-RENOVADA.png" alt="Logo Renovada" className="w-12 h-10 xl:w-16 xl:h-12 2xl:w-20 2xl:h-16 object-contain" />
            <span className="text-xl xl:text-2xl 2xl:text-3xl font-bold">Igreja Renovada</span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8 xl:space-x-12 2xl:space-x-16">
            {menuItems.map((item) => (
              <Link 
                key={item.to}
                to={item.to} 
                className="text-foreground hover:text-primary transition-colors text-base xl:text-lg 2xl:text-xl font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4 xl:space-x-6">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <Link to="/doacoes">
              <div className="hidden sm:inline-flex">
                <Button 
                  size="sm"
                  className="bg-church-primary hover:bg-church-primary-dark text-white dark:text-black rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg xl:px-6 xl:py-3 xl:text-base 2xl:px-8 2xl:py-4 2xl:text-lg"
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