import React, { Fragment } from "react";

const ListGroup = () => {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

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
      <h1>List</h1>
      {/* this will function the same way as above in line 7 to 16 */}
      {items.length == 0 ? <p>No Items Found</p> : null}
      <ul className="list-group">
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}

        {/* If i want to add stuff like in javascript lets do this {stuff inside} */}
        {/* {items[0]}  // but this is just for one  what if we want all of them */}
        {items.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
