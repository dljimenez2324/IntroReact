import { useState } from "react";

// to make this reusable we will be using properties
// TypeScript has a feature called interface
// using an interface , we can define the shape of our objects
// {items: [], heading :string}
// then in your component function you have to add this to the argument
// {key, key, ...}:Name of interface}

// interface ListProps {
//   items: string []
//   heading: string
// }


// notice that we have a function now
interface ListProps {
  items: string []
  heading: string
  onSelectedItem:(item:string) => void
}


const ListGroup = ({items,heading,onSelectedItem}:ListProps) => {
  
  //let selectedIndex = 0;

  // event handler which is a function to handle an event inside of the line with {items.map((item, index) => ( stufffffff

  // for useState we will comment these 3 lines below
  // const handleClick = (e: MouseEvent) => {
  //   console.log(e.target.innerText);
  // };

  // now we will look at useState and if u look at console in html u can see what it outputs  (2) [-1, f]
  //console.log(useState(-1));

  //const arr = useState(0);
  //console.log(arr);

  // now lets use more useState so the let selectedIndex = 0; is commented out
  const [selectedIndex, setSelectedIndex] = useState(0);

  // another example of useState
  const[name,setName] = useState("David");

  // to make things clickable lets make our setSelectedIndex be a function
  // const updateIndex = (index:number) => {
  //   setSelectedIndex(index);
  //   console.log(`Your selected index is ${selectedIndex}`);
  //   console.log(index,"This is just the index");
  // }


  //const message = items.length == 0 ? <p>No Items Found</p> : null
  // now lets make a function
  const getMessage = () => {
    return items.length == 0 ? <p>No Items Found</p> : null;
  };
  // this is now commented out because what if we try to use tournery operators for the if else
  // items = [];
  // if(items.length == 0)
  //     {
  //         return (
  //         <>
  //         <h1>List</h1>
  //         <p>No Items Found</p>
  //         </>
  //         );
  //     }

  return (
    // when we return  we are returning as JSX

    // why cant we do this
    //<h1>List</h1>  // this produces an error and the explanation of JSX espressions must have one parent element
    // what we must do instead is this  add a <Fragment></Fragment>  or have a <div></div> but this will produce some html extra divs that you dont want
    // similarly we can use these instead of fragment  <></>
    // if we want to target something for our css we can add a <div className = "some-class-name"></div> and wrap this around our list group or whateve we have
    <>
      <h1>{heading}</h1>
      {getMessage()}
      {/* this will function the same way as above in line 7 to 16 */}
      {/* {items.length == 0 ? <p>No Items Found</p> : null} */}
      <ul className="list-group">
        {/* This was step 2 <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}

        {/* This was step 1  If i want to add stuff like in javascript lets do this {stuff inside} */}
        {/* {items[0]}  // but this is just for one  what if we want all of them */}
        {items.map((item, index) => (
          // we could also pass in a function instead of this below
          //   <li className="list-group-item" key={index} onClick={() => console.log(`${item} "was clicked at the index!" ${index}`)}>
          //     {item}
          //   </li>
          <li
            // lets comment these lines out below and add whats below it
            //className="list-group-item active"
            // key={index}
            // onClick={handleClick}
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            // onClick={() => console.log(`${item}`)}
            // for the useState now use this
            // in order to have more than one function we need to put our {}
            onClick={() => {setSelectedIndex(index)
              onSelectedItem(item);
            }}
            // the below will be used with our updateIndex from up above
            //onClick={() => updateIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
      <p>{name}</p>
      <button className="btn btn-primary" onClick={()=> setName("Neo")}>Update to New Name</button>
    </>
  );
};

export default ListGroup;
