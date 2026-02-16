import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Assessment",
    subtitle: "Diagnóstico estruturado de maturidade e exposição a riscos.",
    features: [
      "Leitura independente da resiliência institucional",
      "Tradução de exposição a riscos em implicações estratégicas",
      "Clareza executiva sobre vulnerabilidades estruturais",
    ],
  },
  {
    number: "02",
    title: "Structuring",
    subtitle: "Definição de modelo de governança e roadmap estratégico.",
    features: [
      "Arquitetura de governança orientada a valor e accountability",
      "Alinhamento entre risco, ambição estratégica e criação de valor",
      "Direcionamento estruturado para evolução institucional",
    ],
  },
  {
    number: "03",
    title: "Oversight",
    subtitle: "Acompanhamento executivo e suporte à liderança na implementação.",
    features: [
      "Supervisão estratégica com independência e visão crítica",
      "Suporte direto ao board em decisões sensíveis a risco",
      "Garantia de consistência entre ambição, execução e confiança institucional",
    ],
  },
];

const Approach = () => {
  return (
    <section id="abordagem" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.06)_0%,transparent_60%)]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Nossa Abordagem
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Metodologia orientada à{" "}
            <span className="gradient-text">decisão executiva</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Metodologia estruturada e orientada à decisão executiva.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="glass-card-hover p-8 group">
              {/* Step Number */}
              <div className="font-display text-5xl font-bold gradient-text mb-4 opacity-60 group-hover:opacity-100 transition-opacity">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>

              {/* Subtitle */}
              <p className="text-muted-foreground mb-6">{step.subtitle}</p>

              {/* Features */}
              <div className="space-y-3">
                {step.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
