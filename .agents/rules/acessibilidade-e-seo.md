---
description: Regras de acessibilidade, performance e SEO do projeto
---

# Acessibilidade e Performance

- Inclua sempre atributos `alt` em imagens.
- Use `loading="lazy"` para imagens que não estão na viewport inicial.
- Implemente handlers de erro para recursos externos (onerror em imagens).
- Use `rel="noopener noreferrer"` para links externos.
- Respeite as preferências de movimento reduzido através das classes CSS globais.

# SEO

- Utilize o `useHead` (`@unhead/vue`) na inicialização da página principal e rotas para adicionar regras de SEO dinâmicas.
- O favicon deve ser servido como `favicon.ico` na raiz para o build correto, além do SVG.
- Manter regras de PWA, Open Graph e Twitter Cards alinhadas nas rotas.
- O sitemap será gerado de acordo com as rotas exportadas.
- O Sitelinks Search Box deve ser implementado nas rotas de busca, enquanto SiteNavigationElement deve estar no `index.html` ou gerado via SSG.
- Para gerar páginas estáticas ou ter rotas resolvidas para os crawlers que não executam JS, garanta o output prerenderizado.
