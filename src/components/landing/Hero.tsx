import { WHATSAPP_URL } from "./constants";

export function Hero() {
  return (
    <section id="top" className="pt-36 md:pt-40 pb-20 md:pb-28 bg-secondary/40">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="reveal text-xs font-semibold tracking-[0.22em] text-accent uppercase mb-6 block">
          Direito Previdenciário · Alta Complexidade
        </span>
        <h1 className="reveal reveal-delay-1 font-serif text-4xl sm:text-5xl md:text-6xl text-brand leading-[1.08] text-balance mb-8">
          A proteção do seu futuro começa com{" "}
          <span className="italic">segurança jurídica</span>.
        </h1>
        <p className="reveal reveal-delay-2 text-base md:text-lg text-muted-foreground mb-12 text-pretty max-w-[52ch] mx-auto leading-relaxed">
          Estratégia, rigor técnico e atendimento institucional para garantir o
          benefício previdenciário que é seu por direito — em todo o Brasil.
        </p>
        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-brand text-brand-foreground px-8 py-4 rounded-sm font-medium transition-colors hover:bg-brand/90"
          >
            Falar com um Especialista
          </a>
          <a
            href="#especialidades"
            className="w-full sm:w-auto bg-transparent text-brand px-8 py-4 rounded-sm ring-1 ring-border font-medium transition-colors hover:bg-secondary"
          >
            Analisar Meu Caso
          </a>
        </div>
      </div>
    </section>
  );
}
