const { errorOnUsedPort, setEnvVariable } = require('./utils')

const TYPE = {
  REACT:   'react', // = default
  ANGULAR: 'angular',
}

const setEnvironment = (env) => {
  // TODO: switch env and mode usage (see issue #35)
  // * env should match NODE_ENV (development|production)
  // * -> move '_mock' mark to mode
  process.env.NODE_ENV = env !== 'production' ? 'development' : 'production'
  process.env.WEBPACK_ENV = env

  // inject process.env vars
  for (let [ key, value ] of Object.entries(process.env)) {
    setEnvVariable(`process.env.${key}`, value)
  }
}

/**
 * @function
 * @file @stackr23/webpack/webpack.config.js
 * @name getMergedConfig
 * @returns {Promise} webpack config
 */
const getWebpackConfig = (env, args = {}) => {
  // workaround for issue #35
  if (process.NODE_ENV === 'production') {
    env = 'production'
  }

  setEnvironment(env)

  // Decide which config to load according to app.
  const type = args.type || TYPE.REACT
  process.env.WEBPACK_TYPE = type

  let webpackVariation
  switch (type) {
    case TYPE.REACT:
      webpackVariation = require('./types/react')
      return webpackVariation(env)
    default:
      throw new Error(`type ${args.type} not supported yet.`)
  }
}

// TODO: fix to sync instead of async (for 3rd party usage like nextjs and others)
// eslint-disable-next-line no-process-exit
errorOnUsedPort().catch((e) => process.exit(1))


module.exports = getWebpackConfig
