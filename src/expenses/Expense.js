import { useState } from "react";
import ExpenseItem from "./ExpensesItem"
import ExpensesYear from "./ExpensesYear";
function Expense(props) {
  const [value,setValue] = useState('2022')

  function Done(seleted) {
   setValue(seleted)
  }

  let filterDone = props.expenses.filter(ex => {
    return ex.date.getFullYear().toString()  === value;
  })
  return (
      <div>
        {console.log(value)}
         <ExpensesYear onSave={Done} />
          {filterDone.length === 0 ? <p>No expenses</p> : filterDone.map((el) => {
           return  <ExpenseItem 
             date={el.date}
              title={el.title}
              amount={el.amount}

              />
          })}
      </div>
  )
}
export default Expense