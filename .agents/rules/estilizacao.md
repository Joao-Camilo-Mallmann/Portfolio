---
description: Regras de estilização com Tailwind CSS v4, PrimeVue e sistema de cores semântico
---

# 2. Estilização

- A estilização é feita primariamente com Tailwind CSS v4.
- **Preferência por Tailwind:** Priorize sempre classes utilitárias do Tailwind no template. Use `<style scoped>` apenas quando o Tailwind não resolver bem o caso.
- Sempre que possível use os componentes do PrimeVue para consistência visual.
- O projeto utiliza `tailwindcss-primeui` e não depende de `tailwind.config.js`.
- **Regra principal:** os tokens globais vivem em `src/assets/main.css` via `@theme`. Não crie utilitários customizados para sombra, borda ou superfície quando Tailwind já oferecer equivalente.
- Prefira classes nativas como `shadow-sm`, `shadow-lg`, `ring-1`, `ring-inset`, `border`, `border-border`, `bg-surface-100`, `bg-surface-card` e `text-fg-muted`.
- Evite estilos globais fora de `main.css`.
- Evite usar `<style>` sem `scoped` em componentes para não vazar estilos.

## Cores - Sistema Semântico (Tailwind v4)

- **OBRIGATÓRIO:** Use APENAS classes semânticas de cores, nunca valores hex diretamente no código.
- As cores primárias são definidas no `main.css` usando a diretiva `@theme` do Tailwind CSS v4:
  - `--color-dev: #4d91ea` (azul para portfólio de Desenvolvedor)
  - `--color-editor: #eaa64d` (laranja para portfólio de Editor)
- **IMPORTANTE:** Não existe mais o arquivo `tailwind.config.js` - toda configuração é feita via CSS usando `@theme`

### Classes de Cores e Superfície Permitidas

- **Desenvolvedor:** `text-dev`, `bg-dev`, `border-dev`, `hover:text-dev`, `group-hover:text-dev`, etc.
- **Editor:** `text-editor`, `bg-editor`, `border-editor`, `hover:text-editor`, `group-hover:text-editor`, etc.
- **Variações de Opacidade:** `bg-dev/20`, `border-editor/50`, `text-dev/80`, etc.
- **Superfícies semânticas:** `bg-surface-100`, `bg-surface-card`, `border-border`, `text-fg`, `text-fg-muted`.
- **CSS Variables:** Para uso em JavaScript ou CSS inline: `var(--color-dev)`, `var(--color-editor)`

### Regras de Cores

- ⚠️ **Evite:** Usar hex colors (`#eaa64d`, `#4d91ea`) diretamente no código HTML/templates
- ⚠️ **Evite:** Usar `text-[#eaa64d]` ou sintaxe similar com valores arbitrários
- ✅ **PERMITIDO:** `text-editor`, `bg-dev`, `border-editor/30`
- ✅ **PERMITIDO:** CSS Variables: `color: var(--color-dev)`, `backgroundColor: 'var(--color-editor)'`
- ⚠️ **EVITE:** criar utilitários customizados de sombra/borda em componentes ou em `main.css`.
- ✅ **PERMITIDO:** use classes nativas do Tailwind e combine com as cores temáticas quando precisar de profundidade (`shadow-sm`, `shadow-lg`, `ring-1`, `ring-inset`, `border-border`).

## Animações e Motion

- Para scroll suave, o projeto usa Lenis e Motion via `@vueuse/motion`.
- Os reveals de página usam `v-motion-scroll-visible`.
- Evite criar uma segunda camada de animações CSS globais para o mesmo efeito.
- Animações de interação devem preferir `transition-opacity`, `transition-transform` e estados do Motion/Tailwind.
