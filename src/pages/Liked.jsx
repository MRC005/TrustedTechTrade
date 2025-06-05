// src/pages/Liked.jsx
import "./Liked.css";
function Liked({ liked, dummyGadgets, toggleLike }) {
  const likedItems = dummyGadgets.filter(g => liked.includes(g.id));
  return (
    <div className="liked-page">
      <h2>Liked Items</h2>
      {likedItems.length === 0 ? (
        <p>No liked items yet.</p>
      ) : (
        <div className="gadget-list">
          {likedItems.map(item => (
            <div key={item.id} className="gadget-card">
              <img src={item.image} alt={item.name} className="gadget-img" />
              <h3>{item.name}</h3>
              <div>₹{item.price.toLocaleString("en-IN")}</div>
              <button onClick={() => toggleLike(item.id)}>Remove from Liked</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Liked;
