const { merge } = require('webpack-merge')
const ip = require('ip').address()
const webpack = require('webpack')

const stackr23Middlewares = require('../../middlewares')
const { setEnvVariable } = require('../../utils')
const { PATHS, PORT } = require('../../constants')

const getDevelopConfig = () => {
  // printLaunchQRCode(ip, PORT)
  setEnvVariable('process.env.NODE_ENV', 'development')

  return merge([
    {
      devServer: {
        host:               'local-ip',
        port:               PORT,
        // contentBase:        PATHS.build, // deprecated... substitute not needed!?!?
        hot:                true,
        liveReload:         false,
        compress:           true,
        magicHtml:          true,
        open:               true,
        historyApiFallback: true,
        client:             {
          logging: 'error',
          overlay: {
            errors:   true,
            warnings: false,
          },
          progress:  true,
          reconnect: 3,
        },
        // before: stackr23Middlewares,
        setupExitSignals: true,
      },
      devtool:       'eval-source-map',
      output:        {
        devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
      },
      plugins: [ new webpack.HotModuleReplacementPlugin() ],
    },
  ])
}

module.exports = getDevelopConfig
