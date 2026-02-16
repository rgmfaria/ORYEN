import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Integração entre risco digital e agenda executiva.",
  "Modelos de governança orientados à decisão.",
  "Clareza estratégica para conselhos e C-Level.",
];

const About = () => {
  return (
    <section id="sobre" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.05)_0%,transparent_50%)]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              Sobre Nós
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Onde risco digital e{" "}
              <span className="gradient-text">estratégia</span>{" "}
              se encontram
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A ORYEN nasce para atuar onde risco digital, governança e estratégia de negócio se encontram — falando a linguagem da liderança executiva e do conselho.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <a href="#contato">Fale com um Advisor</a>
            </Button>
          </div>

          {/* Right Column */}
          <div>
            <div className="glass-card p-8 md:p-10">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Em um ambiente de crescente complexidade regulatória e transformação digital acelerada, o risco cibernético deixou de ser um tema técnico e passou a ocupar o centro da agenda corporativa.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Atuamos como advisor independente, apoiando organizações a estruturar governança de risco digital, fortalecer resiliência institucional e sustentar crescimento com previsibilidade.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="relative mt-4">
              <div className="absolute -top-8 -right-4 w-24 h-24 border border-primary/20 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-primary/10 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
