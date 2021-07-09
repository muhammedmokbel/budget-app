import React from 'react'
import ExpenseForm from '../ExpenseForm/ExpenseForm'

import {connect} from 'react-redux'
import {addExpense} from '../../redux/actionGenerators/expenseGenerators'

export class AddExpense extends React.Component {

  onSubmit = (expenseData) => {
    this.props.addexpense(expenseData)
    this.props.history.push('/')

  }


  render() {

    return (
      <ExpenseForm 
      onSubmit={this.onSubmit}/>
    )
  }

}


const mapDisptachToProps = dispatch => {
  return {
    addexpense : val => dispatch(addExpense(val))
  }
}

export default connect(undefined , mapDisptachToProps)(AddExpense);