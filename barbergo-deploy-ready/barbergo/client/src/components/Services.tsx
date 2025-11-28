import { Button } from "@/components/ui/button";
import { Scissors, Sparkles } from "lucide-react";

export default function Services() {
  const whatsappLink = "https://wa.me/5512991084481?text=Olá,%20gostaria%20de%20agendar%20um%20corte%20premium%20a%20domicílio%20em%20Ilhabela%20com%20a%20BarberGo%20?";

  const services = [
    {
      id: 1,
      title: "Corte Completo",
      description: "Corte + Sobrancelha com técnica de visagismo e acabamento premium.",
      price: "R$ 90,00",
      icon: Scissors,
    },
    {
      id: 2,
      title: "Barba Terapêutica",
      description: "Ritual completo com toalha quente, óleos essenciais e massagem facial.",
      price: "R$ 50,00",
      icon: Sparkles,
    },
    {
      id: 3,
      title: "Pacote Completo",
      description: "Corte + Sobrancelha + Barba. A transformação completa para o homem moderno.",
      price: "R$ 130,00",
      icon: Scissors,
      featured: true,
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Nossos Serviços Premium
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada serviço BarberGo é um investimento no seu visual e bem-estar, com produtos de alta performance e técnicas refinadas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`rounded-xl p-8 transition-all hover:shadow-lg ${
                  service.featured
                    ? "bg-primary text-white shadow-lg scale-105 md:scale-110"
                    : "bg-white text-foreground border border-border hover:border-primary"
                }`}
              >
                {/* Icon */}
                <div className={`mb-6 inline-flex p-3 rounded-lg ${
                  service.featured ? "bg-white/20" : "bg-primary/10"
                }`}>
                  <IconComponent size={32} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>

                {/* Description */}
                <p className={`mb-6 leading-relaxed ${
                  service.featured ? "text-white/90" : "text-muted-foreground"
                }`}>
                  {service.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <p className={`text-3xl font-bold ${
                    service.featured ? "text-white" : "text-primary"
                  }`}>
                    {service.price}
                  </p>
                </div>

                {/* CTA Button */}
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
                  <Button
                    className={`w-full font-semibold py-2 ${
                      service.featured
                        ? "bg-white text-primary hover:bg-white/90"
                        : "bg-primary text-white hover:bg-primary/90"
                    }`}
                  >
                    Agendar
                  </Button>
                </a>

                {service.featured && (
                  <p className="text-center text-white/70 text-sm mt-4 font-semibold">
                    ⭐ Mais Popular
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-xl p-8 border border-border max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Atendimento VIP / Horário Flexível
          </h3>
          <p className="text-muted-foreground mb-6">
            Para agendamentos fora do horário comercial ou de última hora, oferecemos serviço com exclusividade e flexibilidade total para atender às suas necessidades urgentes.
          </p>
          <p className="text-primary font-semibold" style={{display: 'none'}}>
            Preço sob consulta via WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}
