# Regras do Projeto

Este documento descreve as principais regras e convenções a serem seguidas neste projeto.

## 1. Estrutura de Arquivos

- O projeto é desenvolvido em Vue.js (Options API).
- Os componentes reutilizáveis devem ser criados em `src/components`.
- As views (páginas) principais devem ser criadas em `src/views`.
- Os componentes devem ser nomeados em PascalCase (ex: `MeuComponente.vue`).

## 2. Estilização

- A estilização é feita primariamente com Tailwind CSS v4.
- Sempre que possível usar **COMO OBRIGATÓRIO OS componentes do PrimeVue** para consistência visual.
- O projeto utiliza a biblioteca de componentes PrimeVue, com o tema `tailwindcss-primeui`.
- **Regra Principal:** Todos os estilos globais e animações devem ser centralizados nos arquivos:
  - `src/assets/main.css` (para estilos globais, imports e definições de cores com @theme)
  - `src/assets/animations.css` (para keyframes e classes de animação)
- Estilos específicos de um componente devem ser declarados dentro do próprio componente, utilizando a tag `<style scoped>`.
- Não utilize a tag `<style>` sem o atributo `scoped` em componentes.

### Cores - Sistema Semântico

- **OBRIGATÓRIO:** Use APENAS classes semânticas de cores, nunca valores hex diretamente no código.
- As cores primárias são definidas no `main.css` usando a diretiva `@theme` do Tailwind CSS v4:
  - `--color-dev: #4d91ea` (azul para portfólio de Desenvolvedor)
  - `--color-editor: #eaa64d` (laranja para portfólio de Editor)

#### Classes de Cores Permitidas:

- **Desenvolvedor:** `text-dev`, `bg-dev`, `border-dev`, `hover:text-dev`, `group-hover:text-dev`, etc.
- **Editor:** `text-editor`, `bg-editor`, `border-editor`, `hover:text-editor`, `group-hover:text-editor`, etc.
- **Variações de Opacidade:** `bg-dev/20`, `border-editor/50`, `text-dev/80`, etc.

#### Regras de Cores:

- ❌ **PROIBIDO:** Usar hex colors (`#eaa64d`, `#4d91ea`) diretamente no código
- ❌ **PROIBIDO:** Usar `text-[#eaa64d]` ou sintaxe similar com valores arbitrários
- ✅ **PERMITIDO:** `text-editor`, `bg-dev`, `border-editor/30`
- ✅ **PERMITIDO:** Para drop-shadow, usar rgba: `drop-shadow-[0_0_15px_rgba(234,166,77,0.4)]`

## 3. Componentes Vue

- Utilize a **Options API** para a criação de todos os componentes. O uso da Composition API não é permitido.
- Declare as `props` com tipos e, quando aplicável, com `required: true`.
- Mantenha a estrutura dos componentes organizada: `name`, `components`, `props`, `data`, `methods`, etc.
- Para métodos que interagem com APIs do navegador (como `window.open`), crie métodos dedicados no componente em vez de usar diretamente no template.

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
- O arquivo `vite.config.js` deve ser configurado para suportar Tailwind CSS v4 e PrimeVue conforme o exemplo fornecido.
- Não adicione plugins desnecessários ao Vite.

## 6. Acessibilidade e Performance

- Inclua sempre atributos `alt` em imagens.
- Use `loading="lazy"` para imagens que não estão na viewport inicial.
- Implemente handlers de erro para recursos externos (onerror em imagens).
- Use `rel="noopener noreferrer"` para links externos.
- Respeite as preferências de movimento reduzido através das classes CSS globais.

## 7. Integração PrimeVue

- Use componentes PrimeVue sempre que disponível: `Card`, `Timeline`, `Tabs`, `Panel`, etc.
- Para customização visual, use classes Tailwind com `!important` quando necessário: `!bg-gray-900`, `!border-editor`.
- Mantenha a consistência visual através do tema `tailwindcss-primeui`.

## 8. Git e Versionamento

- Use commits semânticos e descritivos.
- Mantenha o código organizado e bem comentado.
- Teste sempre as mudanças antes de fazer commit.

---

**Última atualização:** Outubro 2025
**Versão do Tailwind CSS:** v4
**Versão do Vue:** 3 (Options API)
**Gerenciador de Pacotes:** BUN
