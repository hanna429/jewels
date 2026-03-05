import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './Collections.css';

import ringImg from '../../assets/rings/one.jfif';
import necklaceImg from '../../assets/Necklaces/one.jfif';
import earringImg from '../../assets/Earings/one.jfif';
import braceletImg from '../../assets/Bracelet/one.jfif';

const Collections = () => {

  const navigate = useNavigate();

  const collectionData = [
    { title: 'Rings', count: '24 pieces', img: ringImg, path: "/ring" },
    { title: 'Necklaces', count: '18 pieces', img: necklaceImg, path: "/necklace" },
    { title: 'Earrings', count: '32 pieces', img: earringImg, path: "/earings" },
    { title: 'Bracelets', count: '15 pieces', img: braceletImg, path: "/bracelets" },
  ];

  return (
    <section className="collections-section">

      <Container>

        <div className="browse-label">Browse</div>
        <h2 className="collections-heading">Our Collections</h2>

        <Row className="g-4">

          {collectionData.map((item, index) => (
            <Col key={index} lg={3} md={6} sm={12}>

              <div
                className="collection-card"
                onClick={() => navigate(item.path)}
                style={{ cursor: "pointer" }}
              >

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