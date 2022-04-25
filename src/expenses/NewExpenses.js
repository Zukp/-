import ExpensesForm from "./ExpensesForm"

function NewExpenses(props) {
    function addSaveData(data) {
        let addDataID = {
            ...data,
            id:Math.random().toString()
        }
        props.onSave(addDataID)
    }
 return (
     <div>
     <ExpensesForm onSaveData={addSaveData} />
     </div>
 )
}
export default NewExpenses