import React from 'react'

import TestComponent from './Test'

const { enzyme: { shallow }, chai: { expect }} = global

describe('TestComponent', function() {
  it('renders with \'content="PLACEHOLDER"\'', function() {
    const wrapper = shallow(<TestComponent content="PLACEHOLDER" />)
    expect(wrapper.find('#test_content')).to.contain.text('PLACEHOLDER')
  })
})
