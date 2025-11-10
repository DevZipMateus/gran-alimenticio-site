import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Início", id: "hero", isHome: true },
    { label: "Sobre", id: "sobre", isHome: true },
    { label: "Serviços", id: "servicos", isHome: true },
    { label: "Vitrine", id: "vitrine", path: "/vitrine" },
    { label: "Contato", id: "contato", isHome: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Gran Alimentício" className="h-10 sm:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              item.path ? (
                <Link
                  key={item.id}
                  to={item.path}
                  className="text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => {
                    if (location.pathname !== "/") {
                      window.location.href = `/#${item.id}`;
                    } else {
                      scrollToSection(item.id);
                    }
                  }}
                  className="text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base"
                >
                  {item.label}
                </button>
              )
            ))}
            <Button
              onClick={() => window.open("https://wa.me/5575988567568", "_blank")}
              variant="default"
              size="sm"
              className="text-xs sm:text-sm"
            >
              Fale conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              item.path ? (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground hover:text-primary transition-colors font-medium text-left"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => {
                    if (location.pathname !== "/") {
                      window.location.href = `/#${item.id}`;
                    } else {
                      scrollToSection(item.id);
                    }
                  }}
                  className="text-foreground hover:text-primary transition-colors font-medium text-left"
                >
                  {item.label}
                </button>
              )
            ))}
            <Button
              onClick={() => window.open("https://wa.me/5575988567568", "_blank")}
              variant="default"
              size="sm"
              className="w-full"
            >
              Fale conosco
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
