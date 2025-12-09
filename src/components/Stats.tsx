const stats = [
  { value: "150+", label: "Empresas Atendidas" },
  { value: "98%", label: "Taxa de Satisfação" },
  { value: "500+", label: "Projetos Entregues" },
  { value: "24/7", label: "Suporte Dedicado" },
];

const Stats = () => {
  return (
    <section className="py-16 relative">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08)_0%,transparent_70%)]" />

      <div className="container-custom relative z-10">
        <div className="glass-card p-8 md:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
