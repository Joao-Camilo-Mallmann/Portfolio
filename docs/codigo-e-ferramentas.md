---
description: Padrões de código, formatação, configuração Vite/BUN e versionamento Git
---

# Código e Padrões

- O código deve ser formatado utilizando o Prettier, seguindo as regras do arquivo `.prettierrc.json`.
- Os comentários no código devem ser escritos em português.
- Para ícones, prefira SVG inline ou componentes dedicados com fallbacks adequados.
- Use a Sintaxe Canônica do Tailwind v4+ por ser mais moderna e limpa:
  - Prefira gradientes lineares com `bg-linear-to-*` no lugar de `bg-gradient-to-*`.
  - Use a barra para opacidade de cores (ex: `bg-dev/30`, `text-white/80`) no lugar das classes legadas `bg-opacity-*` ou `text-opacity-*`.
    - *Nota de Compilação (v4+):* Modificadores de opacidade como `bg-white/2` (antigamente escrito como `bg-white/[0.02]`) são compilados usando a função nativa `color-mix` no espaço `oklab` (ex: `color-mix(in oklab, var(--color-white) 2%, transparent)`), garantindo cores e transparências mais vivas e precisas.
  - Prefira `shrink-*` e `grow-*` no lugar das versões v3 `flex-shrink-*` e `flex-grow-*`.
  - Defina variáveis e tokens de design customizados diretamente no CSS principal via diretiva `@theme` (o projeto não possui ou aceita `tailwind.config.js`).
- Evite criar estilos globais novos fora de `src/assets/main.css`.
- Manter o padrão de qualidade atual das entregas: soluções completas, limpas e com validação antes de finalizar.

## Animações

- **Scroll-Reveal:** use `v-motion-scroll-visible` por padrao.
- **Animações de entrada:** use `@vueuse/motion` com `v-motion` (`initial` + `enter`).
- **Animações de interação (hover/click):** use variantes `hovered` e `tapped` do Motion; complemente com Tailwind quando necessario.
- Evite duplicar sistemas de animacao: prefira Motion em vez de keyframes locais no componente.

# Vite Configuração

- Sempre use **BUN** e não NPM para gerenciamento de pacotes.
- O projeto usa Tailwind CSS v4 com o plugin `@tailwindcss/vite`.
- **IMPORTANTE:** Não existe arquivo `tailwind.config.js` - toda configuração Tailwind é feita via CSS com `@theme`.
- O arquivo `vite.config.js` usa os seguintes plugins essenciais:
  - `@vitejs/plugin-vue` - Suporte Vue 3
  - `@tailwindcss/vite` - Tailwind CSS v4
  - `vite-plugin-vue-devtools` - DevTools Vue
- Configurações de build incluem hash nos assets para cache busting.
- HMR está configurado com overlay para erros.
- Não adicione plugins desnecessários ao Vite.

# Git e Versionamento

- Use commits semânticos e descritivos.
- Mantenha o código organizado e bem comentado.
- Teste sempre as mudanças antes de fazer commit.
- Fluxo mínimo obrigatório de validação: executar `bun run build` após mudanças relevantes de UI/estrutura.
