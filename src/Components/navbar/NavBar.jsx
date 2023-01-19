import React from "react";
import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" className="header">
      <Container>
        <Link to="/">
          <img src="https://iili.io/HovU25P.png" alt="" />
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="fuente-header seccion-nav">
              <button className="navlink">Home</button>
            </Link>
            <Link to="/categoria/accion" className="fuente-header seccion-nav">
              <button className="navlink">Acción</button>
            </Link>
            <Link
              to="/categoria/aventura"
              className="fuente-header seccion-nav"
            >
              <button className="navlink">Aventura</button>
            </Link>
            <Link
              to="/categoria/roguelike"
              className="fuente-header seccion-nav"
            >
              <button className="navlink">RogueLike</button>
            </Link>
          </Nav>
          <Nav>
            <Link to="/carrito">
              <Button variant="outline-success">
                <CartWidget></CartWidget>
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
