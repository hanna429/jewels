import React, { useState, useContext } from "react";
import { Heart, Search } from "lucide-react";
import { LocalMallOutlined } from "@mui/icons-material";
import { Modal, Button } from "react-bootstrap";
import { CartContext } from "../Navelements/CartContext";
import { WishlistContext } from "../sharedComonent/WishListContext";
import "./RingPage.css";

import brac1 from "../../assets/Bracelet/one.jfif";
import brac2 from "../../assets/Bracelet/two.jfif";
import brac3 from "../../assets/Bracelet/three.jfif";
import brac4 from "../../assets/Bracelet/four.jfif";
import brac5 from "../../assets/Bracelet/five.jfif";
import brac6 from "../../assets/Bracelet/six.jfif";

const products = [
{ id: 1, name: "Aurora Anti-Tarnish Bracelet", category: "Bracelets", price: 1499, image: brac1, isBestseller: true },
{ id: 2, name: "Golden Glow Chain Bracelet", category: "Bracelets", price: 1299, image: brac2 },
{ id: 3, name: "Royal Pearl Bracelet", category: "Bracelets", price: 1699, image: brac3, isBestseller: true },
{ id: 4, name: "Elegant Crystal Bracelet", category: "Bracelets", price: 1399, image: brac4 },
{ id: 5, name: "Luxe Anti-Tarnish Charm Bracelet", category: "Bracelets", price: 1799, image: brac5, isBestseller: true },
{ id: 6, name: "Classic Gold Link Bracelet", category: "Bracelets", price: 1499, image: brac6 }
];

const BraceletPage = () => {

const { addToCart } = useContext(CartContext);
const { wishlist, toggleWishlist } = useContext(WishlistContext);

const [show, setShow] = useState(false);
const [selectedProduct, setSelectedProduct] = useState(null);

const braceletProducts = products.filter(
(item) => item.category === "Bracelets"
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
<h1>Bracelets</h1>
<p>{braceletProducts.length} pieces</p>
</div>

<div className="search-box">
<Search className="search-icon"/>
<input type="text" placeholder="Search jewelry..." />
</div>

<div className="product-grid">

{braceletProducts.map((product,index) => (

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

{/* Wishlist */}

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

<LocalMallOutlined fontSize="small" style={{border:"none"}}/>
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

export default BraceletPage;
