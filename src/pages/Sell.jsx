import { useState } from "react";
import "./Sell.css";

function Sell() {
  const [form, setForm] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    condition: "",
    image: null,
    contact: "",
  });
  const [preview, setPreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === "image" && files && files[0]) {
      setForm(f => ({ ...f, image: files[0] }));
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="sell-bg">
        <div className="sell-page" style={{ textAlign: "center", padding: "3rem 1rem" }}>
          <h2 style={{ color: "#ff6b00", marginBottom: "1.5rem" }}>Listing Submitted!</h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
            Your item will be updated within the next 12 hours.
          </p>
          <button
            className="sell-btn"
            onClick={() => setSubmitted(false)}
            style={{ marginTop: "1rem" }}
          >
            List Another Item
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="sell-bg">
      <div className="sell-page">
        <div className="sell-header">
          <h1>Sell Your Gadget or Automobile</h1>
          <p>
            List your device or vehicle in minutes. Trusted buyers, secure payments, and a smooth selling experience.
          </p>
        </div>
        <form className="sell-form" onSubmit={handleSubmit}>
          <div className="sell-form-main">
            <div className="sell-form-image">
              <label htmlFor="image-upload" className="image-upload-label">
                {preview ? (
                  <img src={preview} alt="Preview" className="image-preview" />
                ) : (
                  <span className="image-placeholder">Click to upload image</span>
                )}
                <input
                  type="file"
                  id="image-upload"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  hidden
                  required
                />
              </label>
              <span className="image-guideline">JPG, PNG, max 5MB</span>
            </div>
            <div className="sell-form-fields">
              <input
                type="text"
                name="title"
                placeholder="Title (e.g. iPhone 14 Pro, Maruti Swift)"
                value={form.title}
                onChange={handleChange}
                required
              />
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="Mobile">Mobile</option>
                <option value="Laptop">Laptop</option>
                <option value="Automobile">Automobile</option>
                <option value="Camera">Camera</option>
                <option value="Wearable">Wearable</option>
                <option value="Headphone">Headphone</option>
                <option value="Tablet">Tablet</option>
                <option value="Smart Home">Smart Home</option>
              </select>
              <input
                type="number"
                name="price"
                placeholder="Price (INR)"
                min="0"
                value={form.price}
                onChange={handleChange}
                required
              />
              <select
                name="condition"
                value={form.condition}
                onChange={handleChange}
                required
              >
                <option value="">Condition</option>
                <option value="Brand New">Brand New</option>
                <option value="Like New">Like New</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Needs Repair">Needs Repair</option>
              </select>
              <textarea
                name="description"
                placeholder="Describe your item (features, warranty, usage, etc.)"
                value={form.description}
                onChange={handleChange}
                rows={3}
                required
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact Phone or Email"
                value={form.contact}
                onChange={handleChange}
                required
              />
              <button type="submit" className="sell-btn">
                Submit Listing
              </button>
            </div>
          </div>
          <div className="sell-tips">
            <h3>Tips for a Fast Sale:</h3>
            <ul>
              <li>Upload clear, well-lit photos of your item.</li>
              <li>Set a competitive price by checking similar listings.</li>
              <li>Describe your device or vehicle honestly and thoroughly.</li>
              <li>Respond quickly to buyer messages for best results.</li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sell;
