import { FIRM_NAME } from "./constants";

export function Footer() {
  return (
    <footer className="py-16 md:py-20 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Logo Marcondes" className="h-9 w-9 rounded-sm border border-accent/20 object-cover" />
              <span className="font-serif text-lg font-medium tracking-tight text-brand uppercase">
                {FIRM_NAME}
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Excelência jurídica em Direito Previdenciário. Atendimento
              especializado em todo o território nacional por meio de plataforma
              digital segura.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.18em] text-muted-foreground uppercase mb-4">
                Contato
              </h4>
              <ul className="text-xs text-foreground/80 space-y-2">
                <li>(11) 99999-9999</li>
                <li>contato@marcondes.adv.br</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.18em] text-muted-foreground uppercase mb-4">
                Navegação
              </h4>
              <ul className="text-xs text-foreground/80 space-y-2">
                <li><a href="#especialidades" className="hover:text-brand">Especialidades</a></li>
                <li><a href="#escritorio" className="hover:text-brand">O Escritório</a></li>
                <li><a href="#faq" className="hover:text-brand">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.18em] text-muted-foreground uppercase mb-4">
                Legal
              </h4>
              <ul className="text-xs text-foreground/80 space-y-2">
                <li>OAB/SP 123.456</li>
                <li>Política de Privacidade</li>
                <li>Termos de Uso</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} {FIRM_NAME}. Todos os direitos reservados.
          </p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
            Justiça · Integridade · Resultados
          </p>
        </div>
      </div>
    </footer>
  );
}
