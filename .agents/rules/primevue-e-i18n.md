---
description: Regras de integração PrimeVue e internacionalização (i18n)
---

# Integração PrimeVue

- Use componentes PrimeVue sempre que disponível: `Card`, `Timeline`, `Tabs`, `Panel`, etc.
- Não **IMPORTE** os componentes do PrimeVue, eles já são importados automaticamente.
- Para customização visual, use classes Tailwind com `!important` quando necessário: `!border-editor`.
- Mantenha a consistência visual através do tema `tailwindcss-primeui`.

# Internacionalização (i18n)

- O sistema de traduções usa um composable customizado (`src/composables/useI18n.js`) com dot-notation.
- Idiomas suportados: `pt-BR` (padrão) e `en`.

## Estrutura de Arquivos

```javascript
src/i18n/
├── pt-BR.js          # Arquivo principal PT-BR (seções compartilhadas + imports das subpastas)
├── en.js             # Arquivo principal EN (seções compartilhadas + imports das subpastas)
├── home/
│   ├── pt-BR.js      # Traduções: home, splitter
│   └── en.js
├── dev/
│   ├── pt-BR.js      # Traduções: dev, devProfile, devProjects, devStack
│   └── en.js
├── editor/
│   ├── pt-BR.js      # Traduções: editor, editorCard, editorChannel, editorCreative, editorPlaylist, editorTools
│   └── en.js
```

## Regras de Organização

- **Seções compartilhadas** (footer, social, seo, header, loading) ficam nos arquivos principais (`src/i18n/pt-BR.js` e `src/i18n/en.js`).
- **Seções contextuais** ficam nas subpastas (`home/`, `dev/`, `editor/`), separadas por página/contexto.
- Os arquivos principais importam e fazem **spread** das subpastas, unificando tudo num único export default.
- O composable `useI18n.js` importa apenas os dois arquivos principais — **não importar subpastas diretamente no composable**.

## Como Adicionar Novas Traduções

1. Se a tradução pertence a uma página específica (Home, Dev, Editor), adicionar no arquivo da subpasta correspondente.
2. Se a tradução é compartilhada (usada em múltiplas páginas), adicionar nos arquivos principais.
3. Se uma nova página for criada, criar uma nova subpasta em `src/i18n/<nome-da-pagina>/` com `pt-BR.js` e `en.js`.
4. Sempre adicionar a tradução em **ambos os idiomas** (pt-BR e en).
