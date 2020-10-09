import React from "react";
import { Link } from "react-router-dom";

// Navbar.js
export default () => {
  return (
    <nav className="nav">
      <span className="nav-elem">
        <Link to="/">Home</Link>
      </span>
      <span className="nav-elem">
        <Link to="/shop">Shop</Link>
      </span>
    </nav>
  );
};
