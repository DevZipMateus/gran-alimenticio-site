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
    <section id="contato" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground">Entre em contato</h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Estamos prontos para atender você da melhor forma possível
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className={`border-border hover:shadow-lg transition-all duration-300 ${
                info.action ? "cursor-pointer hover:-translate-y-1" : ""
              }`}
              onClick={info.action || undefined}
            >
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                  <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2 text-foreground">{info.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground whitespace-pre-line break-words">{info.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4 sm:space-y-6">
          <Card className="max-w-md mx-auto border-primary/20 bg-gradient-to-br from-card to-muted">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">Fale conosco agora</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                Entre em contato via WhatsApp ou nos siga no Instagram
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  onClick={() => window.open("https://wa.me/5575988567568", "_blank")}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
                >
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  WhatsApp
                </Button>
                <Button
                  onClick={() => window.open("https://instagram.com/gran_alimenticio", "_blank")}
                  variant="outline"
                  size="lg"
                  className="border-primary/60 hover:bg-primary/10 w-full sm:w-auto"
                >
                  <Instagram className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
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
