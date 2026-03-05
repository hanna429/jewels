import React from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { Search, FavoriteBorder, ShoppingBagOutlined, PersonOutline, ArrowForward } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';
import './jewels.css';

const Jewels = () => {
  return (
    <div className="main-bg">
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