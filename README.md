# \<bls-lib>

# Construyendo el scaffolding con open-wc

Open WC nos provee de una serie de herramientas que nos ayudan a utilizar de una manera más cómoda y sencilla los web components. 

```bash
  npm init @open-wc
```

```json
  "devDependencies": {
    "@custom-elements-manifest/analyzer": "^0.4.17",
    "@open-wc/eslint-config": "^4.3.0",
    "@open-wc/testing": "next",
    "@typescript-eslint/eslint-plugin": "^4.33.0",
    "@typescript-eslint/parser": "^4.33.0",
    "@web/dev-server": "^0.1.28",
    "@web/dev-server-storybook": "next",
    "@web/test-runner": "next",
    "concurrently": "^5.3.0",
    "eslint": "^7.32.0",
    "eslint-config-prettier": "^8.3.0",
    "husky": "^4.3.8",
    "lint-staged": "^10.5.4",
    "prettier": "^2.4.1",
    "tslib": "^2.3.1",
    "typescript": "^4.5.2"
  },
```

# Testing

Utilizaremos para testear de manera rápida los componentes la librería `@open-wc/testing`.

```bash
  npm run test
  npm run test:watch
```

Para cada uno de nuestros stages de test deberemos limpiar el componente de la siguiente manera.
```ts
  let el: BlsLib;
  // Clean and initialize the component
  const cleanComponent = async () => {
  el = await fixture<BlsLib>(html`<bls-lib></bls-lib>`);
  await el.updateComplete;
}
```

Testeando propiedades de componentes
```ts
  expect(el.placeholder).to.equal('Default placeholder');
  assert.typeOf(el.placeholder, 'String');
```

## Usage

```html
<script type="module"> import 'bls-lib/bls-lib.js';</script>
<bls-lib></bls-lib>
```

## Linting and formatting

```bash
  npm run lint
  npm run format
```

## Demoing with Storybook

```bash
  npm run storybook
  npm run storybook:build
```
