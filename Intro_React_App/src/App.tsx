//import Message from "./Message";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import Counter from "./components/Counter";
import ListGroup from "./components/ListGroup/ListGroup";
import MyuseStateExample from "./components/MyuseStateExample";
import { BsCalendarDateFill } from "react-icons/bs";
import Counter2 from "./components/Counter2/Counter2";
import Like from "./components/Like";


function App() {
  // this is from our list group that we cut out and put here instead
  //
  let items = [
    "New York", 
    "San Francisco", 
    "Tokyo", 
    "London", 
    "Paris"
  ];

  let students = [
    "Mr.Garby",
    "Jacqueline",
    "Blake",
    "Denise",
    "Aaron",
    "Principal Oshaughnessy",
    "Timothy",
  ];

  let cars = [
    "Volvo",
    "Volkswagen",
    "Toyota",
    "Ford",
    "Mercedes-Benz",
    "BMW",
    "Kia",
    "Audi",
    "Renault",
    "Nissan",
    "Chevrolet",
    "Mazda",
  ];

  const handleSelectItem = (item:string) => {
    console.log(item);
  }

  // typically to handle the button with an input for it we would do this instead unlike our first button which is okay but not common practice
  const handleClick = () => {
    setIsVisible(true);
    console.log(isVisible); 
  }

  let count = 0
  const handleAgainClick = () => {
    count ++
    console.log(count)
  }

  // to use the setDisplay use state for the button and alert the usestate should live where its being used
  const[display, setDisplay] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  // const [firstName, setFirstName] = useState("David");
  // const [lastName, setLastName] = useState("Jimenez");

  // const fullName = firstName + " " + lastName;

  // INSTEAD OF USING TWO USE STATES WE CAN DO AN OBJECT
  const [person, setPerson] = useState({
    firstName: 'David',
    lastName: 'Jimenez'
  })

  // this will toggle our alert buttons
  const setDisFunc = () => {
    setDisplay(!display);
  }

  const [alertVisible, setAlertVisible] = useState(false)

  const alertVisClick = () => {
    setAlertVisible(!alertVisible)
  }
  return (
    <>

      <div>
        <Like/>
      </div>

      <div>
      <BsCalendarDateFill color="red" size={60} />

        {display ? <Alert closeAlertFunc={setDisFunc}>Click Me For Latest Alerts</Alert> : null}
        
        {alertVisible ? <Alert closeAlertFunc={alertVisClick}>Passing in text as child Alert</Alert> : null}
        <Button color="primary" onClickFunction={handleAgainClick}>Count Example</Button><span>{count}</span>

        <Button color="warning" onClickFunction={setDisFunc}>Click for New Alerts</Button>

        {/* This button below is of MC 6 */}
        <Button color="primary" onClickFunction={handleClick}>One Button</Button>
        <Button color="secondary" onClickFunction={handleClick}>Visible Button</Button>
        <Button color="success" onClickFunction={alertVisClick}>AlertVisible Button</Button>
        <Button color="success" onClickFunction={alertVisClick}>4th Button</Button>
        {person.firstName} {person.lastName}

        <Counter2/>

        <ListGroup onSelectedItem={handleSelectItem} items={items} heading="Cities" />
        {/* if we want to make a second list we can use props or properties */}
        <ListGroup onSelectedItem={handleSelectItem} items={students} heading="Students" />
        <ListGroup onSelectedItem={handleSelectItem} items={cars} heading="List of Cars" />
      </div>
      <div>
        <MyuseStateExample />
      </div>
      <div>
        <Counter />
      </div>
      {/* //return <div><h1>Hello World</h1></div> */}
    </>
  );
}
export default App;
