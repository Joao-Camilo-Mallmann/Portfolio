# Regras do Projeto

Este documento descreve as principais regras e convenções a serem seguidas neste projeto.

## 1. Estrutura de Arquivos

- O projeto é desenvolvido em Vue.js (Composition API).
- Os componentes reutilizáveis devem ser criados em `src/components`.
- As views (páginas) principais devem ser criadas em `src/views`.
- Os componentes devem ser nomeados em PascalCase (ex: `MeuComponente.vue`).

## 2. Estilização

- A estilização é feita primariamente com Tailwind CSS v4.
- **Preferência por Tailwind:** Priorize sempre o uso de classes utilitárias do Tailwind CSS no template. Tente reduzir e evitar o uso de estilos customizados dentro da tag `<style scoped>`, deixando-os apenas para casos onde o Tailwind não seja prático.
- Sempre que possível usar **COMO OBRIGATÓRIO OS componentes do PrimeVue** para consistência visual.
- O projeto utiliza a biblioteca de componentes PrimeVue, com o tema `tailwindcss-primeui`.
- **Regra Principal:** Todos os estilos globais e animações devem ser centralizados nos arquivos:
  - `src/assets/main.css` (para estilos globais, para definições de cores com @theme e keyframes de animações customizadas)
  - `src/assets/animations.css` (para keyframes e classes de animação complexas)
- Dê preferência ao Tailwind antes de recorrer ao `<style scoped>` para manter o código conciso.
- **Atenção:** Evite utilizar a tag `<style>` sem o atributo `scoped` em componentes para garantir que os estilos não afetem outros elementos.

### Cores - Sistema Semântico (Tailwind v4)

- **OBRIGATÓRIO:** Use APENAS classes semânticas de cores, nunca valores hex diretamente no código.
- As cores primárias são definidas no `main.css` usando a diretiva `@theme` do Tailwind CSS v4:
  - `--color-dev: #4d91ea` (azul para portfólio de Desenvolvedor)
  - `--color-editor: #eaa64d` (laranja para portfólio de Editor)
- **IMPORTANTE:** Não existe mais o arquivo `tailwind.config.js` - toda configuração é feita via CSS usando `@theme`

#### Classes de Cores Permitidas

- **Desenvolvedor:** `text-dev`, `bg-dev`, `border-dev`, `hover:text-dev`, `group-hover:text-dev`, etc.
- **Editor:** `text-editor`, `bg-editor`, `border-editor`, `hover:text-editor`, `group-hover:text-editor`, etc.
- **Variações de Opacidade:** `bg-dev/20`, `border-editor/50`, `text-dev/80`, etc.
- **CSS Variables:** Para uso em JavaScript ou CSS inline: `var(--color-dev)`, `var(--color-editor)`

#### Regras de Cores

- ⚠️ **Evite:** Usar hex colors (`#eaa64d`, `#4d91ea`) diretamente no código HTML/templates
- ⚠️ **Evite:** Usar `text-[#eaa64d]` ou sintaxe similar com valores arbitrários
- ✅ **PERMITIDO:** `text-editor`, `bg-dev`, `border-editor/30`
- ✅ **PERMITIDO:** CSS Variables: `color: var(--color-dev)`, `backgroundColor: 'var(--color-editor)'`
- ⚠️ **EVITE:** Usar sombras com valores fixos de px ou rgba como `drop-shadow-[0_0_15px_rgba(...)]`.
- ✅ **PERMITIDO:** Use sempre as classes de sombra padrão do Tailwind e componha com as cores temáticas (ex: `shadow-lg`, `shadow-editor/40`, `drop-shadow-sm`).

### Animações - Sistema Customizado (Tailwind v4)

- Animações customizadas são definidas no `main.css` usando a diretiva `@theme`:
  - `--animate-fade-in-up`: fade com movimento vertical
  - `--animate-bounce-in`: entrada com bounce e rotação
  - `--animate-pulse-slower`: pulso lento e suave
