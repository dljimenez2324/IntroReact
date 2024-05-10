
interface AlertProps {
    children:string
}

const Alert = ({children}:AlertProps) => {
  return (
    <>
        <div className="alert alert-primary" role="alert">
            {children}
        </div>
    </>
  )
}

export default Alert