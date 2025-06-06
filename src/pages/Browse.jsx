import { useState } from "react";
import GadgetCard from "../components/GadgetCard";
import OwnerModal from "../components/OwnerModal";
import dummyGadgets from "../data/dummyGadgets";
import "./Browse.css";

const categories = [
  { name: "All", icon: "/category-icons/all.png" },
  { name: "Mobile", icon: "/category-icons/mobile.png" },
  { name: "Laptop", icon: "/category-icons/laptop.png" },
  { name: "Automobile", icon: "/category-icons/automobile.png" },
  { name: "Camera", icon: "/category-icons/camera.png" },
  { name: "Wearable", icon: "/category-icons/wearable.png" },
  { name: "Headphone", icon: "/category-icons/headphone.png" },
  { name: "Tablet", icon: "/category-icons/tablet.png" },
  { name: "Smart Home", icon: "/category-icons/smarthome.png" }
];

function Browse({ cart, setCart, liked, setLiked, toggleLike }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modal, setModal] = useState({ open: false, owner: null, gadget: null });

  const filteredGadgets = dummyGadgets.filter(gadget =>
    (selectedCategory === "All" || gadget.category === selectedCategory) &&
    gadget.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleCardClick(gadget) {
    setModal({ open: true, owner: gadget.owner, gadget });
  }
  function closeModal() {
    setModal({ open: false, owner: null, gadget: null });
  }
  function addToCart(gadget) {
    setCart(prev =>
      prev.find(item => item.id === gadget.id)
        ? prev
        : [...prev, { ...gadget, quantity: 1 }]
    );
  }

  return (
    <div className="browse-page">
      <div className="browse-header-row">
        <h2 className="browse-title">Browse Gadgets & Automobiles</h2>
        <input
          type="text"
          placeholder="Search devices..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search-bar"
        />
      </div>
      <div className="category-scroll-bar">
        <div className="category-scroll">
          {categories.map(cat => (
            <button
              key={cat.name}
              className={`category-circle-btn${selectedCategory === cat.name ? " active" : ""}`}
              onClick={() => setSelectedCategory(cat.name)}
              tabIndex={0}
            >
              <img src={cat.icon} alt={cat.name} className="category-icon" />
              <span className="category-label">{cat.name}</span>
            </button>
          ))}
        </div>
        <div className="category-underline"></div>
      </div>
      <div className="gadget-list">
        {filteredGadgets.length === 0 ? (
          <p>No items found. Try another search!</p>
        ) : (
          filteredGadgets.map(gadget => (
            <GadgetCard
              key={gadget.id}
              gadget={gadget}
              liked={liked?.includes(gadget.id)}
              inCart={cart?.some(item => item.id === gadget.id)}
              onLike={() => toggleLike(gadget.id)}
              onCart={() => addToCart(gadget)}
              onClick={() => handleCardClick(gadget)}
            />
          ))
        )}
      </div>
      {modal.open && (
        <OwnerModal
          owner={modal.owner}
          gadget={modal.gadget}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
export default Browse;
