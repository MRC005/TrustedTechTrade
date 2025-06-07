import { useState } from "react";
import GadgetCard from "../components/GadgetCard";
import OwnerModal from "../components/OwnerModal";
import dummyGadgets from "../data/dummyGadgets";
import "./Browse.css";

const categories = [
    { name: "All", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Republic_Of_Korea_Broadcasting-TV_Rating_System%28ALL%29.svg/1200px-Republic_Of_Korea_Broadcasting-TV_Rating_System%28ALL%29.svg.png" },
    { name: "Mobile", icon: "https://images-cdn.ubuy.co.in/65298787a2d9081107159f4f-blackberry-curve-9330-replica-dummy.jpg" },
    { name: "Laptop", icon: "https://i.rtings.com/assets/pages/IxCXzynA/best-apple-laptops-20241009-medium.jpg?format=auto" },
    { name: "Automobile", icon: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Premier/Premier-Padmini/2082/1562906334197/front-left-side-47.jpg" },
    { name: "Camera", icon: "https://www.jiomart.com/images/product/original/491362608/canon-eos-1500d-dslr-camera-with-18-55-mm-lens-kit-digital-o491362608-p590441094-0-202108121733.jpeg?im=Resize=(1000,1000)" },
    { name: "Wearable", icon: "https://img.chrono24.com/images/uhren/34827238-adhdibmdzgxmygsf6i99avps-ExtraLarge.jpg" },
    { name: "Headphone", icon: "https://x.imastudent.com/content/0023420_marshall-monitor-ii-anc-wireless-headphones_500.jpeg" },
    { name: "Tablet", icon: "https://m.media-amazon.com/images/I/61G6WfvA9vL.jpg" },
    { name: "Smart Home", icon: "https://dailydeals365.in/wp-content/uploads/2024/05/81WaomQESKL._SL1500_.jpg" }
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
