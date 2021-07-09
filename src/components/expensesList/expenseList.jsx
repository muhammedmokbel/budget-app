import React from 'react'
import {connect} from 'react-redux'

import ExpenseItem from '../expenseItem/expenseItem'
import getFilteredExpeneses from '../../selectors/expenses'


export const ExpensesList = ({expenses , history}) => (
    <div>
        this is my list :D 

        {expenses.map((item , index) => { 
            console.log(index)
            return <ExpenseItem key={index} history={history}  {...item}/>
        })}
      
    </div>
)

const mapStateToProps = (state) => {
    console.log(state)
    return {
        expenses : getFilteredExpeneses(state.expenseReducer.expenses , state.filterReducer.filter) 
    }
}

export default connect(mapStateToProps)(ExpensesList)