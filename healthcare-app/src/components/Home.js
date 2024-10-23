import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="image-container">
        <img
          src="https://creamyanimation.com/wp-content/uploads/2022/01/healthcare-b.jpg"
          alt="Mental Health"
          className="mental-care-image"
        />
        <button className="get-started-btn" onClick={() => navigate("/login")}>
          Get Started
        </button>
      </div>

      {/* Introduction Section */}
      <div className="introduction-section">
        <h2>Your Mental Health Matters</h2>
        <p>
          At our healthcare platform, we believe that taking care of your mental
          well-being is essential for a happy and healthy life. Our goal is to
          provide you with the resources and tools you need to manage your mental
          health effectively.
        </p>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h3>Key Features</h3>
        <div className="features-grid">
          <div className="feature">
            <h4>Personalized Care</h4>
            <p>Receive guidance tailored to your specific needs.</p>
          </div>
          <div className="feature">
            <h4>Professional Support</h4>
            <p>Consult with certified mental health professionals.</p>
          </div>
          <div className="feature">
            <h4>Track Progress</h4>
            <p>Monitor your mental health journey with our interactive tools.</p>
          </div>
          <div className="feature">
            <h4>Stress-Relief Games</h4>
            <p>Engage in fun activities designed to reduce stress and anxiety.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h3>What Our Users Say</h3>
        <div className="testimonial">
          <p>"This app has been a game changer for my mental health. Highly recommend!"</p>
          <span>- Sarah, 29</span>
        </div>
        <div className="testimonial">
          <p>"The consultation feature helped me connect with the right therapist."</p>
          <span>- John, 35</span>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2024 Mental Health App. All rights reserved.</p>
        <div className="social-media-links">
          <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
