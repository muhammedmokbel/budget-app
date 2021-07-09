import * as filterGenerators from '../../redux/actionGenerators/filterGenerators'
import moment from 'moment'

test('should set the value of text search field', () => {
    const action = filterGenerators.setTextSearch('test')  
    expect(action).toEqual({
        type : 'SET_TEXT_SEARCH', 
        text : 'test'
    })
})

test('should set the value of text search field by default value' , () => {
    const action = filterGenerators.setTextSearch()  
    expect(action).toEqual({
        type : 'SET_TEXT_SEARCH', 
        text : ''
    })
})

test('should set the value of startDate', () => {
    const action = filterGenerators.setStartDATE(moment())
    expect(action).toEqual({
        type : 'SET_START_DATE',
        startDate : expect.any(Object)
    })

})

test('should set the value of startDate by default value', () => {
    const action = filterGenerators.setStartDATE()
    expect(action).toEqual({
        type : 'SET_START_DATE',
        startDate : ''
    })

})

test('should set the value of endDate', () => {
    const action = filterGenerators.setEndDate(moment())
    expect(action).toEqual({
        type : 'SET_END_DATE',
        endDate : expect.any(Object)
    })

})

test('should set the value of endDate by default value', () => {
    const action = filterGenerators.setEndDate()
    expect(action).toEqual({
        type : 'SET_END_DATE',
        endDate : ''
    })

})

test('should set the value of sort by date', () => {
    const action = filterGenerators.sortByDate()  
    expect(action).toEqual({
        type : 'SORT_BY_DATE', 
    })
})

test('should set the value of sort by amount', () => {
    const action = filterGenerators.sortByAmount()  
    expect(action).toEqual({
        type : 'SORT_BY_AMOUNT', 
    })
})

