import { useState } from "react";
import ExpenseData from "./ExpensesData";
import './ExpensesItem.css';


function ExpenseItem(props){
    return (
        <div>

          <div className="cont-all-render">
           <ExpenseData date={props.date} />
            <div className="title">{props.title}</div>
            <div className="amount">{props.amount}</div>
        </div>
        </div>
       
    )

}
export default ExpenseItem