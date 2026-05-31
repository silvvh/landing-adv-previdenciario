import { WHATSAPP_URL } from "./constants";

export function Hero({ onOpenBooking }: { onOpenBooking?: () => void }) {
  return (
    <section id="top" className="pt-32 md:pt-36 pb-12 md:pb-16 relative bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/hero-bg.png')" }}>
      {/* Brand navy overlay to allow the generated dark navy & gold background details to shine through */}
      <div className="absolute inset-0 bg-brand/65 mix-blend-multiply" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="reveal text-xs font-semibold tracking-[0.22em] text-accent uppercase mb-6 block">
          Direito Previdenciário · Alta Complexidade
        </span>
        <h1 className="reveal reveal-delay-1 font-serif text-4xl sm:text-5xl md:text-6xl text-brand-foreground leading-[1.08] text-balance mb-8">
          A proteção do seu futuro começa com{" "}
          <span className="text-accent">segurança jurídica</span>.
        </h1>
        <p className="reveal reveal-delay-2 text-base md:text-lg text-brand-foreground/80 mb-12 text-pretty max-w-[52ch] mx-auto leading-relaxed">
          Estratégia, rigor técnico e atendimento institucional para garantir o
          benefício previdenciário que é seu por direito — em todo o Brasil.
        </p>
        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-accent text-accent-foreground px-8 py-4 rounded-sm font-medium transition-all duration-300 hover:bg-accent/90 hover:scale-[1.02] shadow-lg shadow-accent/10"
          >
            Falar com um Especialista
          </a>
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-transparent text-brand-foreground px-8 py-4 rounded-sm ring-1 ring-brand-foreground/30 font-medium transition-all duration-300 hover:bg-brand-foreground/10 hover:scale-[1.02] cursor-pointer"
          >
            Analisar Meu Caso
          </button>
        </div>
      </div>
    </section>
  );
}
