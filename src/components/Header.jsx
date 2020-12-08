import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <nav className="header__nav">
          <div className="header__nav-item">
            <NavLink to="/">Home</NavLink>
          </div>
          <div className="header__nav-item">
            <NavLink to="/find-track">Find Your Track</NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};
