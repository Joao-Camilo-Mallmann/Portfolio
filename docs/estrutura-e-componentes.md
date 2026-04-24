---
description: Estrutura de arquivos do projeto e regras para criação de componentes Vue 3
---

# Estrutura de Arquivos

- O projeto é desenvolvido em Vue.js (Composition API).
- Os componentes reutilizáveis devem ser criados em `src/components`.
- As views (páginas) principais devem ser criadas em `src/views`.
- Os componentes devem ser nomeados em PascalCase (ex: `MeuComponente.vue`).

# Componentes Vue

- Utilize a **Composition API** (`<script setup>`) para a criação de todos os componentes. O uso da Options API não é mais recomendado.
- Declare as `props` usando `defineProps`.
- Declare os eventos usando `defineEmits`.
- Mantenha a estrutura dos componentes organizada e limpa.
- Para métodos que interagem com APIs do navegador (como `window.open`), crie funções dentro do `<script setup>`.
