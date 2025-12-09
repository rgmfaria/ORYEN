import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "A NexusRisk nos ajudou a identificar vulnerabilidades críticas que poderiam ter custado milhões. O ROI do investimento foi visível em semanas.",
    author: "Carlos Mendes",
    role: "CTO",
    company: "TechCorp Brasil",
  },
  {
    quote: "Profissionalismo e expertise de altíssimo nível. A consultoria deles transformou nossa postura de segurança completamente.",
    author: "Ana Paula Silva",
    role: "CISO",
    company: "Banco Nacional",
  },
  {
    quote: "Equipe técnica excepcional combinada com visão de negócios. Entenderam nossas necessidades e entregaram além das expectativas.",
    author: "Roberto Santos",
    role: "Diretor de TI",
    company: "Grupo Industrial SA",
  },
];

const Testimonials = () => {
  return (
    <section id="diferenciais" className="section-padding relative bg-secondary/30">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.05)_0%,transparent_60%)]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            O que nossos{" "}
            <span className="gradient-text">clientes</span>{" "}
            dizem
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A satisfação dos nossos clientes é a melhor prova da qualidade 
            do nosso trabalho.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="glass-card-hover p-8 flex flex-col"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-6" />

              {/* Quote Text */}
              <p className="text-foreground leading-relaxed mb-8 flex-grow">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-border/50 pt-6">
                <div className="font-display font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-muted-foreground text-sm">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
