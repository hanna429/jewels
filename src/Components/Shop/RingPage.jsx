import React from "react";
import { Heart, Search } from "lucide-react";
import "./RingPage.css";

import ring1 from "../../assets/rings/one.jfif";
import ring2 from "../../assets/rings/two.jfif";
import ring3 from "../../assets/rings/three.jfif";
import ring4 from "../../assets/rings/Four.jfif";
import ring5 from "../../assets/rings/five.jfif";


const products = [
  {
    id: 1,
    name: "Aurora Anti-Tarnish Diamond Ring",
    category: "Rings",
    price: 1499,
    image: ring1,
    isBestseller: true,
  },
  {
    id: 2,
    name: "Eternal Shine Gold Band",
    category: "Rings",
    price: 1199,
    image: ring2,
    isBestseller: false,
  },
  {
    id: 3,
    name: "Royal Glow Anti-Tarnish Ring",
    category: "Rings",
    price: 1699,
    image: ring3,
    isBestseller: true,
  },
  {
    id: 4,
    name: "Luxe Spark Anti-Tarnish Band",
    category: "Rings",
    price: 1299,
    image: ring4,
    isBestseller: false,
  },
  {
    id: 5,
    name: "Golden Aura Anti-Tarnish Ring",
    category: "Rings",
    price: 1399,
    image: ring5,
    isBestseller: true,
  },
];

const RingPage = () => {

  const ringProducts = products.filter(
    (item) => item.category === "Rings"
  );

  return (
    <div className="ring-page">

      {/* Header */}

      <div className="ring-header">
        <h1>Rings</h1>
        <p>{ringProducts.length} pieces</p>
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

        {ringProducts.map((product) => (

          <div key={product.id} className="product-card">

            {/* Image */}

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

            {/* Details */}

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

export default RingPage;