import React from "react";
import { Navbar, Nav, Container, Row, Col, Button, Form } from "react-bootstrap";
import {
  Search,
  FavoriteBorder,
  ShoppingBagOutlined,
  PersonOutline,
  Instagram,
  Facebook,
  Twitter
} from "@mui/icons-material";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="site-bg">

      {/* Newsletter */}
      <section className="newsletter-section">

        <Container>

          <h2 className="newsletter-title">Stay in the Loop</h2>

          <p className="newsletter-text">
            Subscribe for exclusive previews, special offers, and styling tips.
          </p>

          <div className="newsletter-form-wrapper">

            <Form className="newsletter-form">

              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />

              <Button className="newsletter-btn">
                Subscribe
              </Button>

            </Form>

          </div>

        </Container>

      </section>


      {/* Footer */}
      <footer className="footer">

        <Container>

          <Row className="gy-5">

            <Col lg={4}>
              <h3 className="footer-brand">Bronza Jewels</h3>

              <p className="footer-tag">
                ELEGANCE IN EVERY SPARKLE
              </p>

              <p className="footer-desc">
                Crafting timeless pieces that celebrate life's most precious
                moments since 2020.
              </p>
            </Col>


            <Col lg={2} md={4}>

              <h6 className="footer-heading">Quick Links</h6>

              <ul className="footer-links">
                {["Shop All","Rings","Necklaces","Earrings","Bracelets"].map((link)=>(
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>

            </Col>


            <Col lg={3} md={4}>

              <h6 className="footer-heading">Customer Service</h6>

              <ul className="footer-links">
                {["Contact Us","Shipping & Returns","Size Guide","Care Instructions","FAQ"].map((link)=>(
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>

            </Col>


            <Col lg={3} md={4}>

              <h6 className="footer-heading">Get in Touch</h6>

              <div className="footer-contact">
                info@bronzajewels.com <br/>
                +91 98765 43210 <br/>
                Mon - Sat: 10am - 7pm
              </div>

              <div className="social-icons">

                <div className="social-circle">
                  <Instagram/>
                </div>

                <div className="social-circle">
                  <Facebook/>
                </div>

                <div className="social-circle">
                  <Twitter/>
                </div>

              </div>

            </Col>

          </Row>


          <hr className="footer-divider"/>

          <div className="footer-bottom">
            © 2026 Bronza Jewels. All rights reserved.
          </div>

        </Container>

      </footer>

    </div>
  );
};

export default Footer;