import React from 'react'

import TsTestComponent from './TsTest'

const { enzyme: { shallow }, chai: { expect }} = global

describe('TypeScript TestComponent', function() {
  it('renders with \'content="customtext"\'', function() {
    const wrapper = shallow(<TsTestComponent content="customtext" />)
    expect(wrapper.find('#tstest_content')).to.contain.text('customtext')
  })
})
