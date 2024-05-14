//rafce
// this will be our buttons component 

interface ButtonProps {
    children:string
    onClickFunction?:() => void
    color?:string
    // displayFunc?: () => void
}

// i can default the props 
const Button = ({children,onClickFunction,color}:ButtonProps) => {
  return (
    <>
        {/* get a button from bootstrap */}
        {/* to pass in the button name we need to pass in the children */}
        <button type="button" className={`btn btn-${color}`} onClick={onClickFunction}>{children}</button>
    </>
  )
}

export default Button