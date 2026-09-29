# Tasks

## 1. Dicionários e Otimização de Metadados (i18n)

- [x] 1.1 Atualizar títulos de páginas e descrições meta em `src/i18n/` (`pt-BR.js`, `en.js`, `home/`, `dev/`, `editor/`) substituindo termos genéricos como "Início" e "Home" por fórmulas orientadas a palavras-chave com nome do autor e especialidades
- [x] 1.2 Limpar meta tags estáticas conflitantes de `index.html` (title, description, keywords, og:*, twitter:*) preservando tags essenciais (viewport, favicon, fontes, GTM) para permitir controle pleno via `@unhead/vue`

## 2. Roteamento Localizado e Composable

- [x] 2.1 Reestruturar `src/router/index.js` para agrupar as rotas sob o prefixo `/:lang(pt-br|en-us)`, configurar redirecionamento inteligente na raiz `/` (com detecção do navegador e fallback para `/en-us/`) e mapear rotas legadas (`/dev`, `/editor`)
- [x] 2.2 Refatorar `src/composables/useI18n.js` para sincronizar reativamente o idioma ativo com a rota atual (`route.params.lang`) e garantir paridade durante o ciclo de vida do SSG
- [x] 2.3 Atualizar `src/components/HeaderCore.vue` para navegar para a rota espelhada no outro idioma ao clicar no botão de toggle e substituir o elemento `<h1>João Camilo</h1>` na logo por `<span>` para eliminar H1 duplicado

## 3. SEO On-Page, Hreflang e Schema.org

- [x] 3.1 Implementar tags canônicas, `rel="alternate" hreflang` (pt-br, en-us, x-default) e atributo dinâmico `<html :lang>` em `src/views/HomeView.vue`
- [x] 3.2 Implementar tags canônicas e `hreflang` específicas em `src/views/DevView.vue` e `src/views/EditorView.vue`
- [x] 3.3 Implementar componente ou hook de dados estruturados Schema.org (JSON-LD) com foto de perfil real, links de autoridade (LinkedIn, YouTube, GitHub) e idioma dinâmico

## 4. Sitemap e Validação de Build SSG

- [x] 4.1 Atualizar `public/sitemap.xml` com o namespace `xmlns:xhtml` e links alternativos recíprocos para todas as páginas em `/pt-br/` e `/en-us/`
- [x] 4.2 Ajustar `vite.config.js` e `package.json` para garantir que o `vite-ssg` exporte fisicamente os diretórios estáticos `dist/pt-br/` e `dist/en-us/`
- [x] 4.3 Executar `bun run build` e validar a geração dos arquivos HTML, confirmando a presença dos textos em inglês em `dist/en-us/index.html` e tags hreflang em ambos os idiomas
