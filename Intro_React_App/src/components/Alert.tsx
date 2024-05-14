import { useState } from "react";

interface AlertProps {
    children:string
    closeAlertFunc: () => void
}

const Alert = ({children, closeAlertFunc}:AlertProps) => {

    // we can use the use state as follows
    // const[display, setDisplay] = useState(false);

  return (
    <>
        {/* <div id="liveAlertPlaceholder"></div>
        <button type="button" className="btn btn-primary" id="liveAlertBtn">{children}</button> */}
        <div className="alert alert-primary alert-dismissible" role="alert">
            {children}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={closeAlertFunc}></button>
        {/* <button type="button" className="btn btn-primary" id="liveAlertBtn">{children}</button> */}
            
        </div>
    </>
  )
}

export default Alert