import React, { useState } from "react";

function PaymentModal({ gadget, onClose }) {
  const [confirmed, setConfirmed] = useState(false);

  function generateFakeOrderId() {
    const now = new Date();
    const ymd = now.toISOString().slice(0,10).replace(/-/g, "");
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `ORD-${ymd}-${rand}`;
  }

  if (confirmed) {
    return (
      <div style={{
        position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
        background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999
      }}>
        <div style={{
          background: "#fff", padding: 32, borderRadius: 12, minWidth: 300, textAlign: "center"
        }}>
          <h2 style={{ color: "#ff6b00" }}>Order Received!</h2>
          <p>Your order has been placed and details have been shared with the seller.</p>
          <div style={{
            background: "#f7f7f7", padding: "1rem 1.5rem", borderRadius: 10, fontSize: "1.08rem", margin: "1rem 0"
          }}>
            <b>Order ID:</b> <span style={{ color: "#ad4a02" }}>{generateFakeOrderId()}</span>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "#ff6b00", color: "#fff", border: "none", borderRadius: 8,
              padding: "0.7rem 2rem", fontWeight: 600, fontSize: "1.07rem", cursor: "pointer"
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
      background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999
    }}>
      <div style={{
        background: "#fff", padding: 32, borderRadius: 12, minWidth: 300, textAlign: "center"
      }}>
        <h2>Pay for: {gadget?.name || "Item"}</h2>
        <p>Amount: <b>₹{typeof gadget?.price === "number" ? gadget.price.toLocaleString("en-IN") : "0"}</b></p>
        <button
          onClick={() => setConfirmed(true)}
          style={{
            background: "#ff6b00", color: "#fff", border: "none", borderRadius: 8,
            padding: "0.7rem 2rem", fontWeight: 600, fontSize: "1.07rem", cursor: "pointer"
          }}
        >
          Proceed to Pay
        </button>
        <br />
        <button
          onClick={onClose}
          style={{
            marginTop: 10, background: "#eee", color: "#333", border: "none", borderRadius: 8,
            padding: "0.5rem 1.5rem", fontWeight: 500, fontSize: "1rem", cursor: "pointer"
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default PaymentModal;
