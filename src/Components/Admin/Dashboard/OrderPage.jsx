import React, { useState } from "react";
import {
ArrowLeft, Printer, Truck, CheckCircle,
Package, User, Mail, Phone, MapPin
} from "lucide-react";
import Sidebar from "../sidebar/Sidebar";
import "./OrderPage.css";

const OrderDetails = ({ orderId = "#ORD-7742", onBack }) => {

const [orderStatus, setOrderStatus] = useState("Processing");

const orderData = {
date: "March 08, 2026",
customer: {
name: "Aditi Sharma",
email: "[aditi.s@example.com](mailto:aditi.s@example.com)",
phone: "+91 98765 43210",
address: "Flat 402, Sapphire Heights, MG Road, Mumbai, MH - 400001"
},
items: [
{ id: 101, name: "Diamond Solitaire Ring", price: 125000, qty: 1, img: "💍" },
{ id: 102, name: "Pearl Drop Earrings", price: 18500, qty: 2, img: "✨" }
],
summary: {
subtotal: 162000,
tax: 4860,
shipping: 500,
total: 167360
}
};

const handlePrint = () => {
window.print();
};

return (


<div className="order-layout">

  {/* Sidebar */}
  <Sidebar />

  {/* Main Content */}
  <div className="order-main">

    <div className="order-details-wrapper">

      {/* Header */}
      <div className="order-header">

        <button className="back-link" onClick={onBack}>
          <ArrowLeft size={18}/> Back to Orders
        </button>

        <div className="header-actions">

          <button className="secondary-btn" onClick={handlePrint}>
            <Printer size={18}/> Print Invoice
          </button>

          <select
            className="status-select"
            value={orderStatus}
            onChange={(e)=>setOrderStatus(e.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>

        </div>

      </div>

      <div className="order-title-section">
        <h1>Order {orderId}</h1>
        <p>Placed on {orderData.date}</p>
      </div>

      <div className="details-grid">

        {/* Left */}
        <div className="left-col">

          <div className="details-card">

            <h3 className="card-title">
              <Package size={18}/> Order Items
            </h3>

            {orderData.items.map((item)=>(
              <div key={item.id} className="order-item">

                <div className="item-img-box">{item.img}</div>

                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p>SKU: LUX-00{item.id}</p>
                </div>

                <div className="item-pricing">
                  <span>
                    ₹{item.price.toLocaleString("en-IN")} x {item.qty}
                  </span>

                  <span className="item-total">
                    ₹{(item.price*item.qty).toLocaleString("en-IN")}
                  </span>
                </div>

              </div>
            ))}

          </div>

          <div className="details-card summary-card">

            <h3 className="card-title">Order Summary</h3>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{orderData.summary.subtotal.toLocaleString("en-IN")}</span>
            </div>

            <div className="summary-row">
              <span>GST (3%)</span>
              <span>₹{orderData.summary.tax.toLocaleString("en-IN")}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span>₹{orderData.summary.shipping.toLocaleString("en-IN")}</span>
            </div>

            <div className="summary-row total">
              <span>Total</span>
              <span>₹{orderData.summary.total.toLocaleString("en-IN")}</span>
            </div>

          </div>

        </div>

        {/* Right */}
        <div className="right-col">

          <div className="details-card">

            <h3 className="card-title">
              <User size={18}/> Customer Info
            </h3>

            <p className="cust-name">{orderData.customer.name}</p>

            <div className="info-line">
              <Mail size={14}/> {orderData.customer.email}
            </div>

            <div className="info-line">
              <Phone size={14}/> {orderData.customer.phone}
            </div>

            <div className="info-line">
              <MapPin size={14}/> {orderData.customer.address}
            </div>

          </div>

          <div className="details-card timeline-card">

            <h3 className="card-title">
              <Truck size={18}/> Order Timeline
            </h3>

            <div className="timeline">

              <div className="step completed">
                <CheckCircle size={16}/>
                <span>Order Placed</span>
              </div>

              <div className="step active">
                <div className="dot"></div>
                <span>Payment Confirmed</span>
              </div>

              <div className="step pending">
                <div className="dot"></div>
                <span>Shipped</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</div>


);
};

export default OrderDetails;
