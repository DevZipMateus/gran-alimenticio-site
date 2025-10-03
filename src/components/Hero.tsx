import { Button } from "@/components/ui/button";
import { Phone, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="pt-16 sm:pt-20 min-h-screen flex items-center bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="space-y-4 sm:space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Gran Alimentício
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground">
              Qualidade e variedade para o seu dia a dia
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Oferecemos materiais de limpeza, produtos de cuidado pessoal, frios e alimentos em geral. 
              Atendimento em nosso ponto fixo ou de forma itinerante, priorizando suas necessidades e respeitando seus horários.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
              <Button
                onClick={() => window.open("https://wa.me/5575988567568", "_blank")}
                size="lg"
                className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
              >
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Entrar em contato
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
          </div>
          <div className="relative order-first md:order-last">
            <img
              src="/logo.png"
              alt="Gran Alimentício Logo"
              className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-md mx-auto drop-shadow-2xl animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
