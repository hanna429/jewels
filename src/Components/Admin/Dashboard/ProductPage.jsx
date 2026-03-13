import React, { useState } from "react"; // 1. Import useState
import { Plus, Search, Edit2, Trash2 } from "lucide-react";
import Sidebar from "../sidebar/Sidebar";
import "./ProductPage.css";

const initialProducts = [
  { id: 1, name: "Diamond Solitaire Ring", category: "Rings", price: "₹1,25,000", stock: 12, icon: "💍", color: "#f3e8ff" },
  { id: 2, name: "Gold Chain Necklace", category: "Necklace", price: "₹45,000", stock: 25, icon: "📿", color: "#fff7ed" },
  { id: 3, name: "Pearl Drop Earrings", category: "Earrings", price: "₹18,500", stock: 30, icon: "✨", color: "#eff6ff" },
  { id: 4, name: "Kundan Bracelet", category: "Bracelets", price: "₹32,000", stock: 8, icon: "🌟", color: "#fef9c3" },
];

const ProductPage = () => {
  // 2. Add state for the search query
  const [searchQuery, setSearchQuery] = useState("");

  // 3. Filter the products based on the search query
  // We check if the product name or category includes the search text (case-insensitive)
  const filteredProducts = initialProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page-wrapper">
      <Sidebar />

      <div className="main-content">
        <div className="page-header">
          <div>
            <h1 className="page-title">Products</h1>
            <p className="page-subtitle">Manage your luxury jewellery collection.</p>
          </div>

          <button className="add-btn">
            <Plus size={18} /> Add Product
          </button>
        </div>

        {/* 4. Bind the search input to state */}
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="product-table">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th style={{ textAlign: "right" }}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {/* 5. Map through filteredProducts instead of the static list */}
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="product-info">
                        <div
                          className="product-icon"
                          style={{ background: item.color }}
                        >
                          {item.icon}
                        </div>
                        <span>{item.name}</span>
                      </div>
                    </td>

                    <td>
                      <span className="category-tag">{item.category}</span>
                    </td>

                    <td style={{ fontWeight: "600" }}>{item.price}</td>

                    <td>
                      <span
                        className={
                          item.stock < 10 ? "stock-low" : "stock-ok"
                        }
                      >
                        {item.stock} units
                      </span>
                    </td>

                    <td>
                      <div className="actions">
                        <button className="icon-btn">
                          <Edit2 size={18} />
                        </button>

                        <button className="icon-btn">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center", padding: "40px", color: "#999" }}>
                    No products found matching "{searchQuery}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;