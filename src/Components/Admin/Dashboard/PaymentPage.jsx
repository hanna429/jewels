import React, { useState } from "react";
import {
Search, Download, Filter, RefreshCcw, DollarSign
} from "lucide-react";
import Sidebar from "../sidebar/Sidebar";
import "./PaymentPage.css";

const PaymentPage = () => {

const [activeTab, setActiveTab] = useState("all");

const [transactions, setTransactions] = useState([
{ id: "TXN-9012", user: "Priya Sharma", date: "Mar 08, 2026", amount: "1,25,000", method: "UPI", status: "Completed" },
{ id: "TXN-9013", user: "Anita Verma", date: "Mar 07, 2026", amount: "45,000", method: "Card", status: "Completed" },
{ id: "TXN-9014", user: "Rahul Mehta", date: "Mar 06, 2026", amount: "32,000", method: "Net Banking", status: "Refunded" },
{ id: "TXN-9015", user: "Sneha Patel", date: "Mar 05, 2026", amount: "18,500", method: "UPI", status: "Pending" },
]);

const stats = {
totalRevenue: "₹8,42,000",
pendingPayouts: "₹12,400",
refundRequests: 3
};

return (


<div className="admin-layout">

  {/* Sidebar */}
  <Sidebar />

  {/* Main Content */}
  <div className="admin-main">

    <div className="view-header">

      <div>
        <h1>Payments</h1>
        <p>Monitor transactions and manage customer refunds.</p>
      </div>

      <button className="export-btn">
        <Download size={18}/> Export CSV
      </button>

    </div>

    {/* Stats */}
    <div className="stats-grid">

      <div className="stat-card">
        <span className="stat-label">Total Revenue</span>
        <div className="stat-value">{stats.totalRevenue}</div>
      </div>

      <div className="stat-card">
        <span className="stat-label">Pending Payouts</span>
        <div className="stat-value">{stats.pendingPayouts}</div>
      </div>

      <div className="stat-card">
        <span className="stat-label">Refund Requests</span>
        <div className="stat-value text-amber">{stats.refundRequests}</div>
      </div>

    </div>

    {/* Tabs */}
    <div className="tab-menu">

      <button
        className={activeTab === "all" ? "active" : ""}
        onClick={()=>setActiveTab("all")}
      >
        All Transactions
      </button>

      <button
        className={activeTab === "refunds" ? "active" : ""}
        onClick={()=>setActiveTab("refunds")}
      >
        Refund Management
      </button>

    </div>

    {/* Search & Filters */}
    <div className="table-controls">

      <div className="search-bar">
        <Search size={18} className="search-icon"/>
        <input placeholder="Search by TXN ID or User..." />
      </div>

      <button className="filter-btn">
        <Filter size={18}/> Filters
      </button>

    </div>

    {/* Table */}
    <div className="data-card">

      <table className="admin-table">

        <thead>
          <tr>
            <th>TRANSACTION ID</th>
            <th>USER</th>
            <th>DATE</th>
            <th>AMOUNT</th>
            <th>METHOD</th>
            <th>STATUS</th>
            <th className="text-right">ACTION</th>
          </tr>
        </thead>

        <tbody>

          {transactions
            .filter(t => activeTab === "all" || (activeTab === "refunds" && t.status === "Refunded"))
            .map((txn)=>(
              <tr key={txn.id}>

                <td className="bold text-blue">{txn.id}</td>
                <td>{txn.user}</td>
                <td className="text-muted">{txn.date}</td>
                <td className="bold">₹{txn.amount}</td>
                <td className="text-muted">{txn.method}</td>

                <td>
                  <span className={`status-badge ${txn.status.toLowerCase()}`}>
                    {txn.status}
                  </span>
                </td>

                <td className="text-right">

                  {txn.status === "Completed" ? (

                    <button className="refund-trigger-btn">
                      Initiate Refund
                    </button>

                  ) : (

                    <button className="action-icon">
                      <RefreshCcw size={16}/>
                    </button>

                  )}

                </td>

              </tr>
          ))}

        </tbody>

      </table>

    </div>

  </div>

</div>


);
};

export default PaymentPage;
