import React, { createContext, useState } from "react";

// Initializing with null helps with debugging
export const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (product) => {
    // Ensure product and product.id exist to prevent crashes
    if (!product || !product.id) return;

    setWishlist((prevWishlist) => {
      const exists = prevWishlist.find((item) => item.id === product.id);

      if (exists) {
        // Remove from wishlist
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        // Add to wishlist
        return [...prevWishlist, product];
      }
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};