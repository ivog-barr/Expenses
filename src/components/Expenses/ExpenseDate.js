import "./ExpenseDate.css"

const ExpenseDate = (props) => {
    const year = props.date.getFullYear()
    const month = props.date.toLocaleString("default",{month:"long"})
    const day = props.date.toLocaleString("default",{weekday:"long"})

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )

}

export default ExpenseDate;