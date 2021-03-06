// TODO: setup different svg loaders (react-svg-loader / svgo-loader)
// react-svg-loader for ui and icons -> JSX output
// svgo into file-loader for svg assets (content images)
const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')
const Dotenv = require('dotenv-webpack')

const { PATHS, REGEXPS } = require('../../constants')
const babelLoader = require('../../babel-loader.config') // also includes 'source-map-loader'
const { resolve } = require('../../webpack.config.resolve.js')

const getCommonConfig = (env) =>
  merge([
    {
      entry: {
        index: [ path.join(__dirname, '../..', 'utils', 'polyfills.js'), PATHS.src ],
      },
      module: {
        rules: [
          {
            test:    /\.(js|jsx)$/,
            exclude: /node_modules/,
            use:     babelLoader,
          },
          {
            test: /\.(ts|tsx)$/,
            use:  [ ...babelLoader, 'awesome-typescript-loader' ],
          },
          {
            test: /\.s?css$/,
            use:  [
              { loader: 'style-loader', options: { injectType: 'singletonStyleTag' }},
              { loader: 'css-loader', options: { importLoaders: 2 }},
              {
                loader:  'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [
                      [
                        'postcss-preset-env',
                        {
                          // Options
                        },
                      ],
                    ],
                  },
                },
              },
              {
                loader:  'sass-loader',
                options:  {
                  sourceMap:   true,
                  sassOptions: {
                    includePaths: [
                      './sass',
                      `${path.basename(PATHS.src)}/sass`,
                      './css', // ! compatibility with old setting
                      // TODO: ? use sass-resource-loader
                    ],
                  },
                },
              },
              // TODO: add stylus-loader and apply @stackr23/stylus
            ],
          },
          {
            test:    REGEXPS.assets,
            // exclude: PATHS.componentAssets,
            use:     {
              loader:  'file-loader',
              options: {
                name:       '[path][name].[ext]',
                publicPath: '', // server path in DEV
                outputPath: '', // fs path in PROD
              },
            },
          },
        ],
      },
      resolve,
      plugins: [
        new CheckerPlugin(),
        new MiniCssExtractPlugin({
          filename: '[name].scss',
        }),
        new HtmlWebpackPlugin({
          template: (function() {
            try {
              // provide compatibility for old usage
              return require.resolve(path.join(PATHS.src, 'index.html'))
            }
            catch (err) {
              return require.resolve(path.join(PATHS.src, 'index.html.ejs'))
            }
          })(),
          inject: true,
        }),
        new Dotenv(),
      ],
    },
  ])

module.exports = getCommonConfig
