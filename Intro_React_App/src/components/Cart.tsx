// to make sure we pass through props we need to make an interface
interface cartProps {
    cartItems: string[];
    onReset: () => void
}

const Cart = ({cartItems, onReset}:cartProps) => {
  return (
    <>
        <p>
            Cart:
        </p>
        <ul>
            {cartItems.map(item => <li key={item}>{item}</li>)}
        </ul>
        {/* notice that the onReset is an empty or void function which will eventually hold the helper function in our parent component App.tsx */}
        <button onClick={onReset}>Clear All Items</button>
    </>
  )
}

export default Cart