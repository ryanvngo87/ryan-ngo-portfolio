import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img
            src="https://via.placeholder.com/200"
            alt="profile"
            className="profile-img-2"
          />
        </div>
      </div>

      <div className="bio-section">
        <h2>Who am I?</h2>
        <p>
          My name is Ryan Ngo, and I am an aspiring software developer that has
          a passion for creating cool stuff, and programming allows me to
          explore my creativity through meaningful projects.
        </p>
      </div>

      <div className="info-section">
        <div className="info-card">
          <img
            src="/icons/skills.png"
            alt="Skills Icon"
            className="info-icon"
          />
          <h4>Skills</h4>
          <p>
            JavaScript, React, C#, ASP.NET MVC, Entity Framework, SQL, HTML, CSS
          </p>
        </div>
        <div className="info-card">
          <img
            src="/icons/education.png"
            alt="Education Icon"
            className="info-icon"
          />
          <h4>Education</h4>
          <p>
            BS in Computer Information Systems & Technology - University of
            Texas at Dallas
          </p>
        </div>
        <div className="info-card">
          <img
            src="/icons/experience.png"
            alt="Experience Icon"
            className="info-icon"
          />
          <h4>Experience</h4>
          <p>Software Development Intern - Daisy Brand, Dallas, TX</p>
        </div>
      </div>
    </div>
  );
};

export default About;
