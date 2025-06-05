// src/pages/Browse.jsx
import { useState } from "react";
import GadgetCard from "../components/GadgetCard";
import OwnerModal from "../components/OwnerModal";
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

const dummyGadgets = [
  { id: 1, name: "iPhone 15 Pro", price: 64999, category: "Mobile", image: "/images/iphone15pro.jpg", condition: "Good", owner: { name: "Amit Sharma", phone: "+91-9876543210", email: "amitsharma@gmail.com", address: "123 MG Road, Mumbai" } },
  { id: 2, name: "Samsung Galaxy S24", price: 42999, category: "Mobile", image: "/images/samsung-s24.jpg", condition: "Excellent", owner: { name: "Priya Singh", phone: "+91-9123456789", email: "priyasingh@gmail.com", address: "45 Park Street, Kolkata" } },
  { id: 3, name: "OnePlus 12R", price: 22999, category: "Mobile", image: "/images/oneplus-12r.jpg", condition: "Fair", owner: { name: "Rahul Verma", phone: "+91-9988776655", email: "rahulverma@gmail.com", address: "78 Brigade Road, Bangalore" } },
  { id: 4, name: "Redmi Note 13 Pro", price: 12999, category: "Mobile", image: "/images/redmi-note13pro.jpg", condition: "Good", owner: { name: "Sneha Patel", phone: "+91-9876501234", email: "snehapatel@gmail.com", address: "56 Sector 18, Noida" } },
  { id: 5, name: "Vivo V29", price: 17999, category: "Mobile", image: "/images/vivo-v29.jpg", condition: "Used", owner: { name: "Vikram Rao", phone: "+91-9123454321", email: "vikramrao@gmail.com", address: "ABC Road, Guwahati" } },
  { id: 6, name: "JioPhone Next", price: 1999, category: "Mobile", image: "/images/jiophone-next.jpg", condition: "Fair", owner: { name: "Neha Gupta", phone: "+91-9988123456", email: "nehagupta@gmail.com", address: "12 Banjara Hills, Hyderabad" } },
  { id: 7, name: "MacBook Air M3", price: 58999, category: "Laptop", image: "/images/macbook-air-m3.jpg", condition: "Good", owner: { name: "Rohit Mehra", phone: "+91-9876549876", email: "rohitmehra@gmail.com", address: "34 Salt Lake, Kolkata" } },
  { id: 8, name: "Dell XPS 13", price: 69999, category: "Laptop", image: "/images/dell-xps13.jpg", condition: "Excellent", owner: { name: "Anjali Nair", phone: "+91-9123498765", email: "anjalinair@gmail.com", address: "67 Anna Nagar, Chennai" } },
  { id: 9, name: "HP Pavilion x360", price: 28999, category: "Laptop", image: "/images/hp-pavilion-x360.jpg", condition: "Used", owner: { name: "Suresh Reddy", phone: "+91-9988771234", email: "sureshreddy@gmail.com", address: "90 Gomti Nagar, Lucknow" } },
  { id: 10, name: "Lenovo IdeaPad Slim 3", price: 19999, category: "Laptop", image: "/images/lenovo-ideapad-slim3.jpg", condition: "Good", owner: { name: "Ritu Agarwal", phone: "+91-9876543211", email: "rituagarwal@gmail.com", address: "23 Jayanagar, Bangalore" } },
  { id: 11, name: "Asus VivoBook 15", price: 17999, category: "Laptop", image: "/images/asus-vivobook15.jpg", condition: "Fair", owner: { name: "Amit Sharma", phone: "+91-9876543210", email: "amitsharma@gmail.com", address: "123 MG Road, Mumbai" } },
  { id: 12, name: "Samsung Galaxy Tab A8", price: 7999, category: "Tablet", image: "/images/galaxy-tab-a8.jpg", condition: "Like New", owner: { name: "Priya Singh", phone: "+91-9123456789", email: "priyasingh@gmail.com", address: "45 Park Street, Kolkata" } },
  { id: 13, name: "Apple iPad 9th Gen", price: 14999, category: "Tablet", image: "/images/ipad-9thgen.jpg", condition: "Good", owner: { name: "Rahul Verma", phone: "+91-9988776655", email: "rahulverma@gmail.com", address: "78 Brigade Road, Bangalore" } },
  { id: 14, name: "Realme Pad 2", price: 7999, category: "Tablet", image: "/images/realme-pad2.jpg", condition: "Used", owner: { name: "Sneha Patel", phone: "+91-9876501234", email: "snehapatel@gmail.com", address: "56 Sector 18, Noida" } },
  { id: 15, name: "Canon EOS 200D II DSLR", price: 28999, category: "Camera", image: "/images/canon-eos200d.jpg", condition: "Excellent", owner: { name: "Vikram Rao", phone: "+91-9123454321", email: "vikramrao@gmail.com", address: "ABC Road, Shillong" } },
  { id: 16, name: "Sony α7 IV", price: 89999, category: "Camera", image: "/images/sony-a7iv.jpg", condition: "Good", owner: { name: "Neha Gupta", phone: "+91-9988123456", email: "nehagupta@gmail.com", address: "12 Banjara Hills, Hyderabad" } },
  { id: 17, name: "GoPro HERO10 Black", price: 19999, category: "Camera", image: "/images/gopro-hero10.jpg", condition: "Fair", owner: { name: "Rohit Mehra", phone: "+91-9876549876", email: "rohitmehra@gmail.com", address: "34 Salt Lake, Kolkata" } },
  { id: 18, name: "Apple Watch Ultra 2", price: 34999, category: "Wearable", image: "/images/apple-watch-ultra2.jpg", condition: "Good", owner: { name: "Anjali Nair", phone: "+91-9123498765", email: "anjalinair@gmail.com", address: "67 Anna Nagar, Chennai" } },
  { id: 19, name: "Mi Smart Band 6", price: 999, category: "Wearable", image: "/images/mi-band6.jpg", condition: "Like New", owner: { name: "Suresh Reddy", phone: "+91-9988771234", email: "sureshreddy@gmail.com", address: "90 Gomti Nagar, Lucknow" } },
  { id: 20, name: "Amazfit GTS 2 Mini", price: 2499, category: "Wearable", image: "/images/amazfit-gts2mini.jpg", condition: "Fair", owner: { name: "Ritu Agarwal", phone: "+91-9876543211", email: "rituagarwal@gmail.com", address: "23 Jayanagar, Bangalore" } },
  { id: 21, name: "Noise ColorFit Pulse 2", price: 799, category: "Wearable", image: "/images/noise-colorfit-pulse2.jpg", condition: "Used", owner: { name: "Amit Sharma", phone: "+91-9876543210", email: "amitsharma@gmail.com", address: "123 MG Road, Mumbai" } },
  { id: 22, name: "Samsung Galaxy Watch 4", price: 4999, category: "Wearable", image: "/images/galaxy-watch4.jpg", condition: "Good", owner: { name: "Priya Singh", phone: "+91-9123456789", email: "priyasingh@gmail.com", address: "45 Park Street, Kolkata" } },
  { id: 23, name: "boAt Airdopes 141", price: 499, category: "Headphone", image: "/images/boat-airdopes141.jpg", condition: "Fair", owner: { name: "Rahul Verma", phone: "+91-9988776655", email: "rahulverma@gmail.com", address: "78 Brigade Road, Bangalore" } },
  { id: 24, name: "Sony WH-CH520", price: 1999, category: "Headphone", image: "/images/sony-whch520.jpg", condition: "Excellent", owner: { name: "Sneha Patel", phone: "+91-9876501234", email: "snehapatel@gmail.com", address: "56 Sector 18, Noida" } },
  { id: 25, name: "Realme Buds Wireless 2 Neo", price: 599, category: "Headphone", image: "/images/realme-buds2neo.jpg", condition: "Good", owner: { name: "Vikram Rao", phone: "+91-9123454321", email: "vikramrao@gmail.com", address: "ABC Road, Imphal" } },
  { id: 26, name: "Amazon Echo Dot (5th Gen)", price: 1999, category: "Smart Home", image: "/images/echo-dot5.jpg", condition: "Good", owner: { name: "Neha Gupta", phone: "+91-9988123456", email: "nehagupta@gmail.com", address: "12 Banjara Hills, Hyderabad" } },
  { id: 27, name: "Mi Smart LED Bulb", price: 299, category: "Smart Home", image: "/images/mi-ledbulb.jpg", condition: "Like New", owner: { name: "Rohit Mehra", phone: "+91-9876549876", email: "rohitmehra@gmail.com", address: "34 Salt Lake, Kolkata" } },
  { id: 28, name: "Google Nest Mini", price: 1299, category: "Smart Home", image: "/images/google-nestmini.jpg", condition: "Used", owner: { name: "Anjali Nair", phone: "+91-9123498765", email: "anjalinair@gmail.com", address: "67 Anna Nagar, Chennai" } },
  { id: 29, name: "TP-Link Smart Plug", price: 499, category: "Smart Home", image: "/images/tplink-smartplug.jpg", condition: "Good", owner: { name: "Suresh Reddy", phone: "+91-9988771234", email: "sureshreddy@gmail.com", address: "90 Gomti Nagar, Lucknow" } },
  { id: 30, name: "2025 Hyundai Creta", price: 799999, category: "Automobile", image: "/images/hyundai-creta.jpg", condition: "Fair", owner: { name: "Ritu Agarwal", phone: "+91-9876543211", email: "rituagarwal@gmail.com", address: "23 Jayanagar, Bangalore" } },
  { id: 31, name: "Tata Nexon EV", price: 699999, category: "Automobile", image: "/images/tata-nexon-ev.jpg", condition: "Good", owner: { name: "Amit Sharma", phone: "+91-9876543210", email: "amitsharma@gmail.com", address: "123 MG Road, Mumbai" } },
  { id: 32, name: "Maruti Suzuki Fronx", price: 399999, category: "Automobile", image: "/images/maruti-fronx.jpg", condition: "Used", owner: { name: "Priya Singh", phone: "+91-9123456789", email: "priyasingh@gmail.com", address: "45 Park Street, Kolkata" } },
  { id: 33, name: "Honda Activa 6G", price: 29999, category: "Automobile", image: "/images/honda-activa6g.jpg", condition: "Excellent", owner: { name: "Rahul Verma", phone: "+91-9988776655", email: "rahulverma@gmail.com", address: "78 Brigade Road, Bangalore" } },
  { id: 34, name: "Royal Enfield Classic 350", price: 89999, category: "Automobile", image: "/images/classic350.jpg", condition: "Good", owner: { name: "Sneha Patel", phone: "+91-9876501234", email: "snehapatel@gmail.com", address: "56 Sector 18, Shillong" } },
  { id: 35, name: "Hero Splendor Plus", price: 24999, category: "Automobile", image: "/images/splendor-plus.jpg", condition: "Fair", owner: { name: "Vikram Rao", phone: "+91-9123454321", email: "vikramrao@gmail.com", address: "ABC Road, Agartala" } }
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
              liked={liked.includes(gadget.id)}
              inCart={cart.some(item => item.id === gadget.id)}
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
