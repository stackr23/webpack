const webpack = require('webpack')
const chalk = require('chalk')
const { isFreePort } = require('node-port-check')

const { PORT } = require('../constants')

let envVariable = {}

const addEnvVariables = () => {
  return {
    plugins: [ new webpack.DefinePlugin(envVariable) ],
  }
}

const setEnvVariable = (key, value) => {
  envVariable[key] = JSON.stringify(value)
}

const errorOnUsedPort = (port) =>
  isFreePort(port || PORT).then(([ , , isFree ]) => {
    if (isFree) {
      return true
    }
    else {
      console.log(
        chalk`\n{bold.rgb(195,20,20) [StackR23] Error: PORT "${PORT}" in use!\n}{rgb(195,20,20) Please, verify if there is another watcher running,}` +
        chalk`\n{rgb(195,20,20) or change port manually via env var: 'PORT=8888 npm run start'\n}`,
      )
      throw Error(`PORT ${PORT} in use`)
    }
  })

module.exports = {
  errorOnUsedPort,
  addEnvVariables,
  setEnvVariable,
}
