import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import "./App.css";
import profile from "./nora.jpg";

export default function App() {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Noreen</h2>
        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>

          <img src={profile} alt="profile" className="profile"/>

          <h1>
  <ReactTyped
    strings={[
      "Hi, I'm Noreen Eliza Roy 👋",
      "Full Stack Developer 💻",
      "ML Enthusiast 🤖"
    ]}
    typeSpeed={50}
    backSpeed={30}
    loop
  />
</h1>

          <p>Building scalable and intelligent systems</p>

          <div className="links">
            <a href="mailto:noreenelizaroy27@gmail.com">Email</a>
            <a href="https://github.com/NoreenElizaRoy">GitHub</a>
            <a href="https://www.linkedin.com/in/noreen-eliza-roy-106b3b227/">LinkedIn</a>
          </div>

          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn glow">
            Download Resume
          </a>

        </motion.div>
      </section>

      {/* ABOUT */}
      <motion.section id="about" initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}}>
        <h2>About Me</h2>
        <p>
          Computer Science graduate passionate about AI, backend systems,
          and building real-world impactful applications.
        </p>
      </motion.section>

      {/* PROJECTS */}
      <section id="projects">
        <h2>Projects</h2>

        <div className="grid">

          <motion.div className="card glass" whileHover={{scale:1.05}}>
            <h3>Coauthor Recommendation System</h3>
            <p>ML + LLM system predicting research collaborations.</p>
            <a href="https://github.com/NoreenElizaRoy/Coauthor-Recommendation-System">View</a>
          </motion.div>

          <motion.div className="card glass" whileHover={{scale:1.05}}>
            <h3>Blockchain IPFS System</h3>
            <p>Decentralized storage using Ethereum & IPFS.</p>
          </motion.div>

          <motion.div className="card glass" whileHover={{scale:1.05}}>
            <h3>CityCareConnect</h3>
            <p>Complaint system with chatbot & OTP login.</p>
          </motion.div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <h2>Skills</h2>
        <div className="skills">
          <span>Python</span>
          <span>React</span>
          <span>Django</span>
          <span>Machine Learning</span>
          <span>AWS</span>
        </div>
      </section>

    </div>
  );
}