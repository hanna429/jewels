import React, { useState } from "react";
import { User, Package, CreditCard, HelpCircle, LogOut, ShieldCheck } from "lucide-react";
import "./Profile.css";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const menuItems = [
    { id: "profile", label: "My Profile", icon: <User size={20} /> },
    { id: "orders", label: "My Orders", icon: <Package size={20} /> },
    { id: "payment", label: "Payment Methods", icon: <CreditCard size={20} /> },
    { id: "help", label: "Help & Support", icon: <HelpCircle size={20} /> },
    { id: "terms", label: "Terms & Conditions", icon: <ShieldCheck size={20} /> },
  ];

  return (
    <div className="profile-container">

      {/* Sidebar */}
      <div className="sidebar">
        <div className="user-info">
          <div className="profile-avatar">
            <User size={40} />
          </div>

          <h2>Hanna Fathima</h2>
          <p>Kozhikode, Kerala</p>
        </div>

        <nav className="menu">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`menu-item ${activeTab === item.id ? "active" : ""}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}

          <button className="menu-item logout">
            <LogOut size={20} />
            <span>Log Out</span>
          </button>
        </nav>
      </div>

      {/* Content */}
      <div className="content">

        {activeTab === "profile" && (
          <div>
            <h3>Edit Profile</h3>

            <div className="form-grid">
              <div>
                <label>Full Name</label>
                <input type="text" defaultValue="Hanna Fathima" />
              </div>

              <div>
                <label>Email</label>
                <input type="email" placeholder="example@gmail.com" />
              </div>

              <div className="full-width">
                <label>Shipping Address</label>
                <textarea rows="3"></textarea>
              </div>

              <button className="save-btn">Save Changes</button>
            </div>
          </div>
        )}

        {activeTab === "orders" && (
          <div>
            <h3>Your Orders</h3>

            <div className="order-card">
              <div className="order-left">
                <div className="order-image"></div>

                <div>
                  <p className="order-title">Gold Diamond Ring</p>
                  <p className="order-status">Order #12345 • Delivered</p>
                </div>
              </div>

              <button className="view-btn">View Details</button>
            </div>
          </div>
        )}

        {/* UPDATED PAYMENT SECTION */}
        {activeTab === "payment" && (
          <div>
            <h3>Payment Methods</h3>

            <div className="payment-card">
              <div>
                <p className="card-title">UPI</p>
                <p className="card-number">hanna@upi</p>
              </div>

              <button className="remove-btn">Remove</button>
            </div>

            <button className="add-btn">Add New UPI</button>
          </div>
        )}

        {activeTab === "help" && (
          <div>
            <h3>Help & Support</h3>

            <div className="help-box">
              <p className="help-title">How can we help you?</p>
              <p>Contact our support team for assistance.</p>
            </div>

            <div className="help-box">
              <p className="help-title">Email Support</p>
              <p>support@jewelleryshop.com</p>
            </div>
          </div>
        )}

        {activeTab === "terms" && (
          <div>
            <h3>Terms & Conditions</h3>

            <div className="terms">
              <p>By using our jewellery store, you agree to our policies.</p>
              <p>All purchases depend on product availability.</p>
              <p>Returns are accepted within 7 days.</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default UserProfile;