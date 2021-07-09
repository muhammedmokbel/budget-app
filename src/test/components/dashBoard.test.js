import moment from 'moment'
import React from 'react' 
import { shallow } from 'enzyme'
import Dashboard from '../../components/Dashboard/dashboard'


test('should render dashboard', ()=> {
    const wrapper = shallow(<Dashboard  />)
    expect(wrapper).toMatchSnapshot()
})