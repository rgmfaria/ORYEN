import { Linkedin, Instagram, Mail } from "lucide-react";
import OryenLogo from "@/components/OryenLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border/50">
      {/* Newsletter */}
      <div className="border-b border-border/50">
        <div className="container-custom py-12">
          <div className="max-w-lg mx-auto text-center">
            <h4 className="font-display text-xl font-semibold mb-2">Newsletter</h4>
            <p className="text-muted-foreground mb-6 text-sm">
              Inscreva-se e receba atualizações sobre nossos conteúdos, iniciativas e serviços.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground text-sm"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors">
                Inscrever
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="inline-block mb-6">
              <OryenLogo size="md" />
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-4">
              Consultoria especializada em gestão de riscos corporativos e cibernéticos. 
              Protegemos empresas que querem crescer com segurança.
            </p>
            <div className="text-sm text-muted-foreground space-y-1 mb-6">
              <p>São Paulo, SP</p>
              <p>+55 (11) 9 9330-6888</p>
              <p>info@oryen.com.br</p>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground" />
              </a>
              <a
                href="https://www.instagram.com/oryen_advisory/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-muted-foreground" />
              </a>
              <a
                href="mailto:info@oryen.com.br"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Serviços
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Strategy and Governance
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Security Transformation
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Cyber Defense & Resilience
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Cyber Managed Services
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Empresa
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Por que a ORYEN
                </a>
              </li>
              <li>
                <a href="#abordagem" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Nossa Abordagem
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} ORYEN. Todos os direitos reservados.
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
