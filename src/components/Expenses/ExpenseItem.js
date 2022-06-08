import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"
import React , {useState} from "react"
import Card from "../UI/Card";


const ExpenseItem = (props) =>{
   const [title, setTitle] = useState(props.title)
   const className = "expense-item"

    const clickHandler = () =>{
        setTitle("Italo warner the return")
    }

    return(

        <Card className={className} >
            <ExpenseDate date={props.date}/>

            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.price}</div>
            </div>
            <button onClick={clickHandler}>anashe</button>
        </Card>

        

    )
}


export default ExpenseItem;