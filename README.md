# rspress-plugin-clarity ![NPM Version](https://img.shields.io/npm/v/rspress-plugin-clarity)

Rspress plugin for [Clarity](https://clarity.microsoft.com/) integration.

## Usage

```bash
npm i rspress-plugin-clarity
yarn add rspress-plugin-clarity
pnpm add rspress-plugin-clarity
```

```ts
import { defineConfig } from 'rspress/config';
import clarity from 'rspress-plugin-clarity';

export default defineConfig({
  plugins: [
    clarity("projectId"),
  ],
});
```

## Configure

### projectId

Clarity project ID.

- Type: `string`
- Required
