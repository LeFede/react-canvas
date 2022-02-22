import { NavLink } from "react-router-dom"

const Navbar = () => {
  return <ul>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/game1'>Game1</NavLink>
    <NavLink to='/game2'>Game2</NavLink>
  </ul>
}

export {Navbar}