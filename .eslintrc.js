module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    '@nuxtjs/eslint-config-typescript',
    'prettier',
  ],
  plugins: [],
  rules: { 'vue/multi-word-component-names': 0 },
}
