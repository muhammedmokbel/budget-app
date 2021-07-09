

const getFilteredExpenses = (expenses , {text , sortBy , startDate,endDate}) => {
    return expenses.filter(item => {
        // console.log(startDate.valueOf() , endDate)
        console.log(typeof startDate)
        return (!startDate  || item.createdAt >=startDate.valueOf()) 
        &&  (!endDate || item.createdAt <=endDate.valueOf())
        && item.title.includes(text)
    }).sort((a,b) => {
        switch(sortBy)
        {
            case "amount" : 
                return a.amount > b.amount ? -1 : 1 
            case "date" : 
                return a.createdAt < b.createdAt ? 1 : -1 
        }
    })
}

export default getFilteredExpenses


