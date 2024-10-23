import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" onClick={() => navigate("/survey")}>Login</button>
        </form>
        <p>Don't have an account? <span onClick={() => navigate("/signup")}>Sign Up</span></p>
      </div>
    </div>
  );
};

export default Login;
