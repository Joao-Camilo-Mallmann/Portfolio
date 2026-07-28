import js from '@eslint/js'
import prettierConfig from '@vue/eslint-config-prettier'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import vueParser from 'vue-eslint-parser'

export default defineConfig([
  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  {
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],

  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
  },

  {
    name: 'app/vue-composition-api',
    files: ['**/*.vue', '**/*.js'],
    rules: {
      'no-unused-vars': [
        'warn',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
      'no-useless-assignment': 'off',
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
      'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
      'vue/component-name-in-template-casing': ['error', 'kebab-case'],
      'vue/custom-event-name-casing': ['error', 'kebab-case'],
      'vue/prop-name-casing': ['warn', 'camelCase'],
      'vue/multi-word-component-names': 'off',
    },
  },

  prettierConfig,
])
