// @ts-check

// This file contents is based on:
// https://typescript-eslint.io/getting-started#step-2-configuration
// https://typescript-eslint.io/getting-started/typed-linting/#shared-configurations

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
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
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  }
)

// export default [
//   { files: ['**/*.{js,mjs,cjs,ts}'] },
//   { languageOptions: { globals: globals.browser } },
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommendedTypeChecked,
//   ...tseslint.configs.stylisticTypeChecked,
// ]

// export default tseslint.config(
//   eslint.configs.recommended,
//   ...tseslint.configs.recommendedTypeChecked,
//   ...tseslint.configs.stylisticTypeChecked,
// );

