const stackR23WebpackConfig = require('./src/webpack.config.js')
const packageJson = require('./package.json')

console.info(`@stackr23/webpack v${packageJson.version}`)

module.exports = stackR23WebpackConfig
