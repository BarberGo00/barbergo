import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappLink = "https://wa.me/5512991084481?text=Olá,%20gostaria%20de%20agendar%20um%20corte%20premium%20a%20domicílio%20em%20Ilhabela%20com%20a%20BarberGo%20?";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="BarberGo Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#servicos" className="text-foreground hover:text-primary font-medium transition">
            Serviços
          </a>
          <a href="#experiencia" className="text-foreground hover:text-primary font-medium transition">
            Experiência
          </a>
          <a href="#galeria" className="text-foreground hover:text-primary font-medium transition">
            Galeria
          </a>
          <a href="#contato" className="text-foreground hover:text-primary font-medium transition">
            Contato
          </a>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
              Agendar Agora
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <nav className="flex flex-col gap-4 p-4">
            <a href="#servicos" className="text-foreground hover:text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>
              Serviços
            </a>
            <a href="#experiencia" className="text-foreground hover:text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>
              Experiência
            </a>
            <a href="#galeria" className="text-foreground hover:text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>
              Galeria
            </a>
            <a href="#contato" className="text-foreground hover:text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>
              Contato
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                Agendar Agora
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
