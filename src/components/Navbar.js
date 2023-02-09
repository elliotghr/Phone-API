import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const style = {
    color: "white",
    fontSize: "1.2rem",
    fontVariant: "small-caps",
  };
  return (
    <header>
      <nav>
        <div>
          <img src="../online-search.png" alt="phone api"></img>
          <span>Phone API</span>
        </div>
        <NavLink style={style} to="/" activeClassName="active">
          Home
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
