module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
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
  ],
  rules: {
    'react/react-in-jsx-scope': 2,
    'semi': 'error',
    'comma-spacing': 'error',
    'quotes': ['error', 'single'],
    'no-mixed-operators': 'error',
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    'no-mixed-spaces-and-tabs': 'error'
  },
};
