import moment from 'moment'


export const filter = {
    text : '' , 
    amount : '' , 
    sortBy : 'date' , 
    startDate : undefined , 
    endDate : undefined
}

export const altFilter = {
    text : 'text test' , 
    amount : 2.36 , 
    sortBy : 'amount' , 
    startDate : moment(0) , 
    endDate : moment(0).add(3 , 'days')
}