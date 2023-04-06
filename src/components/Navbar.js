import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="logo-container">
          <img src="../online-search.png" alt="phone api"></img>
          <span>Phone API</span>
        </div>
        <NavLink className="Navlink-style" to="/" activeClassName="active">
          Home
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
