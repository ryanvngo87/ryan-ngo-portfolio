import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="intro">
        <h1>
          Hello, I'm <span className="name-highlight">[Ryan Ngo]</span>
        </h1>
        <p>I create modern web applications with efficiency and elegance.</p>
        <div className="cta-buttons">
          <Link to="/projects" className="btn">
            View My Projects
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Contact Me
          </Link>
        </div>
      </div>
      <div className="home-image">
        <img
          src="https://via.placeholder.com/300"
          alt="profile illustration"
          className="profile-img"
        />
      </div>
    </div>
  );
};

export default Home;
