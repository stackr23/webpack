# @stackr23/webpack

[![Build Status](https://travis-ci.com/stackr23/webpack.svg?token=9j4kv11sMyqyMRAPNQXm&branch=master)](https://travis-ci.com/stackr23/webpack)
[![NPM Release](https://img.shields.io/npm/v/%40stackr23%2Fwebpack.svg?style=flat)](https://www.npmjs.com/package/%40stackr23%2Fwebpack)
[![Conventional Commits](https://img.shields.io/badge/✔-Conventional%20Commits-blue.svg)](https://conventionalcommits.org)
[![Semantic Versioning](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-blue.svg)](https://semver.org/)

> **latest [CHANGELOG](https://github.com/stackr23/webpack/blob/master/CHANGELOG.md)**
>
> **ATTENTION:** All [conventional-commits](https://conventionalcommits.org) merged into master will trigger a new release!

- [Installation](#installation)
- [Usage](#usage)
- [Constants](#constants)
- [Features](#features)
  - [Module Resolver](#module-resolver)
  - [remote console](#remote-console)
  - [errorOnUsedPort()](#erroronusedport)
  - [Integration Tests per 'karma-webpack'](#integration-tests-per-karma-webpack)
    - [Configuration](#configuration)
    - [Writing Tests](#writing-tests)

## Installation

`npm i @stackr23/webpack`

> **includes all packages related to webpack:**  
> \*-loader's, babel-presets/plugins, typescript-presets/plugins, karma-plugins + puppeteer, sass/postcss, etc.

## Usage

> **Info:** no need to add babel config for webpack usage,  
> as it is already included in webpacks babel-loader options

**node - default**

```javascript
// webpack.config.js
module.exports = require('@stackr23/webpack');
```

**node - extended**

```jsx
// webpack.config.js
const stackr23Webpack = require('@stackr23/webpack');

module.exports = (env, args) => {
  const config = stackr23Webpack(env, ...args);
  // modify config as you need
  config.plugins.push(new MySpecialPlugin());
  return config;
};
```

**cli**

`webpack-dev --config ./node_modules/@stackr23/webpack` or  
`webpack-dev-server --config ./node_modules/@stackr23/webpack`

**node - project types**

@stackr23/webpack is able to handle different types of projects:

- **react:** React with Javascript and Typescript (default)
- **planned for future releases:**
  - **angular:**: Angular - not available yet
  - **react-next:** NextJs - not available yet

```js
// webpack.config.js
const stackr23Webpack = require('@stackr23/webpack');

module.exports = (env) => {
  return stackr23Webpack(env, { type: 'react' });
};
```

## Constants

**can be overwritten by ENV VARS**

| name         | default  | env overwrite  |
| ------------ | -------- | -------------- |
| PATHS.src    | 'src'    | WEBPACK_PATH   |
| PATHS.assets | 'assets' | WEBPACK_ASSETS |
| PATHS.build  | 'build'  | WEBPACK_BUILD  |
| PORT         | 8080     | PORT           |

## Features

### Module Resolver

- **enables absolute import paths**  
  like `import Header from 'components/Header'`

- **uses '[tsconfig-paths-webpack-plugin](https://github.com/dividab/tsconfig-paths-webpack-plugin#readme)'** to resolve import paths  
  **requires:** workspaceRoot/tsconfig.json
- **if tsconfig.json is not present** it won't use that plugin  
  and uses the **default resolve config**:

  ```js
    resolve: {
      extensions: ['.jsx', '.js', '.ts', '.tsx', '.json'],
      // paths are relative to workspace root
      alias:      { assets: PATHS.assets },
      modules:    [PATHS.src, 'node_modules'],
    }
  ```

  - **if you use '/src'** you probably don't have to change anything
  - **overwrite PATHS.src** with `WEBPACK_PATH` (see [constants](#constants))

- **you can overwrite this config** to fit your projects module resolvement,  
  if you **add 'webpack.config.resolve.js'** to your workspaceRoot  
  _(use format of '[src/webpack.config.resolve.js](https://github.com/stackr23/webpack/blob/master/src/webpack.config.resolve.js)')_
  - This config will also be used by '[@stackr23/config-eslint](https://github.com/stackr23/config-eslint)'
  - for more information see [webpack's resolve config](https://webpack.js.org/configuration/resolve/)

### remote console

```javascript
// on client
import { remoteConsoleInjector } from '@stackr23/webpack/remoteConsole';

remoteConsoleInjector();
```

**all native console outputs are sent to** our endpoint of remote-console,  
and get catched server-side to log them in **the terminal**.

The endpoint '/remote-console' is injected per webpack-dev-server's 'before' function:  
`webpackConfig.devServer.before = stackr23Middlewares`

_TODO:_ see issues #17 and #39

### errorOnUsedPort()

before exporting the config,  
**we check if the port is free to use and throw an Error, if not.**

### Integration Tests per 'karma-webpack'

> may be moved to own package together with cypress setup in undefined future

**Usage**  
`npm i karma --save-dev`
`npx karma start ./node_modules/@stackr23/webpack/karma`

**Explanation**  
[Karma](https://karma-runner.github.io/latest/index.html) is a test runner for JavaScript applications with several features integrated:

- **real browser instances - no fake DOM!**  
  supports Chrome, Firefox, IE11+, Safari  
  uses headless chrome in CI environment
- **native webpack module bundling**  
  '[karma-webpack](https://github.com/webpack-contrib/karma-webpack)' lets you use your projects webpack config
- **built-in mocha runner**
  - '[chai](https://github.com/chaijs/chai)' for unit-test assertions (expect, should, ...)
  - '[enzyme](https://github.com/airbnb/enzyme)' for integration-tests (shallow, mount, render)
  - '[chai-enzyme](https://github.com/producthunt/chai-enzyme)' for extended integration-tests assetions

#### Configuration

**karma - src/test/karma.config.js**  
contains karma-config: file pattern, karma plugins, browser settings, usw, ...

**mocha - src/test/mocha.setup.js**  
contains mocha setup: configures chai-enzyme and sets up global assertion functions

#### Writing Tests

- **example integration tests**  
  `/test/App.spec.js` and `/test/components/Test.spec.js`
- **component related assertions** ➡️ '[chai-enzyme](https://github.com/producthunt/chai-enzyme)'
