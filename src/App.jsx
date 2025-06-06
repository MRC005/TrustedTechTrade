import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Cart from "./pages/Cart";
import Liked from "./pages/Liked";
import dummyGadgets from "./data/dummyGadgets";

function App() {
  const [cart, setCart] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("cartGadgets"));
      return Array.isArray(stored) ? stored : [];
    } catch {
      return [];
    }
  });
  const [liked, setLiked] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("likedGadgets"));
      return Array.isArray(stored) ? stored : [];
    } catch {
      return [];
    }
  });

  useEffect(() => { localStorage.setItem("cartGadgets", JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem("likedGadgets", JSON.stringify(liked)); }, [liked]);

  function toggleLike(id) {
    setLiked(prev =>
      prev.includes(id) ? prev.filter(gid => gid !== id) : [...prev, id]
    );
  }

  return (
    <>
      <Navbar cartCount={cart.length} likedCount={liked.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={
          <Browse
            cart={cart}
            setCart={setCart}
            liked={liked}
            setLiked={setLiked}
            toggleLike={toggleLike}
          />
        } />
        <Route path="/cart" element={
          <Cart cart={cart} setCart={setCart} />
        } />
        <Route path="/liked" element={
          <Liked liked={liked} dummyGadgets={dummyGadgets} toggleLike={toggleLike} />
        } />
      </Routes>
    </>
  );
}
export default App;
