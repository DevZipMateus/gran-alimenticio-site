import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { Helmet } from "react-helmet";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState("calc(100vh - 143px)");

  useEffect(() => {
    const updateHeight = () => {
      const headerHeight = 80; // 80px
      const badgeHeight = 63; // 63px
      const calculatedHeight = window.innerHeight - headerHeight - badgeHeight;
      setIframeHeight(`${calculatedHeight}px`);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    
    // Carregar script do badge MonteSite
    const script = document.createElement("script");
    script.src = "https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      window.removeEventListener("resize", updateHeight);
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Demonstração de Vitrine - Gran Alimentício</title>
        <meta name="description" content="Explore nossos produtos na vitrine online da Gran Alimentício." />
      </Helmet>
      <div className="h-screen w-full overflow-hidden">
        <Header />
        <div className="pt-20 h-full">
          <iframe
            src="https://granalimenticio.egestor.com.br/vitrine/"
            style={{ 
              width: "100%", 
              height: iframeHeight,
              border: "none",
              display: "block"
            }}
            title="Vitrine de Produtos Gran Alimentício"
          />
        </div>
        <div id="montesite-footer-badge" className="fixed bottom-0 left-0 right-0 z-50" />
      </div>
    </>
  );
};

export default Vitrine;
