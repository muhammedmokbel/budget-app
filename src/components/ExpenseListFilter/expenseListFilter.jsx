import React from 'react'
import {connect} from 'react-redux'
import {setTextSearch , sortByDate , sortByAmount , setStartDATE , setEndDate} from '../../redux/actionGenerators/filterGenerators'

import {DateRangePicker} from 'react-dates'

import 'react-dates/initialize';


export class  ExpenseListFilter extends React.Component {

    state = {
        startDate : this.props.filters.startDate , 
        endDate : this.props.filters.endDate, 
        focused : false 
    }

    render() {
        return(
            <div>
        
                    <input 
                    type="text" 
                    value={this.props.filters.text}
                    onChange={e => this.props.readingValue(e.target.value)}/>
                    
                    <select
                    value={this.props.filters.sortBy}
                    onChange={e => this.props.selectSortBy(e.target.value)}>
                        <option value="date">date</option>
                        <option value="amount">amount</option>
                    </select>
        
                    <DateRangePicker 
                    startDate={this.state.startDate}
                    startDateId={'startDate'}
                    endDate={this.state.endDate} 
                    endDateId={'endDate'}
                    onDatesChange={({startDate , endDate}) => {
                        this.setState({
                            startDate ,
                            endDate 
                        })
                        this.props.changeDate({startDate , endDate})

                    }}
                    focusedInput={this.state.focused}
                    onFocusChange={(focused) => {
                     
                        this.setState({
                            focused
                        })
                    }}
                    numberOfMonths={1}
                    isOutsideRange={() => false }
                    showClearDates={true}
                    />
        
            </div>
        )
    }

} 

const mapStateToProps = state => {
    console.log(state)
    return {
        filters : state.filterReducer.filter
    }
}


const mapDispatchToProps = dispatch => {
    return {
        readingValue : (val) => dispatch(setTextSearch(val)) , 
        selectSortBy : val =>{
            if (val == "amount")
                dispatch(sortByAmount())
            else 
                dispatch(sortByDate())
        } , 
        changeDate : ({startDate , endDate}) => {
            dispatch(setStartDATE(startDate))
            dispatch(setEndDate(endDate))
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilter)