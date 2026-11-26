// Pós-build estático para o GitHub Pages:
// - copia dist/index.html para dist/404.html (fallback SPA)
// - gera páginas mínimas de redirecionamento para as rotas legadas sem prefixo de idioma

import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const SITE_URL = 'https://joao-camilo-mallmann.com'
const LEGACY_ROUTES = ['dev', 'editor', 'editor/projetos', 'easter-egg']
const DIST_DIR = import.meta.dirname
  ? resolve(import.meta.dirname, '..', 'dist')
  : resolve('dist')

function buildRedirectHtml(route) {
  const defaultTarget = `/en-us/${route}/`
  const canonicalUrl = `${SITE_URL}${defaultTarget}`
  const robotsTag =
    route === 'easter-egg' ? '    <meta name="robots" content="noindex, nofollow" />' : null

  const headTags = [
    '    <meta charset="UTF-8" />',
    '    <title>João Camilo Mallmann</title>',
    robotsTag,
    `    <link rel="canonical" href="${canonicalUrl}" />`,
    `    <meta http-equiv="refresh" content="0; url=${defaultTarget}" />`,
  ]
    .filter(Boolean)
    .join('\n')

  return `<!doctype html>
<html lang="en">
  <head>
${headTags}
    <script>
      (function () {
        try {
          var saved = localStorage.getItem('portfolio-locale');
          var lang = 'en-us';
          if (saved === 'pt-br' || saved === 'pt-BR') {
            lang = 'pt-br';
          } else if (saved === 'en-us' || saved === 'en') {
            lang = 'en-us';
          } else if ((navigator.language || navigator.userLanguage || '').toLowerCase().indexOf('pt') === 0) {
            lang = 'pt-br';
          }
          location.replace('/' + lang + '/${route}/' + location.search + location.hash);
        } catch (e) {
          location.replace('${defaultTarget}' + location.search + location.hash);
        }
      })();
    </script>
  </head>
  <body>
    <a href="${defaultTarget}">Redirecting...</a>
  </body>
</html>
`
}

// Copia dist/index.html para dist/404.html
copyFileSync(join(DIST_DIR, 'index.html'), join(DIST_DIR, '404.html'))

// Gera os stubs de redirecionamento das rotas legadas
for (const route of LEGACY_ROUTES) {
  const targetDir = join(DIST_DIR, ...route.split('/'))
  mkdirSync(targetDir, { recursive: true })
  writeFileSync(join(targetDir, 'index.html'), buildRedirectHtml(route), 'utf8')
}
