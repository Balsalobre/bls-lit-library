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



## Usage

```html
<script type="module">
  import 'bls-lib/bls-lib.js';
</script>

<bls-lib></bls-lib>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
