import { Shield, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border/50">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Nexus<span className="text-primary">Risk</span>
              </span>
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
              Consultoria especializada em gestão de riscos corporativos e cibernéticos. 
              Protegemos empresas que querem crescer com segurança.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="mailto:contato@nexusrisk.com.br"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Serviços
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
                  Gestão de Riscos
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
                  Análise de Vulnerabilidades
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
                  Compliance
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
                  Resposta a Incidentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Empresa
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-muted-foreground hover:text-primary transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Carreiras
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} NexusRisk. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
