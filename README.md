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

Testeando propiedades de componentes.
```ts
  expect(el.placeholder).to.equal('Default placeholder');
  assert.typeOf(el.placeholder, 'String');
```

Testeando componentes renderizados.
```ts
  it('View description in DOM', async () => {
      el.description = 'CUSTOM TEXT';
      el.withDescription = true;
      el.descriptionType = 'warning';
      await el.updateComplete;
      const descriptionElement = el.shadowRoot?.querySelector('#description');
      const text = descriptionElement?.textContent;
      const descriptionType = descriptionElement?.getAttribute('class');
      expect(descriptionType).to.equal('warning');
      expect(text).to.equal('CUSTOM TEXT');
    });
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

## Publicando la librería
En nuestro fichero package.json debemos tener los siguientes campos `type`, `main` y `module`

```json
  {
    "name": "bls-lib",
    "description": "Webcomponent bls-lib following open-wc recommendations",
    "license": "MIT",
    "author": "bls-lib",
    "version": "0.0.0",
    "type": "module",
    "main": "dist/src/index.js",
    "module": "dist/src/index.js",
    "exports": {
      ".": "./dist/src/index.js",
      "./bls-lib.js": "./dist/src/bls-lib.js"
    }
  }
```

## Global CSS
Usamos una clase con una propiedad estática.

No importa cuantos objetos de la clase se definan todos comparten la misma variable estática.


```ts
  @customElement('main-styles')
  export class MainStyles extends LitElement {
    static styles = css`
      .flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
      } 
    ` as CSSResultGroup;
  }
```

Tendremos además una variable de configuración.

```ts
 export const cssConfig = {
   colours: {
     richBlack: '#02111b',
     onyx: '#3f4045',
     lightGray: '#d8d4d5',
     cadet: `#5d737e`,
     white: '#fcfcfc',
     textDark: '#000000',
     textLight: '#ffffff',
   }
 }
```

https://www.youtube.com/watch?v=yViIPm2eNnA&t=1276s&ab_channel=QwertyPy
https://moderncss.dev/custom-css-styles-for-form-inputs-and-textareas/

https://freefrontend.com/css-input-text/
