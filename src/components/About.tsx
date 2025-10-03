import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Truck, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Variedade de produtos",
      description: "Materiais de limpeza, cuidado pessoal, frios e alimentos em geral",
    },
    {
      icon: Truck,
      title: "Atendimento itinerante",
      description: "Levamos praticidade até você com nosso carro plotado",
    },
    {
      icon: Heart,
      title: "Compromisso com o cliente",
      description: "Priorizamos suas necessidades e respeitamos seus horários",
    },
  ];

  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground">Sobre nós</h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            A Gran Alimentício é uma empresa que atua em diversos segmentos, oferecendo materiais 
            de limpeza, produtos de cuidado pessoal, frios e alimentos em geral. Nosso compromisso 
            vai além da qualidade dos produtos: prezamos pelo bom relacionamento com o cliente, 
            priorizando suas necessidades e respeitando seus horários.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
