import React from "react";
import { motion } from "framer-motion";
import "./App.css";
import profile from "./nora.jpg";

export default function App() {
  return (
    <div className="container">

      {/* HERO */}
      <section className="hero">
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>

        

        <img src={profile} />
         
          <h1>Noreen Eliza Roy</h1>
          <p>Full Stack Developer | ML Enthusiast</p>

          <div className="links">
            <a href="mailto:noreenelizaroy27@gmail.com">Email</a>
            <a href="https://github.com/NoreenElizaRoy">GitHub</a>
            <a href="https://www.linkedin.com/in/noreen-eliza-roy-106b3b227/">LinkedIn</a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <motion.section initial={{y:50, opacity:0}} whileInView={{y:0, opacity:1}}>
        <h2>About Me</h2>
        <p>
          Computer Science graduate skilled in Python, React, and backend development.
          Passionate about AI, scalable systems, and building impactful products.
        </p>
      </motion.section>

      {/* PROJECTS */}
      <section>
        <h2>Projects</h2>

        <div className="grid">

          <motion.div className="card" whileHover={{scale:1.05}}>
            <h3>Coauthor Recommendation System</h3>
            <p>ML + LLM based system predicting research collaborations.</p>
          </motion.div>

          <motion.div className="card" whileHover={{scale:1.05}}>
            <h3>Blockchain IPFS System</h3>
            <p>Decentralized storage using Ethereum + IPFS.</p>
          </motion.div>

          <motion.div className="card" whileHover={{scale:1.05}}>
            <h3>CityCareConnect</h3>
            <p>Complaint management platform with chatbot + OTP.</p>
          </motion.div>

        </div>
      </section>

      {/* SKILLS */}
      <section>
        <h2>Skills</h2>
        <div className="skills">
          <span>Python</span>
          <span>React</span>
          <span>Django</span>
          <span>Machine Learning</span>
          <span>AWS</span>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section>
        <h2>Achievements</h2>
        <ul>
          <li>Tinkerhub Campus Lead</li>
          <li>Mentored 100+ students (IEEE)</li>
          <li>Techfest Technical Coordinator</li>
        </ul>
      </section>

    </div>
  );
}