import React, { useState } from "react";
import {
LayoutDashboard,
ShoppingBag,
Layers,
ShoppingCart,
Users,
CreditCard,
Settings,
LogOut,
Gem,
Menu
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {

const [open,setOpen] = useState(false);
const location = useLocation();

const menuItems = [
{ name:"Dashboard", path:"/admin/dashboard", icon:<LayoutDashboard size={18}/> },
{ name:"Products", path:"/admin/product", icon:<ShoppingBag size={18}/> },
{ name:"Categories", path:"/admin/category", icon:<Layers size={18}/> },
{ name:"Orders", path:"/admin/order", icon:<ShoppingCart size={18}/> },
{ name:"Users", path:"/admin/user", icon:<Users size={18}/> },
{ name:"Payments", path:"/admin/payment", icon:<CreditCard size={18}/> }
];

return (
<>
{/* Mobile Menu Button */}
<button className="mobile-menu-btn" onClick={()=>setOpen(!open)}> <Menu size={22}/> </button>


  <div className={`sidebar ${open ? "open" : ""}`}>

    <div className="brand">
      <div className="brand-icon">
        <Gem size={20}/>
      </div>

      <div>
        <h1 className="brand-title">Bronza Jewells</h1>
        <p className="brand-sub">Admin Panel</p>
      </div>
    </div>

    <div className="menu-container">

      <ul className="menu-list">

        {menuItems.map(item=>(
          <li key={item.name}>
            <Link
              to={item.path}
              className={`menu-item ${
                location.pathname === item.path ? "active" : ""
              }`}
              onClick={()=>setOpen(false)}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}

      </ul>

    </div>

    <div className="logout-container">
      <button className="logout-btn">
        <LogOut size={18}/>
        <span>Logout</span>
      </button>
    </div>

  </div>
</>


);
};

export default Sidebar;
