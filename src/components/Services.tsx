import { 
  Shield, 
  Search, 
  FileCheck, 
  Users, 
  Lock, 
  BarChart3,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Gestão de Riscos Cibernéticos",
    description: "Identificação, avaliação e tratamento de ameaças digitais que podem impactar sua operação.",
  },
  {
    icon: Search,
    title: "Análise de Vulnerabilidades",
    description: "Testes de penetração e avaliações técnicas para descobrir pontos fracos antes dos atacantes.",
  },
  {
    icon: FileCheck,
    title: "Compliance & Governança",
    description: "Adequação a regulamentações como LGPD, SOX, PCI-DSS e frameworks como ISO 27001.",
  },
  {
    icon: Users,
    title: "Conscientização de Segurança",
    description: "Programas de treinamento que transformam colaboradores na primeira linha de defesa.",
  },
  {
    icon: Lock,
    title: "Resposta a Incidentes",
    description: "Planos estruturados para reagir rapidamente e minimizar impactos de violações de segurança.",
  },
  {
    icon: BarChart3,
    title: "Continuidade de Negócios",
    description: "Estratégias para manter operações críticas funcionando mesmo em cenários adversos.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary)/0.05)_0%,transparent_50%)]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Soluções completas para sua{" "}
            <span className="gradient-text">proteção</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos um portfólio abrangente de serviços de consultoria 
            para proteger seu negócio contra riscos corporativos e cibernéticos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card-hover p-8 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Link */}
              <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
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
