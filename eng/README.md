# `Eng` directory

The `Eng` directory contains source code for automated tooling running on this repository pull requests.

For context on this directory, see [Design guidelines for spec repos validation tooling] (Microsoft-internal).

## Code conventions

Below are code convention we strive to follow in `eng` directory:

### package.json

- We align `package.json` dependencies versions across all `package.json` files.
- We align `package.json` dependencies numbers with [microsoft/typespec package.json].
  In few cases we allow more frequent update cadence.

### package-lock.json

- We maintain only top-level `package-lock.json` file. Running `npm install` from top-level dir removes the need
  to ever have other files.

## Linting and prettier

- We make eslint-based linting rules and prettier mandatory in CI for all projects.
- We use strict rulesets as baseline.
- We discuss any desired rule divergences from the strict ruleset
  and apply rule modifications to the configs with explanation for our decision.
- We align `prettier` rules with [microsoft/typespec .prettierrc.json].

[Design guidelines for spec repos validation tooling]: https://dev.azure.com/azure-sdk/internal/_wiki/wikis/internal.wiki/1153/Design-guidelines-for-spec-repos-validation-tooling
[microsoft/typespec package.json]: https://github.com/microsoft/typespec/blob/main/package.json
[microsoft/typespec .prettierrc.json]: https://github.com/microsoft/typespec/blob/main/.prettierrc.json
