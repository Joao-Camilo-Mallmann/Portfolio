---
description: Sistema de scroll suave (Lenis), parallax e scroll-reveal do projeto
---

# Scroll Suave e Animações de Scroll

O projeto utiliza o **Lenis.js** como engine de smooth scroll, combinado com um sistema próprio de **parallax** e **scroll-reveal** via `IntersectionObserver`.

## Dependência: Lenis.js

- **Pacote:** `lenis` (npm)
- **CSS:** Importado globalmente em `main.js` → `import 'lenis/dist/lenis.css'`
- **Docs oficiais:** https://github.com/darkroomengineering/lenis
- **Import:** `import Lenis from 'lenis'` (não usar `@studio-freight/lenis`, está deprecado)

### Opções do Lenis (Configuração atual)

```javascript
new Lenis({
  lerp: 0.1,          // Interpolação linear (0 = instantâneo, 1 = sem suavização)
  smoothWheel: true,   // Suaviza scroll de roda do mouse
  syncTouch: false,    // false = mantém scroll nativo em touch/mobile (mais natural)
  autoRaf: true,       // Lenis gerencia seu próprio requestAnimationFrame loop
})
```

### API do Lenis (Referência rápida)

| Método/Prop       | Descrição                                               |
|-------------------|---------------------------------------------------------|
| `lenis.on('scroll', cb)` | Callback a cada frame. Recebe `{ scroll, velocity, direction, progress }` |
| `lenis.scrollTo(target)` | Scroll programático para elemento/posição               |
| `lenis.stop()`    | Pausa o smooth scroll                                    |
| `lenis.start()`   | Retoma o smooth scroll                                   |
| `lenis.destroy()` | Limpa listeners e cancela rAF. **Obrigatório no unmount** |

### Opções avançadas disponíveis (não usadas atualmente)

```javascript
// Referência — NÃO ativar sem necessidade
{
  duration: 1.2,                    // Duração fixa (substitui lerp)
  easing: (t) => Math.min(1, ...),  // Curva de easing customizada
  orientation: 'vertical',          // 'vertical' | 'horizontal'
  syncTouchLerp: 0.075,             // Lerp para inércia em touch
  touchInertiaExponent: 1.7,        // Força da inércia touch
  wheelMultiplier: 1,               // Multiplicador de scroll do mouse
  touchMultiplier: 1,               // Multiplicador de scroll touch
  infinite: false,                  // Scroll infinito (loop)
  overscroll: true,                 // Simula CSS overscroll-behavior
  prevent: (node) => false,         // Prevenir scroll em elementos específicos
  autoResize: true,                 // Redimensionar automaticamente via ResizeObserver
}
```

## Composable: `useScrollReveal`

**Arquivo:** `src/composables/useScrollReveal.js`

Composable Vue que orquestra as 3 funcionalidades. Cada view que precisa de scroll-reveal deve usá-lo.

### Como usar

```vue
<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
import { nextTick, onMounted, ref } from 'vue'

const { initObserver, registerParallax } = useScrollReveal()
const containerRef = ref(null)
const bgElement = ref(null)

onMounted(() => {
  nextTick(() => {
    initObserver(containerRef.value)
    registerParallax(bgElement.value, -0.15, 'y')
  })
})
</script>

<template>
  <main ref="containerRef">
    <div ref="bgElement" class="parallax-layer">Background</div>
    <section data-scroll-reveal="up">Conteúdo revelado ao scroll</section>
  </main>
</template>
```

### API retornada

| Retorno            | Tipo             | Descrição                                                  |
|--------------------|------------------|------------------------------------------------------------|
| `scrollY`          | `Ref<number>`    | Posição Y do scroll em pixels (reativo)                    |
| `lenis`            | `ShallowRef`     | Instância do Lenis (null antes do mount)                   |
| `initObserver(el)` | `Function`       | Inicia IntersectionObserver para `[data-scroll-reveal]`    |
| `registerParallax` | `Function`       | Registra elemento DOM para parallax                        |

