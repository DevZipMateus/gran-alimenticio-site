import { Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8 text-center sm:text-left">
          <div>
            <img src="/logo.png" alt="Gran Alimentício" className="h-12 sm:h-16 mb-3 sm:mb-4 mx-auto sm:mx-0" />
            <p className="text-sm sm:text-base text-background/80">
              Qualidade e variedade para o seu dia a dia
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Contato</h3>
            <ul className="space-y-2 text-sm sm:text-base text-background/80">
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="break-all">(75) 98856-7568</span>
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="break-all">hyldeberto@outlook.com</span>
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <Instagram className="h-4 w-4 flex-shrink-0" />
                <span>@gran_alimenticio</span>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Horário de funcionamento</h3>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-background/80">
              <li>Seg-Sáb: 08:00 - 19:00</li>
              <li>Dom: 08:00 - 12:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 sm:pt-8 text-center text-background/60 space-y-1 sm:space-y-2">
          <p className="text-xs sm:text-sm">&copy; {currentYear} Gran Alimentício. Todos os direitos reservados.</p>
          <p className="text-xs sm:text-sm">CNPJ: 37.106.899/0001-31</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
