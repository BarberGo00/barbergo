import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12 max-w-5xl mx-auto">
          {/* Brand */}
          <div className="space-y-4">
            <img src="/logo.png" alt="BarberGo Logo" className="h-12 w-auto" />
            <p className="text-white/70 leading-relaxed">
              Atendimento premium a domicílio em Ilhabela. Estilo e conforto onde você estiver.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-white/70 hover:text-white transition">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#experiencia" className="text-white/70 hover:text-white transition">
                  Experiência
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white/70 hover:text-white transition">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <a href="tel:+5512991084481" className="text-white/70 hover:text-white transition">
                  (12) 99108-4481
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-primary flex-shrink-0" />
                <span className="text-white/70">Ilhabela, SP</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-primary flex-shrink-0" />
                <span className="text-white/70">Mediante agendamento</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Agende Agora</h4>
            <p className="text-white/70 text-sm">
              Clique no botão abaixo e converse conosco via WhatsApp.
            </p>
            <a
              href="https://wa.me/5512991084481?text=Olá,%20gostaria%20de%20agendar%20um%20corte%20premium%20a%20domicílio%20em%20Ilhabela%20com%20a%20BarberGo%20?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition"
              style={{backgroundColor: '#197143'}}
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <p>&copy; {currentYear} BarberGo. Todos os direitos reservados.</p>
            <p>Barbearia Premium a Domicílio • Ilhabela, SP</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
