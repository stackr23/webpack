import * as assets from './index'

console.log('ASSETS:\n')
console.log(assets)

const { chai: { expect }} = global

describe('[Assets] - file-loader', function() {
  it('export-default-from as namespace', () => {
    // check export-default-from
    expect(assets.__esModule).to.be.equal(true) // eslint-disable-line import/namespace
    // check import - import-namespace combined with export-default-from
    expect(assets).to.contain.keys('stackr23_logo')
  })

  it('output contains \'[path][name]\'', () => {
    // check path prefix
    expect(assets.stackr23_logo).to.contain('/assets/stackr23_logo.jpg')
  })
})
