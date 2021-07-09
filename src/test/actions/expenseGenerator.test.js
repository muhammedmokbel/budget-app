import {addExpense , editExpense , removeExpense} from '../../redux/actionGenerators/expenseGenerators'


test('should return object with type remove and the id ' , () => {
    const action = removeExpense({id : '123'}) 
    expect(action).toEqual({
        type : 'REMOVE_EXPENSE' , 
        id : '123'
    })
})

test('should return object with type edit , id and updates', () => {
    const action = editExpense('124' , {
        note : 'test note' , 
        title : "test title" , 
        amount : 1234
    })
    expect(action).toEqual({
        type : 'EDIT_EXPENSE', 
        id : "124" , 
        updates : {
            note : 'test note' , 
            title : "test title" , 
            amount : 1234
        }
    })
})

test('should return object with type add and the expense Data' , () => {
    const expense = {
        title : "test title" , 
        note : "test note" , 
        createdAt : 100000 , 
        amount : 245.3
    }
    const action = addExpense(expense)

    expect(action).toEqual({
        type : "ADD_EXPENSE" , 
        expense : {
            ...expense , 
            id : expect.any(String)
        }
    })
})

test('should add expense with default values' , () => {
    const action = addExpense()

    expect(action).toEqual({
        type : "ADD_EXPENSE" , 
        expense : {
            title : '' , 
            amount : 0, 
            createdAt : 0 , 
            note : '', 
            id : expect.any(String)
        }
    })
})