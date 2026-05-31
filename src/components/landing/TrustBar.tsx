const stats = [
  { value: "+R$ 450M", label: "Recuperados para Clientes" },
  { value: "22 Anos", label: "De Prática Especializada" },
  { value: "15.000+", label: "Casos Analisados" },
  { value: "Brasil", label: "Atendimento Digital Nacional" },
];

export function TrustBar() {
  return (
    <section className="py-12 md:py-14 border-y border-border bg-card">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-serif text-2xl md:text-3xl text-brand mb-2">{s.value}</div>
            <div className="text-[10px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
