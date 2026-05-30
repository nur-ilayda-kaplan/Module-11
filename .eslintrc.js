module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  globals: {
    browser: 'readonly',
    $: 'readonly',
    $$: 'readonly',
    expect: 'readonly',
  },
  extends: [
    'eslint:recommended',
    'prettier', // <-- important: disable formatting rules to avoid conflict
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
};
