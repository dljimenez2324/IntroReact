import { useState } from "react"
import styles from "./Counter2.module.css"

// this is our counter component with a return and a n export default
const Counter2 = () => {

  // we need a use state
  const [counter2, setCounter2] = useState(0)

  // we need two functions 1 to handle our increment
  const handleIncrement = () => {
    setCounter2((prevCount2) => prevCount2 + 1)
    console.log(counter2)
  }
  // and another to decrement
  const handleDecrement = () => {

    // remember that we dont want the counter to go below 0
    // so we check if counter is greater than 0  then we should decrease by 1
    if(counter2 > 0)
      {
        setCounter2((prevCount2) => prevCount2 - 1)
        console.log(counter2)
      }

  }

  return (
    <>
        {/* We need 2 buttons  1 for increment and 1 to decrement */}
        <button className={styles['btnPrimary']} onClick={handleIncrement}>+</button>
        <span>{counter2}</span>
        <button className={styles['btnSecondary']} onClick={handleDecrement}>-</button>
    </>
  )
}

export default Counter2