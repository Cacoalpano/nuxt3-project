import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    ignores: ['node_modules', 'node_modules/*', 'dist', '.nuxt'],
    rules: {
      'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
      'no-alert': 'error',
      'arrow-parens': ['error', 'always'],
      'vue/no-multiple-template-root': 'off',
      'vue/multi-word-component-names': 'off',
      'no-unused-vars': 'off',
      'import/order': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'vue/html-self-closing': 'off',
      "@typescript-eslint/no-explicit-any": 'off',
    },
    plugins: {
      'vue': require('eslint-plugin-vue'),
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      'import': require('eslint-plugin-import'),
      'prettier': require('eslint-plugin-prettier'),
    },
    extends: [
      'plugin:vue/vue3-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/typescript',
      'plugin:prettier/recommended',
      'prettier/vue',
    ],
    env: {
      browser: true,
      node: true,
      es6: true,
    }
  }
)
