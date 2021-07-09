import moment from 'moment'
import {filterReducer} from '../../redux/reducers/filterReducer'



test('should return default value of filter reducer', ()=> {
    const state = filterReducer(undefined , {type : '@@INIT'})

    expect(state).toEqual({
        filter : {
            text : '' ,
            sortBy : 'date' ,
            startDate : moment().startOf('month') , 
            endDate : moment().endOf('month')
        }
    })
})

test('should return value of text search', ()=> {
    const state = filterReducer( undefined , {type : 'SET_TEXT_SEARCH' , text : 'lol'})

    expect(state).toEqual({
        filter : {
            text : 'lol' ,
            sortBy : 'date' ,
            startDate : moment().startOf('month') , 
            endDate : moment().endOf('month')
        }
    })
})

test('should return value of sort by equal to date as default value', ()=> {
    const state = filterReducer( undefined , {type : 'SORT_BY_DATE'})

    expect(state).toEqual({
        filter : {
            text : '' ,
            sortBy : 'date' ,
            startDate : moment().startOf('month') , 
            endDate : moment().endOf('month')
        }
    })
})

test('should return value of sort by equal to amount', ()=> {
    const state = filterReducer( undefined , {type : 'SORT_BY_AMOUNT'})

    expect(state).toEqual({
        filter : {
            text : '' ,
            sortBy : 'amount' ,
            startDate : moment().startOf('month') , 
            endDate : moment().endOf('month')
        }
    })
})

test('should return value of startDate', ()=> {
    const state = filterReducer( undefined , {type : 'SET_START_DATE' , startDate : moment(0).valueOf()})

    expect(state).toEqual({
        filter : {
            text : '' ,
            sortBy : 'date' ,
            startDate : moment(0).valueOf() , 
            endDate : moment().endOf('month')
        }
    })
})

test('should return value of endDate', ()=> {
    const state = filterReducer( undefined , {type : 'SET_END_DATE' , endDate : moment(0).valueOf()})

    expect(state).toEqual({
        filter : {
            text : '' ,
            sortBy : 'date' ,
            startDate :  moment().startOf('month') , 
            endDate : moment(0).valueOf()
        }
    })
})