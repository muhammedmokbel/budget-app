import moment from 'moment'
import React from 'react' 
import { shallow } from 'enzyme'
import {AddExpense} from '../../components/addExpens/addExpens'


let submitSpy , history , wrapper; 

beforeEach(() => {
    submitSpy = jest.fn() 
    history = {push :jest.fn()  } 
    wrapper = shallow(<AddExpense addexpense={submitSpy} history={history} />)
})


test('should render addExpense component correctly' , () => {
    expect(wrapper).toMatchSnapshot()
})

test('should return submit data correctly' , () => {

    const dummyExpense = {
        title : 'test title', 
        note : 'test note', 
        amount : 3.1 , 
        createdAt : (moment(0))
    }

     wrapper.find('ExpenseForm').prop('onSubmit')(dummyExpense)

     expect(history.push).toHaveBeenCalledWith('/')
     expect(submitSpy).toHaveBeenCalledWith(dummyExpense)


})


