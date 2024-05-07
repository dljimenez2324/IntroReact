import Message from "./Message";
import ListGroup from "./components/ListGroup";


function App()
{
  const name = "David";
  //return <div><Message/></div>
  if (name)
  {
    
    //return <div>Hello {name}!</div>
    //return <div><Message/></div>

    // make sure our function called is self closing tag and it doesn't need ()
    return <h1><ListGroup/></h1>
    //return <div><h1>Hello World</h1></div>
    
  }
}
export default App;