import * as actionTypes from '../actionTypes'

export const setTextSearch = (text = '') => ({
    type : actionTypes.SET_TEXT_SEARCH , 
    text 
})

export const sortByDate = () => ({
    type : actionTypes.SORT_BY_DATE
})

export const sortByAmount = () => ({
    type : actionTypes.SORT_BY_AMOUNT
})

export const setStartDATE = (startDate = '') => ({
    type : actionTypes.SET_START_DATE , 
    startDate
})

export const setEndDate = (endDate = '') => ({
    type : actionTypes.SET_END_DATE , 
    endDate
})