import { fileURLToPath, URL } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    vueDevTools({
      launchEditor: 'code',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    dedupe: ['vue', 'vue-router', '@unhead/vue'],
  },
  publicDir: 'public',
  build: {
    rollupOptions: {
      output: {
        // Adiciona hash aos arquivos para evitar cache
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
    // Força rebuild ao fazer deploy
    assetsInlineLimit: 0,
    // Copia arquivos públicos para dist
    copyPublicDir: true,
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    dirStyle: 'nested',
    includedRoutes() {
      return [
        '/',
        '/pt-br',
        '/pt-br/dev',
        '/pt-br/editor',
        '/pt-br/easter-egg',
        '/en-us',
        '/en-us/dev',
        '/en-us/editor',
        '/en-us/easter-egg',
      ]
    },
  },
  server: {
    host: true,
    port: 5173,
    strictPort: false,
    watch: {
      usePolling: true,
      interval: 100,
    },
    hmr: {
      overlay: true,
    },
    headers: {
      // Headers para desenvolvimento
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
    },
  },
})
