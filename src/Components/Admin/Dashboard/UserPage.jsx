import React, { useState } from "react";
import { Search, Trash2, Ban, UserCheck } from "lucide-react";
import Sidebar from "../sidebar/Sidebar";
import "./UserPage.css";

const UserPage = () => {

const [users, setUsers] = useState([
{ id: 1, name: "Priya Sharma", email: "[priya@email.com](mailto:priya@email.com)", joined: "Jan 15, 2026", orders: 12, status: "Active" },
{ id: 2, name: "Anita Verma", email: "[anita@email.com](mailto:anita@email.com)", joined: "Feb 3, 2026", orders: 5, status: "Active" },
{ id: 3, name: "Rahul Mehta", email: "[rahul@email.com](mailto:rahul@email.com)", joined: "Dec 20, 2025", orders: 8, status: "Active" },
{ id: 4, name: "Sneha Patel", email: "[sneha@email.com](mailto:sneha@email.com)", joined: "Nov 10, 2025", orders: 3, status: "Blocked" },
{ id: 5, name: "Vikram Singh", email: "[vikram@email.com](mailto:vikram@email.com)", joined: "Mar 1, 2026", orders: 2, status: "Active" },
]);

const deleteUser = (id) => {
setUsers(users.filter((user) => user.id !== id));
};

const toggleStatus = (id) => {
setUsers(users.map(user =>
user.id === id
? { ...user, status: user.status === "Active" ? "Blocked" : "Active" }
: user
));
};

return (


<div className="admin-layout">

  {/* Sidebar */}
  <Sidebar />

  {/* Main Content */}
  <div className="admin-main">

    <div className="view-header">
      <div>
        <h1>Users</h1>
        <p>Manage registered customers.</p>
      </div>
    </div>

    {/* Search */}
    <div className="search-bar">
      <input type="text" placeholder="Search users..." />
    </div>

    {/* Users Table */}
    <div className="data-card">

      <table className="admin-table">

        <thead>
          <tr>
            <th>USER</th>
            <th>JOINED</th>
            <th>ORDERS</th>
            <th>STATUS</th>
            <th className="text-right">ACTIONS</th>
          </tr>
        </thead>

        <tbody>

          {users.map((user) => (

            <tr key={user.id}>

              <td>
                <div className="user-info-cell">

                  <div className="user-avatar">
                    {user.name.charAt(0)}
                  </div>

                  <div>
                    <div className="user-name">{user.name}</div>
                    <div className="user-email">{user.email}</div>
                  </div>

                </div>
              </td>

              <td className="text-muted">{user.joined}</td>

              <td className="bold">{user.orders}</td>

              <td>
                <span className={`status-badge ${user.status.toLowerCase()}`}>
                  {user.status}
                </span>
              </td>

              <td className="text-right">

                <button
                  className="action-icon"
                  onClick={() => toggleStatus(user.id)}
                >
                  {user.status === "Active"
                    ? <Ban size={18}/>
                    : <UserCheck size={18}/>}
                </button>

                <button
                  className="action-icon delete"
                  onClick={() => deleteUser(user.id)}
                >
                  <Trash2 size={18}/>
                </button>

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

export default UserPage;
