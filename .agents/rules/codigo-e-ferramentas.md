---
description: Padrões de código, formatação, configuração Vite/BUN e versionamento Git
---

# Código e Padrões

- O código deve ser formatado utilizando o Prettier, seguindo as regras do arquivo `.prettierrc.json`.
- Os comentários no código devem ser escritos em português.
- Utilize classes de animação do `animations.css` sempre que possível, em vez de criar novas animações dentro dos componentes.
- Para ícones, prefira SVG inline ou componentes dedicados com fallbacks adequados.

## Animações

- **Scroll-Reveal (Lenis):** Para animações ativadas por scroll, use o composable `useScrollReveal` com atributos `data-scroll-reveal` e `.scroll-reveal-child`. Ver regras completas em `scroll-e-animacoes.md`.
- **Animações de entrada (page-load):** Use as classes predefinidas em `animations.css`: `animate-fade-in`, `animate-slide-up`, `animate-bounce-soft`, etc.
- **Animações de interação (hover/click):** Use classes Tailwind (`hover:scale-105`, `active:scale-[0.96]`).
- Para animações sequenciais, use delays com `animation-delay` ou classes `animate-delay-*`.
- **NÃO misture** animações de scroll-reveal com classes CSS legadas no mesmo elemento.

# Vite Configuração

- Sempre use **BUN** e não NPM para gerenciamento de pacotes.
- O projeto usa Tailwind CSS v4 com o plugin `@tailwindcss/vite`.
- **IMPORTANTE:** Não existe arquivo `tailwind.config.js` - toda configuração Tailwind é feita via CSS com `@theme`
- O arquivo `vite.config.js` usa os seguintes plugins essenciais:
  - `@vitejs/plugin-vue` - Suporte Vue 3
  - `@tailwindcss/vite` - Tailwind CSS v4
  - `unplugin-vue-components/vite` - Auto-import de componentes PrimeVue
  - `vite-plugin-vue-devtools` - DevTools Vue
- Configurações de build incluem hash nos assets para cache busting
- HMR está configurado com overlay para erros
- Não adicione plugins desnecessários ao Vite.

# Git e Versionamento

- Use commits semânticos e descritivos.
- Mantenha o código organizado e bem comentado.
- Teste sempre as mudanças antes de fazer commit.
