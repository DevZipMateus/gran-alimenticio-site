import { Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src="/logo.png" alt="Gran Alimentício" className="h-16 mb-4 brightness-0 invert" />
            <p className="text-background/80">
              Qualidade e variedade para o seu dia a dia
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Contato</h3>
            <ul className="space-y-2 text-background/80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                (75) 98856-7568
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                hyldeberto@outlook.com
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4" />
                @gran_alimenticio
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Horário de funcionamento</h3>
            <ul className="space-y-2 text-background/80">
              <li>Segunda a sábado: 08:00 - 19:00</li>
              <li>Domingo: 08:00 - 12:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; {currentYear} Gran Alimentício. Todos os direitos reservados.</p>
          <p className="mt-2">CNPJ: 37.106.899/0001-31</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
