import React from "react";
import logo from "../images/Earth.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <h3>My Travel Journal</h3>
    </nav>
  );
}
