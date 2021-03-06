import React, { PureComponent } from 'react'

import Test from '../components/Test.jsx'
import TsTest from '../components/TsTest.tsx'
import styles from './App.scss' // eslint-disable-line no-unused-vars

require('../../remoteConsole').remoteConsoleInjector()
class App extends PureComponent {
  render() {
    // test error reporting per remtoteConsole
    // const foo = bar

    return (
      <>
        <h1 id="app_headline">@stackr23/webpack up and running!</h1>
        <Test content="PLACEHOLDER" />
        <TsTest content="customtext" />
      </>
    )
  }
}

export default App
