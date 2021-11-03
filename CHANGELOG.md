# Changelog

> generated with [@semantic-release/changelog](https://github.com/semantic-release/changelog)



## [2.1.2](https://github.com/stackr23/webpack/compare/v2.1.1...v2.1.2) (2021-11-03)


### :package: Dependencies

* upgrade babel packages ([2701f2c](https://github.com/stackr23/webpack/commit/2701f2cd35568a97e6ae5f019026bdba0b34e027))
* upgrade webpack related pckgs ([0c636f1](https://github.com/stackr23/webpack/commit/0c636f108765137754081ba0ed6f6488c9b9e86f))

## [2.1.1](https://github.com/stackr23/webpack/compare/v2.1.0...v2.1.1) (2021-09-20)


### :beetle: Bug Fixes

* **tests:** migrate react to v17 ([4dd0afa](https://github.com/stackr23/webpack/commit/4dd0afad6f373f98299c0aec85bbe235de7d05c0))


### :wrench: Configs

* **npm:** add TS files to lint task ([518868d](https://github.com/stackr23/webpack/commit/518868d014714cc4170e11a79d8174ca43d0f17b))
* **npm:** add yaml files to format task ([e1ae10f](https://github.com/stackr23/webpack/commit/e1ae10f38c21f2eca0b8cf1df114906bb50f0448))
* **npm:** use quiet mode in lint task ([bce5f83](https://github.com/stackr23/webpack/commit/bce5f83ad5cceb8249b3f1626b0f88d14de32496))

# [2.1.0](https://github.com/stackr23/webpack/compare/v2.0.0...v2.1.0) (2021-09-20)


### :sparkles: Features

* **CI:** migrate to github actions ([#7](https://github.com/stackr23/webpack/issues/7)) ([2d99656](https://github.com/stackr23/webpack/commit/2d99656333ce959d7a1fb2c30ed205f04b7a89ef))


### :beetle: Bug Fixes

* **CI:** update semantic-release config ([d705539](https://github.com/stackr23/webpack/commit/d705539817b0b2318edc663b75dba0dbf5954da7))


### :wrench: Configs

* **git:** extend gitignore ([8417d3e](https://github.com/stackr23/webpack/commit/8417d3e1ecda47e1fc4ad7c8fcf18db86fe0c0cd))
* **lint-staged:** add yml and TS files ([2395ed5](https://github.com/stackr23/webpack/commit/2395ed58743e92a174eaf4625abc7426287e6bd9))
* **TS:** add 'test' dir to `include` paths ([c4a63f6](https://github.com/stackr23/webpack/commit/c4a63f669b97c9fcad8d210d167afad5cffdeaa4))
* **TS:** update tsconfig ([a0a4743](https://github.com/stackr23/webpack/commit/a0a474372250d836436c181254a41f222a061b13))
* **vsCode:** remove linter/formatter settings ([eacdfe6](https://github.com/stackr23/webpack/commit/eacdfe62db7251aaa5a284b07c616360d7a7e4e9))

## 2.0.0

> cleaned and refactored

### :sparkles: Features

- **typescript:** add `"allowSyntheticDefaultImports": true` to tsconfig
- **typescript-karma:** enable karma tests for TypeScript

### 🏗️ Refactoring

- **babel:** move babelconfig to root dir
- **webpack:** remove unused url-loader
- **webpack-variations:** combine 'react-ts' and 'react-js' to 'react'
- **README:** adapt to code changes

## 1.15.0

### :wrench: Configs

- **file-loader:** add more filetypes (common audio formats)
- **webpack:** use `eval-source-map` instead of `eval-cheap-source-map`

## 1.13.2

### 🐞 Bug Fixes

- **resolve-config:** re-enable environment variables
- **build:** Fix configuration for typescript

## 1.13.0

### :sparkles: Features

- **resolve-config:** enable to overwrite default resolve config

### 🐞 Bug Fixes

- **deps:** ship missing dependencies
- **resolve-config:** check if tsconfig is present

### :memo: Documentations

- **README:** add Table of Contents
- **README:** deprecate 'type-ts'

## 1.12.3

### 🐞 Bug Fixes

- **react-js:** remove need to use type 'react-ts'
- **build:** Correctly load svgs
- **build:** don't remove viewbox from svgs
- **deploy:** Don't check if port is in use for deploy
- **release:** test merge stage after fixing versions and tags

### :wrench: Configs

- **babel:** move babels config to babel-loader.options
- **babel:** update targets.browsers

### :memo: Documentations

- **README:** add CHANGELOG link
- **README:** update karma usage
- add info on usage 'no need to add babel config to your package.json'

## 1.11.0

### 🐞 Bug Fixes

- **polyfills:** migrate from babel/polyfill to core-js3

## 1.10.4

### 🐞 Bug Fixes

- **lint-staged:** use eslint for js files
- pass env variables correctly + read .env file
- version tags and release process
- add missing dependency

## 1.9.4

### :sparkles: Features

- use name instead of folder for css local ident name

### 🐞 Bug Fixes

- **deps:** update dependencies and fix peer dep

### :wrench: Configs

- **ci:** fix install cache and change release NODE_ENV to 'production'

## 1.9.0

### 🐞 Bug Fixes

- **CI:** fix commonConfig usage in 'karma.config'
- **CI:** fix asset test
- **file-loader:** use '[path]' instead of '[folder]'
- **file-loader:** fix public paths (use rel)
- **css-loader:** use '[hash]' for production mode

### :recycle: Refactoring

- **constants:** move to /src and add 'REGEXPS'
- **config-common:** export function to use webpacks `env`

## 1.8.0

### :sparkles: Features

- **middlewares:** enable importing from `@stackr23/webpack/middlewares`

### 🐞 Bug Fixes

- **errorOnUsedPort:** make '@stackr23/webpack' SYNC!
- **css-loader:** change `localIdentName` to '[folder]-[local]'

### :art: Styling

- **App:** add '~normalize.css' via shorthand path

### :construction_worker: Continuous Integration

- **os-matrix:** build on linux, mac and windows

### :memo: Documentations

- **README:** update usage according to current state
- **README:** fix karma usage section

## 1.6.0

### 🐞 Bug Fixes

- **CI:** use `npm ci`
- **lint:** fix 'no-console' lint errors
- **sass:** fix global include paths
- **scripts:** fix lint script

## 1.5.3

### :sparkles: Features

- **karma:** export config via '@stackr23/webpack/karma'

### 🐞 Bug Fixes

- **file-loader:** load assets under "[folder]/[name].[ext]"
- **karma:** fix typo in karma.config ('cheereo' -> 'cheerio')
- **karma:** preprocess 'PATH.src/\*_/_.js' with webpack

### :package: Dependencies

- **deps:** move "@babel/plugin-proposal-export-default-from" to save-deps
- **deps:** move karma modules to save-deps
- **deps:** move [@formatjs](https://github.com/formatjs) polyfill modules to save-deps

## 1.5.1

### 🐞 Bug Fixes

- **deps:** fix bugs due to dep errors

### :memo: Documentations

- **README:** add npm status version badge

## 1.5.0

### :sparkles: Features

- **CI:** add "karma" to pipeline

### 🐞 Bug Fixes

- **CI:** install HeadlessChrome dependencies
- **lint:** use latest '@stackr23/config-eslint'
- **file-loader:** add mp4 to files loader

### :white_check_mark: Test System

- add `karma-webpack` with mocha chai spec test
- add sanity test (build webpack withg karma)
- add basic spec tests (App.jsx)

### :memo: Documentations

- **README:** add npm status version badge

## 1.4.0

### :sparkles: Features

- **polyfill:** add polyfill for native Intl API
- **semantic-release:** enable publishing to NPM registry
- **polyfill:** add polyfill for native Intl API

### 🐞 Bug Fixes

- **eslint:** use newer version of config "@stackr23/config-eslint"
- **eslint:** add 'webpack.config.resolve.js'
- **CI:** fix job names
- **IDE:** add 'workingDirectories'
- use named export for `remoteConsoleInjector()`

### :recycle: Refactoring

- move 'webpack.config.js' to workspace root

### :memo: Documentations

- **README:** add badge for travis build status
- **README:** add badges for 'conventional-commits' and 'semantic-release'
- **README:** fix cli usage

## 1.1.0

### :sparkles: Features

- **semantic-release:** release on master
- **eslint-import-resolver:** resolve WEBPACK_PATH per dotenv
- **remoteConsole:** enable `import {remoteConsoleInjector} from '@stackr23/webpack/remoteConsole`
- **hooks:** add `husky` and `lint-staged`

### 🐞 Bug Fixes

- **build:** fix `errorOnUsedPort()`
- **config:** add additional webpack configs and use updated versions
- **css-loader:** use v3 config scheme (fix version to v3)

### :recycle: Refactoring

- **remoteConsole:** better error reporting and filestructure
- move configs to `/env/[TYPE]/`
- move PATHS and PORT to 'src/constants.js'

### :memo: Documentations

- add "Features" information
- add constants overview
- add scope usage in merged example

### :package: Dependencies

- move "express-useragent" to deps (!dev)
- add 'cross-env'
- add missing deps
- clean up and sort deps/devDeps (save/dev)

# :tada: 1.0.0
