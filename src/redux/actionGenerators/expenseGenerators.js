import * as actionTypes from '../actionTypes'
import {v4 as uuidv4} from 'uuid'


export const addExpense = ({
    title = '' ,
    amount = 0 , 
    note = '' , 
    createdAt = 0
} = {}) => ({
    type : actionTypes.ADD_EXPENSE , 
    expense : {
    id : uuidv4() , 
    title , 
    amount ,
    note ,
    createdAt 
    }
})

export const removeExpense = ({
    id = 0
} = {} ) => ({
    type : actionTypes.REMOVE_EXPENSE , 
    id
})

export const editExpense = (id , updates) => ({
    type : actionTypes.EDIT_EXPENSE , 
    id ,
    updates
})

