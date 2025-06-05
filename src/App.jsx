// src/App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Browse from "./pages/Browse";
import Cart from "./pages/Cart";
import Liked from "./pages/Liked";

function App() {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cartGadgets");
    return stored ? JSON.parse(stored) : [];
  });
  const [liked, setLiked] = useState(() => {
    const stored = localStorage.getItem("likedGadgets");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => { localStorage.setItem("cartGadgets", JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem("likedGadgets", JSON.stringify(liked)); }, [liked]);

  function toggleLike(id) {
    setLiked(prev =>
      prev.includes(id) ? prev.filter(gid => gid !== id) : [...prev, id]
    );
  }

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} likedCount={liked.length} />
      <Routes>
        <Route path="/" element={
          <Browse
            cart={cart}
            setCart={setCart}
            liked={liked}
            setLiked={setLiked}
            dummyGadgets={dummyGadgets}
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
    </BrowserRouter>
  );
}
export default App;
