import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      
      {/* HERO */}
      <section className="hero">
        <h1>Noreen Eliza Roy</h1>
        <p>Computer Science Engineer | Full Stack Developer | ML Enthusiast</p>
        <div className="links">
          <a href="mailto:noreenelizaroy27@gmail.com">Email</a>
          <a href="https://github.com/NoreenElizaRoy">GitHub</a>
          <a href="https://www.linkedin.com/in/noreen-eliza-roy-106b3b227/">LinkedIn</a>
        </div>
      </section>

      {/* ABOUT */}
      <section>
        <h2>About Me</h2>
        <p>
          Computer Science graduate with strong skills in Python, JavaScript, and backend development.
          Passionate about building scalable applications, working with APIs, and exploring AI/ML.
        </p>
      </section>

      {/* EDUCATION */}
      <section>
        <h2>Education</h2>
        <p><strong>M.Tech CSE</strong> - APJ Abdul Kalam Technological University (2025–Present)</p>
        <p><strong>B.Tech CSE (CGPA: 9.32)</strong> - APJ Abdul Kalam Technological University (2021–2025)</p>
      </section>

      {/* PROJECTS */}
      <section>
        <h2>Projects</h2>

        <div className="card">
          <h3>Coauthor Recommendation System</h3>
          <p>ML + LLM based system to predict research collaborations using graph analysis.</p>
        </div>

        <div className="card">
          <h3>Blockchain Empowered IPFS System</h3>
          <p>Decentralized storage system using Ethereum, IPFS, Django, and AWS.</p>
        </div>

        <div className="card">
          <h3>CityCareConnect</h3>
          <p>Complaint management platform with OTP authentication and chatbot support.</p>
        </div>

      </section>

      {/* SKILLS */}
      <section>
        <h2>Skills</h2>
        <ul>
          <li>Python, C/C++, JavaScript</li>
          <li>Django, React</li>
          <li>Machine Learning, LLMs</li>
          <li>AWS, PostgreSQL, MySQL</li>
        </ul>
      </section>

      {/* ACHIEVEMENTS */}
      <section>
        <h2>Achievements</h2>
        <ul>
          <li>Tinkerhub Campus Lead</li>
          <li>Mentored 100+ students (IEEE)</li>
          <li>Technical Event Coordinator - Techfest</li>
        </ul>
      </section>

    </div>
  );
}