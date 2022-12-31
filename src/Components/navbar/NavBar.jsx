import React from "react";
import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
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
          <Nav className="me-auto secciones-nav">
            <NavLink to="/" href="#features" className="fuente-header">
              Inicio
            </NavLink>

            <NavLink to="/categoria/accion">Accion</NavLink>
            <NavLink to="/categoria/aventura">Aventura</NavLink>
            <NavLink to="/categoria/roguelike">Roguelike</NavLink>
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
