import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./CartPage.css";

const CartPage = () => {

const { cart, removeFromCart } = useContext(CartContext);

const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

return ( <div className="cart-page">


  <h1>Your Cart</h1>

  {cart.length === 0 ? (
    <p>Your cart is empty</p>
  ) : (

    <div className="cart-container">

      {cart.map((item, index) => (

        <div key={`${item.id}-${index}`} className="cart-item">

          <img src={item.image || item.img} alt={item.name} />

          <div className="cart-info">

            <h3>{item.name}</h3>

            <p>₹{item.price}</p>

            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>

          </div>

        </div>

      ))}

      <div className="cart-total">

        <h2>Total: ₹{total}</h2>

        <button className="checkout-btn">
          Checkout
        </button>

      </div>

    </div>

  )}

</div>

);
};

export default CartPage;
