---
description: Regras de acessibilidade, performance e SEO do projeto
---

# 4. Acessibilidade e SEO

## Acessibilidade e Performance

- Inclua sempre atributo `alt` em imagens.
- Use `loading="lazy"` em imagens fora da primeira viewport.
- Para imagens e recursos externos, preveja fallback de erro quando aplicavel.
- Em links externos, use `rel="noopener noreferrer"`.
- Respeite `prefers-reduced-motion: reduce` em animacoes e transicoes.
- Garanta area minima de clique de 40x40px para elementos interativos.
- Preserve navegacao por teclado com estados visiveis de `:focus-visible`.

## SEO

- Use `useHead` (`@unhead/vue`) nas views para SEO dinamico.
- Mantenha `title`, `description`, `keywords`, Open Graph e Twitter Cards atualizados por rota.
- Defina `canonical` por pagina quando aplicavel.
- Garanta favicon acessivel na raiz para build final.
- Mantenha `robots.txt` e `sitemap.xml` coerentes com as rotas publicas.
- Para crawlers sem JS, mantenha o output prerenderizado/SSG correto.
