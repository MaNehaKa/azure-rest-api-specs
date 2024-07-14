// @ts-check

// The overall contents of this file is based on:
// https://typescript-eslint.io/getting-started#step-2-configuration
// https://typescript-eslint.io/getting-started/typed-linting/#shared-configurations
// Read inline comments for details on other sources.

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'

const config = tseslint.config(
  // ========================================
  // ESLint + TS-ESLint configs
  // ========================================
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    // Disable type-aware linting on JS files
    // Otherwise eslint would complain about types in JS files, including this config file.
    // Config snippet taken from https://typescript-eslint.io/packages/typescript-eslint/#advanced-usage
    files: ['**/*.js'],
    ...tseslint.configs.disableTypeChecked,
  },

  // ========================================
  // Secondary configs
  // ========================================
  // @ts-expect-error The unicorn configs are not typed correctly, but they do work.
  // Snippet taken from https://github.com/sindresorhus/eslint-plugin-unicorn#preset-configs-eslintconfigjs
  eslintPluginUnicorn.configs['flat/recommended'],

  // ========================================
  // Rulesets overrides
  // ========================================
  {
    rules: {
      // Sometimes we have to help the type checker with "!":
      // e.g. when doing `if (arr.length > 0) { const ... = arr[0]! }`
      // Note: this originates from [strict]
      // https://typescript-eslint.io/rules/no-non-null-assertion
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  }
)

export default config

// Debug tool:
// Uncomment to print the config. View it in VS Code / Output / ESLint. Run "ESLint: Restart ESLint Server" command to force output.
// console.log(`ESLint config: ${JSON.stringify(config)}`)

// [strict]: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/strict.ts

