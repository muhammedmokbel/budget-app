import moment from 'moment'
import React from 'react' 
import { shallow } from 'enzyme'
import {ExpenseListFilter} from '../../components/ExpenseListFilter/expenseListFilter'
import {DateRangePicker} from 'react-dates'
import {filter , altFilter} from '../fixtures/filterData'


let wrapper , readingValue , selectSortBy , changeDate;


beforeEach(() => {

    readingValue = jest.fn()
    selectSortBy = jest.fn() 
    changeDate = jest.fn() 

    wrapper = shallow (
    <ExpenseListFilter
    filters={filter}
    readingValue={readingValue}
    selectSortBy={selectSortBy}
    changeDate={changeDate} />
     )
})

test('should render ExpenseListFilter with default data correctly', () => {
    expect(wrapper).toMatchSnapshot() 
})

test('should render ExpenseListFilter with data correctly', () => {
  wrapper.setProps({
      filters : altFilter
  })
  expect(wrapper).toMatchSnapshot()

})


test('should reading text value correctly', () => {
    wrapper.find('input').at(0).simulate('change' , {
    target : {
                value : 'text value test'
            }
        })

    expect(readingValue).toHaveBeenCalledWith('text value test')
  
  })

  test('should reading sortBy value correctly', () => {
    wrapper.find('select').at(0).simulate('change' , {
    target : {
                value : 'amount'
            }
        })

    expect(selectSortBy).toHaveBeenCalledWith('amount')
  
  })

  test('should reading date value correctly', () => {

    wrapper.find(DateRangePicker).prop('onDatesChange')({startDate : moment(0) , endDate : moment(0).add(2 , 'days')})



    expect(changeDate).toHaveBeenCalledWith({
        startDate : moment(0) , 
        endDate : moment(0).add(2 , 'days')
    })
  
  })





