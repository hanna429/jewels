import React from "react";
import { DollarSign, ShoppingCart, Users, Package, Clock } from "lucide-react";
import Sidebar from "../sidebar/Sidebar";
import "./Dash.css";

const DashboardContent = () => {

const stats = [
{ title: "Total Sales", value: "₹24,50,000", change: "+12.5%", icon: <DollarSign />, trend: "up" },
{ title: "Total Orders", value: "1,284", change: "+8.2%", icon: <ShoppingCart />, trend: "up" },
{ title: "Total Users", value: "3,462", change: "+5.1%", icon: <Users />, trend: "up" },
{ title: "Total Products", value: "186", change: "4 new this week", icon: <Package />, trend: "neutral" },
];

const recentOrders = [
{ id: "#ORD-7842", customer: "Priya Sharma", product: "Diamond Solitaire Ring", amount: "₹1,25,000", status: "Delivered", date: "Mar 7, 2026" },
{ id: "#ORD-7841", customer: "Anita Verma", product: "Gold Chain Necklace", amount: "₹45,000", status: "Processing", date: "Mar 7, 2026" },
{ id: "#ORD-7840", customer: "Rahul Mehta", product: "Pearl Drop Earrings", amount: "₹18,500", status: "Shipped", date: "Mar 6, 2026" },
{ id: "#ORD-7839", customer: "Sneha Patel", product: "Kundan Bracelet", amount: "₹32,000", status: "Pending", date: "Mar 6, 2026" },
];

const getStatusStyle = (status) => {
switch (status) {
case "Delivered":
return "status-delivered";
case "Processing":
return "status-processing";
case "Shipped":
return "status-shipped";
default:
return "status-pending";
}
};

return ( <div className="admin-layout">

```
  {/* Sidebar */}
  <Sidebar />

  {/* Main Content */}
  <div className="dashboard-content">

    {/* Header */}
    <div className="dashboard-header">
      <h1>Dashboard</h1>
      <p>Welcome back! Here's your store overview.</p>
    </div>

    {/* Stats */}
    <div className="stats-grid">

      {stats.map((stat, index) => (

        <div key={index} className="stat-card">

          <div>
            <p className="stat-title">{stat.title}</p>
            <h3 className="stat-value">{stat.value}</h3>

            <p className={`stat-change ${stat.trend === "up" ? "up" : ""}`}>
              {stat.change}
            </p>
          </div>

          <div className="icon-box">
            {stat.icon}
          </div>

        </div>

      ))}

    </div>

    {/* Orders */}
    <div className="orders-table">

      <div className="orders-header">
        <Clock size={20} />
        <h2>Recent Orders</h2>
      </div>

      <div className="table-wrapper">

        <table>

          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>

            {recentOrders.map((order) => (

              <tr key={order.id}>

                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                <td>{order.amount}</td>

                <td>
                  <span className={`status ${getStatusStyle(order.status)}`}>
                    {order.status}
                  </span>
                </td>

                <td>{order.date}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  </div>

</div>


);
};

export default DashboardContent;
