function ExpensesYear(props) {
    function AddDate(event) {
      props.onSave(event.target.value)
    }


  return (

      <div>

          <select onChange={AddDate}>

              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              
          </select>
      </div>
  )
}

export default ExpensesYear