- Use classes Tailwind: `animate-fade-in-up`, `animate-bounce-in`, `animate-pulse-slower`
- Keyframes correspondentes são definidos no mesmo arquivo para manutenção fácil

## 3. Componentes Vue

- Utilize a **Composition API** (`<script setup>`) para a criação de todos os componentes. O uso da Options API não é mais recomendado.
- Declare as `props` usando `defineProps`.
- Declare os eventos usando `defineEmits`.
- Mantenha a estrutura dos componentes organizada e limpa.
- Para métodos que interagem com APIs do navegador (como `window.open`), crie funções dentro do `<script setup>`.

## 4. Código e Padrões

- O código deve ser formatado utilizando o Prettier, seguindo as regras do arquivo `.prettierrc.json`.
- Os comentários no código devem ser escritos em português.
- Utilize classes de animação do `animations.css` sempre que possível, em vez de criar novas animações dentro dos componentes.
- Para ícones, prefira SVG inline ou componentes dedicados com fallbacks adequados.

### Animações

- Use as classes predefinidas em `animations.css`: `animate-fade-in`, `animate-slide-up`, `animate-bounce-soft`, etc.
- Para animações sequenciais, use delays com `animation-delay` ou classes `animate-delay-*`.
- Mantenha as animações suaves e profissionais, evitando efeitos excessivos.

## 5. Vite Configuração

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

## 6. Acessibilidade e Performance

- Inclua sempre atributos `alt` em imagens.
- Use `loading="lazy"` para imagens que não estão na viewport inicial.
- Implemente handlers de erro para recursos externos (onerror em imagens).
- Use `rel="noopener noreferrer"` para links externos.
- Respeite as preferências de movimento reduzido através das classes CSS globais.

## 7. Integração PrimeVue

- Use componentes PrimeVue sempre que disponível: `Card`, `Timeline`, `Tabs`, `Panel`, etc.
- Não **IMPORTE** os componentes do PrimeVue, eles já são importados automaticamente.
- Para customização visual, use classes Tailwind com `!important` quando necessário: `!border-editor`.
- Mantenha a consistência visual através do tema `tailwindcss-primeui`.

## 8. Git e Versionamento

- Use commits semânticos e descritivos.
- Mantenha o código organizado e bem comentado.
- Teste sempre as mudanças antes de fazer commit.

## 9. SEO

- Utilize o `useHead` (`@unhead/vue`) na inicialização da página principal e rotas para adicionar regras de SEO dinâmicas.
- O favicon deve ser servido como `favicon.ico` na raiz para o build correto, além do SVG.
- Manter regras de PWA, Open Graph e Twitter Cards alinhadas nas rotas.
- O sitemap será gerado de acordo com as rotas exportadas.
- O Sitelinks Search Box deve ser implementado nas rotas de busca, enquanto SiteNavigationElement deve estar no `index.html` ou gerado via SSG.
- Para gerar páginas estáticas ou ter rotas resolvidas para os crawlers que não executam JS, garanta o output prerenderizado.

## 10. Internacionalização (i18n)

- O sistema de traduções usa um composable customizado (`src/composables/useI18n.js`) com dot-notation.
- Idiomas suportados: `pt-BR` (padrão) e `en`.

### Estrutura de Arquivos

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

### Regras de Organização

- **Seções compartilhadas** (footer, social, seo, header, loading) ficam nos arquivos principais (`src/i18n/pt-BR.js` e `src/i18n/en.js`).
- **Seções contextuais** ficam nas subpastas (`home/`, `dev/`, `editor/`), separadas por página/contexto.
- Os arquivos principais importam e fazem **spread** das subpastas, unificando tudo num único export default.
- O composable `useI18n.js` importa apenas os dois arquivos principais — **não importar subpastas diretamente no composable**.

### Como Adicionar Novas Traduções

