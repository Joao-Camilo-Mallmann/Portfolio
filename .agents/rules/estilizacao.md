---
description: Regras de estilização com Tailwind CSS v4, PrimeVue e sistema de cores semântico
---

# 2. Estilização

- A estilização é feita primariamente com Tailwind CSS v4.
- **Preferência por Tailwind:** Priorize sempre o uso de classes utilitárias do Tailwind CSS no template. Tente reduzir e evitar o uso de estilos customizados dentro da tag `<style scoped>`, deixando-os apenas para casos onde o Tailwind não seja prático.
- Sempre que possível usar **COMO OBRIGATÓRIO OS componentes do PrimeVue** para consistência visual.
- O projeto utiliza a biblioteca de componentes PrimeVue, com o tema `tailwindcss-primeui`.
- **Regra Principal:** Todos os estilos globais e animações devem ser centralizados nos arquivos:
  - `src/assets/main.css` (para estilos globais, para definições de cores com @theme e keyframes de animações customizadas)
  - `src/assets/animations.css` (para keyframes e classes de animação complexas)
- Dê preferência ao Tailwind antes de recorrer ao `<style scoped>` para manter o código conciso.
- **Atenção:** Evite utilizar a tag `<style>` sem o atributo `scoped` em componentes para garantir que os estilos não afetem outros elementos.

## Cores - Sistema Semântico (Tailwind v4)

- **OBRIGATÓRIO:** Use APENAS classes semânticas de cores, nunca valores hex diretamente no código.
- As cores primárias são definidas no `main.css` usando a diretiva `@theme` do Tailwind CSS v4:
  - `--color-dev: #4d91ea` (azul para portfólio de Desenvolvedor)
  - `--color-editor: #eaa64d` (laranja para portfólio de Editor)
- **IMPORTANTE:** Não existe mais o arquivo `tailwind.config.js` - toda configuração é feita via CSS usando `@theme`

### Classes de Cores Permitidas

- **Desenvolvedor:** `text-dev`, `bg-dev`, `border-dev`, `hover:text-dev`, `group-hover:text-dev`, etc.
- **Editor:** `text-editor`, `bg-editor`, `border-editor`, `hover:text-editor`, `group-hover:text-editor`, etc.
- **Variações de Opacidade:** `bg-dev/20`, `border-editor/50`, `text-dev/80`, etc.
- **CSS Variables:** Para uso em JavaScript ou CSS inline: `var(--color-dev)`, `var(--color-editor)`

### Regras de Cores

- ⚠️ **Evite:** Usar hex colors (`#eaa64d`, `#4d91ea`) diretamente no código HTML/templates
- ⚠️ **Evite:** Usar `text-[#eaa64d]` ou sintaxe similar com valores arbitrários
- ✅ **PERMITIDO:** `text-editor`, `bg-dev`, `border-editor/30`
- ✅ **PERMITIDO:** CSS Variables: `color: var(--color-dev)`, `backgroundColor: 'var(--color-editor)'`
- ⚠️ **EVITE:** Usar sombras com valores fixos de px ou rgba como `drop-shadow-[0_0_15px_rgba(...)]`.
- ✅ **PERMITIDO:** Use sempre as classes de sombra padrão do Tailwind e componha com as cores temáticas (ex: `shadow-lg`, `shadow-editor/40`, `drop-shadow-sm`).

## Animações - Sistema Customizado (Tailwind v4)

- Animações customizadas são definidas no `main.css` usando a diretiva `@theme`:
  - `--animate-fade-in-up`: fade com movimento vertical
  - `--animate-bounce-in`: entrada com bounce e rotação
  - `--animate-pulse-slower`: pulso lento e suave
- Use classes Tailwind: `animate-fade-in-up`, `animate-bounce-in`, `animate-pulse-slower`
- Keyframes correspondentes são definidos no mesmo arquivo para manutenção fácil
