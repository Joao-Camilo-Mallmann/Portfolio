<script setup>
import { useI18n } from '@/composables/useI18n'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const { isPt, toggleLocale } = useI18n()
const router = useRouter()
const route = useRoute()

// Bandeiras em SVG: emoji de bandeira não renderiza no Windows
const flagBr =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14"><rect width="20" height="14" fill="#009c3b"/><path d="M10 1.6 18.2 7 10 12.4 1.8 7z" fill="#ffdf00"/><circle cx="10" cy="7" r="3.1" fill="#002776"/></svg>',
  )
const flagUs =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 10"><rect width="19" height="10" fill="#b22234"/><path d="M0 1.15h19M0 2.7h19M0 4.23h19M0 5.77h19M0 7.3h19M0 8.85h19" stroke="#fff" stroke-width=".77"/><rect width="7.6" height="5.38" fill="#3c3b6e"/></svg>',
  )

const localeOptions = [
  { code: 'pt', short: 'PT', name: 'Português', flag: flagBr },
  { code: 'en', short: 'EN', name: 'English', flag: flagUs },
]

function isActiveLocale(code) {
  return code === 'pt' ? isPt.value : !isPt.value
}

const currentLocale = computed(() => localeOptions.find((o) => isActiveLocale(o.code)))

const localeMenuOpen = ref(false)
const localeMenuRef = ref(null)

function selectLocale(code) {
  localeMenuOpen.value = false
  if (!isActiveLocale(code)) toggleLocale(router, route)
}

function handleOutsideClick(event) {
  if (localeMenuRef.value && !localeMenuRef.value.contains(event.target)) {
    localeMenuOpen.value = false
  }
}

function handleKeydown(event) {
  if (event.key === 'Escape') localeMenuOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div ref="localeMenuRef" class="relative">
    <button
      type="button"
      class="locale-trigger"
      aria-haspopup="listbox"
      :aria-expanded="localeMenuOpen"
      :aria-label="isPt ? `Idioma: ${currentLocale.name}` : `Language: ${currentLocale.name}`"
      :title="currentLocale.name"
      @click="localeMenuOpen = !localeMenuOpen"
    >
      <img :src="currentLocale.flag" alt="" class="locale-flag" />
      <i
        class="pi pi-chevron-down locale-chevron"
        :class="{ 'rotate-180': localeMenuOpen }"
        aria-hidden="true"
      ></i>
    </button>

    <transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      leave-active-class="transition duration-100 ease-in"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <ul v-show="localeMenuOpen" role="listbox" class="locale-menu">
        <li v-for="option in localeOptions" :key="option.code">
          <button
            type="button"
            role="option"
            class="locale-item"
            :class="{ 'is-active': isActiveLocale(option.code) }"
            :aria-selected="isActiveLocale(option.code)"
            @click="selectLocale(option.code)"
          >
            <img :src="option.flag" alt="" class="locale-flag" />
            <span>{{ option.name }}</span>
            <i
              v-if="isActiveLocale(option.code)"
              class="pi pi-check ml-auto text-xs"
              aria-hidden="true"
            ></i>
          </button>
        </li>
      </ul>
    </transition>
  </div>
</template>

<style scoped>
/* Seletor de idioma: bandeira atual + dropdown */
.locale-trigger {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  min-height: 40px;
  padding: 0 8px;
  border-radius: 8px;
  color: #9ca3af;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.locale-trigger:hover,
.locale-trigger[aria-expanded='true'] {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

.locale-flag {
  width: 18px;
  height: 12px;
  border-radius: 2px;
  object-fit: cover;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.15);
}

.locale-chevron {
  font-size: 0.6rem;
  transition: transform 0.2s ease;
}

.locale-menu {
  position: absolute;
  right: 0;
  top: calc(100% + 6px);
  min-width: 148px;
  padding: 4px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(17, 17, 17, 0.96);
  backdrop-filter: blur(12px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
}

.locale-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 36px;
  padding: 0 10px;
  border-radius: 6px;
  font-size: 0.85rem;
  color: #d1d5db;
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.locale-item:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

.locale-item.is-active {
  color: #ffffff;
}

.locale-trigger:focus-visible,
.locale-item:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 2px;
}
</style>
