import React from "react";
import "../../App.css";
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div id="branding">
          <h1>
            <span className="highlight">Clarusway </span> Web Design
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" style={({isActive})=> ({color: isActive && "pink",})}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" style={({isActive})=> ({color: isActive && "pink",})}>About</NavLink>
            </li>
            <li>
              <NavLink to="/services" style={({isActive})=> ({color: isActive && "pink",})}>Services</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
