import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit"onClick={() => navigate("/login")}>Sign Up</button>
        </form>
        <p>Already have an account? <span onClick={() => navigate("/login")}>Login</span></p>
      </div>
    </div>
  );
};

export default Signup;
