
import "./ExpenseForm.css"
import React, {useState} from "react"

const ExpenseForm = (props) => {

    const [setTitle,setEnteredTitle] = useState ("")
    const [setAmount,setEnteredAmount] = useState ("")
    const [setDate,setEnteredDate] = useState ("")

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);

    }

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);

    }

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);

    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title: setTitle,
            amount:setAmount,
            date: new Date(setDate),
        }

        

        props.onSaveExpenseData(expenseData)

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");

    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={setTitle}/>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="1" step="1" onChange={amountChangeHandler} value={setAmount}/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="Date" min="2022-01-01" max="2022-12-31" onChange={dateChangeHandler} value={setDate}/>
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add expense</button>
            </div>

        </form>
    )
}

export default ExpenseForm;