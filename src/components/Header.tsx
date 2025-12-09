import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              Nexus<span className="text-primary">Risk</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg">
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="container-custom py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="hero" size="lg" className="w-full mt-4">
              Fale Conosco
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
