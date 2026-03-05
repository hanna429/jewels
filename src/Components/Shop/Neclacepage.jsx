import React from "react";
import { Heart, Search } from "lucide-react";
import "./RingPage.css";

import neck1 from "../../assets/Necklaces/one.jfif";
import neck2 from "../../assets/Necklaces/two.jfif";
import neck3 from "../../assets/Necklaces/three.jfif";
import neck4 from "../../assets/Necklaces/four.jfif";
import neck5 from "../../assets/Necklaces/five.jfif";


const products = [
  {
    id: 1,
    name: "Aurora Anti-Tarnish Necklace",
    category: "Necklaces",
    price: 1899,
    image: neck1,
    isBestseller: true,
  },
  {
    id: 2,
    name: "Golden Glow Chain Necklace",
    category: "Necklaces",
    price: 1499,
    image: neck2,
    isBestseller: false,
  },
  {
    id: 3,
    name: "Royal Pearl Necklace",
    category: "Necklaces",
    price: 2199,
    image: neck3,
    isBestseller: true,
  },
  {
    id: 4,
    name: "Elegant Shine Pendant",
    category: "Necklaces",
    price: 1699,
    image: neck4,
    isBestseller: false,
  },
  {
    id: 5,
    name: "Luxe Anti-Tarnish Necklace",
    category: "Necklaces",
    price: 1999,
    image: neck5,
    isBestseller: true,
  },
    {
    id: 6,
    name: "Aurora Anti-Tarnish Necklace",
    category: "Necklaces",
    price: 1899,
    image: neck2,
    isBestseller: true,
  }
];

const NecklacePage = () => {

  const necklaceProducts = products.filter(
    (item) => item.category === "Necklaces"
  );

  return (
    <div className="ring-page">

      {/* Header */}

      <div className="ring-header">
        <h1>Necklaces</h1>
        <p>{necklaceProducts.length} pieces</p>
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

        {necklaceProducts.map((product) => (

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

export default NecklacePage;