1. Se a tradução pertence a uma página específica (Home, Dev, Editor), adicionar no arquivo da subpasta correspondente.
2. Se a tradução é compartilhada (usada em múltiplas páginas), adicionar nos arquivos principais.
3. Se uma nova página for criada, criar uma nova subpasta em `src/i18n/<nome-da-pagina>/` com `pt-BR.js` e `en.js`.
4. Sempre adicionar a tradução em **ambos os idiomas** (pt-BR e en).

## 11. Polimento de Interface (UI/UX) - Princípios do make-interfaces-feel-better

- **OBRIGATÓRIO:** Aplicar os princípios do design de interações para que a interface não pareça amadora, através das regras abaixo:

### Tipografia Escrita

-- **LEIA o /make-interfaces-feel-better.md** para entender os princípios.

- Aplique antialiasing na root do projeto (ex: `antialiased`) para ter textos mais consistentes e nítidos.
- Números dinâmicos: sempre adicionar `tabular-nums` em componentes com numerais instáveis para prevenir quebras e solavancos da UI.
- Quebras de título: prefira usar `text-wrap: balance` (para títulos grandes) e `text-wrap: pretty` (para blocos de texto grandes), prevenindo linhas flutuantes (órbitas).

### Formato, Sombras e Alinhamentos

- **Bordas Concêntricas:** É a principal regra visual. Container externo arredondado e filho interno arredondado NUNCA tem os mesmos raios visuais se houver padding em volta. Sempre aplique matematicamente: `outerRadius = innerRadius + padding`.
- **Alinhamento Óptico > Geométrico:** Ícones (principalmente triângulos e setas) raramente ficam balanceados numa div geométrica pura. É necessário ajustes manuais com paddings visuais.
- **Sombra Multicamada > Borda Sólida:** Prefira declarar sombras em camadas e translúcidas (`drop-shadow-sm drop-shadow-lg`) antes de delimitar fronteiras opacas nos cartões. Elas adaptam-se bem e garantem excelente percepção natural do layout.
- **Imagens Profundas:** Imagens costumam fluir perfeitamente quando injetado borda super fina e clara `outline/line 1px` que mal seja registrada pelos olhos de uma só vez, criando elevação.

### Comportamento Tátil e Animações (Hit Areas)

- **Áreas Mínimas de Clique:** Garantir que qualque interação, por menor que seja o pino ou ícone visível, conte com espaço de Hit Area contendo no mínimo **40x40px** lógicos (adicione padding/pseudo-elementos). Áreas de impacto diferentes nunca se tocam.
- **Tátil no Click (`active` state):** Use exato `active:scale-[0.96]` (ou o equivalente nativo próximo `active:scale-95`) nos botões. Valores abaixo disso, como escala de 0.8, são inaceitáveis e afetam os sentidos.
- **Animações e Entradas:** Animações devem ser interrompíveis no CSS puro em caso de feedback contínuo (prefira transições a keyframes bloqueados).
  - Sempre fracione animações de bloco monolítico para `stagger` de seus elementos com um delay suave (~100ms) por elemento.
  - Saídas do conteúdo devem ser sutis, menores e com percursos curtos comparados com exibições grandiosas (`translates` ou `fades` suaves curtos).
  - Nunca aplique animações em componentes de primeiríssimo layout sem intencionalidade (evite entradas fantasmas do page load).
- **Transition/GPU (Super Dicas):**
  - NUNCA submeta a diretiva `transition-all`. Acione propriedades específicas para salvar processamento (ex: `transition-opacity`, `transition-transform`). Tailwind resolve transformações por conta.
  - Animação da primeira instância tem pequenos "solavancos"? Use `will-change-transform` pontualmente para alocar GPU nos processos – usar com extrema parcimônia e isolado (`will-change` nunca pode equivaler a `all`).

---

**Última atualização:** Março 2026
**Versão do Tailwind CSS:** v4
**Versão do Vue:** 3 (Composition API)
**Gerenciador de Pacotes:** BUN
