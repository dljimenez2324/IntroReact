//import Message from "./Message";
import Alert from "./components/Alert";
import Counter from "./components/Counter";
import ListGroup from "./components/ListGroup";
import MyuseStateExample from "./components/MyuseStateExample";


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

  //return <div>Hello {name}!</div>
  //return <div><Message/></div>
  {
    /* make sure our function called is self closing tag and it doesn't need () */
  }
  return (
    <>
      <div>
        {/* <Alert text="This text is coming from my Alert"/> */}
        <Alert>
          Passing in text as a child instead of from a property!
        </Alert>
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
