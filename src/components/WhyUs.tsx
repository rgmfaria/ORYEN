import { useState } from "react";
import { ChevronRight } from "lucide-react";

const items = [
  {
    number: "01",
    title: "Visibilidade estruturada de risco",
    content: "Transformamos riscos dispersos em uma visão estruturada, quantificável e acionável — permitindo à liderança priorizar decisões com clareza e antecipação.",
  },
  {
    number: "02",
    title: "Integração com estratégia corporativa",
    content: "Integramos gestão de riscos e segurança à agenda estratégica da organização — assegurando que proteção, crescimento e valor caminhem na mesma direção.",
  },
  {
    number: "03",
    title: "Governança orientada a decisões",
    content: "Estruturamos modelos de governança que transformam informação em decisão — com métricas claras, accountability definida e visão para o conselho.",
  },
  {
    number: "04",
    title: "Crescimento com confiança institucional",
    content: "Fortalecemos a confiança institucional necessária para expansão sustentável, abertura de capital e relações sólidas com investidores e reguladores.",
  },
];

const WhyUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="diferenciais" className="section-padding relative bg-secondary/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,hsl(var(--primary)/0.06)_0%,transparent_60%)]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Text + Accordion */}
          <div>
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              Por que a ORYEN
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              O risco digital deixou de ser um tema técnico e{" "}
              <span className="gradient-text">tornou-se uma agenda estratégica de conselho</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Organizações que integram segurança, risco e governança à tomada de decisão executiva operam com maior previsibilidade, confiança institucional e vantagem competitiva.
            </p>

            {/* Accordion */}
            <div className="space-y-4">
              {items.map((item, index) => (
                <div
                  key={item.number}
                  className={`glass-card overflow-hidden transition-all duration-300 cursor-pointer ${
                    activeIndex === index ? "border-primary/40" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="flex items-center justify-between p-5">
                    <div className="flex items-center gap-4">
                      <span className="text-primary font-display font-bold text-lg">{item.number}</span>
                      <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 text-primary transition-transform duration-300 ${
                        activeIndex === index ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeIndex === index ? "max-h-40 pb-5 px-5" : "max-h-0"
                    }`}
                  >
                    <p className="text-muted-foreground leading-relaxed pl-10">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="glass-card p-10 text-center">
                <div className="font-display text-6xl font-bold gradient-text mb-4">4</div>
                <p className="text-muted-foreground text-lg">Pilares de atuação estratégica</p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-secondary/50 text-center">
                    <div className="text-sm text-muted-foreground">Visibilidade</div>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/50 text-center">
                    <div className="text-sm text-muted-foreground">Integração</div>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/50 text-center">
                    <div className="text-sm text-muted-foreground">Governança</div>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/50 text-center">
                    <div className="text-sm text-muted-foreground">Confiança</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
