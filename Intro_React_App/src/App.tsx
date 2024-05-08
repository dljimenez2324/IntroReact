//import Message from "./Message";
import ListGroup from "./components/ListGroup";
import MyuseStateExample from "./components/MyuseStateExample";

function App() {
  //return <div>Hello {name}!</div>
  //return <div><Message/></div>
  {
    /* make sure our function called is self closing tag and it doesn't need () */
  }
  return (
    <>
      <div>
        <ListGroup />
      </div>
      <div>
        <MyuseStateExample />
      </div>
      {/* //return <div><h1>Hello World</h1></div> */}
    </>
  );
}
export default App;
