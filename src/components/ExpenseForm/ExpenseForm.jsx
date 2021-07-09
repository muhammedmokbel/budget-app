import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'
import 'react-dates/initialize';
import {Link} from 'react-router-dom'


class ExpenseForm extends React.Component
{
    state = {
        title : '' , 
        amount : '' , 
        note : '' , 
        createdAt : moment(),
        dateFocuse : false  , 
        error : ''
    }

    componentDidMount(){
        if (this.props.id)
        {
            this.setState({
                title : this.props.title , 
                amount : this.props.amount , 
                note : this.props.note , 
                createdAt : moment(this.props.createdAt)
            })
        }
    }

    
    onSubmit = (e) => {
        e.preventDefault()
      if (!this.state.title || !this.state.amount)
      {
        this.setState({
            error : 'please provide the title and the amount of your expense'
        })
      }
      else 
      {
          this.setState({
              error : '' 
          })
          this.props.onSubmit({
              title : this.state.title , 
              amount : this.state.amount , 
              createdAt : this.state.createdAt.valueOf() , 
              note : this.state.note

          })
      }
      
    }
    render() {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>

            <input 
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={e => this.setState({
                title : e.target.value
            })}
            />

            <input 
            type="text"
            placeholder="amount"
            value={this.state.amount}
            onChange={e =>{
                if (e.target.value.match(/^\d+(\.\d{0,2})?$/))
                this.setState({
                    amount : e.target.value
                })
            } }
            />

            <SingleDatePicker 
                date={this.state.createdAt}
                onDateChange={date =>{
                    if (date)
                    {
                        this.setState({
                            createdAt : date 
                        })
                    }
                    
                } }
                focused={this.state.dateFocuse}
                onFocusChange={({focused}) =>{
                   
                    this.setState({
                        dateFocuse : focused
                    })
                } }
                numberOfMonths={1}
                isOutsideRange={() => false }
            />

            <textarea
            value={this.state.note}
            onChange={e => this.setState({
                note : e.target.value
            })}></textarea>

            <button type="submit">Add Expense</button>

            <Link to='/'>Go Home</Link>

        </form>
        </div>
        )
    }
} 

export default ExpenseForm