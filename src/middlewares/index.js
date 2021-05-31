const remoteConsoleMiddleware = require('../utils/remoteConsole/remoteConsoleMiddleware')

const stackr23Middlewares = (app) => {
  remoteConsoleMiddleware(app)
}

module.exports = stackr23Middlewares
