<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardDetails',
  props: {
    color: { type: String, required: true },
    title: { type: String, required: true },
    icon: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: Array, default: () => [] },
  },
})
</script>
<template>
  <Card
    class="border-l-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl text-gray-300 mb-8"
    :style="`border-left-color: ${color}`"
  >
    <template #header>
      <div class="flex items-center gap-3 p-4">
        <i :class="`pi ${icon} text-2xl`" :style="`color: ${color}`"></i>
        <h3 class="text-lg font-semibold m-0" :style="`color: ${color}`">{{ title }}</h3>
      </div>
    </template>
    <template #content>
      <p class="text-gray-300 leading-relaxed mb-4 m-0" v-html="description"></p>
      <div v-if="tags && tags.length > 0" class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="px-3 py-1 rounded-full text-sm opacity-80 hover:opacity-100 transition-opacity"
          :style="`background-color: ${color}20; color: ${color}`"
        >
          {{ tag }}
        </span>
      </div>
    </template>
  </Card>
</template>

<style scoped></style>
