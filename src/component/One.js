import { useState } from 'react'

function Expenses(props) {
    const [one,SetOne] = useState('')
    const [two,SetTwo] = useState('')
    const [sree,SetSree] = useState('')
   
    function oneHand(event) {
        SetOne(event.target.value)
    }

    function twoHand(event) {
     SetTwo(() => {
         let obj = {
             two:two
         }
     return obj = event.target.value

     })
    }

    function sreeHand(event) {
        
        SetSree((prev) => {
             prev = event.target.value
             return prev
        })
    }


  return (

      <form>
         <input value={one} onChange={oneHand} />
         <input value={two} onChange={twoHand} />
         <input value={sree} onChange={sreeHand} />
         <p>вариат-1:{one}</p>
         <p>вариант-obj {two}</p>
         <p>вариант-prev: {one} {two} {sree}</p>
      </form>
  )
}
export default Expenses