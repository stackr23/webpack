import PropTypes from 'prop-types'
import React from 'react'

const Test = ({ content = 'CONTENT' }) => {
  return (
    <div id="test_wrapper">
      <div id="test_content">{content}</div>
    </div>
  )
}

Test.propTypes = {
  content: PropTypes.any.isRequired,
}

export default Test
