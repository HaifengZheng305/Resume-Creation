import React from "react";
import { Nav, NavLink, NavMenu, Name, Avator } from "./navBarElements.js";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/"> Card Board </NavLink>
          <NavLink to="/resume"> Resumes </NavLink>
        </NavMenu>
        <Name>
          <h1>Resume Creator</h1>
        </Name>
        <Avator>
          <p> account icon placeholder</p>
        </Avator>
      </Nav>
    </>
  );
};

export default NavBar;
