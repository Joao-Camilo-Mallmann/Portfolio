# Regras do Projeto

Este documento descreve as principais regras e convenções a serem seguidas neste projeto.

## 1. Estrutura de Arquivos

- O projeto é desenvolvido em Vue.js (Composition API).
- Os componentes reutilizáveis devem ser criados em `src/components`.
- As views (páginas) principais devem ser criadas em `src/views`.
- Os componentes devem ser nomeados em PascalCase (ex: `MeuComponente.vue`).

## 2. Estilização

- A estilização é feita primariamente com Tailwind CSS v4.
- Sempre que possível usar **COMO OBRIGATÓRIO OS componentes do PrimeVue** para consistência visual.
- O projeto utiliza a biblioteca de componentes PrimeVue, com o tema `tailwindcss-primeui`.
- **Regra Principal:** Todos os estilos globais e animações devem ser centralizados nos arquivos:
  - `src/assets/main.css` (para estilos globais, imports, definições de cores com @theme e keyframes de animações customizadas)
  - `src/assets/animations.css` (para keyframes e classes de animação complexas)
- Estilos específicos de um componente devem ser declarados dentro do próprio componente, utilizando a tag `<style scoped>`.
- Não utilize a tag `<style>` sem o atributo `scoped` em componentes.

### Cores - Sistema Semântico (Tailwind v4)

- **OBRIGATÓRIO:** Use APENAS classes semânticas de cores, nunca valores hex diretamente no código.
- As cores primárias são definidas no `main.css` usando a diretiva `@theme` do Tailwind CSS v4:
  - `--color-dev: #4d91ea` (azul para portfólio de Desenvolvedor)
  - `--color-editor: #w` (laranja para portfólio de Editor)
- **IMPORTANTE:** Não existe mais o arquivo `tailwind.config.js` - toda configuração é feita via CSS usando `@theme`

#### Classes de Cores Permitidas:

- **Desenvolvedor:** `text-dev`, `bg-dev`, `border-dev`, `hover:text-dev`, `group-hover:text-dev`, etc.
- **Editor:** `text-editor`, `bg-editor`, `border-editor`, `hover:text-editor`, `group-hover:text-editor`, etc.
- **Variações de Opacidade:** `bg-dev/20`, `border-editor/50`, `text-dev/80`, etc.
- **CSS Variables:** Para uso em JavaScript ou CSS inline: `var(--color-dev)`, `var(--color-editor)`

#### Regras de Cores:

- ❌ **PROIBIDO:** Usar hex colors (`#eaa64d`, `#4d91ea`) diretamente no código HTML/templates
- ❌ **PROIBIDO:** Usar `text-[#eaa64d]` ou sintaxe similar com valores arbitrários
- ✅ **PERMITIDO:** `text-editor`, `bg-dev`, `border-editor/30`
- ✅ **PERMITIDO:** CSS Variables: `color: var(--color-dev)`, `backgroundColor: 'var(--color-editor)'`
- ✅ **PERMITIDO:** Para drop-shadow, usar rgba: `drop-shadow-[0_0_15px_rgba(234,166,77,0.4)]`

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

---

**Última atualização:** Outubro 2025
**Versão do Tailwind CSS:** v4
**Versão do Vue:** 3 (Composition API)
**Gerenciador de Pacotes:** BUN
