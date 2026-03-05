import React, { useState, useContext } from "react";
import { Heart, Search } from "lucide-react";
import { LocalMallOutlined } from "@mui/icons-material";
import { Modal, Button } from "react-bootstrap";
import { CartContext } from "../Navelements/CartContext";
import { WishlistContext } from "../sharedComonent/WishListContext";
import "./RingPage.css";

import neck1 from "../../assets/Necklaces/one.jfif";
import neck2 from "../../assets/Necklaces/two.jfif";
import neck3 from "../../assets/Necklaces/three.jfif";
import neck4 from "../../assets/Necklaces/four.jfif";
import neck5 from "../../assets/Necklaces/five.jfif";

const products = [
{ id: 1, name: "Aurora Anti-Tarnish Necklace", category: "Necklaces", price: 1899, image: neck1, isBestseller: true },
{ id: 2, name: "Golden Glow Chain Necklace", category: "Necklaces", price: 1499, image: neck2 },
{ id: 3, name: "Royal Pearl Necklace", category: "Necklaces", price: 2199, image: neck3, isBestseller: true },
{ id: 4, name: "Elegant Shine Pendant", category: "Necklaces", price: 1699, image: neck4 },
{ id: 5, name: "Luxe Anti-Tarnish Necklace", category: "Necklaces", price: 1999, image: neck5, isBestseller: true },
{ id: 6, name: "Aurora Anti-Tarnish Necklace", category: "Necklaces", price: 1899, image: neck2 },
];

const NecklacePage = () => {

const { addToCart } = useContext(CartContext);
const { wishlist, toggleWishlist } = useContext(WishlistContext);

const [show, setShow] = useState(false);
const [selectedProduct, setSelectedProduct] = useState(null);

const necklaceProducts = products.filter(
(item) => item.category === "Necklaces"
);

const isItemLiked = (id) =>
wishlist.some((item) => item.id === id);

const openProduct = (product) => {
setSelectedProduct(product);
setShow(true);
};

const handleAddToCart = (product) => {
addToCart(product);
alert("Product added to cart!");
};

return (

<div className="ring-page">

<div className="ring-header">
<h1>Necklaces</h1>
<p>{necklaceProducts.length} pieces</p>
</div>

<div className="search-box">
<Search className="search-icon"/>
<input type="text" placeholder="Search jewelry..." />
</div>

<div className="product-grid">

{necklaceProducts.map((product,index) => (

<div key={`${product.id}-${index}`} className="product-card">

<div className="product-image">

<img
src={product.image}
alt={product.name}
onClick={() => openProduct(product)}
style={{cursor:"pointer"}}
/>

{product.isBestseller && ( <span className="badge">BESTSELLER</span>
)}

{/* Wishlist Button */}

<button
className="wishlist-btn"
onClick={() => toggleWishlist(product)}

>

<Heart
size={16}
color={isItemLiked(product.id) ? "red" : "black"}
fill={isItemLiked(product.id) ? "red" : "none"}
/> </button>

{/* Add To Cart Icon */}

<button
className="cart-btn"
onClick={() => handleAddToCart(product)}

>

<LocalMallOutlined fontSize="small"/>
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

<Modal show={show} onHide={()=>setShow(false)} centered>

{selectedProduct && (

<>

<Modal.Header closeButton>
<Modal.Title>{selectedProduct.name}</Modal.Title>
</Modal.Header>

<Modal.Body>

<img
src={selectedProduct.image}
alt={selectedProduct.name}
style={{width:"100%",borderRadius:"10px"}}
/>

<h5 style={{marginTop:"15px"}}>
{selectedProduct.category}
</h5>

<h4>₹{selectedProduct.price}</h4>

</Modal.Body>

<Modal.Footer>

<Button
variant="dark"
onClick={()=>handleAddToCart(selectedProduct)}

>

<LocalMallOutlined fontSize="small"/> Add To Cart </Button>

</Modal.Footer>

</>

)}

</Modal>

</div>
);
};

export default NecklacePage;