## Scroll-Reveal (CSS)

**Arquivo CSS:** `src/assets/animations.css` (seção SCROLL-REVEAL)

### Atributo `data-scroll-reveal`

Elementos com esse atributo iniciam ocultos e são revelados ao entrar na viewport.

| Valor    | Efeito                          | Transform inicial          |
|----------|---------------------------------|----------------------------|
| `"up"`   | Desliza de baixo para cima      | `translateY(60px)`         |
| `"down"` | Desliza de cima para baixo      | `translateY(-40px)`        |
| `"left"` | Desliza da esquerda             | `translateX(-60px)`        |
| `"right"`| Desliza da direita              | `translateX(60px)`         |
| `"scale"`| Escala de 85% para 100%         | `scale(0.85)`              |
| `"fade"` | Apenas opacidade (sem movimento)| `none`                     |

### Stagger com `scroll-reveal-child`

Filhos com classe `.scroll-reveal-child` recebem delays escalonados automaticamente (100ms por filho) quando o pai com `data-scroll-reveal` é revelado.

```html
<div data-scroll-reveal="up">
  <div class="scroll-reveal-child">Aparece 1º (0ms)</div>
  <div class="scroll-reveal-child">Aparece 2º (100ms)</div>
  <div class="scroll-reveal-child">Aparece 3º (200ms)</div>
</div>
```

### Easing

O easing usado é `cubic-bezier(0.16, 1, 0.3, 1)` — "ease-out expo": saída muito suave com sensação premium de desaceleração natural.

## Parallax

Elementos registrados via `registerParallax()` se movem em velocidades diferentes durante o scroll. Usa `translate3d()` para aceleração GPU.

### Velocidades recomendadas

| Camada          | Velocidade | Efeito                    |
|-----------------|-----------|---------------------------|
| Fundo distante  | `-0.25`   | Move muito mais lento     |
| Fundo médio     | `-0.15`   | Move mais lento           |
| Fundo próximo   | `-0.08`   | Move levemente mais lento |
| Conteúdo        | `0`       | Velocidade normal         |
| Primeiro plano  | `+0.10`   | Move levemente mais rápido|

### Classe CSS `.parallax-layer`

Adicionar em elementos que recebem parallax. Ativa `will-change: transform` e `backface-visibility: hidden`.

## Acessibilidade

- **`prefers-reduced-motion: reduce`** → Lenis NÃO é inicializado, parallax desabilitado, scroll-reveal mostra tudo visível sem animação.
- **Mobile (< 768px)** → Distâncias de reveal são reduzidas pela metade (CSS) para evitar layout shift.
- **Touch** → `syncTouch: false` mantém scroll nativo em dispositivos touch.

## Onde o sistema está ativo

| View/Componente         | Scroll-Reveal | Parallax | Notas                              |
|-------------------------|:---:|:---:|----------------------------------------------|
| `HomeView.vue`          | ✅  | ✅  | Orbs de fundo, foto perfil, todas as seções   |
| `EditorView.vue`        | ✅  | ✅  | Orbs de fundo, seções c/ stagger nos filhos   |
| `DevView.vue`           | ❌  | ❌  | Usa animações CSS legadas (a migrar futuramente) |

## Regras para futuros desenvolvimentos

1. **Novas views** → Usar `useScrollReveal()` em vez de classes CSS legadas (`animate-slide-up` etc.)
2. **Novos componentes** → Adicionar `data-scroll-reveal` no wrapper ou `scroll-reveal-child` nos itens
3. **Parallax** → Manter velocidades entre `-0.3` e `+0.3` para efeitos sutis
4. **Cleanup** → O composable faz `destroy()` automático no `onUnmounted`
5. **Não duplicar Lenis** → Apenas uma instância por view (o composable já garante isso)
6. **Animações de interação** (hover, tab switch, modais) → Manter com CSS/Tailwind, não misturar com scroll-reveal
