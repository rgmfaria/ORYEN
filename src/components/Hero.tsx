import { ArrowRight, Shield, Lock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">
              Consultoria Especializada em Riscos Corporativos
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-delay-1 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Proteja seu negócio com{" "}
            <span className="gradient-text">inteligência</span>{" "}
            e estratégia
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Somos especialistas em identificar, avaliar e mitigar riscos cibernéticos 
            e corporativos. Transformamos vulnerabilidades em vantagens competitivas.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              Agende uma Consultoria
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Conheça Nossos Serviços
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="animate-fade-up mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto" style={{ animationDelay: '0.5s' }}>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-sm text-muted-foreground">ISO 27001</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Lock className="w-6 h-6 text-primary" />
              <span className="text-sm text-muted-foreground">LGPD</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Eye className="w-6 h-6 text-primary" />
              <span className="text-sm text-muted-foreground">SOC 2</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
