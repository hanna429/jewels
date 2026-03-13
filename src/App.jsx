import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Providers
import { CartProvider } from './Components/Navelements/CartContext';
import { WishlistProvider } from './Components/sharedComonent/WishListContext';

// Components
import Home from './Components/Pages/Home';
import CustomNavbar from './Components/sharedComonent/Navbar';
import Footer from './Components/sharedComonent/Footer';
import ShopPage from './Components/Shop/ShopPage';
import RingPage from './Components/Shop/RingPage';
import NecklacePage from './Components/Shop/Neclacepage';
import EarringsPage from './Components/Shop/EaeingPage';
import BraceletPage from './Components/Shop/BraceletPage';
import CartPage from './Components/Navelements/AddtoCart';
import WishlistPage from './Components/sharedComonent/Wishlist'; 
import UserProfile from './Components/Navelements/Profile';

// Admin
import Sidebar from './Components/Admin/sidebar/Sidebar';
import DashboardContent from './Components/Admin/Dashboard/Dashboadrs';
import ProductPage from './Components/Admin/Dashboard/ProductPage';
import ProductAdmin from './Components/Admin/Dashboard/AddProduct';
import Category from './Components/Admin/Dashboard/Category';
import OrderDetails from './Components/Admin/Dashboard/OrderPage';
import UserPage from './Components/Admin/Dashboard/UserPage';
import PaymentPage from './Components/Admin/Dashboard/PaymentPage';



function AppContent() {

  const location = useLocation();

  // Check if current route is admin
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      {/* Hide Navbar for admin */}
      {!isAdmin && <CustomNavbar />}

      <main style={{ minHeight: '80vh' }}>

        <Routes>

          {/* User Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />

          <Route path="/ring" element={<RingPage />} />
          <Route path="/necklace" element={<NecklacePage />} />
          <Route path="/earings" element={<EarringsPage />} />
          <Route path="/bracelets" element={<BraceletPage />} />

          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/profile" element={<UserProfile />} />

          {/* Admin Pages */}
          <Route path="/admin/sidebar" element={<Sidebar />} />
          <Route path='/admin/dashboard' element={<DashboardContent/>}/>
          <Route path='/admin/product' element={<ProductPage/>}/>
          <Route path='/admin/addproduct' element={<ProductAdmin/>}/>
          <Route path='/admin/category' element={<Category/>}/>
          <Route path='/admin/order' element={<OrderDetails/>}/>
          <Route path='/admin/user' element={<UserPage/>}/>
          <Route path='/admin/payment' element={<PaymentPage/>}/>







        </Routes>

      </main>

      {/* Hide Footer for admin */}
      {!isAdmin && <Footer />}
    </>
  );
}


function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;