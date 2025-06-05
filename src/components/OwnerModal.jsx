// src/components/OwnerModal.jsx
import "./OwnerModal.css";
function OwnerModal({ owner, gadget, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={e => e.stopPropagation()}>
        <h3>{gadget.name}</h3>
        <img src={gadget.image} alt={gadget.name} className="modal-gadget-img" />
        <div className="modal-detail">
          <div><b>Condition:</b> {gadget.condition}</div>
          <div><b>Price:</b> ₹{gadget.price.toLocaleString("en-IN")}</div>
        </div>
        <div className="modal-owner">
          <div><b>Owner:</b> {owner.name}</div>
          <div><b>Address:</b> {owner.address}</div>
          <div><b>Phone:</b> {owner.phone}</div>
          <div><b>Email:</b> {owner.email}</div>
        </div>
        <button className="modal-close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
export default OwnerModal;
