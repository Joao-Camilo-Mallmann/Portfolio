# Design

## Context

O portfólio é construído em Vue 3, Vite-SSG (`vite-ssg build`), Tailwind CSS e `@unhead/vue`, hospedado no GitHub Pages com domínio customizado (`joao-camilo-mallmann.com`). Atualmente, o `vite-ssg` processa apenas um conjunto de rotas sem prefixo (`/`, `/dev`, `/editor`, `/easter-egg`) com um singleton em memória `state.locale = 'pt-BR'`. Como resultado, os textos em inglês de `src/i18n/en.js` nunca são emitidos em arquivos HTML estáticos.

Para motivação e objetivos de negócio detalhados, consulte `proposal.md` e as especificações em `specs/`.

## Goals / Non-Goals

**Goals:**
- Implementar roteamento explícito com prefixos `/pt-br/` e `/en-us/` para todas as páginas.
- Garantir que o `vite-ssg` exporte fisicamente diretórios estáticos para ambos os idiomas (`dist/pt-br/` e `dist/en-us/`).
- Configurar detecção na raiz `/` (baseado no idioma do navegador ou preferência salva), com fallback padrão para `/en-us/`.
- Manter links canônicos e tags `hreflang` recíprocas (incluindo `x-default`) injetadas via `@unhead/vue`.
- Unificar e otimizar os títulos de página e descrições meta em ambos os idiomas com foco em SEO internacional e local.
- Eliminar múltiplos H1s causados pelo logo no `HeaderCore.vue`.
- Atualizar o `public/sitemap.xml` para cobrir todas as variantes com tags `xhtml:link`.
- Enriquecer o Schema.org (JSON-LD) com foto real e links de autoridade (LinkedIn, YouTube).

**Non-Goals:**
- Não adicionaremos suporte a novos idiomas adicionais (como espanhol ou alemão) nesta mudança, embora a arquitetura deva suportar expansão futura.
- Não alteraremos o design visual das seções existentes (layout, cores, animações).
- Não implementaremos backend ou SSR dinâmico em runtime (o site continuará 100% estático gerado por SSG no GitHub Pages).

## Decisions

### 1. Estrutura de Rotas e Suporte SSG
- **Decisão**: Agrupar rotas sob `/:lang(pt-br|en-us)` e exportar explicitamente no `includedRoutes` do `vite-ssg`:
  - `/pt-br`, `/pt-br/dev`, `/pt-br/editor`, `/pt-br/easter-egg`
  - `/en-us`, `/en-us/dev`, `/en-us/editor`, `/en-us/easter-egg`
- **Alternativa Considerada**: Deixar a raiz `/` como português e usar apenas `/en/` para inglês.
  - *Motivo do Descarte*: O Google trata a raiz sem prefixo como página potencialmente duplicada ou não espelhada se não tiver simetria clara. A simetria `/pt-br/` e `/en-us/` com `/` como `x-default` segue a recomendação oficial de John Mueller (Google Search Central).

### 2. Comportamento da Raiz (`/`)
- **Decisão**: A rota `/` atua como redirecionador inteligente:
  - No cliente (navegador): lê `localStorage.getItem('portfolio-locale')` ou `navigator.language`. Se o código começar com `pt` (`pt`, `pt-BR`, `pt-PT`), redireciona para `/pt-br/`. Qualquer outro idioma é direcionado para `/en-us/`.
  - No build estático (`dist/index.html`): gera script de redirecionamento imediato no `<head>` com fallback `<meta http-equiv="refresh" content="0; url=/en-us/">`.

### 3. Sincronização do Composable `useI18n` com o Router
- **Decisão**: O `useI18n` passa a sincronizar seu estado ativo diretamente a partir do parâmetro `lang` da rota atual (`route.params.lang`).
- Ao clicar no botão de troca de idioma no `HeaderCore.vue`, a ação realiza `router.push({ path: targetPath })` substituindo o prefixo `/pt-br` por `/en-us` (ou vice-versa) e gravando a preferência no `localStorage`.

### 4. Metadados Unhead, Hreflang e Canonicals
- **Decisão**: Limpar meta tags estáticas conflitantes do [index.html](file:///home/joao/projects/Portfolio/index.html) e delegar a definição de `<title>`, `<meta name="description">`, canonical e `hreflang` para cada view via `@unhead/vue`:
  - `hreflang="pt-br"` ➔ `https://joao-camilo-mallmann.com/pt-br...`
  - `hreflang="en-us"` ➔ `https://joao-camilo-mallmann.com/en-us...`
  - `hreflang="x-default"` ➔ `https://joao-camilo-mallmann.com/en-us...`
  - Atualização do atributo `<html lang="pt-BR">` ou `<html lang="en-US">` dinamicamente no SSG.

### 5. Correção de Headings Semânticos
- **Decisão**: Em [src/components/HeaderCore.vue](file:///home/joao/projects/Portfolio/src/components/HeaderCore.vue), substituir a tag `<h1>João Camilo</h1>` por `<span class="text-white font-semibold ...">João Camilo</span>`.
  - Isso garante que apenas as seções Hero das páginas (`DevView`, `EditorView`, `HomeView`) detenham o único e principal `<h1>` do documento.

### 6. Sitemap Internacional
- **Decisão**: Reformular [public/sitemap.xml](file:///home/joao/projects/Portfolio/public/sitemap.xml) adicionando o namespace `xmlns:xhtml="http://www.w3.org/1999/xhtml"` e declarando os links alternativos cruzados para cada uma das páginas.

## Risks / Trade-offs

- **[Risco] Backlinks antigos ou acessos diretos para `/dev` e `/editor` gerarem 404**
  - *Mitigação*: Configurar redirecionamentos de compatibilidade no `vue-router` para que acessos diretos a rotas legadas sem prefixo (`/dev`, `/editor`) sejam automaticamente redirecionados para `/{lang}/dev` e `/{lang}/editor`.
- **[Risco] Diferença de hidratação (SSR hydration mismatch) entre o locale do servidor e o do cliente**
  - *Mitigação*: Durante o build SSG de cada rota (ex: `/pt-br/dev`), inicializar o locale imediatamente a partir da URL solicitada antes da renderização dos componentes.
- **[Risco] Deploy no GitHub Pages exigindo arquivos `index.html` em subpastas**
  - *Mitigação*: O ViteSSG por padrão gera a hierarquia de pastas (ex: `dist/pt-br/index.html`, `dist/pt-br/dev/index.html`), que é servida perfeitamente como URLs limpas pelo GitHub Pages. Ajustar os scripts de `postbuild` para garantir que `404.html` e a raiz permaneçam íntegros.

## Migration Plan

1. Atualizar dicionários `src/i18n/` com títulos otimizados para SEO.
2. Atualizar `src/router/` e `src/composables/useI18n.js` com suporte a `/:lang`.
3. Ajustar `HeaderCore.vue` (troca de rota no switcher e remoção do `<h1>`).
4. Atualizar as views com `useHead` contendo canonicals, `hreflang` e schema.
5. Configurar `vite.config.js` com as rotas do SSG e atualizar `public/sitemap.xml`.
6. Executar build local (`bun run build` ou `npm run build`) e verificar arquivos gerados em `dist/`.
