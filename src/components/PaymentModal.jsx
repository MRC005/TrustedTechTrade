// src/components/PaymentModal.jsx
import "./PaymentModal.css";

function PaymentModal({ gadget, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={e => e.stopPropagation()}>
        <h3>Payment for {gadget.name}</h3>
        <img src={gadget.image} alt={gadget.name} className="modal-gadget-img" />
        <div className="modal-detail">
          <div><b>Price:</b> ₹{gadget.price.toLocaleString("en-IN")}</div>
        </div>
        <div className="payment-section">
          <div className="payment-methods">
            <div className="pay-opt">UPI</div>
            <div className="pay-opt">Net Banking</div>
            <div className="pay-opt">Credit/Debit Card</div>
            <div className="pay-opt">Wallet</div>
          </div>
          <button className="pay-btn" onClick={onClose}>Simulate Payment</button>
        </div>
        <button className="modal-close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PaymentModal;
