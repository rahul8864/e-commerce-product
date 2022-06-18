import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartBtn from "./Buttons/CartBtn";
import Login from "./Buttons/Login";
import SignUp from "./Buttons/SignUp";

export default function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>E-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link to="/">Home</Nav.Link> */}
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/products" className="nav-link">
                Products
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
              {/* <Nav.Link to="/products">Products</Nav.Link> */}
            </Nav>
            <Login />
            <SignUp />
            <CartBtn />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
