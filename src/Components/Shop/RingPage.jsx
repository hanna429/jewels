import React, { useState, useContext } from "react";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { Modal, Button } from "react-bootstrap";
import { CartContext } from "../Navelements/CartContext";
import { WishlistContext } from "../sharedComonent/WishListContext";
import "./RingPage.css";

import ring1 from "../../assets/rings/one.jfif";
import ring2 from "../../assets/rings/two.jfif";
import ring3 from "../../assets/rings/three.jfif";
import ring4 from "../../assets/rings/Four.jfif";
import ring5 from "../../assets/rings/five.jfif";

const products = [
  { id: 1, name: "Aurora Anti-Tarnish Diamond Ring", category: "Rings", price: 1499, image: ring1, isBestseller: true },
  { id: 2, name: "Eternal Shine Gold Band", price: 1199, image: ring2 },
  { id: 3, name: "Royal Glow Anti-Tarnish Ring", price: 1699, image: ring3, isBestseller: true },
  { id: 4, name: "Luxe Spark Anti-Tarnish Band", price: 1299, image: ring4 },
  { id: 5, name: "Golden Aura Anti-Tarnish Ring", price: 1399, image: ring5, isBestseller: true },
];

const RingPage = () => {
  const { addToCart } = useContext(CartContext);
  // Get wishlist data from context
  const wishlistContext = useContext(WishlistContext);

  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Safety check: if context is missing, don't crash the app
  if (!wishlistContext) {
    return <div>Error: WishlistProvider not found in App.js</div>;
  }

  const { wishlist, toggleWishlist } = wishlistContext;

  const isItemLiked = (id) => wishlist?.some((item) => item.id === id);

  const openProduct = (product) => {
    setSelectedProduct(product);
    setShow(true);
  };

  const handleAddToCart = () => {
    if (!selectedProduct) return;
    addToCart(selectedProduct);
    setShow(false);
  };

  return (
    <div className="ring-page">
      <div className="ring-header">
        <h1>Rings</h1>
        <p>{products.length} pieces</p>
      </div>

      <div className="search-box">
        <Search className="search-icon" />
        <input type="text" placeholder="Search jewelry..." />
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img
                src={product.image}
                alt={product.name}
                onClick={() => openProduct(product)}
                style={{ cursor: "pointer" }}
              />

              {product.isBestseller && (
                <span className="badge">BESTSELLER</span>
              )}

              <button
                className="wishlist-btn"
                onClick={() => toggleWishlist(product)}
              >
                <Heart
                  size={16}
                  color={isItemLiked(product.id) ? "red" : "black"}
                  fill={isItemLiked(product.id) ? "red" : "none"}
                />
              </button>
            </div>

            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-price">₹{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <Modal show={show} onHide={() => setShow(false)} centered>
        {selectedProduct && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProduct.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <h4 style={{ marginTop: "15px" }}>₹{selectedProduct.price}</h4>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="dark" onClick={handleAddToCart}>
                <ShoppingCart size={16} /> Add To Cart
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
};

export default RingPage;