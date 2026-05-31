import { WHATSAPP_URL, FIRM_NAME } from "./constants";

export function Navbar({ onOpenBooking }: { onOpenBooking?: () => void }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/85 backdrop-blur-md border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 font-serif text-lg md:text-xl font-medium tracking-tight text-brand uppercase">
          <img src="/logo.png" alt="Logo Marcondes" className="h-9 w-9 rounded-sm border border-accent/20 object-cover" />
          <span>{FIRM_NAME}</span>
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          <a href="#especialidades" className="hover:text-brand transition-colors">Especialidades</a>
          <a href="#escritorio" className="hover:text-brand transition-colors">O Escritório</a>
          <a href="#processo" className="hover:text-brand transition-colors">Processo</a>
          <a href="#faq" className="hover:text-brand transition-colors">FAQ</a>
        </div>
        <button
          onClick={onOpenBooking}
          className="hidden sm:inline-flex items-center text-sm font-medium bg-brand text-brand-foreground py-2.5 px-5 rounded-sm transition-transform hover:scale-[1.02] cursor-pointer"
        >
          Consulta Especializada
        </button>
      </div>
    </nav>
  );
}
