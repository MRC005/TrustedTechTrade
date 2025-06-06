import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-bg">
      <div className="home-content">
        <div className="logo-container">
          <div className="ttt-logo">T<span>T</span>T</div>
        </div>
        <h1>TrustedTechTrade</h1>
        <h2>Your Premium Gadget Marketplace</h2>
        <p>
          Buy and sell certified pre-owned tech with confidence.<br />
          Every device is quality-checked for your peace of mind.
        </p>
        <div className="home-buttons">
          <Link to="/browse">
            <button>Browse Devices</button>
          </Link>
          <Link to="/sell">
            <button>Sell Your Device</button>
          </Link>
        </div>
      </div>
      <footer className="ttt-footer">
        <div className="footer-content">
          <div>
            <strong>Contact:</strong>{" "}
            <a href="mailto:machumroy.choudhury@vitstudent.ac.in">machumroy.choudhury@vitstudent.ac.in</a> | +91-9435100001
          </div>
          <div>
            <strong>Address:</strong> 01,G.S Road, Guwahati, Assam, India
          </div>
          <div>
            &copy; {new Date().getFullYear()} TrustedTechTrade. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Home;
