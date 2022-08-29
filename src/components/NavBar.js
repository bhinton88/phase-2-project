import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <div>
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/trips" exact>Trips</NavLink>
      <NavLink to="/budget" exact>budget</NavLink>
    </div>
  )

}

export default NavBar; 