const { merge } = require('webpack-merge')

const configStackR23 = require('./index.js')

module.exports = async (...args) => {
  // configStackR23 is ASYNC!
  const config = await configStackR23(...args)
  return merge(config, {})
}
