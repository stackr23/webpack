import chai from 'chai'
import { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

configure({ adapter: new Adapter() })
// require bridge module after adapter is set
chai.use(require('chai-enzyme'))
