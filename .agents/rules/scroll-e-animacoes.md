---
description: Sistema de scroll suave (Lenis), parallax e scroll-reveal do projeto
---

# Scroll Suave e Animações de Scroll

O projeto utiliza o **Lenis.js** como engine de smooth scroll e o **@vueuse/motion** para os reveals e transições de entrada.

## Dependência: Lenis.js

- **Pacote:** `lenis` (npm)
- **CSS:** Importado globalmente em `main.js` → `import 'lenis/dist/lenis.css'`
- **Docs oficiais:** https://github.com/darkroomengineering/lenis
- **Import:** `import Lenis from 'lenis'` (não usar `@studio-freight/lenis`, está deprecado)

### Opções do Lenis (Configuração atual)

```javascript
new Lenis({
  lerp: 0.1, // Interpolação linear (0 = instantâneo, 1 = sem suavização)
  smoothWheel: true, // Suaviza scroll de roda do mouse
  syncTouch: false, // false = mantém scroll nativo em touch/mobile (mais natural)
  autoRaf: true, // Lenis gerencia seu próprio requestAnimationFrame loop
})
```

### API do Lenis (Referência rápida)

| Método/Prop              | Descrição                                                                 |
| ------------------------ | ------------------------------------------------------------------------- |
| `lenis.on('scroll', cb)` | Callback a cada frame. Recebe `{ scroll, velocity, direction, progress }` |
| `lenis.scrollTo(target)` | Scroll programático para elemento/posição                                 |
| `lenis.stop()`           | Pausa o smooth scroll                                                     |
| `lenis.start()`          | Retoma o smooth scroll                                                    |
| `lenis.destroy()`        | Limpa listeners e cancela rAF. **Obrigatório no unmount**                 |

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

Composable Vue responsável apenas pelo smooth scroll com Lenis. Os reveals visuais ficam no Motion.

### Como usar

```vue
<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()
</script>

<template>
  <main>
    <section v-motion-scroll-visible>Conteúdo revelado ao scroll</section>
  </main>
</template>
```

### API retornada

| Retorno   | Tipo          | Descrição                                |
| --------- | ------------- | ---------------------------------------- |
| `scrollY` | `Ref<number>` | Posição Y do scroll em pixels (reativo)  |
| `lenis`   | `ShallowRef`  | Instância do Lenis (null antes do mount) |

## Motion de Scroll

- Use `v-motion-scroll-visible` para revelar conteúdo quando entrar na viewport.
- Use delays por seção com `:delay` apenas quando houver uma hierarquia clara.
- Não recrie o antigo sistema de `data-scroll-reveal` ou parallax em CSS.

## Acessibilidade

- **`prefers-reduced-motion: reduce`** → Lenis NÃO é inicializado e o conteúdo deve permanecer legível sem dependência de animação.
- **Touch** → `syncTouch: false` mantém scroll nativo em dispositivos touch.

## Onde o sistema está ativo

| View/Component   | Motion Scroll | Lenis | Notas                              |
| ---------------- | :-----------: | :---: | ---------------------------------- |
| `HomeView.vue`   |      ✅       |  ✅   | Seções principais e foto de perfil |
| `EditorView.vue` |      ✅       |  ✅   | Seções principais e cards          |
| `DevView.vue`    |      ✅       |  ✅   | Revels e transições de seção       |

## Regras para futuros desenvolvimentos

1. **Novas views** → Usar `useScrollReveal()` para Lenis e `v-motion-scroll-visible` para revelar conteúdo.
2. **Novos componentes** → Se o bloco precisa aparecer ao entrar na viewport, aplique a diretiva de Motion no wrapper.
3. **Cleanup** → O composable faz `destroy()` automático no `onUnmounted`.
4. **Não duplicar Lenis** → Apenas uma instância por view (o composable já garante isso).
5. **Animações de interação** (hover, tab switch, modais) → Manter com CSS/Tailwind, não misturar com scroll-reveal.
