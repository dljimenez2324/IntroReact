interface NavProps {
    cartItemCount: number;
}

const NavBar = ({cartItemCount}:NavProps) => {
  return (
    <>
        <p>
            NavBar: {cartItemCount}
        </p>
    </>
  )
}

export default NavBar