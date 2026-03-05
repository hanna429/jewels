import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <BrowserRouter>
          <CustomNavbar />
          
          <main style={{ minHeight: '80vh' }}>
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<ShopPage />} />
              
              {/* Category Pages */}
              <Route path="/ring" element={<RingPage />} />
              <Route path="/necklace" element={<NecklacePage />} />
              <Route path="/earings" element={<EarringsPage />} />
              <Route path="/bracelets" element={<BraceletPage />} />
              
              {/* Utility Pages */}
              <Route path="/cart" element={<CartPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
            </Routes>
          </main>

          <Footer />
        </BrowserRouter>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;