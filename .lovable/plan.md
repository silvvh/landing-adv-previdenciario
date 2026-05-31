## Landing Page — Advocacia Previdenciária

Direção escolhida: **Centralizado Institucional** (paleta navy `#0f172a` + dourado discreto `#c2a378`, tipografia Newsreader serif + Inter sans, hero centralizado com muito respiro).

### Sistema de design
- Atualizar `src/styles.css` com os tokens: `--brand-primary` (navy), `--brand-accent` (gold), `--background` (off-white `#fafafa`), foreground, muted, border. Tudo em `oklch`.
- Carregar fontes Newsreader + Inter via `<link>` no `__root.tsx`.
- Atualizar `<head>` em `src/routes/index.tsx` com title/description em PT-BR otimizados para SEO ("Advocacia Previdenciária | Marcondes & Associados — Especialistas em INSS").

### Estrutura da página (`src/routes/index.tsx` + componentes em `src/components/landing/`)
1. **Navbar** — sticky, logo serif, links (Especialidades, O Escritório, Processo, FAQ), CTA "Falar no WhatsApp".
2. **Hero centralizado** — eyebrow + headline serif grande + subtítulo + dois CTAs ("Falar com um Especialista" → WhatsApp, "Analisar Meu Caso" → scroll).
3. **Trust bar** — 4 métricas (R$ recuperados, anos de atuação, casos analisados, atendimento nacional).
4. **Serviços** — grid 3x3 (Aposentadoria por idade, Tempo de contribuição, Planejamento, Revisão, Benefício por incapacidade, Auxílio-doença, BPC/LOAS, Pensão por morte, Aposentadoria especial). Cards com cantos serifados e linha dourada no hover.
5. **Autoridade / Sócio Fundador** — retrato (imagem gerada) + bio + credenciais.
6. **Processo** — timeline horizontal de 5 etapas (Análise, Estratégia, Documentação, Acompanhamento, Conquista).
7. **Diferenciais** — grid de 6 pilares (atendimento humanizado, especialização, transparência, comunicação, digital nacional, estratégia personalizada).
8. **Depoimentos** — 3 cards com aspas serifadas, nome e contexto.
9. **FAQ** — accordion (shadcn) com 6 perguntas.
10. **CTA final** — bloco navy full-bleed com botão verde WhatsApp dominante + secundário "Agendar Reunião".
11. **Footer** — institucional com OAB, contato, links legais.
12. **WhatsApp flutuante** — botão fixo bottom-right em todos os breakpoints (mobile e desktop), verde, com ícone SVG real do WhatsApp.

### Imagens
Gerar 2 imagens premium via `imagegen` (model: standard):
- Retrato do sócio fundador (4:5, atmosfera de escritório institucional, navy, luz quente).
- Hero/seção de apoio opcional (interior de escritório, atmosfera de banco privado).

Salvar em `src/assets/` e importar como ES6.

### Microinterações
- `framer-motion` (já no projeto se não, adicionar) para scroll reveals sutis (fade + translate Y, duração 0.6s, stagger).
- Hover lifts discretos em cards de serviços e diferenciais.
- Accordion animado no FAQ.

### Mobile-first
- Hero: padding reduzido, headline `text-4xl`, CTAs full-width empilhados.
- Trust bar: grid 2x2.
- Serviços: 1 coluna.
- Botão WhatsApp flutuante visível e grande (size-14).

### SEO
- Title <60 chars, description <160, og:title/og:description, twitter:card.
- Único `<h1>` no hero, h2 nas seções, alt text em todas imagens.
- HTML semântico (`<section>`, `<nav>`, `<footer>`, `<article>` em depoimentos).

### Conversão
- Todos os CTAs primários apontam para `https://wa.me/55XXXXXXXXXXX?text=Ol%C3%A1...` (placeholder — usar `(11) 99999-9999` até o cliente fornecer número real).
- Botão WhatsApp flutuante presente em todas as resoluções.

### Detalhes técnicos
- Componentes em `src/components/landing/` (Navbar, Hero, TrustBar, Services, Authority, Process, Differentials, Testimonials, FAQ, FinalCTA, Footer, FloatingWhatsApp).
- Usar shadcn `Accordion` para FAQ e `Button` customizado com variants `default` e `outline` mapeando aos tokens navy/accent.
- Sem alteração de backend; tudo frontend/presentation.
