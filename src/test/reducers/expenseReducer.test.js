import {expenseReducer} from '../../redux/reducers/expensReducer'




test('adding expense to exoenses array ', () => {
    const dummyExpensesState = {
        expenses : [{
        id : "11" , 
        title : 'test' , 
        amount : 124.33 , 
        note : 'test' , 
        createdAt : 0
    }
    ]
}
    const newState = expenseReducer(dummyExpensesState , {type : 'ADD_EXPENSE' , expense : {
        title : "test two" , 
        note : "test two" , 
        amount : 555 , 
        createdAt : 0 , 
        id : "154"
    }} )
    expect(newState).toEqual({
      expenses :  [ ...dummyExpensesState.expenses ,   {
            title : "test two" , 
            note : "test two" , 
            amount : 555 , 
            createdAt : 0 , 
            id : "154"
        }]
    })
})

test('removing expenses from expenses array' , () => {
    const dummyExpensesState = {
        expenses : [{
        id : "11" , 
        title : 'test' , 
        amount : 124.33 , 
        note : 'test' , 
        createdAt : 0
    }
    ]
}

    const newState = expenseReducer(dummyExpensesState , {type : 'REMOVE_EXPENSE' , id : "11"})

    expect(newState).toEqual({
        expenses : []
    })


})


test('removing expenses  if not found it in array' , () => {
    const dummyExpensesState = {
        expenses : [{
        id : "11" , 
        title : 'test' , 
        amount : 124.33 , 
        note : 'test' , 
        createdAt : 0
    }
    ]
}

    const newState = expenseReducer(dummyExpensesState , {type : 'REMOVE_EXPENSE' , id : "-11"})

    expect(newState).toEqual({
        expenses : dummyExpensesState.expenses
    })


})

test('editing expenses in expenses array' , () => {
    const dummyExpensesState = {
        expenses : [{
        id : "11" , 
        title : 'test' , 
        amount : 124.33 , 
        note : 'test' , 
        createdAt : 0
    }
    ]
}
    const newState = expenseReducer(dummyExpensesState , {type : 'EDIT_EXPENSE' , id : "11" , 
    updates : {
        amount : 741
    }})

    expect(newState).toEqual({
        expenses : [{
            id : "11" , 
            title : 'test' , 
            amount : 741, 
            note : 'test' , 
            createdAt : 0
        }
        ]
    })


})