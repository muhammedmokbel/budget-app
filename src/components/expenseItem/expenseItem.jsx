import React from 'react'
import {connect} from 'react-redux'

import {removeExpense} from '../../redux/actionGenerators/expenseGenerators'



export const ExpenseItem = ({id , title , note , amount,createdAt , dispatch , history  }) =>{ 
  
    return(
    <div>

       <h4>{title}</h4>
       <p>{note}</p>
       <p>{amount}</p>
       <p>{createdAt}</p>

        <button onClick={() => history.push(`/edit/${id}`) }>Edit</button>
      

    </div>
)
}



export default connect()(ExpenseItem)