import { useState } from "react"


const MyuseStateExample = () => {
  
    const [name,setName] = useState("Guest")

    const [age, setAge] = useState(50)

    const updateName = () => {
        setName("Donatello");
        console.log(name);
    }

    const incrementAge = () => {
        setAge(age + 1);
        console.log(age);
    }

    return (
    <>
    <div><p>Name: {name}</p></div>
    {/* we use the call back function inside the onClick when ... */}
    <button className="btn btn-secondary" onClick={updateName}>Set Name</button>
    <div><p>Age: {age}</p></div>
    {/* we use the call back function inside the onClick when ... */}
    <button className="btn btn-secondary" onClick={incrementAge}>Increment Age</button>
    </>
  )
}

export default MyuseStateExample