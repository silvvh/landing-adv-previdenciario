import { WHATSAPP_URL } from "./constants";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FinalCta() {
  return (
    <section className="py-24 md:py-32 bg-brand text-brand-foreground relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <span className="text-xs font-semibold tracking-[0.22em] text-accent uppercase mb-6 block">
          Solicite sua análise
        </span>
        <h2 className="font-serif text-3xl md:text-5xl mb-6 text-balance leading-tight">
          Pronto para garantir o que é seu por direito?
        </h2>
        <p className="text-brand-foreground/70 mb-12 text-pretty max-w-[52ch] mx-auto leading-relaxed">
          Receba uma análise preliminar do seu caso com nossa equipe técnica
          especializada. Atendimento imediato via WhatsApp, sem compromisso.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-whatsapp text-white py-4 px-8 rounded-sm font-semibold transition-transform hover:scale-[1.02]"
          >
            <WhatsAppIcon className="size-5" />
            Conversar via WhatsApp
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="py-4 px-8 border border-white/25 rounded-sm font-medium hover:bg-white/5 transition-colors"
          >
            Agendar uma Reunião
          </a>
        </div>
        <p className="mt-10 text-brand-foreground/50 text-xs uppercase tracking-[0.18em]">
          Atendimento em todo o território nacional
        </p>
      </div>
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-[50%] aspect-square border border-white rounded-full" />
        <div className="absolute -bottom-1/3 -right-1/4 w-[70%] aspect-square border border-white rounded-full" />
      </div>
    </section>
  );
}
