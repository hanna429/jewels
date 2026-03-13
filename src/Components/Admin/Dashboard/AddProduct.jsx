import React, { useState } from "react";
import { Plus, Search, Edit2, Trash2, X, Image as ImageIcon } from "lucide-react";
import Sidebar from "../sidebar/Sidebar";
import "./AddProduct.css";

const ProductAdmin = () => {

const [products, setProducts] = useState([
{ id: 1, name: "Diamond Solitaire Ring", category: "Rings", price: "1,25,000", stock: 12, icon: "💍" },
{ id: 2, name: "Gold Chain Necklace", category: "Necklace", price: "45,000", stock: 25, icon: "📿" },
{ id: 3, name: "Kundan Bracelet", category: "Bracelets", price: "32,000", stock: 8, icon: "🌟" },
]);

const [isModalOpen, setIsModalOpen] = useState(false);

const [newProduct, setNewProduct] = useState({
name: "",
category: "",
price: "",
stock: "",
});

const handleAddProduct = (e) => {
e.preventDefault();

```
const productToAdd = {
  ...newProduct,
  id: Date.now(),
  icon: "✨",
  price: Number(newProduct.price).toLocaleString("en-IN"),
};

setProducts([productToAdd, ...products]);
setIsModalOpen(false);

setNewProduct({
  name: "",
  category: "",
  price: "",
  stock: "",
});
```

};

const deleteProduct = (id) => {
setProducts(products.filter((p) => p.id !== id));
};

return ( <div className="page-wrapper">

```
  {/* Sidebar */}
  <Sidebar />

  {/* Main Content */}
  <div className="main-content">

    {/* Header */}
    <div className="page-header">
      <div>
        <h1 className="page-title">Products</h1>
        <p className="page-subtitle">Manage your jewellery collection</p>
      </div>

      <button className="add-btn" onClick={() => setIsModalOpen(true)}>
        <Plus size={18}/> Add Product
      </button>
    </div>

    {/* Search */}
    <div className="search-container">
      <Search size={18} className="search-icon"/>
      <input
        type="text"
        placeholder="Search products..."
        className="search-input"
      />
    </div>

    {/* Product Table */}
    <div className="product-table">
      <table>

        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th style={{textAlign:"right"}}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>

              <td>
                <div className="product-info">
                  <div className="product-icon">{product.icon}</div>
                  <span>{product.name}</span>
                </div>
              </td>

              <td>
                <span className="category-badge">
                  {product.category}
                </span>
              </td>

              <td style={{fontWeight:"600"}}>
                ₹{product.price}
              </td>

              <td>
                <span className={product.stock < 10 ? "stock-low" : "stock-ok"}>
                  {product.stock} units
                </span>
              </td>

              <td>
                <div className="action-buttons">

                  <button className="icon-btn">
                    <Edit2 size={16}/>
                  </button>

                  <button
                    className="icon-btn"
                    onClick={() => deleteProduct(product.id)}
                  >
                    <Trash2 size={16}/>
                  </button>

                </div>
              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>

  </div>

  {/* Modal */}
  {isModalOpen && (
    <div className="modal-overlay">

      <div className="modal-box">

        <div className="modal-header">
          <h2 className="modal-title">Add New Product</h2>

          <button onClick={() => setIsModalOpen(false)}>
            <X size={20}/>
          </button>
        </div>

        <div className="modal-body">

          <form onSubmit={handleAddProduct}>

            <input
              required
              className="modal-input"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e)=>setNewProduct({...newProduct,name:e.target.value})}
            />

            <select
              required
              className="modal-input"
              value={newProduct.category}
              onChange={(e)=>setNewProduct({...newProduct,category:e.target.value})}
            >
              <option value="">Select Category</option>
              <option value="Rings">Rings</option>
              <option value="Necklace">Necklace</option>
              <option value="Earrings">Earrings</option>
              <option value="Bracelets">Bracelets</option>
            </select>

            <div className="grid-two">

              <input
                required
                type="number"
                className="modal-input"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e)=>setNewProduct({...newProduct,price:e.target.value})}
              />

              <input
                required
                type="number"
                className="modal-input"
                placeholder="Stock"
                value={newProduct.stock}
                onChange={(e)=>setNewProduct({...newProduct,stock:e.target.value})}
              />

            </div>

            <div className="upload-box">
              <ImageIcon size={30}/>
              <p>Upload product image</p>
            </div>

            <button type="submit" className="submit-btn">
              Add Product
            </button>

          </form>

        </div>

      </div>

    </div>
  )}
</div>


);
};

export default ProductAdmin;
