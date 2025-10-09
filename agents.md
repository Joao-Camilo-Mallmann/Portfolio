# Regras do Projeto

Este documento descreve as principais regras e convenções a serem seguidas neste projeto.

## 1. Estrutura de Arquivos

- O projeto é desenvolvido em Vue.js (Options API).
- Os componentes reutilizáveis devem ser criados em `src/components`.
- As views (páginas) principais devem ser criadas em `src/views`.
- Os componentes devem ser nomeados em PascalCase (ex: `MeuComponente.vue`).

## 2. Estilização

- A estilização é feita primariamente com Tailwind CSS.
- Sempre que possivel usar  COMO OBRIGATORIO OS **componentes do PrimeVue** para consistência visual.
- O projeto utiliza a biblioteca de componentes PrimeVue, com o tema `tailwindcss-primeui`.
- **Regra Principal:** Todos os estilos globais e animações devem ser centralizados nos arquivos:
  - `src/assets/main.css` (para estilos globais e imports)
  - `src/assets/animations.css` (para keyframes e classes de animação)
- Estilos específicos de um componente devem ser declarados dentro do próprio componente, utilizando a tag `<style scoped>`.
- Não utilize a tag `<style>` sem o atributo `scoped` em componentes.

### Cores

- As cores primárias do projeto estão definidas no arquivo `tailwind.config.js` e devem ser utilizadas através de suas classes do Tailwind CSS.
- Utilize `dev: '#4d91ea'` (ex: `text-dev`, `bg-dev`) para o portfólio de **Desenvolvedor**.
- Utilize `editor: '#eaa64d'` (ex: `text-editor`, `bg-editor`) para o portfólio de **Editor**.

## 3. Componentes Vue

- Utilize a **Options API** para a criação de todos os componentes. O uso da Composition API não é permitido.
- Declare as `props` com tipos e, quando aplicável, com `required: true`.
- Mantenha a estrutura dos componentes organizada: `name`, `components`, `props`, `data`, `methods`, etc.

## 4. Código e Padrões

- O código deve ser formatado utilizando o Prettier, seguindo as regras do arquivo `.prettierrc.json`.
- Os comentários no código devem ser escritos em português.
- Utilize classes de animação do `animations.css` sempre que possível, em vez de criar novas animações dentro dos componentes.

## 5. Vite Configuração

- Sempre use BUN e não NPM
- O arquivo `vite.config.js` deve ser configurado para suportar Tailwind CSS e PrimeVue conforme o exemplo fornecido.
- Não adicione plugins desnecessários ao Vite.
