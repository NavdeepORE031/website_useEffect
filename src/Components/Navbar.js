import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline"
    };
  };
  return (
    <div className="nav">
    <nav className="primary-nav">
      <NavLink style={navLinkStyles} to="/">
        <h1> Home </h1>
      </NavLink>
      <NavLink style={navLinkStyles} to="/about">
        <h1> About </h1>
      </NavLink>
      <NavLink style={navLinkStyles} to="/Products">
        <h1> Products </h1>
      </NavLink>
    </nav>
    </div>
  );
};
export default Navbar;