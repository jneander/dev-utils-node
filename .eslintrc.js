/*
 * For reference:
 * https://eslint.org/docs/user-guide/configuring
 */

module.exports = {
  env: {
    es6: true,
    node: true,
  },

  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:node/recommended',
  ],

  globals: {},
  overrides: [
    {
      env: {
        node: true,
      },

      files: ['./.eslintrc.js'],
    },
  ],

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  plugins: ['import', 'prettier', 'promise', 'node'],
  root: true,

  rules: {
    'eslint-comments/no-unused-disable': 'error',
    'import/extensions': ['error', 'ignorePackages', {js: 'never'}],
    'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
    'no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'global-require': 'off',
  },

  settings: {},
}
