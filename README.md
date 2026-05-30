# Module-11 QA Automation

This repository contains the Module-11 assessment project with WebdriverIO, Cucumber, ESLint, and Prettier configured for quality checks.

## Install

Run the following from the project root:

```powershell
npm install
```

## Scripts

```powershell
npm test
npm run test:smoke
npm run lint
npm run lint:fix
npm run format
npm run format:check
```

## Folder Structure

```text
.
|-- features/
|   |-- home.feature
|   |-- step-definitions/
|   |   `-- home.steps.js
|   |-- support/
|   |   `-- chai.js
|-- pages/
|   |-- base.page.js
|   |-- home.page.js
|-- .eslintignore
|-- .eslintrc.js
|-- .gitignore
|-- .prettierignore
|-- .prettierrc
|-- package.json
|-- package-lock.json
|-- README.md
`-- wdio.conf.js
```

## Lint and Format

```powershell
npm run lint
npm run format:check
npm run format
```
