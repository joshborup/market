import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <header>
      <div>
        <nav>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
      </div>
    </header>
  );
}
