import React, { useState } from "react";
import education from "../img/education.png";
import { useLocation, Link } from "react-router-dom";

export const NavBar = (props) => {
  const {children, title} = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={education} alt="Bootstrap" width="30" height="24" style={{marginRight: "10px"}} />
          {title}
        </a>
        {children}
      </div>
    </nav>
  );
};

export const MenuContent = () => {
  const location = useLocation();
  return (
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${
              location.pathname === "/students" ? "active" : ""
            }`}
            to="/students"
          >
            Students
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
