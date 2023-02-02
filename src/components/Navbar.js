import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <h1>Phones API</h1>
        <NavLink to="/" activeClassName="active">Home</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
