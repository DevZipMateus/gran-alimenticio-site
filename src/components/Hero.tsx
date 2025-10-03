import { Button } from "@/components/ui/button";
import { Phone, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Gran Alimentício
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              Qualidade e variedade para o seu dia a dia
            </h2>
            <p className="text-lg text-muted-foreground">
              Oferecemos materiais de limpeza, produtos de cuidado pessoal, frios e alimentos em geral. 
              Atendimento em nosso ponto fixo ou de forma itinerante, priorizando suas necessidades e respeitando seus horários.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => window.open("https://wa.me/5575988567568", "_blank")}
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <Phone className="mr-2 h-5 w-5" />
                Entrar em contato
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
          </div>
          <div className="relative">
            <img
              src="/logo.png"
              alt="Gran Alimentício Logo"
              className="w-full max-w-md mx-auto drop-shadow-2xl animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
