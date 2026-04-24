---
description: Padrões de código, formatação, configuração Vite/BUN e versionamento Git
---

# Código e Padrões

- O código deve ser formatado utilizando o Prettier, seguindo as regras do arquivo `.prettierrc.json`.
- Os comentários no código devem ser escritos em português.
- Para ícones, prefira SVG inline ou componentes dedicados com fallbacks adequados.
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
