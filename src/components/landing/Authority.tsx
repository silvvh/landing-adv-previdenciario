import portrait from "@/assets/founder-portrait.jpg";
import { WHATSAPP_URL } from "./constants";

const credentials = [
  "Especialista em Direito Previdenciário pela PUC",
  "Membro da Comissão de Direito Previdenciário da OAB",
  "Autor de obras de referência em Planejamento Previdenciário",
  "Mais de 8.000 vidas impactadas por decisões judiciais",
];

export function Authority() {
  return (
    <section id="escritorio" className="py-24 md:py-32 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-1/2">
            <img
              src={portrait}
              alt="Dr. Henrique Marcondes, sócio fundador do escritório"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full aspect-[4/5] object-cover rounded-sm outline outline-1 -outline-offset-1 outline-black/5 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-xs font-semibold tracking-[0.22em] text-accent uppercase mb-4 block">
              Fundador & Sócio Diretor
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand mb-6 leading-tight">
              Dr. Henrique Marcondes — liderança dedicada à dignidade do segurado
            </h2>
            <p className="text-muted-foreground mb-8 text-pretty leading-relaxed">
              Com mais de duas décadas de atuação exclusiva em Direito
              Previdenciário, consolidou uma metodologia que prioriza a precisão
              técnica e o atendimento humano, com presença em tribunais
              superiores em todo o país.
            </p>
            <div className="space-y-1 mb-10">
              {credentials.map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-4 py-3 border-b border-border"
                >
                  <span className="size-1.5 rounded-full bg-accent shrink-0" />
                  <span className="text-sm text-foreground">{c}</span>
                </div>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-brand text-brand-foreground px-7 py-3.5 rounded-sm font-medium transition-transform hover:scale-[1.02]"
            >
              Conversar com o Escritório
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
