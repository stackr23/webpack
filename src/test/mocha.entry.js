const EmzymeAdapterReact = require('@wojtekmaj/enzyme-adapter-react-17')
require('enzyme').configure({ adapter: new EmzymeAdapterReact() })
// require bridge module after adapter is set
require('chai').use(require('chai-enzyme')())

// before(() => {
//   console.log('TEST BEFORE!')
//   console.log('TEST BEFORE!')
//   console.log('TEST BEFORE!')
//   console.log('TEST BEFORE!')
// })
