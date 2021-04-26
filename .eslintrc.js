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
    'plugin:prettier/recommended',
    'plugin:jest-dom/recommended',
  ],
  "overrides": [
    {
      "files": ["**/?(*.)+(spec|test).[jt]s?(x)"],
      "extends": ["plugin:testing-library/react"]
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
