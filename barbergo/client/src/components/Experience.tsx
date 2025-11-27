import { CheckCircle2 } from "lucide-react";

export default function Experience() {
  const highlights = [
    "Atendimento 100% a domicílio em Ilhabela",
    "Profissionais altamente qualificados",
    "Produtos premium de alta performance",
    "Horários flexíveis e personalizados",
    "Ambiente privado e confortável",
    "Experiência de luxo garantida",
  ];

  return (
    <section id="experiencia" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                A Experiência BarberGo
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Esqueça o trânsito e as esperas. BarberGo a sua disponibilidade onde você estiver
              </p>
            </div>

            {/* Main Description */}
            <div className="space-y-4">
              <p className="text-foreground leading-relaxed">
                Nosso foco é o cliente de bom gosto, o turista que busca exclusividade e o morador que valoriza o conforto. Permita-se um momento de relaxamento e transformação com a vista do mar como cenário, seja na sua pousada, residência de veraneio .
              </p>
              <p className="text-foreground leading-relaxed">
                Em Ilhabela, a beleza está em cada detalhe. Seu estilo não pode ser exceção. BarberGo é mais que um corte; é um ritual de bem-estar que se adapta ao seu ritmo, com a qualidade que você exige.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3 pt-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3" style={{display: 'none'}}>
                  <CheckCircle2 className="text-primary flex-shrink-0" size={24} style={{display: 'none'}} />
                  <span className="text-foreground font-medium" style={{display: 'none'}}>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Decorative */}
          <div className="hidden md:flex flex-col gap-6">
            {/* Stats Cards */}
            <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-xl p-8 shadow-lg">
              <p className="text-5xl font-bold mb-2">100%</p>
              <p className="text-lg font-light">Satisfação Garantida</p>
            </div>

            <div className="bg-gradient-to-br from-secondary to-secondary/80 text-white rounded-xl p-8 shadow-lg">
              <p className="text-5xl font-bold mb-2">24/7</p>
              <p className="text-lg font-light">Horários Flexíveis</p>
            </div>

            <div className="bg-gradient-to-br from-accent to-accent/80 text-white rounded-xl p-8 shadow-lg">
              <p className="text-5xl font-bold mb-2">Premium</p>
              <p className="text-lg font-light">Qualidade Garantida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
