const services = [
  {
    title: "Planejamento Previdenciário",
    desc: "Análise técnica para definir o melhor momento e a regra mais vantajosa para sua aposentadoria.",
  },
  {
    title: "Aposentadoria por Idade",
    desc: "Concessão estratégica do benefício para quem completou os requisitos de idade e contribuição.",
  },
  {
    title: "Tempo de Contribuição",
    desc: "Reconhecimento integral do tempo trabalhado, incluindo períodos rurais, especiais e concomitantes.",
  },
  {
    title: "Aposentadoria Especial",
    desc: "Comprovação de exposição a agentes nocivos para antecipar o benefício com segurança técnica.",
  },
  {
    title: "Revisão de Benefícios",
    desc: "Auditoria de cálculos do INSS para corrigir erros e aumentar o valor mensal já recebido.",
  },
  {
    title: "Auxílio-doença",
    desc: "Garantia do benefício por incapacidade temporária com perícia médica e estratégia processual.",
  },
  {
    title: "Benefício por Incapacidade",
    desc: "Aposentadoria por invalidez para segurados impossibilitados de exercer atividade laboral.",
  },
  {
    title: "BPC / LOAS",
    desc: "Assistência para idosos e pessoas com deficiência em situação de vulnerabilidade social.",
  },
  {
    title: "Pensão por Morte",
    desc: "Concessão e revisão do benefício para dependentes, com análise rigorosa do vínculo.",
  },
];

export function Services() {
  return (
    <section id="especialidades" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 md:mb-20 max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.22em] text-accent uppercase mb-4 block">
            Especialidades
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand text-balance mb-4">
            Soluções estratégicas para cada etapa da sua vida previdenciária
          </h2>
          <div className="h-px w-12 bg-accent mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {services.map((s) => (
            <article
              key={s.title}
              className="bg-card p-8 md:p-10 hover:bg-secondary/60 transition-colors group"
            >
              <div className="size-7 border-t border-l border-accent mb-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              <h3 className="text-lg md:text-xl font-medium text-brand mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
