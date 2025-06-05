// src/pages/Cart.jsx
import "./Cart.css";
function Cart({ cart, setCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  function removeFromCart(id) {
    setCart(prev => prev.filter(item => item.id !== id));
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
        </>
      )}
    </div>
  );
}
export default Cart;
