# Proposal

## Why

O portfólio atualmente possui tradução dinâmica apenas no lado do cliente (memória/localStorage), sem URLs específicas para cada idioma. Isso faz com que o `vite-ssg` gere arquivos estáticos somente em português (`pt-BR`), deixando a versão em inglês completamente inacessível e invisível para motores de busca (Google, Bing) e recrutadores internacionais. Além disso, a auditoria de SEO identificou oportunidades críticas: títulos fracos (como "Início" e "Home"), múltiplos H1s causados pelo logo no header, ausência de tags `hreflang`, e sitemap monolíngue.

Esta mudança introduz rotas com prefixo de idioma (`/pt-br` e `/en-us`), pré-renderização estática dupla no build, e um pacote completo de otimizações de SEO on-page, técnico e internacional para posicionar o portfólio no Brasil e no exterior.

## What Changes

- **Prefixos de URL Localizados**: Introduzir estrutura de rotas com `/:lang(pt-br|en-us)` para todas as páginas (`/`, `/dev`, `/editor`, `/easter-egg`).
- **Detecção Inteligente na Raiz (`/`)**: Acessos à raiz detectam o idioma do navegador do visitante (`pt*` vai para `/pt-br/`; qualquer outro idioma vai para o fallback internacional `/en-us/`).
- **Navegação Sincronizada no Header**: O botão de alternância de idioma faz navegação direta para a mesma página no outro idioma (ex: `/pt-br/dev` ➔ `/en-us/dev`).
- **Pré-renderização SSG Dupla**: Configurar o `vite-ssg` para compilar e gerar em disco os arquivos estáticos de ambos os idiomas (`dist/pt-br/` e `dist/en-us/`).
- **Tags Hreflang & Canonicals**: Adicionar em cada página tags `<link rel="alternate" hreflang="pt-br" ...>`, `hreflang="en-us"` e `hreflang="x-default"`, além de links canônicos autocitados.
- **Títulos e Metadados Otimizados**: Reformular os títulos e descrições nos dicionários i18n para fórmulas orientadas a palavras-chave (ex: `João Camilo Mallmann | Desenvolvedor Frontend Vue.js & Editor de Vídeo`).
- **Correção Semântica de Headings**: Substituir o `<h1>` indevido da logo em `HeaderCore.vue` por tag não-heading para evitar múltiplos H1s nas páginas internas.
- **Sitemap XML Multilíngue**: Atualizar `public/sitemap.xml` com o namespace `xmlns:xhtml` e anotações completas de URLs alternativas.
- **Dados Estruturados (Schema.org / JSON-LD)**: Enriquecer o Schema `Person` com links do LinkedIn e YouTube, foto real de perfil e paridade com o idioma ativo.

## Capabilities

### New Capabilities
- `multilingual-routing`: Roteamento com prefixo de localidade (`/pt-br` e `/en-us`), detecção e redirecionamento no root com fallback `en-us`, sincronização bidirecional do switcher de idioma e geração estática de rotas via `vite-ssg`.
- `seo-optimization`: Gestão de metadados, títulos otimizados por idioma, canonicals, tags `hreflang` e `x-default`, correção de hierarquia de headings, sitemap multilíngue e Schema.org contextual.

### Modified Capabilities
<!-- Nenhuma especificação de componente existente teve seus requisitos de comportamento alterados. -->

## Impact

- **Roteamento**: `src/router/index.js`, `src/main.js`, `src/App.vue`.
- **Internacionalização**: `src/composables/useI18n.js`, `src/i18n/` (dicionários e SEO titles).
- **Componentes**: `src/components/HeaderCore.vue` (troca de rota no toggle e remoção do H1 na logo).
- **Views**: `src/views/HomeView.vue`, `src/views/DevView.vue`, `src/views/EditorView.vue` (metadados com `@unhead/vue`).
- **Build & Assets**: `vite.config.js`, `package.json` (scripts postbuild), `public/sitemap.xml`, `public/robots.txt`, `index.html`.
