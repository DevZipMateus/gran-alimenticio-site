import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5575988567568"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-[#25D366] text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
    </a>
  );
};

export default WhatsAppButton;
