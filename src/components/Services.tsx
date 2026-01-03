import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Strategy and Governance",
    description: "A cibersegurança como alavanca estratégica de crescimento. Apoiamos a gestão de riscos, governança e conformidade com estratégias integradas que alinham segurança aos objetivos do negócio, impulsionando decisões seguras e crescimento sustentável.",
  },
  {
    title: "Security Transformation",
    description: "A transformação em cibersegurança fortalece a proteção, assegura conformidade e prepara a organização para evoluir com confiança. Com tecnologia e expertise setorial, impulsionamos programas que viabilizam a adoção segura de novas tecnologias.",
  },
  {
    title: "Cyber Defense & Resilience",
    description: "Proteção cibernética proativa que antecipa ameaças, neutraliza riscos e garante a continuidade do negócio. Unimos monitoramento avançado, inteligência analítica e resposta ágil para fortalecer o SOC, modernizar a segurança e preparar sua organização para os desafios cibernéticos atuais e futuros.",
  },
  {
    title: "Cyber Managed Services",
    description: "A transformação estratégica da cibersegurança exige evolução contínua frente a novas ameaças e regulações. Com Cyber Managed Services, apoiamos a segurança, geramos valor e impulsionamos o crescimento com capacidades gerenciadas e tecnologias emergentes.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding relative bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Nossos Serviços
          </h2>
          
          {/* Introduction */}
          <div className="max-w-4xl">
            <p className="text-xl sm:text-2xl font-medium mb-6">
              Ajudamos você a{" "}
              <span className="gradient-text">operar com segurança</span> e{" "}
              <span className="gradient-text">crescer com sucesso</span>.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Projetados para atender a organizações em qualquer etapa de sua jornada, nossas soluções de cibersegurança fornecem as ferramentas e a experiência necessárias para responder rapidamente a mercados em mudança, novas ameaças e concorrências disruptivas.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ao aproveitar as soluções de Cyber da ORYEN, sua organização pode ir além de se adaptar às mudanças, moldando ativamente o futuro para permanecer resiliente, inovadora e à frente da concorrência.
            </p>
          </div>
        </div>

        {/* Services Grid - 2x2 */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card-hover p-8 lg:p-10 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Title with gradient */}
              <h3 className="font-display text-xl sm:text-2xl font-semibold mb-4 gradient-text">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                {service.description}
              </p>

              {/* Hover Link */}
              <div className="flex items-center gap-2 text-primary font-medium mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Saiba mais</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
