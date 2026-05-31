const items = [
  {
    quote:
      "Tinham negado meu benefício duas vezes. O escritório identificou um erro técnico e em poucos meses minha aposentadoria foi concedida com valor 30% maior.",
    name: "Maria Aparecida S.",
    role: "Aposentada por Tempo de Contribuição · Curitiba",
  },
  {
    quote:
      "O planejamento previdenciário mostrou que valia a pena esperar 18 meses. O resultado: um benefício 42% superior ao que eu receberia naquele momento.",
    name: "Carlos Eduardo M.",
    role: "Engenheiro · São Paulo",
  },
  {
    quote:
      "Atendimento sério, transparente e profundamente humano. Recebi atualizações constantes e nunca me senti perdido durante o processo.",
    name: "Joana Ribeiro",
    role: "Pensão por Morte · Recife",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.22em] text-accent uppercase mb-4 block">
            Clientes Atendidos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand text-balance">
            Histórias reais de quem garantiu o que era seu por direito
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map((t) => (
            <article
              key={t.name}
              className="bg-card p-8 md:p-10 border border-border rounded-sm flex flex-col"
            >
              <span className="font-serif text-5xl text-accent leading-none mb-4">“</span>
              <p className="text-foreground/85 leading-relaxed text-pretty mb-8 flex-1">
                {t.quote}
              </p>
              <div className="border-t border-border pt-4">
                <div className="text-sm font-semibold text-brand">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{t.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
