import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaBanner = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.15)_0%,transparent_70%)]" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Decisões Determinam{" "}
              <span className="gradient-text">Exposição</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As maiores perdas digitais hoje não vêm de ataques sofisticados, mas de decisões mal informadas, riscos mal priorizados e lacunas de governança.
            </p>
          </div>
          <Button variant="hero" size="xl" asChild>
            <a href="#contato">
              Contate-nos
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
