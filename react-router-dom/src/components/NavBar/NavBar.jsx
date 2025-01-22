// src/components/NavBar/NavBar.jsx

import { NavLink } from "react-router";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/pokemon">Pokemon</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
