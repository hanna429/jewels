import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Collections.css';

const Collections = () => {

  const collectionData = [
    { title: 'Rings', count: '24 pieces', img: '/src/assets/rings/one.jfif' },
    { title: 'Necklaces', count: '18 pieces', img: '/src/assets/Necklaces/one.jfif' },
    { title: 'Earrings', count: '32 pieces', img: '/src/assets/Earings/one.jfif' },
    { title: 'Bracelets', count: '15 pieces', img: '/src/assets/Bracelet/one.jfif' },
  ];

  return (
    <section className="collections-section">

      <Container>

        <div className="browse-label">Browse</div>
        <h2 className="collections-heading">Our Collections</h2>

        <Row className="g-4">

          {collectionData.map((item, index) => (
            <Col key={index} lg={3} md={6} sm={12}>

              <div className="collection-card">

                <img
                  src={item.img}
                  alt={item.title}
                  className="collection-img"
                />

                <div className="collection-gradient"></div>

                <div className="collection-overlay">
                  <h3 className="collection-title">{item.title}</h3>
                  <span className="collection-count">{item.count}</span>
                </div>

              </div>

            </Col>
          ))}

        </Row>

      </Container>

    </section>
  );
};

export default Collections;