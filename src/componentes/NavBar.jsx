import React from "react";
import { NavDropdown, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Style.css";

const NavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="sm"
        className="color-nav"
        variant="light"
      >
        <Link to="/">
          <Navbar.Brand href="#home">LiVreMercado</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Opciones" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Crud">
                Alta de Productos
              </NavDropdown.Item>
                <NavDropdown.Divider />
                  <NavDropdown.Item href="/Faq">FAQ</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Contacto</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Notificaciones</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="linksNavbar">
            <Link className="linkText" to="/Registro">
              Registro
            </Link>
            <Link className="linkText" to="/Login">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
