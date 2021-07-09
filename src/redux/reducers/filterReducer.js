import * as actionTypes from '../actionTypes'
import moment from 'moment'

const initState = {
    filter : {
        text : '' ,
        sortBy : 'date' ,
        startDate : moment().startOf('month') , 
        endDate : moment().endOf('month')
    }
}

export const filterReducer = (state = initState , action) => {
    switch(action.type)
    {
        case actionTypes.SET_TEXT_SEARCH : 
            return {
                ...state , 
                filter : {
                    ...state.filter, 
                    text : action.text
                }
            }
        case actionTypes.SORT_BY_AMOUNT : 
            return {
                ...state , 
                filter : {
                    ...state.filter , 
                    sortBy : 'amount'
                }
            }
        case actionTypes.SORT_BY_DATE : 
            return {
                ...state , 
                filter : {
                    ...state.filter , 
                    sortBy : 'date'
                }
            }
        case actionTypes.SET_START_DATE : 
            return {
                ...state , 
                filter : {
                    ...state.filter , 
                    startDate : action.startDate
                }
            }
        case actionTypes.SET_END_DATE : 
            return {
                ...state , 
                filter : {
                    ...state.filter , 
                    endDate : action.endDate
                }
            }

        default : 
            return state
    }
}