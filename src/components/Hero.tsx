import { ArrowRight } from "lucide-react";
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground font-medium">
                Cyber Advisory & Risk Governance
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up-delay-1 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Ajudamos você a operar com{" "}
              <span className="gradient-text">segurança</span>{" "}
              e crescer com{" "}
              <span className="gradient-text">sucesso</span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-up-delay-2 text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Nossas soluções de cibersegurança fornecem as ferramentas e a experiência necessárias 
              para responder rapidamente a mercados em mudança, novas ameaças e concorrências disruptivas.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-start gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="#contato">
                  Fale Conosco
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#sobre">Conheça a ORYEN</a>
              </Button>
            </div>
          </div>

          {/* Visual Element - Abstract Shield */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Outer ring */}
              <div className="w-80 h-80 rounded-full border border-primary/20 flex items-center justify-center animate-float">
                <div className="w-60 h-60 rounded-full border border-primary/30 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-primary/10 backdrop-blur-xl flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20" />
                  </div>
                </div>
              </div>
              {/* Glow */}
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl" />
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
