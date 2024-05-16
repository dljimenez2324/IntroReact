import { useState } from "react";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";

// interface LikeProps {
//     // children?:string
//     unLikeFunction: () => void
// }


const Like = () => {
  
  const [iconChange, setIconChange] = useState(true)
  const fillToggle = () => {
    setIconChange(!iconChange);
  }

  return (
    <>
        {iconChange ? <BsHeart size={60} onClick={fillToggle} /> : <BsHeartFill size={60} onClick={fillToggle} />}
    </>
  )
}

export default Like