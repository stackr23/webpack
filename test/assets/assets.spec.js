import * as assets from './index'

const { chai: { expect }} = global

describe('[Assets] - file-loader combined with export-default-from', function() {
  it('imported namespace contains asset keys', () => {
    // check import - import-namespace combined with export-default-from
    expect(assets).to.contain.keys('stackr23_logo')
  })

  it('asset key contains \'/[path]/[name].[ext]\'', () => { // check path prefix
    expect(assets.stackr23_logo).to.contain('/assets/stackr23_logo.jpg')
  })
})
