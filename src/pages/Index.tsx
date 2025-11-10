import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  useEffect(() => {
    // Carregar script do badge MonteSite
    const script = document.createElement("script");
    script.src = "https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <div id="montesite-footer-badge" />
    </div>
  );
};

export default Index;
