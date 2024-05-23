import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import Counter from "./components/Counter";
import ListGroup from "./components/ListGroup/ListGroup";
import MyuseStateExample from "./components/MyuseStateExample";
import { BsCalendarDateFill } from "react-icons/bs";
import Counter2 from "./components/Counter2/Counter2";
import Like from "./components/Like";
// import Message from "./Message";
import NavBar from "./components/ListGroup/NavBar";
import Cart from "./components/Cart";

function App() {
  // this is from our list group that we cut out and put here instead
  //
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

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

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  // typically to handle the button with an input for it we would do this instead unlike our first button which is okay but not common practice
  const handleClick = () => {
    setIsVisible(true);
    console.log(isVisible);
  };

  let count = 0;
  const handleAgainClick = () => {
    count++;
    console.log(count);
  };

  // to use the setDisplay use state for the button and alert the usestate should live where its being used
  const [display, setDisplay] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // this will toggle our alert buttons
  const setDisFunc = () => {
    setDisplay(!display);
  };

  const [alertVisible, setAlertVisible] = useState(false);

  const alertVisClick = () => {
    setAlertVisible(!alertVisible);
  };

  // const [firstName, setFirstName] = useState("David");
  // const [lastName, setLastName] = useState("Jimenez");

  // const fullName = firstName + " " + lastName;

  // INSTEAD OF USING TWO USE STATES WE CAN DO AN OBJECT  located below the 4th button
  const [person, setPerson] = useState({
    firstName: "David",
    lastName: "Jimenez",
  });

  // learn how to update an object in our useState
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 8,
  });

  // now lets create a function to update the price of our drink object in our useState
  const handleDrink = () => {
    // we first need to update the entire object
    const newDrink = {
      title: drink.title,
      price: 10,
    };
    // now we update the object with setDrink
    setDrink(newDrink);
    console.log(drink);
    console.log("The drink price is $" + drink.price);
  };

  // now lets try updating a nested object but first lets create one first
  const [customer, setCustomer] = useState({
    name: "Jose",
    address: {
      city: "Stockton",
      zipCode: 94402,
    },
  });

  // now lets create a function to handle this update of the zipcode that is incorrect  (updating a nested object)
  const handleCustomer = () => {
    // we will need to make a copy of the entire object, then  put ,  then put the key the part will be in  then make the value be the ...customer.address    with a comma to target the exact key and value that will be updated
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 95212 },
    });
  };

  // HOW TO UPDATE AN ARRAY -----------------------------------------------

  // Create a useState to hold two strings in an array
    const [tags, setTags] = useState(['happy ', 'cheer ']);

  // create a helper function to add to our array with JavaScript
  const handleArray = () => {
    //tags.push('exite');
    setTags([...tags,'exciting']);
    console.log(tags);
  }
  // lets create a helper function to delete happy from this array
  // notice that our item that we want will be an arrow function and 
  const handleDelete = () => {
    setTags(tags.filter(tag => tag !== 'happy '));
  }

  // lets create a helper function to update 'happy ' to 'happiness ' 
  const handleEdit = () => {
    setTags(tags.map(tag => tag == 'happy ' ? 'happiness ': tag ))
  }

  // how to update an array of objects
  // we will need to create a useState which will have an array of objects first
  const [bugs, setBugs] = useState([
    {id: 1, title: 'Bug 1', fixed: false},
    {id: 2, title: 'Bug 2', fixed: false},
    {id: 3, title: 'Bug 3', fixed: false}
  ])

  // now we need a helper function to help us update this array of objects,  in this case we will want to change fixed from false to true using the id
  // notice that the bug is a copy of the mapped bugs  and the ...bug is a copy that will be gone through
  const handleBug = () => {
    setBugs(bugs.map(bug => bug.id == 1 ? {...bug, fixed: true} : bug))
  }

  // HOW TO SHARE USESTATES BETWEEN COMPONENTS -------------------------
  // lets create our useState for our cartItems hard code three items in an array
  const [cartItem, setCartItem] = useState(['Product 1 ', 'Product 2 ', 'Product 3 '])

  // lets make a helper function to reset our cartItems
  const resetCart = () => {
    setCartItem([]);
  }

  return (
    <>
      {/* notice that we have two components but we have one button in the cart component button that will clear the array to be empty and so the state that is updated in the Parent component App.tsx  is clearing the cart array and also updating the NavBar count */}
      <NavBar cartItemCount={cartItem.length}/>
      <Cart onReset={resetCart} cartItems={cartItem} />
      <div>
        {/* <Message/>
        <Message/>
        <Message/> */}
      </div>
      <div>
        <Like />
      </div>

      <div>
        <BsCalendarDateFill color="red" size={60} />
        {display ? (
          <Alert closeAlertFunc={setDisFunc}>
            Look at Me For Latest Alerts
          </Alert>
        ) : null}
        {alertVisible ? (
          <Alert closeAlertFunc={alertVisClick}>
            Passing in text as child Alert
          </Alert>
        ) : null}


        {/* heres from lecture of how to edit array */}
        <Button color="primary" onClickFunction={handleBug}>
          Update Bug array of objects Button
        </Button>
        {bugs.map(bug => <p key={bug.id}>{bug.id} {bug.fixed ? 'Fixed' : 'New'}</p>)}
        <Button color="primary" onClickFunction={handleEdit}>
          Array Edit 'happy ' to 'happiness ' Button
        </Button>
        <Button color="primary" onClickFunction={handleDelete}>
          Array Delete 'happy ' Button
        </Button>
        <Button color="primary" onClickFunction={handleArray}>
          Array Add Button
        </Button>
        <span>{tags}</span>
        <Button color="primary" onClickFunction={handleAgainClick}>
          Count Example
        </Button>
        <span>{count}</span>
        <Button color="warning" onClickFunction={setDisFunc}>
          Click for New Alerts
        </Button>
        {/* This button below is of MC 6 */}
        <Button color="primary" onClickFunction={handleClick}>
          One Button
        </Button>
        {/* this below is older content */}
        <Button color="secondary" onClickFunction={handleClick}>
          Visible Button
        </Button>
        <Button color="success" onClickFunction={alertVisClick}>
          AlertVisible Button
        </Button>
        <Button color="success" onClickFunction={alertVisClick}>
          4th Button
        </Button>
        {/* this below shows how to use objects */}
        {person.firstName} {person.lastName}
        {/* drink update button */}
        <Button color="success" onClickFunction={handleDrink}>
          Drink Update Btn
        </Button>
        {/* customer update button */}
        <Button color="success" onClickFunction={handleCustomer}>
          Customer Update Btn
        </Button>
        <span>{customer.address.zipCode}</span>
        <Counter2 />
        <ListGroup
          onSelectedItem={handleSelectItem}
          items={items}
          heading="Cities"
        />
        {/* if we want to make a second list we can use props or properties */}
        <ListGroup
          onSelectedItem={handleSelectItem}
          items={students}
          heading="Students"
        />
        <ListGroup
          onSelectedItem={handleSelectItem}
          items={cars}
          heading="List of Cars"
        />
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
