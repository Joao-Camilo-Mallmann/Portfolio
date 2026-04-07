---
description: Princípios de polimento de interface (UI/UX) - tipografia, sombras, animações e hit areas
---

# 11. Polimento de Interface (UI/UX) - Princípios do make-interfaces-feel-better

- **OBRIGATÓRIO:** Aplicar os princípios do design de interações para que a interface não pareça amadora, através das regras abaixo:

## Tipografia Escrita

- **LEIA o /make-interfaces-feel-better.md** para entender os princípios.
- Aplique antialiasing na root do projeto (ex: `antialiased`) para ter textos mais consistentes e nítidos.
- Números dinâmicos: sempre adicionar `tabular-nums` em componentes com numerais instáveis para prevenir quebras e solavancos da UI.
- Quebras de título: prefira usar `text-wrap: balance` (para títulos grandes) e `text-wrap: pretty` (para blocos de texto grandes), prevenindo linhas flutuantes (órbitas).

## Formato, Sombras e Alinhamentos

- **Bordas Concêntricas:** É a principal regra visual. Container externo arredondado e filho interno arredondado NUNCA tem os mesmos raios visuais se houver padding em volta. Sempre aplique matematicamente: `outerRadius = innerRadius + padding`.
- **Alinhamento Óptico > Geométrico:** Ícones (principalmente triângulos e setas) raramente ficam balanceados numa div geométrica pura. É necessário ajustes manuais com paddings visuais.
- **Sombra Multicamada > Borda Sólida:** Prefira declarar sombras em camadas e translúcidas (`drop-shadow-sm drop-shadow-lg`) antes de delimitar fronteiras opacas nos cartões. Elas adaptam-se bem e garantem excelente percepção natural do layout.
- **Imagens Profundas:** Imagens costumam fluir perfeitamente quando injetado borda super fina e clara `outline/line 1px` que mal seja registrada pelos olhos de uma só vez, criando elevação.

## Comportamento Tátil e Animações (Hit Areas)

- **Áreas Mínimas de Clique:** Garantir que qualque interação, por menor que seja o pino ou ícone visível, conte com espaço de Hit Area contendo no mínimo **40x40px** lógicos (adicione padding/pseudo-elementos). Áreas de impacto diferentes nunca se tocam.
- **Tátil no Click (`active` state):** Use exato `active:scale-[0.96]` (ou o equivalente nativo próximo `active:scale-95`) nos botões. Valores abaixo disso, como escala de 0.8, são inaceitáveis e afetam os sentidos.
- **Animações e Entradas:** Animações devem ser interrompíveis no CSS puro em caso de feedback contínuo (prefira transições a keyframes bloqueados).
  - Sempre fracione animações de bloco monolítico para `stagger` de seus elementos com um delay suave (~100ms) por elemento.
  - Saídas do conteúdo devem ser sutis, menores e com percursos curtos comparados com exibições grandiosas (`translates` ou `fades` suaves curtos).
  - Nunca aplique animações em componentes de primeiríssimo layout sem intencionalidade (evite entradas fantasmas do page load).
- **Transition/GPU (Super Dicas):**
  - NUNCA submeta a diretiva `transition-all`. Acione propriedades específicas para salvar processamento (ex: `transition-opacity`, `transition-transform`). Tailwind resolve transformações por conta.
  - Animação da primeira instância tem pequenos "solavancos"? Use `will-change-transform` pontualmente para alocar GPU nos processos – usar com extrema parcimônia e isolado (`will-change` nunca pode equivaler a `all`).
