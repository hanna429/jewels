import React, { useState, useContext } from "react";
import { Heart, Search } from "lucide-react";
import { LocalMallOutlined } from "@mui/icons-material";
import { Modal, Button } from "react-bootstrap";
import { CartContext } from "../Navelements/CartContext";
import { WishlistContext } from "../sharedComonent/WishListContext";
import "./ShopPage.css";

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
isBestseller: true
},
{
id: 2,
name: "Golden Glow Drop Earrings",
category: "Earrings",
price: 1099,
image: ear2
},
{
id: 3,
name: "Royal Pearl Earrings",
category: "Earrings",
price: 1299,
image: ear3,
isBestseller: true
},
{
id: 4,
name: "Elegant Crystal Earrings",
category: "Earrings",
price: 999,
image: ear4
},
{
id: 5,
name: "Luxe Anti-Tarnish Hoop Earrings",
category: "Earrings",
price: 1199,
image: ear5,
isBestseller: true
},
{
id: 6,
name: "Classic Gold Hoop Earrings",
category: "Earrings",
price: 950,
image: ear2
}
];

const EarringsPage = () => {

const { addToCart } = useContext(CartContext);
const { wishlist, toggleWishlist } = useContext(WishlistContext);

const [show, setShow] = useState(false);
const [selectedProduct, setSelectedProduct] = useState(null);

const earringsProducts = products.filter(
(item) => item.category === "Earrings"
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
<h1>Earrings</h1>
<p>{earringsProducts.length} pieces</p>
</div>

<div className="search-box">
<Search className="search-icon"/>
<input type="text" placeholder="Search jewelry..." />
</div>

<div className="product-grid">

{earringsProducts.map((product,index) => (

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

<LocalMallOutlined fontSize="small " style={{border:"none"}}/>
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

export default EarringsPage;
