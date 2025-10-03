import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(75) 98856-7568",
      action: () => window.open("https://wa.me/5575988567568", "_blank"),
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "hyldeberto@outlook.com",
      action: () => window.location.href = "mailto:hyldeberto@outlook.com",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Leitão Guerra",
      action: null,
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg-Sáb: 08:00-19:00\nDom: 08:00-12:00",
      action: null,
    },
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Entre em contato</h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para atender você da melhor forma possível
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className={`border-border hover:shadow-lg transition-all duration-300 ${
                info.action ? "cursor-pointer hover:-translate-y-1" : ""
              }`}
              onClick={info.action || undefined}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">{info.title}</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{info.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6">
          <Card className="max-w-md mx-auto border-primary/20 bg-gradient-to-br from-card to-muted">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Fale conosco agora</h3>
              <p className="text-muted-foreground mb-6">
                Entre em contato via WhatsApp ou nos siga no Instagram
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.open("https://wa.me/5575988567568", "_blank")}
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
                <Button
                  onClick={() => window.open("https://instagram.com/gran_alimenticio", "_blank")}
                  variant="outline"
                  size="lg"
                  className="border-primary/60 hover:bg-primary/10"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Instagram
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
