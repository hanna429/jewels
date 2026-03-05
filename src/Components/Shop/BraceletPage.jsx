import React from "react";
import { Heart, Search } from "lucide-react";
import "./RingPage.css";

import brac1 from "../../assets/Bracelet/one.jfif";
import brac2 from "../../assets/Bracelet/two.jfif";
import brac3 from "../../assets/Bracelet/three.jfif";
import brac4 from "../../assets/Bracelet/four.jfif";
import brac5 from "../../assets/Bracelet/five.jfif";
import brac6 from "../../assets/Bracelet/six.jfif";



const products = [
  {
    id: 1,
    name: "Aurora Anti-Tarnish Bracelet",
    category: "Bracelets",
    price: 1499,
    image: brac1,
    isBestseller: true,
  },
  {
    id: 2,
    name: "Golden Glow Chain Bracelet",
    category: "Bracelets",
    price: 1299,
    image: brac2,
    isBestseller: false,
  },
  {
    id: 3,
    name: "Royal Pearl Bracelet",
    category: "Bracelets",
    price: 1699,
    image: brac3,
    isBestseller: true,
  },
  {
    id: 4,
    name: "Elegant Crystal Bracelet",
    category: "Bracelets",
    price: 1399,
    image: brac4,
    isBestseller: false,
  },
  {
    id: 5,
    name: "Luxe Anti-Tarnish Charm Bracelet",
    category: "Bracelets",
    price: 1799,
    image: brac5,
    isBestseller: true,
  },
  {
    id: 6,
    name: "Classic Gold Link Bracelet",
    category: "Bracelets",
    price: 1499,
    image: brac6,
    isBestseller: false,
  },
];

const BraceletPage = () => {

  const braceletProducts = products.filter(
    (item) => item.category === "Bracelets"
  );

  return (
    <div className="ring-page">

      {/* Header */}

      <div className="ring-header">
        <h1>Bracelets</h1>
        <p>{braceletProducts.length} pieces</p>
      </div>

      {/* Search */}

      <div className="search-box">
        <Search className="search-icon" />

        <input
          type="text"
          placeholder="Search jewelry..."
        />
      </div>

      {/* Product Grid */}

      <div className="product-grid">

        {braceletProducts.map((product) => (

          <div key={product.id} className="product-card">

            <div className="product-image">

              <img
                src={product.image}
                alt={product.name}
              />

              {product.isBestseller && (
                <span className="badge">
                  BESTSELLER
                </span>
              )}

              <button className="wishlist-btn">
                <Heart size={16} />
              </button>

            </div>

            <div className="product-info">

              <h3>{product.name}</h3>

              <p className="product-category">
                {product.category}
              </p>

              <p className="product-price">
                ₹{product.price}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default BraceletPage;