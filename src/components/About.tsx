import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const differentials = [
  "Equipe com certificações internacionais (CISSP, CISM, CEH)",
  "Metodologias alinhadas aos principais frameworks globais",
  "Abordagem personalizada para cada setor de atuação",
  "Relatórios executivos claros e acionáveis",
  "Suporte contínuo pós-implementação",
  "Experiência comprovada em grandes corporações",
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
              Expertise que{" "}
              <span className="gradient-text">transforma</span>{" "}
              riscos em oportunidades
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A NexusRisk nasceu da visão de profissionais com mais de duas décadas 
              de experiência em gestão de riscos corporativos. Nossa missão é democratizar 
              o acesso a consultoria de alto nível, oferecendo soluções que antes eram 
              exclusivas das maiores empresas do mercado.
            </p>

            {/* Differentials List */}
            <div className="space-y-4 mb-8">
              {differentials.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Conheça Nossa Equipe
            </Button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="glass-card p-8 md:p-12">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 rounded-xl bg-secondary/30">
                  <div className="font-display text-4xl font-bold gradient-text mb-2">
                    20+
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Anos de Experiência
                  </div>
                </div>
                <div className="text-center p-6 rounded-xl bg-secondary/30">
                  <div className="font-display text-4xl font-bold gradient-text mb-2">
                    15+
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Especialistas
                  </div>
                </div>
                <div className="text-center p-6 rounded-xl bg-secondary/30">
                  <div className="font-display text-4xl font-bold gradient-text mb-2">
                    12
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Setores Atendidos
                  </div>
                </div>
                <div className="text-center p-6 rounded-xl bg-secondary/30">
                  <div className="font-display text-4xl font-bold gradient-text mb-2">
                    5
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Países de Atuação
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-primary/10 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
