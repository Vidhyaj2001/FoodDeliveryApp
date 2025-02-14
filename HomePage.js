import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/homepage.css";
import "../styles/global.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/about-us");
  };

  return (
    <div className="home-container">
      <Header />

      <section className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h2>Welcome to Bite Me Bistro Restaurant</h2>
          <h1>
            Savor the <span>Flavors</span> of Excellence
          </h1>
          <p>
            Discover a world where taste meets sophistication. 
            Indulge in a fine dining experience that speaks luxury.
          </p>
          <p className="offer-text">
            Enjoy <span className="discount">Flat 30% Off</span> on Your First Order!
          </p>
          <button className="explore-btn" onClick={handleExploreClick}>
            Explore More
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
  