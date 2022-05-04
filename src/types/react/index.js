const { merge } = require('webpack-merge')

const getCommonConfig = require('./common.config')
const getDevelopConfig = require('./develop.config')
const production = require('./production.config')
const mock = require('./mock.config')
const { addEnvVariables } = require('../../utils')

module.exports = (env) => {
  // TODO: refactor env/mode usage and config merging
  const configCommon = getCommonConfig(env)

  if (env === 'production') {
    return merge(configCommon, production.config)
  }

  const developConfig = getDevelopConfig(env)
  const configDev = merge(configCommon, developConfig)

  return merge(configDev, (env === 'development_mock' && mock.config))
}
