const { merge } = require('webpack-merge')

const getDevelopConfig = require('./develop.config')
const { setEnvVariable } = require('../../utils')

setEnvVariable('process.env.NODE_ENV', 'mock')

exports.config =  merge(getDevelopConfig('development_mock'))
