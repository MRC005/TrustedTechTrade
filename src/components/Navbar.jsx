import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaUserCircle } from "react-icons/fa";
import LoginPopup from "./LoginPopup"; // import the popup
import "./Navbar.css";

function Navbar({ cartCount, likedCount }) {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <nav className="ttt-navbar">
      <div className="nav-left">
        <span className="ttt-logo">
          T<span className="ttt-orange">T</span>T
        </span>
      </div>
      <div className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/browse">Browse</Link>
        <Link to="/sell">Sell</Link>
      </div>
      <div className="nav-right">
        <Link to="/cart" className="icon-link">
          <FaShoppingCart size={22} title="Cart" />
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </Link>
        <Link to="/liked" className="icon-link">
          <FaHeart size={22} color="#e53935" title="Liked Items" />
          {likedCount > 0 && <span className="badge">{likedCount}</span>}
        </Link>
        <button className="user-btn" onClick={() => setShowLogin(true)}>
          <FaUserCircle size={26} title="Login" />
        </button>
      </div>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
    </nav>
  );
}
export default Navbar;
