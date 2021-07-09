import React from 'react' 
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm/ExpenseForm'

import moment from 'moment';




const expensesList =  [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
  }, {
    id: '2',
    title: 'Rent',
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

test('should render ExpeneseForm correctly', ()=> {
    const wrapper = shallow(<ExpenseForm  />)
    expect(wrapper).toMatchSnapshot()
})

test('should render expenseForm with data as edit case ', () => {
    const wrapper = shallow(<ExpenseForm  {...expensesList[1]} />)
    expect(wrapper).toMatchSnapshot()
})

test('should prevent submit the form', () => {
    const wrapper = shallow(<ExpenseForm /> )
    wrapper.find('form').simulate('submit' , {
        preventDefault : () => {}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
})

test('should set title of expense correctly', () => {
    const wrapper = shallow(<ExpenseForm /> )
    wrapper.find('input').at(0).simulate('change' , {
        target : {
            value : 'New Title for Testing'
        }
    })
    expect(wrapper.state('title')).toBe('New Title for Testing')
})

test('should set title of expense correctly', () => {
    const wrapper = shallow(<ExpenseForm /> )
    wrapper.find('textarea').at(0).simulate('change' , {
        target : {
            value : 'New note for Testing'
        }
    })
    expect(wrapper.state('note')).toBe('New note for Testing')
})

test('should set the amount value correctly' , () =>{
    const wrapper = shallow(<ExpenseForm /> )
    wrapper.find('input').at(1).simulate('change' , {
        target : {
            value : '2.14'
        }
    })
    expect(wrapper.state('amount')).toBe('2.14')
})

test('should set the amount value correctly' , () =>{
    const wrapper = shallow(<ExpenseForm /> )
    wrapper.find('input').at(1).simulate('change' , {
        target : {
            value : '2.1457'
        }
    })
    expect(wrapper.state('amount')).toBe('')
})

test('check the submitting of form', () => {
    const submitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm {...expensesList[1]} onSubmit={submitSpy} />)

    wrapper.find('form').at(0).simulate('submit' , { 
        preventDefault : () => {
            
        }
    })

    expect(submitSpy).toHaveBeenLastCalledWith({
        title : expensesList[1].title , 
        createdAt : expensesList[1].createdAt , 
        note : expensesList[1].note , 
        amount : expensesList[1].amount
        })


})

test('change of date picker' , () => {
    const wrapper = shallow(<ExpenseForm />)

    wrapper.find('#date').simulate('change' , {
        target : {
            value : moment(0)
        }
    })

    expect(wrapper.state('createdAt')).toEqual(moment(0))
})