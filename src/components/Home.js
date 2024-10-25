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
        <p>I like to build stuff.</p>
        <div className="cta-buttons">
          <Link to="/projects" className="btn">
            View My Projects
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Contact Me
          </Link>
          <a
            href="/Ryan Ngo Resume 10-25-2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-resume"
          >
            Resume/CV
          </a>
        </div>
      </div>
      <div className="home-image">
        <img
          src="./images/ryan-ngo.jpg"
          alt="profile illustration"
          className="profile-img"
        />
      </div>
    </div>
  );
};

export default Home;
