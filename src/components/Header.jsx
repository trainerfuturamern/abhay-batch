import "./Header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { FaBagShopping } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


function Header({ cartItems }) {

  const { isAuthenticated, userLogout } = useContext(AuthContext);

  const handleLogout = () => {
    userLogout();
    toast.success("Logged out successfully!");
  }


  return (
    <Navbar expand="lg" className="header-bg">
      <Container>
        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/notes">Notes</Nav.Link>
            <Nav.Link as={Link} to="#link4">Contact</Nav.Link>

          </Nav>
          <Nav className="ms-auto">
            {!isAuthenticated && (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            )}

            <Nav.Link as={Link} to="/cart" className="position-relative">
              <FaBagShopping />
              <span className="cartitem-count">
                {cartItems}
              </span>
            </Nav.Link>
            {isAuthenticated && (
              <NavDropdown title={<FaRegUserCircle />} id="basic-nav-dropdown" className="position-relative right-0">
                <NavDropdown.Item as={Link} to="admin/users">List Users</NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/add-product">
                  Add Product
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/list-products">
                  List Products
                </NavDropdown.Item>
                
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/login" onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;