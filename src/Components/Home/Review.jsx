import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Star } from "@mui/icons-material";
import "./Review.css";

const Review = () => {

  const reviews = [
    {
      name: "Priya Sharma",
      text: '"The Celestial Diamond Ring exceeded all my expectations. The craftsmanship is exquisite and it sparkles beautifully. Noore Jewels truly delivers luxury!"'
    },
    {
      name: "Ananya Reddy",
      text: '"I purchased the Golden Sunburst Necklace for my anniversary and my wife absolutely loves it. The quality is outstanding and the packaging was premium."'
    },
    {
      name: "Meera Patel",
      text: '"Beautiful earrings with impeccable quality. The delivery was prompt and the piece came in a gorgeous gift box. Will definitely shop again!"'
    }
  ];

  return (
    <section className="testimonial-section">

      <Container>

        <div className="testimonial-header">
          <div className="testimonial-label">REVIEWS</div>
          <h2 className="testimonial-title">What Our Customers Say</h2>
        </div>

        <Row className="g-4">

          {reviews.map((r, i) => (
            <Col key={i} md={4}>

              <div className="testimonial-card">

                <div className="stars">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="star-icon"/>
                  ))}
                </div>

                <p className="testimonial-text">{r.text}</p>

                <h5 className="testimonial-name">{r.name}</h5>

              </div>

            </Col>
          ))}

        </Row>

      </Container>

    </section>
  );
};

export default Review;