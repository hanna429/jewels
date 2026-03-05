import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {
  Search,
  FavoriteBorder,
  ShoppingBagOutlined,
  PersonOutline
} from "@mui/icons-material";

import { Link } from "react-router-dom";


const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar-custom" sticky="top">
      <Container>

        <Navbar.Brand as={Link} to="/" className="brand">
          <div className="brand-title">Bronza Jewels</div>
          <small className="brand-subtitle">
            ELEGANCE IN EVERY SPARKLE
          </small>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mx-auto nav-links">

            <Nav.Link as={Link} to="/" className="px-3">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/shop" className="px-3">
              Shop
            </Nav.Link>

            <Nav.Link as={Link} to="/ring" className="px-3">
              Rings
            </Nav.Link>

            <Nav.Link as={Link} to="/necklace" className="px-3">
              Necklaces
            </Nav.Link>

            <Nav.Link as={Link} to="/earings" className="px-3">
              Earrings
            </Nav.Link>

            <Nav.Link as={Link} to="/bracelets" className="px-3">
              Bracelets
            </Nav.Link>

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