import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {
  Search,
  FavoriteBorder,
  ShoppingBagOutlined,
  PersonOutline
} from "@mui/icons-material";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar-custom" sticky="top">
      <Container>

        <Navbar.Brand href="#" className="brand">
          <div className="brand-title">Bronza Jewels</div>
          <small className="brand-subtitle">
            ELEGANCE IN EVERY SPARKLE
          </small>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mx-auto nav-links">
            <Nav.Link href="#home" className="px-3">Home</Nav.Link>
            <Nav.Link href="#shop" className="px-3">Shop</Nav.Link>
            <Nav.Link href="#rings" className="px-3">Rings</Nav.Link>
            <Nav.Link href="#necklaces" className="px-3">Necklaces</Nav.Link>
            <Nav.Link href="#earrings" className="px-3">Earrings</Nav.Link>
            <Nav.Link href="#bracelets" className="px-3">Bracelets</Nav.Link>
          </Nav>

          <div className="nav-icons">
            <Search fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <ShoppingBagOutlined fontSize="small" />
            <PersonOutline fontSize="small" />
          </div>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default CustomNavbar;