import js from '@eslint/js'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  {
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
  },

  js.configs.recommended,

  // Vue recommended = essential + strongly-recommended + recommended
  ...pluginVue.configs['flat/recommended'],

  // Regras customizadas para Composition API / <script setup>
  {
    name: 'app/vue-composition-api',
    rules: {
      // Permite no-unused-vars mas ignora variáveis usadas no template
      'no-unused-vars': [
        'warn',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],

      // Desabilitar no-useless-assignment (falsos positivos em <script setup>)
      'no-useless-assignment': 'off',

      // Boas práticas Composition API
      'vue/component-api-style': ['error', ['script-setup']],
      'vue/define-macros-order': [
        'error',
        {
          order: ['defineProps', 'defineEmits', 'defineOptions', 'defineSlots'],
        },
      ],
      'vue/define-props-declaration': ['error', 'runtime'],
      'vue/no-unused-refs': 'warn',
      'vue/no-ref-as-operand': 'error',
      'vue/no-watch-after-await': 'error',
      'vue/no-lifecycle-after-await': 'error',

      // Consistência de código
      'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
      'vue/component-name-in-template-casing': ['error', 'kebab-case'],
      'vue/custom-event-name-casing': ['error', 'kebab-case'],
      'vue/prop-name-casing': ['warn', 'camelCase'],

      // Relaxar regras que conflitam com o projeto
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/html-self-closing': [
        'error',
        {
          html: { void: 'always', normal: 'never', component: 'always' },
        },
      ],
    },
  },

  skipFormatting,
])
