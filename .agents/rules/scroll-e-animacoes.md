---
description: Padrão de animações com VueUse Motion no projeto
---

# Motion e Animações

O projeto utiliza **@vueuse/motion** como base de animações de entrada, scroll e microinterações.

## Biblioteca padrão

- **Pacote:** `@vueuse/motion`
- **Import recomendado:** `import { useMotion } from '@vueuse/motion'`
- **Diretivas recomendadas:** `v-motion` e `v-motion-scroll-visible`

## Regras de uso

1. **Animações de entrada**: usar `v-motion` com `initial` e `enter`.
2. **Reveal por viewport**: usar `v-motion-scroll-visible` no wrapper do bloco.
3. **Animações contínuas**: usar `useMotion` com `repeat: Infinity` e `repeatType: 'mirror'` para loops sutis.
4. **Hierarquia visual**: aplicar `:delay` apenas quando houver sequência clara de leitura.
5. **Evitar duplicidade**: não criar sistema paralelo de animação global em CSS para efeitos já cobertos por Motion.

## Exemplo rápido

```vue
<script setup>
import { ref } from 'vue'
import { useMotion } from '@vueuse/motion'

const cardRef = ref(null)

useMotion(cardRef, {
  initial: { opacity: 0, y: 24 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 500,
      ease: [0.16, 1, 0.3, 1],
    },
  },
})
</script>

<template>
  <section ref="cardRef" v-motion-scroll-visible>Conteudo animado com Motion</section>
</template>
```

## Acessibilidade

- Respeitar **`prefers-reduced-motion: reduce`** em animações contínuas.
- O conteúdo deve permanecer legível sem depender da animação para compreensão.

## Regras para futuros desenvolvimentos

1. **Novas views**: aplicar Motion diretamente nos blocos principais.
2. **Novos componentes**: usar `v-motion-scroll-visible` quando o bloco entra na viewport.
3. **Interações (hover/click)**: priorizar Tailwind (`transition-opacity`, `transition-transform`, `active:scale-[0.96]`) e complementar com Motion quando necessário.
4. **Consistência**: usar curvas e tempos coerentes (`ease: [0.16, 1, 0.3, 1]` como baseline).
