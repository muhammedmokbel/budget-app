import React from 'react'

import ExpenseForm from '../ExpenseForm/ExpenseForm'

import {connect} from 'react-redux'

import {editExpense , removeExpense} from '../../redux/actionGenerators/expenseGenerators'


export class EditExpense extends React.Component {

    render() {
        return (
            <div>
                edit page
            <ExpenseForm 
            onSubmit={(expenseData) => {
                this.props.editExpense(this.props.match.params.id , expenseData)
                this.props.history.push('/')
            }} 
            {...this.props.expenses.filter(item => item.id === this.props.match.params.id )[0]}/>
        
            <button onClick={() =>{ 
                this.props.removeExpense( this.props.match.params.id)
                this.props.history.push('/')
            }}>Remove</button>
            </div>
        )
    }
} 


const mapStateToProps = state => {
    return {
        expenses : state.expenseReducer.expenses
    }
}

const mapDisptachToProps = (dispatch, props) => {
    return {
        editExpense : (id , val) => dispatch(editExpense(id , val)) , 
        removeExpense : val => dispatch(removeExpense({id : val}))
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(EditExpense);