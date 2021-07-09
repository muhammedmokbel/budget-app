import {createStore , combineReducers} from 'redux'
import * as reducers from './reducers/allReducer'




export default createStore(combineReducers({
    expenseReducer : reducers.expenseReducer, 
    filterReducer : reducers.filterReducer

}))