import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { Star, FavoriteBorder, LocalMallOutlined, East } from '@mui/icons-material';
import './BestSellers.css';

import ringImg from '../../assets/rings/two.jfif';
import necklaceImg from '../../assets/Necklaces/two.jfif';
import braceletImg from '../../assets/Bracelet/two.jfif';
import earringImg from '../../assets/Earings/two.jfif';

const BestSellers = () => {

  const products = [
    { name: 'Celestial Diamond Ring', category: 'Rings', price: '₹24,999', rating: 4.9, reviews: 47, tag: 'BESTSELLER', img: ringImg },
    { name: 'Golden Sunburst Necklace', category: 'Necklaces', price: '₹18,499', rating: 4.8, reviews: 35, tag: 'NEW', img: necklaceImg },
    { name: 'Royal Diamond Bracelet', category: 'Bracelets', price: '₹32,999', rating: 5.0, reviews: 19, tag: 'LIMITED', img: braceletImg },
    { name: 'Pearl Drop Earing', category: 'Earings', price: '₹14,999', rating: 4.8, reviews: 41, tag: 'TRENDING', img: earringImg },
  ];

  return (
    <section className="best-section">

      <Container>

        <div className="best-header">

          <div>
            <div className="best-label">TRENDING</div>
            <h2 className="best-title">Best Sellers</h2>
          </div>

          <a href="#all" className="view-all">
            View All <East fontSize="small"/>
          </a>

        </div>

        <Row className="g-4">

          {products.map((p,i)=>(
            <Col key={i} lg={3} md={6}>

              <div className="product-card">

                <div className="product-img-container">

                  <img src={p.img} alt={p.name} className="product-img"/>

                  <Badge className="product-badge">{p.tag}</Badge>

                  <div className="wishlist-btn">
                    <FavoriteBorder/>
                  </div>

                  <div className="cart-btn">
                    <LocalMallOutlined/>
                  </div>

                </div>

                <div className="product-details">

                  <div className="product-category">{p.category}</div>

                  <h4 className="product-name">{p.name}</h4>

                  <div className="product-rating">
                    <Star className="star-icon"/>
                    <span>{p.rating} ({p.reviews})</span>
                  </div>

                  <div className="product-price">{p.price}</div>

                </div>

              </div>

            </Col>
          ))}

        </Row>

      </Container>

    </section>
  );
};

export default BestSellers;