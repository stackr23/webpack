const path = require('path')
// refactor: ? use yargs
const {
  WEBPACK_PATH, WEBPACK_BUILD, WEBPACK_ASSETS, WEBPACK_PORT,
} = process.env

const ROOT    = path.resolve(process.cwd())
const PATHS   = {
  root:            ROOT,
  build:           path.join(ROOT, WEBPACK_BUILD || 'build'),
  // TODO: rename marked as webpack root
  src:             path.join(ROOT, WEBPACK_PATH || 'src'),
  assets:          path.join(ROOT, WEBPACK_ASSETS || 'assets'),
}

const PORT = WEBPACK_PORT || '8080'

const REGEXPS = {
  // eslint-disable-next-line max-len
  assets: /\.(mp3|mpeg|opus|ogg|oga|wav|aac|caf|m4a|mp4|weba|webm|dolby|flac|eot|ttf|otf|woff2?)(\?v=\d+\.\d+\.\d+)?|png|jpe?g|gif|ico$/i,
}

module.exports = {
  PATHS,
  PORT,
  REGEXPS,
}
