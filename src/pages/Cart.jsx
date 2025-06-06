import { useState } from "react";
import PaymentModal from "../components/PaymentModal";
import "./Cart.css";

function Cart({ cart, setCart }) {
  const [showPayment, setShowPayment] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  function removeFromCart(id) {
    setCart(prev => prev.filter(item => item.id !== id));
  }

  function handleProceedToPay() {
    setShowPayment(true);
  }

  function closePaymentModal() {
    setShowPayment(false);
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-img" />
                <div>
                  <div>{item.name}</div>
                  <div>₹{item.price.toLocaleString("en-IN")}</div>
                  <div>Condition: {item.condition}</div>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <b>Total:</b> ₹{total.toLocaleString("en-IN")}
          </div>
          <button
            className="pay-btn"
            style={{ marginTop: "2rem", fontSize: "1.1rem", padding: "0.8rem 2.5rem" }}
            onClick={handleProceedToPay}
          >
            Proceed to Pay
          </button>
        </>
      )}
      {showPayment && (
        <PaymentModal
          gadget={{ name: "All Items", price: total }}
          onClose={closePaymentModal}
        />
      )}
    </div>
  );
}
export default Cart;
