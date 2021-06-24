/** set ESLINT env vars
 *    used by #eslint-import-resolver-webpack'
 */
process.env.NODE_ENV = 'test';
process.env.WEBPACK_PATH = 'test';

module.exports = {
  extends: [require.resolve('@stackr23/config-eslint/env/react')],
  rules: {
    "react/jsx-filename-extension": 0,
    // conflicts between webpack- and node- resolver
    "node/no-missing-import": 0,
    "node/no-unpublished-import": 0
  }
}
