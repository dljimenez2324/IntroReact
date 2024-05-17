//Functional components
//PascalCasing
// Now we will discus pure functions
// any function that you have the same input with the same result
// so one input like input 1 results a  input 2 results in b  etc 


function Message()
{
    // this below will produce an impure function  prduces 2 , 4 , 6
    // example of pure func
    let count = 0;
    count++;
    console.log(count);
    //JSX: Javascript & XML combination
    return <h1>Message: {count}</h1>
}

// in order to use this, we need to export this function
// this export will allow us to use this component where ever we import it
export default Message;

// //Functional components
// //PascalCasing
// function Message()
// {
//     //JSX: Javascript & XML combination
//     return <h1>Hello World from my message</h1>
// }

// // in order to use this, we need to export this function
// // this export will allow us to use this component where ever we import it
// export default Message;