---
description: Padrao de scroll e animacoes com Vue Motion — catalogo de efeitos criativos
---

# Motion e Animações

O projeto usa `@vueuse/motion` como padrao de animacao. **Prioridade: efeitos criativos e nao-genericos.**

**Regra principal:** usar `v-motion` e `v-motion-scroll-visible` para entrada, scroll reveal e micro-movimento. Complementar com CSS para efeitos continuos e pseudo-elements.

## Padrao de implementacao

- **Entrada de blocos:** use `v-motion` com `initial` e `visible-once` (ou `enter`).
- **Scroll reveal:** use `v-motion-scroll-visible` com variacoes por `delay` quando necessario.
- **Hover/click:** use variantes do Motion (`hovered`, `tapped`) e complemente com Tailwind para estados visuais.
- **Animacoes continuas:** usar CSS keyframes para loops (orbiting, float, shimmer, glow travel, rotation). Motion nao e ideal para loops infinitos complexos.
- **Pseudo-elements (`::before`, `::after`):** usar CSS puro, pois Motion nao controla pseudo-elements.

## Regras de uso

1. **Usar Vue Motion por padrao:** nao criar keyframes CSS locais para efeitos que o Motion ja cobre.
2. **CSS para loops e pseudo-elements:** shimmer, orbit, glow travel, rotation continua — sempre CSS.
3. **Transicoes especificas:** evitar `transition-all`; manter propriedades explicitas.
4. **Desempenho:** priorizar `transform` e `opacity`; evitar animar `width`, `height`, `left` e `top`.
5. **Stagger com intencao:** usar delays curtos (~80-100ms) para criar cascata de leitura.
6. **Reduced motion:** sempre `@media (prefers-reduced-motion: reduce)` em tudo que anima.
7. **Sem loading bloqueante na entrada:** a aplicacao deve abrir direto no conteudo; evite overlays de loading que travem a experiencia inicial.

---

## Catalogo de Efeitos Criativos

Referencia para reusar em futuras views/componentes. **Nada generico — cada efeito tem personalidade.**

### 1. Spring-In com Rotacao (Entrada de destaque)

Elemento "gira e cresce" para entrar. Ideal para fotos, avatares, logos.

```vue
<section
  v-motion
  :initial="{ opacity: 0, scale: 0.5, rotate: -8 }"
  :visible-once="{
    opacity: 1, scale: 1, rotate: 0,
    transition: { type: 'spring', stiffness: 180, damping: 14 },
  }"
>
```

### 2. Materialização Horizontal (Expand from center)

Elemento "se expande do nada" horizontalmente. Ideal para toggles, badges, pills.

```vue
<div
  v-motion
  :initial="{ opacity: 0, scaleX: 0 }"
  :visible-once="{
    opacity: 1, scaleX: 1,
    transition: { type: 'spring', stiffness: 200, damping: 18 },
  }"
>
```

### 3. Entradas de Direcoes Opostas (Cards lado a lado)

Cards vem de lados opostos com leve rotacao que corrige. Quebra a monotonia de "tudo vem de baixo".

```vue
<!-- Card esquerdo -->
<article
  v-motion
  :initial="{ opacity: 0, x: -50, rotate: -3 }"
  :visible-once="{
    opacity: 1, x: 0, rotate: 0,
    transition: { type: 'spring', stiffness: 120, damping: 14 },
  }"
>

<!-- Card direito -->
<article
  v-motion
  :initial="{ opacity: 0, x: 50, rotate: 3 }"
  :visible-once="{
    opacity: 1, x: 0, rotate: 0,
    transition: { type: 'spring', stiffness: 120, damping: 14, delay: 120 },
  }"
>
```

### 4. Spring Pop com Stagger (Tags/chips "pipoca")

Cada item entra com spring overshoot em sequencia. Ideal para tags, badges, chips em grupo.

```vue
<div
  v-for="(item, i) in items"
  :key="item"
  v-motion
  :initial="{ opacity: 0, scale: 0 }"
  :visible-once="{
    opacity: 1, scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 12, delay: 100 + i * 150 },
  }"
>
```

### 5. Cascade Spring (Botoes/lista em cascata)

Cada elemento entra com spring e delay incremental. Ideal para botoes sociais, listas, grids.

```vue
<div
  v-for="(btn, i) in buttons"
  :key="btn.id"
  v-motion
  :initial="{ opacity: 0, y: 20, scale: 0.8 }"
  :visible-once="{
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 15, delay: i * 80 },
  }"
>
```

### 6. Line Draw (Divider que "se desenha")

Linha que expande do centro. Ideal para separadores, underlines.

```vue
<div
  v-motion
  :initial="{ scaleX: 0, opacity: 0 }"
  :visible-once="{
    scaleX: 1, opacity: 1,
    transition: { type: 'keyframes', ease: [0.16, 1, 0.3, 1], duration: 800, delay: 450 },
  }"
  class="h-px w-32 rounded-full origin-center"
>
```

