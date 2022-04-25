import { useState } from "react"
import './ExpensesForm.css';
function ExpensesForm(props) {
 const [date,setData] = useState('')
 const [title,setTitle] = useState('')
 const [amount,setAmount] = useState('')

 function dataHandler(event) {
     setData(event.target.value)
 }

 function titleHandler(event) {
     setTitle(event.target.value)
 }

 function amountHandler(event) {
     setAmount(event.target.value)
 }
 
 function SubmitHandler(event) {
     event.preventDefault()
     let obj = {
         date:new Date(date),
         title:title,
         amount:amount
     }
     props.onSaveData(obj)

 }

 return (
     <form onSubmit={SubmitHandler} className="form-cont">
         <div>
             <label>data</label>
             <input type="date" value={date} onChange={dataHandler} />
         </div>

         <div>
             <label>title</label>
             <input type="text" value={title} onChange={titleHandler} />
         </div>

         <div>
             <label>amount</label>
             <input type="number" value={amount} onChange={amountHandler}  />
         </div>
         <div>
             <button>add</button>
         </div>
     </form>
 )
}
export default ExpensesForm