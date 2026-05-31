const items = [
  { t: "Atendimento Humanizado", d: "Escuta atenta e linguagem clara em cada etapa do seu caso." },
  { t: "Especialização Exclusiva", d: "Atuação dedicada apenas ao Direito Previdenciário." },
  { t: "Estratégia Personalizada", d: "Cada caso é único — e merece uma tese construída sob medida." },
  { t: "Transparência Total", d: "Honorários, prazos e expectativas comunicados desde o início." },
  { t: "Comunicação Constante", d: "Atualizações periódicas sobre o andamento do seu processo." },
  { t: "Atendimento Nacional", d: "Plataforma digital segura para clientes em todo o Brasil." },
];

export function Differentials() {
  return (
    <section className="py-24 md:py-32 bg-brand text-brand-foreground">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 md:mb-20 max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.22em] text-accent uppercase mb-4 block">
            Por que nos escolher
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-balance">
            Seis pilares que definem o nosso padrão de excelência
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {items.map((i) => (
            <div key={i.t} className="bg-brand p-8 md:p-10 hover:bg-white/[0.03] transition-colors">
              <div className="size-1.5 bg-accent mb-6" />
              <h3 className="font-serif text-xl mb-3">{i.t}</h3>
              <p className="text-sm text-brand-foreground/65 leading-relaxed">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
