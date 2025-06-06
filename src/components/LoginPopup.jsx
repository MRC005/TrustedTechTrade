import React, { useState } from 'react';
import './LoginPopup.css';

const LoginPopup = ({ setShowLogin }) => {
  const [curState, setCurState] = useState("Sign Up");
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onLogin = async (e) => {
    e.preventDefault();
    // Simulate login/signup (replace with real API in production)
    setTimeout(() => {
      if (curState === "Sign Up") {
        alert("Account created! Please log in.");
        setCurState("Log In");
      } else {
        alert("Logged in!");
        setShowLogin(false);
      }
    }, 500);
  };

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{curState}</h2>
          <span className="login-popup-close" onClick={() => setShowLogin(false)}>&times;</span>
        </div>
        <div className="login-popup-inputs">
          {curState !== "Log In" && (
            <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />
          )}
          <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required />
          <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
        </div>
        <button type='submit' className='btn'>{curState === "Sign Up" ? "Create Account" : "Log In"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By continuing, I agree to the terms & privacy policy.
          </p>
        </div>
        {curState === "Log In" ? (
          <p> Create a new account? <span onClick={() => setCurState("Sign Up")}>Click here</span></p>
        ) : (
          <p> Already have an account? <span onClick={() => setCurState("Log In")}>Log In here</span></p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
