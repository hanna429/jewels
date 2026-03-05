import React from "react";
import { Heart, Search } from "lucide-react";
import "./RingPage.css";

import ear1 from "../../assets/Earings/one.jfif";
import ear2 from "../../assets/Earings/two.jfif";
import ear3 from "../../assets/Earings/three.jfif";
import ear4 from "../../assets/Earings/four.jfif";
import ear5 from "../../assets/Earings/five.jfif";


const products = [
  {
    id: 1,
    name: "Aurora Anti-Tarnish Stud Earrings",
    category: "Earrings",
    price: 899,
    image: ear1,
    isBestseller: true,
  },
  {
    id: 2,
    name: "Golden Glow Drop Earrings",
    category: "Earrings",
    price: 1099,
    image: ear2,
    isBestseller: false,
  },
  {
    id: 3,
    name: "Royal Pearl Earrings",
    category: "Earrings",
    price: 1299,
    image: ear3,
    isBestseller: true,
  },
  {
    id: 4,
    name: "Elegant Crystal Earrings",
    category: "Earrings",
    price: 999,
    image: ear4,
    isBestseller: false,
  },
  {
    id: 5,
    name: "Luxe Anti-Tarnish Hoop Earrings",
    category: "Earrings",
    price: 1199,
    image: ear5,
    isBestseller: true,
  },
  {
    id: 6,
    name: "Classic Gold Hoop Earrings",
    category: "Earrings",
    price: 950,
    image: ear2,
    isBestseller: false,
  },
];

const EarringsPage = () => {

  const earringsProducts = products.filter(
    (item) => item.category === "Earrings"
  );

  return (
    <div className="ring-page">

      {/* Header */}

      <div className="ring-header">
        <h1>Earrings</h1>
        <p>{earringsProducts.length} pieces</p>
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

        {earringsProducts.map((product) => (

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

export default EarringsPage;