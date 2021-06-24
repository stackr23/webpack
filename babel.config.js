const babelPresets = [
  [ '@babel/preset-env', {
    modules:     'auto',
    useBuiltIns: 'entry', // uses utils/polyfills
    corejs:      3,
    targets:     {
      node:      'current',
      esmodules: true,
      // when specifying the esmodules target, browsers targets will be ignored.
      // browsers:  [
      //   'last 2 versions',
      //   '> 1%',
      //   'IE 10',
      // ],
    },
  }],
  '@babel/preset-typescript',
  '@babel/preset-react',
]

const babelPlugins = [
  '@babel/plugin-transform-runtime',
  '@babel/plugin-proposal-export-default-from',
  [ '@babel/plugin-proposal-decorators',
    { legacy: true }],
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-transform-react-constant-elements',
  'transform-inline-environment-variables',
]

module.exports = {
  presets: babelPresets,
  plugins: babelPlugins,
}
