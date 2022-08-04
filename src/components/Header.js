import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Art Collection Management</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" exact>
          Art Lists
        </NavLink>
        <NavLink to="/add" className="link" exact>
          Add Art
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
