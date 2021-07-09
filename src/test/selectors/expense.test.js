import moment from 'moment'
import expenseSelector from '../../selectors/expenses'




const expenses = [{
    id : '123' , 
    title : 'test one' , 
    note : "note test one", 
    createdAt : -12345 , 
    amount : 10
} , {
    id : '123' , 
    title : 'lol' , 
    note : "note test one", 
    createdAt : 1000 , 
    amount : 5
} , {
    id : '123' , 
    title : 'be third one' , 
    note : "note test one", 
    createdAt : 900 , 
    amount : 99
}
]

test('should filter expense array based on text value' , () => {
    const filter = {
        text : 'e' , 
        sortBy : '' , 
        startDate : undefined , 
        endDate : undefined
    }
    const filteredExpense  = expenseSelector(expenses , filter)

    expect(filteredExpense).toEqual([expenses[0] , expenses[2]])
})

test('should filter expense array based on startDate' , () => {
    const filter = {
        text : '' , 
        sortBy : '' , 
        startDate : 1000 , 
        endDate : undefined
    }
    const filteredExpense  = expenseSelector(expenses , filter)

    expect(filteredExpense).toEqual([expenses[1]])
})

test('should filter expense array based on endDate' , () => {
    const filter = {
        text : '' , 
        sortBy : '' , 
        startDate : undefined , 
        endDate : 900
    }
    const filteredExpense  = expenseSelector(expenses , filter)

    expect(filteredExpense).toEqual([expenses[0] , expenses[2]])
})

test('should sort expense array by amount' , () => {
    const filter = {
        text : '' , 
        sortBy : 'amount' , 
        startDate : undefined , 
        endDate : undefined
    }
    const filteredExpense  = expenseSelector(expenses , filter)

    expect(filteredExpense).toEqual([expenses[2] , expenses[0] , expenses[1]])
})

test('should sort expense array by date' , () => {
    const filter = {
        text : '' , 
        sortBy : 'date' , 
        startDate : undefined , 
        endDate : undefined
    }
    const filteredExpense  = expenseSelector(expenses , filter)

    expect(filteredExpense).toEqual([expenses[1] , expenses[2] , expenses[0] ])
})