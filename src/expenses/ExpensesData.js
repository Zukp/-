import './ExpensesData.css';

function ExpenseData(props) {
    let month = props.date.toLocaleString('en-Us',{month:'long'})
    let day = props.date.toLocaleString('en-Us',{day:'2-digit'})
    let year = props.date.getFullYear()
 return (
     <div className="data-cont">
         <div>{month}</div>
         <div>{day}</div>
         <div>{year}</div>
     </div>
 )
}
export default ExpenseData