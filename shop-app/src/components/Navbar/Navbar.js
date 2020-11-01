import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Navbar.js
export default ({ isLoggedIn, handleLogOut }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <img
          alt=""
          src="https://st2.depositphotos.com/8301258/11284/v/950/depositphotos_112842636-stock-illustration-logo-shop-bags-icon-symbol.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className={`nav-elem`} to="/">
            Home
          </Link>

          <Link className={`nav-elem`} to="/shop">
            Shop
          </Link>
        </Nav>
        <Nav className="mr-sm-2">
          {isLoggedIn ? (
            <Link className={`nav-elem`} onClick={handleLogOut} to="">
              Logout
            </Link>
          ) : (
            <Link className={`nav-elem`} to="/login">
              Login
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
