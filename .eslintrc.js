module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
    'plugin:prettier/recommended',
  ],
  'overrides': [
    {
      'files': ['**/?(*.)+(spec|test).[jt]s?(x)'],
      'extends': ['plugin:testing-library/react'],
    },
    {
      'files': ['**/__e2e__/**/*.[jt]s?(x)'],
      'extends': ['plugin:jest-playwright/recommended'],
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'testing-library',
    'eslint-plugin-import-helpers',
    'jest',
    'jest-playwright',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          ['/^react$/', '/^react-dom$/'],
          '/^@\/utils\/test-utils$/',
          '/^next/',
          '/^styled-components/',
          'module',
          '/^@\//',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: {order: 'asc', ignoreCase: true},
      },
    ],
    'react/prop-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off'
  },
}
