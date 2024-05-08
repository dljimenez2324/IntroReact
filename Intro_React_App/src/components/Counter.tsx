//rafce
import React, { useState } from 'react'

const Counter = () => {

    // declare and initialize a useState to hold a number that we will increment and decrement

    const [numbers, setNumbers] = useState(0);
    const incrementNumbers = () => {
        setNumbers(numbers + 1);
        console.log(`The counter is at # ${numbers}`)
    }
    const decrementNumbers = () => {
       
        if (numbers >=0) {
            
            setNumbers(numbers - 1);
            console.log(`The counter is at # ${numbers}`)
        }
        else {
            console.log(`The counter is not allowed to be negative`)
            setNumbers(0);
            // FELL ASLEEP AT DESK HERE
        }
    }

  return (
    <>
    <div>Counter</div>
    <div>Current Number: {numbers}</div>
    <button className="btn btn-success" onClick={incrementNumbers}>+ 1</button>
    <button className="btn btn-danger" onClick={decrementNumbers}>- 1</button>
    </>
  )
}

export default Counter