import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, Apple, Droplets } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Materiais de limpeza",
      description: "Produtos de qualidade para manter seu ambiente sempre limpo",
    },
    {
      icon: Users,
      title: "Cuidado pessoal",
      description: "Itens essenciais para seu cuidado diário",
    },
    {
      icon: Apple,
      title: "Frios e alimentos",
      description: "Alimentos frescos e de qualidade para sua mesa",
    },
    {
      icon: Droplets,
      title: "Atacado e varejo",
      description: "Atendemos tanto pequenas quanto grandes quantidades",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Nossos serviços</h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos uma ampla variedade de produtos para atender todas as suas necessidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <strong>Atendimento diferenciado:</strong> Disponibilizamos duas formas de atendimento - 
            em nosso ponto fixo ou de forma itinerante através de um carro plotado que visita as 
            famílias em horários alternativos, garantindo praticidade e comodidade no dia a dia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
