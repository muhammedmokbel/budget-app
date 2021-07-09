import React from 'react'
import ExpensesList from '../expensesList/expenseList'
import ExpenseListFilter from '../ExpenseListFilter/expenseListFilter'

const Dashboard = (props) => (
  <div>
    <ExpenseListFilter />
    <ExpensesList history={props.history} />
  </div>
  
  )

export default Dashboard