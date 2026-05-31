import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso ir presencialmente ao escritório?",
    a: "Não. Atuamos em todo o Brasil de forma 100% digital, com plataforma segura para envio de documentos e atendimento por videoconferência ou WhatsApp.",
  },
  {
    q: "Quanto tempo demora para conquistar o benefício?",
    a: "O prazo varia conforme a complexidade do caso e a via escolhida (administrativa ou judicial). Pedidos administrativos podem ser concluídos em meses; ações judiciais geralmente entre 1 e 3 anos. Apresentamos uma previsão realista logo na análise inicial.",
  },
  {
    q: "Posso recorrer se meu benefício foi negado pelo INSS?",
    a: "Sim. Negativas administrativas podem ser revertidas por recurso ou ação judicial. Em muitos casos, identificamos erros de análise do INSS que permitem reverter a decisão com alta taxa de sucesso.",
  },
  {
    q: "Vale a pena revisar minha aposentadoria atual?",
    a: "Sim, em muitos casos. Erros de cálculo são frequentes e a revisão pode aumentar significativamente o valor mensal, além de gerar pagamento retroativo. Fazemos uma análise técnica gratuita do seu benefício.",
  },
  {
    q: "Como funciona a consulta inicial?",
    a: "A consulta é por WhatsApp ou videoconferência. Avaliamos sua situação, explicamos as opções estratégicas e apresentamos honorários transparentes — sem compromisso.",
  },
  {
    q: "Quais são as formas de pagamento dos honorários?",
    a: "Trabalhamos com modelos flexíveis: honorários fixos, parcelados ou êxito (percentual sobre o benefício conquistado). Tudo é definido com clareza no contrato, antes do início do trabalho.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-[0.22em] text-accent uppercase mb-4 block">
            Perguntas Frequentes
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand text-balance">
            Respostas claras para as suas principais dúvidas
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-medium text-brand text-base hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-pretty pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
