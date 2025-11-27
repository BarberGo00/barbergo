import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function HeroSection() {
  const whatsappLink = "https://wa.me/5512991084481?text=Olá,%20gostaria%20de%20agendar%20um%20corte%20premium%20a%20domicílio%20em%20Ilhabela%20com%20a%20BarberGo%20?";

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Rating */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" className="text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold">5.0 - Premium</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Seu Estilo,
            <br />
            Onde Você Estiver
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl font-light max-w-xl mx-auto leading-relaxed">
            BarberGo: A domicílio em Ilhabela. Cortes exclusivos. Atendimento para quem valoriza qualidade e estilo.
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all" style={{backgroundColor: '#1f951d'}}
              >
                Agendar via WhatsApp
              </Button>
            </a>
          </div>

          {/* Secondary Text */}
          <p className="text-sm md:text-base font-light opacity-90 pt-4">
            Atendimento exclusivo • Ilhabela, SP • Horários Flexíveis
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="text-white text-center">
          <p className="text-sm font-light mb-2">Conheça nossos serviços</p>
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
