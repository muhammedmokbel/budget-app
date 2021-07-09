import moment from 'moment'
import React from 'react' 
import { shallow } from 'enzyme'
import {EditExpense} from '../../components/Edit/editExpens'


const expensesList =  [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
  }, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  }, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
  }];

let wrapper , match , history , editExpense , removeExpense; 

beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    match = {
        params : {
            id : '3'
        }
    }
    history = { push : jest.fn()}
    wrapper = shallow(<EditExpense removeExpense={removeExpense} editExpense={editExpense} expenses={expensesList}  match={match} history={history} />)
})

test('should render edit expense component correctly' , () => {
    expect(wrapper).toMatchSnapshot()
})

test('should return edit data correctly' , () => {

    wrapper.find('ExpenseForm').prop('onSubmit')(expensesList[2])

    expect(editExpense).toHaveBeenCalledWith('3' , expensesList[2])
    expect(history.push).toHaveBeenCalledWith('/')
    
})

test('should return id of removed data correctly', () => {

    wrapper.find('button').simulate('click')

    expect(removeExpense).toHaveBeenCalledWith('3')
    expect(history.push).toHaveBeenCalledWith('/')

})