const steps = [
  { n: "01", t: "Análise do Caso", d: "Avaliação técnica detalhada da sua situação previdenciária." },
  { n: "02", t: "Estratégia Personalizada", d: "Definição da melhor tese e do caminho mais vantajoso." },
  { n: "03", t: "Preparação Documental", d: "Reunião e organização rigorosa de toda documentação." },
  { n: "04", t: "Acompanhamento Completo", d: "Atuação ativa em todas as fases administrativas e judiciais." },
  { n: "05", t: "Conquista do Benefício", d: "Concessão do direito e suporte contínuo após a vitória." },
];

export function Process() {
  return (
    <section id="processo" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.22em] text-accent uppercase mb-4 block">
            Como Trabalhamos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand text-balance">
            Um processo transparente, do primeiro contato à conquista do benefício
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-px bg-border border border-border">
          {steps.map((s) => (
            <div key={s.n} className="bg-card p-8">
              <div className="font-serif text-accent text-2xl mb-4">{s.n}</div>
              <h3 className="text-base font-medium text-brand mb-3 leading-snug">{s.t}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
