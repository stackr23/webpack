import React, { FC } from 'react'
import PropTypes from 'prop-types'


// interface Person {
//   name: string;
//   age: number;
// }

const TsTest = ({ content = 'CONTENT' }): FC => {
  return (
    <div id="tstest_wrapper">
      <div id="tstest_content">{content}</div>
    </div>
  )
}

TsTest.propTypes = {
  content: PropTypes.any.isRequired,
}

export default TsTest

