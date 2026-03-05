import React from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { Search, FavoriteBorder, ShoppingBagOutlined, PersonOutline, ArrowForward } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';
import './jewels.css';

const Jewels = () => {
  return (
    <div className="main-bg">

      {/* Navigation */}
      <Navbar expand="lg" className="navbar-custom" sticky="top">
        <Container>

          <Navbar.Brand href="#" className="brand">
            <div className="brand-title">Hanna Jewels</div>
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


      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row>
            <Col lg={6} md={8}>

              <h6 className="hero-subtitle">
                New Collection 2026
              </h6>

              <h1 className="hero-title">
                Elegance in Every <br />
                <span className="gold-text">Sparkle</span>
              </h1>

              <p className="hero-desc">
                Discover handcrafted jewelry that tells your unique story.
                Each piece is a masterpiece of artistry and elegance.
              </p>

              <Button className="gold-button">
                Explore Collection <ArrowForward fontSize="small" />
              </Button>

            </Col>
          </Row>
        </Container>
      </section>

    </div>
  );
};

export default Jewels;