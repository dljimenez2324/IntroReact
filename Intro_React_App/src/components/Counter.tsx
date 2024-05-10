//rafce
import { useState } from 'react'

const Counter = () => {

    // declare and initialize a useState to hold a number that we will increment and decrement

    const [numbers, setNumbers] = useState(0);

    const incrementNumbers = () => {
        setNumbers((prevNumbers) => prevNumbers + 1);
        //console.log(`The counter is at # ${numbers}`)
    }

    const decrementNumbers = () => {
       
        if (numbers > 0) {
            
            setNumbers((prevNumbers) => prevNumbers - 1);
            //console.log(`The counter is at # ${numbers}`)
        }
        else {
            //console.log(`The counter is not allowed to be negative`)
            return alert("The counter is not allowed to be negative");
            //setNumbers(0);
            // insde the setNumbers((prevNumbers) => prevNumbers + 1)
            // FELL ASLEEP AT DESK HERE
        }
    }

    const resetNumbers = () => {
        setNumbers(0);
    }

  return (
    <>
    <div>Counter</div>
    <div>Current Number: {numbers}</div>
    <button className="btn btn-success" onClick={incrementNumbers}>+ 1</button>
    <button className="btn btn-danger" onClick={decrementNumbers}>- 1</button>
    <button className="btn btn-warning" onClick={resetNumbers}>Reset</button>
    </>
  )
}

export default Counter