// src/components/GadgetCard.jsx
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "./GadgetCard.css";

function GadgetCard({ gadget, liked, inCart, onLike, onCart, onClick }) {
  console.log("Rendering image:", gadget.image); // Debug: shows image path in console

  return (
    <div className="gadget-card" onClick={onClick} tabIndex={0}>
      <img src={gadget.image} alt={gadget.name} className="gadget-img" />
      <h3 className="gadget-title">{gadget.name}</h3>
      <div className="gadget-condition">
        Condition: <span>{gadget.condition}</span>
      </div>
      <div className="gadget-price">
        ₹{gadget.price.toLocaleString("en-IN")}
      </div>
      <div className="gadget-actions">
        <button
          className={`like-btn${liked ? " liked" : ""}`}
          title={liked ? "Unlike" : "Like"}
          tabIndex={-1}
          onClick={e => {
            e.stopPropagation();
            onLike();
          }}
        >
          <FaHeart />
        </button>
        <button
          className={`cart-btn${inCart ? " incart" : ""}`}
          title={inCart ? "In Cart" : "Add to Cart"}
          tabIndex={-1}
          onClick={e => {
            e.stopPropagation();
            onCart();
          }}
        >
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
}

export default GadgetCard;
