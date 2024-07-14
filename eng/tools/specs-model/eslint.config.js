// @ts-check

// This file contents is based on:
// https://typescript-eslint.io/getting-started#step-2-configuration
// https://typescript-eslint.io/getting-started/typed-linting/#shared-configurations

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

const config = tseslint.config(
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
    rules: {
      // Sometimes we have to help the type checker with "!":
      // e.g. when doing `if (arr.length > 0) { const ... = arr[0]! }`
      // https://typescript-eslint.io/rules/no-non-null-assertion
      // Note: this originates from [strict]
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
  {
    // disable type-aware linting on JS files
    // Config snippet taken from https://typescript-eslint.io/packages/typescript-eslint/#advanced-usage
    files: ['**/*.js'],
    ...tseslint.configs.disableTypeChecked,
  }
)

export default config

// Debug tool:
// Uncomment to print the config. View it in VS Code / Output / ESLint. Run "ESLint: Restart ESLint Server" command to force output.
// console.log(`ESLint config: ${JSON.stringify(config)}`)

// export default [
//   { files: ['**/*.{js,mjs,cjs,ts}'] },
//   { languageOptions: { globals: globals.browser } },
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommendedTypeChecked,
//   ...tseslint.configs.stylisticTypeChecked,
// ]

// [strict]: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/strict.ts

