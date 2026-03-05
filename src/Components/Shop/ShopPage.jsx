import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, Badge, Modal, Button } from "react-bootstrap";
import { Search, FavoriteBorder, Favorite, LocalMallOutlined, Star } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { CartContext } from "../Navelements/CartContext";
import { WishlistContext } from "../sharedComonent/WishListContext";
import "./ShopPage.css";

import ring1 from "../../assets/rings/one.jfif";
import ring2 from "../../assets/rings/two.jfif";

import neck1 from "../../assets/Necklaces/one.jfif";
import neck2 from "../../assets/Necklaces/two.jfif";

import ear1 from "../../assets/Earings/one.jfif";
import ear2 from "../../assets/Earings/two.jfif";

import brac1 from "../../assets/Bracelet/one.jfif";
import brac2 from "../../assets/Bracelet/two.jfif";

const allProducts = [
{ id: 1, name: "Celestial Diamond Ring", category: "rings", price: 24999, rating: 4.9, reviews: 47, tag: "BESTSELLER", image: ring1 },
{ id: 2, name: "Golden Sunburst Necklace", category: "necklaces", price: 18499, rating: 4.8, reviews: 35, tag: "NEW", image: neck1 },
{ id: 3, name: "Teardrop Diamond Earrings", category: "earrings", price: 12999, rating: 4.8, reviews: 41, tag: "TRENDING", image: ear1 },
{ id: 4, name: "Royal Diamond Bracelet", category: "bracelets", price: 32999, rating: 5.0, reviews: 19, tag: "LIMITED", image: brac1 },
{ id: 5, name: "Classic Gold Band", category: "rings", price: 15499, rating: 4.7, reviews: 22, tag: "", image: ring2 },
{ id: 6, name: "Emerald Pendant", category: "necklaces", price: 21999, rating: 4.9, reviews: 15, tag: "NEW", image: neck2 },
{ id: 7, name: "Crystal Studs", category: "earrings", price: 8999, rating: 4.6, reviews: 54, tag: "", image: ear2 },
{ id: 8, name: "Infinity Chain Bracelet", category: "bracelets", price: 19999, rating: 4.8, reviews: 28, tag: "BESTSELLER", image: brac2 },
];

const ShopPage = () => {

const { category } = useParams();

const { addToCart } = useContext(CartContext);
const { wishlist, toggleWishlist } = useContext(WishlistContext);

const [show, setShow] = useState(false);
const [selectedProduct, setSelectedProduct] = useState(null);

const filteredProducts = category
? allProducts.filter(p => p.category === category)
: allProducts;

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

<div className="shop-page">

<Container>

<div className="mb-4">
<h1 className="shop-title">All Jewelry</h1>
<p className="text-muted">{filteredProducts.length} pieces</p>
</div>

<Row className="mb-5 align-items-center">

<Col md={8} className="search-wrapper">
<Search className="search-icon"/>

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

<Row className="g-4">

{filteredProducts.map((p,index) => (

<Col key={`${p.id}-${index}`} md={6} lg={4}>

<div className="product-card">

<div className="position-relative mb-3">

<img
src={p.image}
alt={p.name}
className="product-img"
onClick={() => openProduct(p)}
style={{cursor:"pointer"}}
/>

{p.tag && ( <Badge className="product-badge">
{p.tag} </Badge>
)}

{/* Wishlist */}

<div
className="wishlist-btn"
onClick={() => toggleWishlist(p)}
>
{isLiked(p.id)
? <Favorite style={{color:"red"}} fontSize="small"/>
: <FavoriteBorder fontSize="small"/>
}
</div>

{/* Cart */}

<div
className="cart-btn"
onClick={() => handleAddToCart(p)}
>
<LocalMallOutlined fontSize="small"/>
</div>

</div>

<div className="text-start">

<h5 className="product-name">{p.name}</h5>

<div className="d-flex align-items-center gap-1 mb-1">
<Star className="rating-star"/>
<span className="small">{p.rating} ({p.reviews})</span>
</div>

<div className="fw-bold">₹{p.price}</div>

</div>

</div>

</Col>

))}

</Row>

</Container>

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

<h5 className="mt-3">{selectedProduct.category}</h5>

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

</div>
);
};

export default ShopPage;
