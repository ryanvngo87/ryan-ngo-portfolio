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
          <h3>Skills</h3>
          <p>
            <b>Languages: </b> Java, C#, JavaScript, CSS, HTML, SQL
          </p>
          <p>
            <b>Technologies:</b> ASP.NET, Entity Framework, SQL Server
            Management Studio, Git, React, DevExpress, Azure DevOps Server,
            Visual Studio, VS Code
          </p>
        </div>
        <div className="info-card">
          <img
            src="/icons/education.png"
            alt="Education Icon"
            className="info-icon"
          />
          <h3>Education</h3>
          <p>
            <img
              src="/icons/utd_logo.png"
              alt="UTD Logo"
              className="university-logo"
            />
            B.S. in Computer Information Systems & Technology - The University
            of Texas at Dallas
          </p>
        </div>
        <div className="info-card">
          <img
            src="/icons/experience.png"
            alt="Experience Icon"
            className="info-icon"
          />
          <h3>Experience</h3>
          <p>Software Development Intern - Daisy Brand, Dallas, TX</p>
        </div>
      </div>
    </div>
  );
};

export default About;
