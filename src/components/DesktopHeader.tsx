import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ui/theme-toggle";
import iconRenovada from "@/assets/ICON-RENOVADA.png";

// Itens do menu unificados - edite aqui para adicionar/remover itens
const menuItems = [
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/cultos", label: "Cultos" },
  { to: "/ministerios", label: "Ministérios" },
  { to: "/sermoes", label: "Sermões" },
  { to: "/contato", label: "Contato" }
];

const DesktopHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  // Desktop header uses static theme-aware classes (no contrast sampling)
  const textClass = "text-foreground";
  const iconClass = "text-foreground";
  const menuItemHover = "hover:text-primary";

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-[9999] transition-colors duration-200 hidden md:block">
      <div className="container mx-auto px-6 py-4 xl:py-6 2xl:py-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <img src={iconRenovada} alt="Logo Renovada" className="w-12 h-10 xl:w-16 xl:h-12 2xl:w-20 2xl:h-16 object-contain" />
            <span className="md:hidden text-lg font-bold text-church-primary dark:text-white">IGREJA RENOVADA</span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8 xl:space-x-12 2xl:space-x-16">
            {menuItems.map((item) => (
              <Link 
                key={item.to}
                to={item.to} 
                className={`${textClass} ${menuItemHover} transition-colors text-base xl:text-lg 2xl:text-xl font-medium`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button + Menu Toggle */}
          <div className="flex items-center space-x-4 xl:space-x-6">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <Link to="/doacoes">
              <div className="hidden sm:inline-flex">
                <Button 
                  size="sm"
                  className="bg-church-primary hover:bg-church-primary-dark text-white dark:text-black rounded-lg md:rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg xl:px-6 xl:py-3 xl:text-base 2xl:px-8 2xl:py-4 2xl:text-lg"
                >
                  Contribua
                </Button>
              </div>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent p-0" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className={`w-5 h-5 ${iconClass}`} /> : <Menu className={`w-5 h-5 ${iconClass}`} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-border mt-4 pt-4">
            <div className="px-6 pb-6">
              {/* Mobile navigation items */}
              <div className="flex flex-col space-y-0">
                {menuItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={closeMenu}
                    className="block text-foreground hover:text-primary transition-colors text-base font-medium py-2"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Theme Toggle for Mobile */}
              <div className="flex items-center justify-start py-4 border-t border-border mt-2">
                <ThemeToggle />
              </div>
              
              <Link to="/doacoes" onClick={closeMenu}>
                <div className="w-full mt-2">
                  <Button 
                    size="sm"
                    className="w-full bg-church-primary hover:bg-church-primary-dark text-white dark:text-black rounded-lg md:rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  >
                    Contribua
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

export default DesktopHeader;
