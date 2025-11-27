import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceOption {
  id: number;
  title: string;
  description: string;
  price: string;
  features: string[];
}

export default function ServicesOptions() {
  const whatsappNumber = "5512991084481";
  
  const serviceOptions: ServiceOption[] = [
    {
      id: 1,
      title: "Corte Completo",
      description: "Corte + Sobrancelha com técnica de visagismo",
      price: "R$ 90,00",
      features: [
        "Corte personalizado",
        "Acabamento de sobrancelha",
        "Técnica de visagismo",
        "Atendimento a domicílio"
      ]
    },
    {
      id: 2,
      title: "Barba Completa",
      description: "Barba terapêutica com toalha quente",
      price: "R$ 50,00",
      features: [
        "Barba terapêutica",
        "Toalha quente",
        "Óleos essenciais",
        "Massagem facial"
      ]
    },
    {
      id: 3,
      title: "Pacote Completo",
      description: "Corte + Sobrancelha + Barba",
      price: "R$ 130,00",
      features: [
        "Corte personalizado",
        "Acabamento de sobrancelha",
        "Barba terapêutica",
        "Transformação completa"
      ]
    }
  ];

  const handleWhatsAppClick = (service: ServiceOption) => {
    const message = `Olá, gostaria de agendar o serviço "${service.title}" (${service.price}) a domicílio em Ilhabela com a BarberGo.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <section id="servicos-opcoes" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Escolha seu Serviço
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selecione a opção que melhor se adequa ao seu estilo e clique para agendar via WhatsApp
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {serviceOptions.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border flex flex-col"
              >
                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 text-sm" style={{display: 'none'}}>
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8 flex-grow" style={{display: 'none'}}>
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 
                        className="text-primary flex-shrink-0 mt-0.5" 
                        size={20} 
                      />
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="mb-6 pt-6 border-t border-border">
                  <p className="text-3xl font-bold text-primary">
                    {service.price}
                  </p>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => handleWhatsAppClick(service)}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-all"
                  style={{backgroundColor: '#35a626'}}
                >
                  Agendar via WhatsApp
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 max-w-3xl mx-auto border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Atendimento VIP / Horário Flexível
          </h3>
          <p className="text-foreground leading-relaxed mb-4">
            Para agendamentos fora do horário comercial ou de última hora, oferecemos serviço com exclusividade e flexibilidade total para atender às suas necessidades urgentes.
          </p>
          <Button
            onClick={() => {
              const message = "Olá, gostaria de consultar sobre atendimento VIP com horário flexível.";
              const encodedMessage = encodeURIComponent(message);
              window.open(
                `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
                "_blank"
              );
            }}
            className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-6 rounded-lg transition-all"
          >
            Consultar Preço
          </Button>
        </div>
      </div>
    </section>
  );
}
