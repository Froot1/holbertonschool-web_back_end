// .eslintrc.js
module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: ['eslint:recommended'],
  // Apply Jest-specific config only to test files
  overrides: [
    {
      files: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[tj]s?(x)',
      ],
      env: { jest: true },
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: {
        // You can keep this on if you want, but turning it off avoids the crash in some setups
        'jest/no-large-snapshots': 'off',
      },
    },
  ],
};
