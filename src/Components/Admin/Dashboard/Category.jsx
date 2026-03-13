import React, { useState } from "react";
import { Plus, Edit2, Trash2, X } from "lucide-react";
import Sidebar from "../sidebar/Sidebar";
import "./Category.css";

const Category = () => {

const [categories, setCategories] = useState([
{ id: 1, name: "Rings", count: 42, icon: "💍", color: "#f3e8ff" },
{ id: 2, name: "Necklace", count: 38, icon: "📿", color: "#fff7ed" },
{ id: 3, name: "Earrings", count: 55, icon: "✨", color: "#eff6ff" },
{ id: 4, name: "Bracelets", count: 28, icon: "🌟", color: "#fef9c3" },
]);

const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
const [newCatName, setNewCatName] = useState("");

const addCategory = (e) => {
e.preventDefault();

```
const newCategory = {
  id: Date.now(),
  name: newCatName,
  count: 0,
  icon: "🏷️",
  color: "#f8f9fa"
};

setCategories([...categories, newCategory]);

setIsCategoryModalOpen(false);
setNewCatName("");
```

};

return ( <div className="admin-layout">

```
  {/* Sidebar */}
  <Sidebar />

  {/* Main Content */}
  <div className="admin-main">

    <div className="view-header">
      <div>
        <h1>Categories</h1>
        <p>Manage your jewellery categories.</p>
      </div>

      <button
        className="gold-btn"
        onClick={() => setIsCategoryModalOpen(true)}
      >
        <Plus size={18}/> Add Category
      </button>
    </div>

    {/* Category Grid */}
    <div className="category-grid">

      {categories.map((cat) => (
        <div key={cat.id} className="category-card">

          <div className="card-top">

            <div
              className="item-icon"
              style={{ background: cat.color }}
            >
              {cat.icon}
            </div>

            <div className="card-actions">

              <button className="action-icon">
                <Edit2 size={14}/>
              </button>

              <button className="action-icon delete">
                <Trash2 size={14}/>
              </button>

            </div>

          </div>

          <h3 className="cat-name">{cat.name}</h3>
          <p className="cat-count">{cat.count} products</p>

        </div>
      ))}

    </div>

  </div>

  {/* Add Category Modal */}
  {isCategoryModalOpen && (

    <div className="modal-mask">

      <div className="modal-content sm">

        <div className="modal-head">

          <h2>Add Category</h2>

          <button onClick={() => setIsCategoryModalOpen(false)}>
            <X size={20}/>
          </button>

        </div>

        <form onSubmit={addCategory} className="modal-form">

          <div className="input-group">

            <label>Category Name</label>

            <input
              required
              placeholder="e.g. Anklets"
              value={newCatName}
              onChange={(e) => setNewCatName(e.target.value)}
            />

          </div>

          <button type="submit" className="submit-gold">
            Add Category
          </button>

        </form>

      </div>

    </div>

  )}

</div>


);
};

export default Category;
