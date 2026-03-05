import React from 'react';
import { Container, Row, Col, Form, Badge } from 'react-bootstrap';
import { Search, FavoriteBorder, LocalMallOutlined, Star } from '@mui/icons-material';
import { useParams } from "react-router-dom";
import "./ShopPage.css";

import ring1 from '../../assets/rings/one.jfif';
import ring2 from '../../assets/rings/two.jfif';

import neck1 from '../../assets/Necklaces/one.jfif';
import neck2 from '../../assets/Necklaces/two.jfif';

import ear1 from '../../assets/Earings/one.jfif';
import ear2 from '../../assets/Earings/two.jfif';

import brac1 from '../../assets/Bracelet/one.jfif';
import brac2 from '../../assets/Bracelet/two.jfif';

const allProducts = [
  { id: 1, name: 'Celestial Diamond Ring', category: 'rings', price: '₹24,999', rating: 4.9, reviews: 47, tag: 'BESTSELLER', img: ring1 },
  { id: 2, name: 'Golden Sunburst Necklace', category: 'necklaces', price: '₹18,499', rating: 4.8, reviews: 35, tag: 'NEW', img: neck1 },
  { id: 3, name: 'Teardrop Diamond Earrings', category: 'earrings', price: '₹12,999', rating: 4.8, reviews: 41, tag: 'TRENDING', img: ear1 },
  { id: 4, name: 'Royal Diamond Bracelet', category: 'bracelets', price: '₹32,999', rating: 5.0, reviews: 19, tag: 'LIMITED', img: brac1 },
  { id: 5, name: 'Classic Gold Band', category: 'rings', price: '₹15,499', rating: 4.7, reviews: 22, tag: '', img: ring2 },
  { id: 6, name: 'Emerald Pendant', category: 'necklaces', price: '₹21,999', rating: 4.9, reviews: 15, tag: 'NEW', img: neck2 },
  { id: 7, name: 'Crystal Studs', category: 'earrings', price: '₹8,999', rating: 4.6, reviews: 54, tag: '', img: ear2 },
  { id: 8, name: 'Infinity Chain Bracelet', category: 'bracelets', price: '₹19,999', rating: 4.8, reviews: 28, tag: 'BESTSELLER', img: brac2 },
];

const ShopPage = () => {

  const { category } = useParams();

  const filteredProducts = category
    ? allProducts.filter(p => p.category === category)
    : allProducts;

  return (
    <div className="shop-page">

      <Container>

        {/* Header */}

        <div className="mb-4">
          <h1 className="shop-title">All Jewelry</h1>
          <p className="text-muted">{filteredProducts.length} pieces</p>
        </div>

        {/* Search + Sort */}

        <Row className="mb-5 align-items-center">

          <Col md={8} className="search-wrapper">

            <Search className="search-icon" />

            <Form.Control
              type="text"
              placeholder="Search jewelry..."
              className="search-input"
            />

          </Col>

          <Col md={4} className="d-flex justify-content-md-end mt-3 mt-md-0">

            <Form.Select className="sort-select">
              <option>Latest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </Form.Select>

          </Col>

        </Row>

        {/* Product Grid */}

        <Row className="g-4">

          {filteredProducts.map((p) => (

            <Col key={p.id} md={6} lg={4}>

              <div className="product-card">

                <div className="position-relative mb-3">

                  <img
                    src={p.img}
                    alt={p.name}
                    className="product-img"
                  />

                  {p.tag && (
                    <Badge className="product-badge">
                      {p.tag}
                    </Badge>
                  )}

                  <div className="wishlist-btn">
                    <FavoriteBorder fontSize="small" />
                  </div>

                  <div className="cart-btn">
                    <LocalMallOutlined fontSize="small" />
                  </div>

                </div>

                <div className="text-start">

                  <h5 className="product-name">
                    {p.name}
                  </h5>

                  <div className="d-flex align-items-center gap-1 mb-1">
                    <Star className="rating-star" />
                    <span className="small">{p.rating} ({p.reviews})</span>
                  </div>

                  <div className="fw-bold">{p.price}</div>

                </div>

              </div>

            </Col>

          ))}

        </Row>

      </Container>

    </div>
  );
};

export default ShopPage;