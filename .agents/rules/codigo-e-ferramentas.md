---
description: Padrões de código, formatação, configuração Vite/BUN e versionamento Git
---

# Código e Padrões

- O código deve ser formatado utilizando o Prettier, seguindo as regras do arquivo `.prettierrc.json`.
- Os comentários no código devem ser escritos em português.
- Para ícones, prefira SVG inline ou componentes dedicados com fallbacks adequados.
- Evite criar estilos globais novos fora de `src/assets/main.css`.

## Animações

- **Scroll-Reveal:** Para animações ativadas por scroll, use `v-motion-scroll-visible` ou o composable `useScrollReveal` quando precisar apenas do smooth scroll com Lenis.
- **Animações de entrada:** prefira `@vueuse/motion` e as diretivas já registradas no app.
- **Animações de interação (hover/click):** use classes Tailwind (`hover:scale-105`, `active:scale-[0.96]`, `transition-opacity`, `transition-transform`).
- Não crie uma segunda camada de CSS animation global para os mesmos efeitos já cobertos por Motion.

# Vite Configuração

- Sempre use **BUN** e não NPM para gerenciamento de pacotes.
- O projeto usa Tailwind CSS v4 com o plugin `@tailwindcss/vite`.
- **IMPORTANTE:** Não existe arquivo `tailwind.config.js` - toda configuração Tailwind é feita via CSS com `@theme`.
- O arquivo `vite.config.js` usa os seguintes plugins essenciais:
  - `@vitejs/plugin-vue` - Suporte Vue 3
  - `@tailwindcss/vite` - Tailwind CSS v4
  - `unplugin-vue-components/vite` - Auto-import de componentes PrimeVue
  - `vite-plugin-vue-devtools` - DevTools Vue
- Configurações de build incluem hash nos assets para cache busting.
- HMR está configurado com overlay para erros.
- Não adicione plugins desnecessários ao Vite.

# Git e Versionamento

- Use commits semânticos e descritivos.
- Mantenha o código organizado e bem comentado.
- Teste sempre as mudanças antes de fazer commit.
