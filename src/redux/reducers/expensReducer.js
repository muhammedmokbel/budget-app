import * as actionTypes from '../actionTypes'
const initState = {
    expenses : []
}

export const expenseReducer = (state = initState , action) => {
    switch(action.type)
    {
        case actionTypes.ADD_EXPENSE : 
            return {
                ...state , 
                expenses : [
                    ...state.expenses, 
                    action.expense
                ]
            }
        case actionTypes.EDIT_EXPENSE : 
            return {
                ...state , 
                expenses : state.expenses.map(item => {
                    if (item.id === action.id)
                        return {
                            ...item , 
                            ...action.updates
                        }
                    return item
                })
            }
        case actionTypes.REMOVE_EXPENSE : 
            return {
                ...state , 
                expenses : state.expenses.filter(item => item.id !== action.id)
            }
        default : 
            return state
    }
}