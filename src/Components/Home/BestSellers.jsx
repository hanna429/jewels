import React, { useState, useContext } from "react";
import { Container, Row, Col, Badge, Modal, Button } from "react-bootstrap";
import { Star, FavoriteBorder, Favorite, LocalMallOutlined, East } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Navelements/CartContext";
import { WishlistContext } from "../sharedComonent/WishListContext";
import "./BestSellers.css";

import ringImg from "../../assets/rings/two.jfif";
import necklaceImg from "../../assets/Necklaces/two.jfif";
import braceletImg from "../../assets/Bracelet/two.jfif";
import earringImg from "../../assets/Earings/two.jfif";

const BestSellers = () => {

const navigate = useNavigate();

const { addToCart } = useContext(CartContext);
const { wishlist, toggleWishlist } = useContext(WishlistContext);

const [show, setShow] = useState(false);
const [selectedProduct, setSelectedProduct] = useState(null);

const products = [
{ id:1, name:"Celestial Diamond Ring", category:"Rings", price:24999, rating:4.9, reviews:47, tag:"BESTSELLER", image:ringImg },
{ id:2, name:"Golden Sunburst Necklace", category:"Necklaces", price:18499, rating:4.8, reviews:35, tag:"NEW", image:necklaceImg },
{ id:3, name:"Royal Diamond Bracelet", category:"Bracelets", price:32999, rating:5.0, reviews:19, tag:"LIMITED", image:braceletImg },
{ id:4, name:"Pearl Drop Earing", category:"Earings", price:14999, rating:4.8, reviews:41, tag:"TRENDING", image:earringImg },
];

const openProduct = (product) => {
setSelectedProduct(product);
setShow(true);
};

const handleAddToCart = (product) => {
addToCart(product);
alert("Added to cart!");
};

const isLiked = (id) => {
return wishlist?.some(item => item.id === id);
};

return (

<section className="best-section">

<Container>

<div className="best-header">

<div>
<div className="best-label">TRENDING</div>
<h2 className="best-title">Best Sellers</h2>
</div>

<div
className="view-all"
onClick={() => navigate("/shop")}
style={{cursor:"pointer"}}
>
View All <East fontSize="small"/>
</div>

</div>

<Row className="g-4">

{products.map((p,index)=>(

<Col key={`${p.id}-${index}`} lg={3} md={6}>

<div className="product-card">

<div className="product-img-container">

<img
src={p.image}
alt={p.name}
className="product-img"
onClick={()=>openProduct(p)}
style={{cursor:"pointer"}}
/>

<Badge className="product-badge">
{p.tag}
</Badge>

{/* Wishlist */}

<div
className="wishlist-btn"
onClick={()=>toggleWishlist(p)}
>
{isLiked(p.id)
? <Favorite style={{color:"red"}}/>
: <FavoriteBorder/>
}
</div>

{/* Add To Cart */}

<div
className="cart-btn"
onClick={()=>handleAddToCart(p)}
>
<LocalMallOutlined/>
</div>

</div>

<div className="product-details">

<div className="product-category">
{p.category}
</div>

<h4 className="product-name">
{p.name}
</h4>

<div className="product-rating">
<Star className="star-icon"/>
<span>{p.rating} ({p.reviews})</span>
</div>

<div className="product-price">
₹{p.price}
</div>

</div>

</div>

</Col>

))}

</Row>

</Container>

{/* PRODUCT POPUP */}

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
style={{width:"100%", borderRadius:"10px"}}
/>

<h5 style={{marginTop:"15px"}}>
{selectedProduct.category}
</h5>

<p>
⭐ {selectedProduct.rating} ({selectedProduct.reviews})
</p>

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

</section>
);
};

export default BestSellers;
