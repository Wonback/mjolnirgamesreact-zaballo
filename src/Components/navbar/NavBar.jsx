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

            <NavDropdown
              title="Categorías"
              id="collasible-nav-dropdown"
              className="fuente-header"
            >
              <NavLink to="/category/accion">
                <NavDropdown.Item
                  href="#action/3.1"
                  className="dropdown-menu-item"
                >
                  Accion
                </NavDropdown.Item>
              </NavLink>
              <NavLink to="/category/aventura">
                <NavDropdown.Item
                  href="#action/3.2"
                  className="dropdown-menu-item"
                >
                  Aventura
                </NavDropdown.Item>
              </NavLink>
              <NavLink to="/category/roguelike">
                <NavDropdown.Item
                  href="#action/3.3"
                  className="dropdown-menu-item"
                >
                  Roguelike
                </NavDropdown.Item>
              </NavLink>
            </NavDropdown>
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
