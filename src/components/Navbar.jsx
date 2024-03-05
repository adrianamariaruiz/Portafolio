import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="container__navbar">
      <NavLink to="/" className="linkText navbarLink">
        CV
      </NavLink>
      <NavLink to="/projects" className="linkText navbarLink">
        Proyectos
      </NavLink>
    </nav>
  );
};
