import React from 'react'

import TestComponent from './Test'

const { enzyme: { shallow }, chai: { expect }} = global

describe('Test', function() {
  it('renders without problems', function() {
    const wrapper = shallow(<TestComponent content="PLACEHOLDER" />)
    expect(wrapper.find('#test_content')).to.contain.text('PLACEHOLDER')
  })
})
