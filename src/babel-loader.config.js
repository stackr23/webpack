const { presets, plugins } = require('../babel.config')

const babelLoader = [
  {
    loader:  'babel-loader',
    options: { presets, plugins },
  },
  { loader: 'source-map-loader' },
]

module.exports = babelLoader