### 7. Slide da Esquerda (Titulo com personalidade)

Em vez de fade-up generico, texto entra com slide horizontal + spring.

```vue
<h1
  v-motion
  :initial="{ opacity: 0, x: -40 }"
  :visible-once="{
    opacity: 1, x: 0,
    transition: { type: 'spring', stiffness: 150, damping: 15 },
  }"
>
```

---

## Catalogo de Efeitos CSS Continuos

Para loops infinitos e pseudo-elements que Motion nao cobre.

### 8. Orbiting Dots (Pontos orbitando um elemento)

3 dots em orbitas circulares com velocidades diferentes. Ideal para fotos de perfil, logos centrais.

```css
.orbit-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  border-radius: 50%;
}
.orbit-dot-a {
  background: #4d91ea;
  box-shadow: 0 0 8px rgba(77, 145, 234, 0.6);
  animation: orbit-cw 6s linear infinite;
  --orbit-radius: 85px;
}
@keyframes orbit-cw {
  from {
    transform: translate(-50%, -50%) rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg);
  }
}
/* orbit-ccw: inverter from/to */
```

### 9. Border Glow Travel (Luz viajando na borda)

Gradient que viaja no border-left de cards. Ideal para cards com borda lateral colorida.

```css
.skill-card {
  position: relative;
  overflow: hidden;
}
.skill-card::after {
  content: '';
  position: absolute;
  left: 0;
  top: -100%;
  width: 4px;
  height: 60%;
  background: linear-gradient(to bottom, transparent, rgba(77, 145, 234, 0.8), transparent);
  animation: border-glow-travel 3s ease-in-out infinite;
}
@keyframes border-glow-travel {
  0% {
    top: -60%;
  }
  100% {
    top: 100%;
  }
}
```

### 10. Title Shimmer (Luz deslizando sobre texto)

Reflexo de luz que passa sobre o titulo periodicamente. Ideal para titulos de secao, headings.

```css
.shimmer-title {
  position: relative;
  overflow: hidden;
}
.shimmer-title::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.12), transparent);
  animation: shimmer 3.5s ease-in-out infinite;
}
@keyframes shimmer {
  0% {
    left: -60%;
  }
  50%,
  100% {
    left: 160%;
  }
}
```

### 11. Float em Contra-Fase (Cards que "respiram" alternados)

Dois elementos flutuam em ciclos opostos: quando um sobe, o outro desce.

```css
.card-float {
  animation: float-a 5s ease-in-out infinite;
}
.card-float-alt {
  animation: float-b 5s ease-in-out infinite;
}

@keyframes float-a {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}
@keyframes float-b {
  0%,
  100% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(0);
  }
}
```

### 12. Star/Icon Rotation (Rotacao continua lenta)

Icones decorativos giram em direcoes opostas. Ideal para estrelas, selos, badges.

```css
.spin-cw {
  animation: rotate 8s linear infinite;
  display: inline-block;
}
.spin-ccw {
  animation: rotate 8s linear infinite reverse;
  display: inline-block;
}
@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
```

### 13. Animated Underline (Sublinhado que se desenha)

Pseudo-element underline com gradient que desliza da esquerda. Ideal para nomes, destaques.

```css
.name-highlight {
  position: relative;
}
.name-highlight::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--color-dev), var(--color-editor));
  transform: scaleX(0);
  transform-origin: left;
  animation: underline-draw 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards;
}
@keyframes underline-draw {
  to {
    transform: scaleX(1);
  }
}
```

### 14. Hover Glow Shadow (Sombra temática no hover)

Box-shadow colorido que aparece no hover de cards. Ideal para cards com tema de cor.

```html
<div
  class="transition-shadow duration-300 hover:shadow-[0_8px_30px_-8px_rgba(77,145,234,0.25)]"
></div>
```

---

## Acessibilidade

- Respeitar `prefers-reduced-motion: reduce` em TODAS as animacoes (CSS e Motion).
- Bloco obrigatorio em todo `<style scoped>` que tenha keyframes:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```
- Ocultar elementos decorativos (dots, shapes) em mobile quando necessario.

## Regras para futuros desenvolvimentos

1. **Novas views:** consultar o catalogo acima e escolher efeitos que combinem. Nada de fade+slide generico em tudo.
2. **Novos componentes:** usar `v-motion` com `visible-once` para revelar conteudo em viewport.
3. **Interacoes (hover/click):** priorizar `hovered`/`tapped` no Motion + shadow/glow em CSS.
4. **Consistencia:** spring como tipo padrao para entradas (stiffness ~120-200, damping ~12-18). Keyframes como baseline para reveals simples (`ease: [0.16, 1, 0.3, 1]`).
5. **Variedade com intencao:** cada secao de uma view deve usar um efeito diferente do catalogo. Evitar repetir o mesmo pattern consecutivamente.
6. **Combinar Motion + CSS:** Motion para entrada/visibilidade, CSS para loops continuos e pseudo-elements.
