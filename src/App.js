import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import {
  FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJs, FaAws
} from "react-icons/fa";
import {
  SiDjango, SiPostgresql, SiPostman, SiOpencv, SiLatex
} from "react-icons/si";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import "./App.css";
import profile from "./nora.jpg";

export default function App() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "skills"];
      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (window.scrollY >= el.offsetTop - 200) {
          setActive(sec);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>

      {/* CURSOR GLOW */}
      <div className="cursor-glow"></div>

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo gradient-text">Noreen Eliza Roy</h2>
        <div>
          <a href="#about" className={active==="about" ? "active" : ""}>About</a>
          <a href="#projects" className={active==="projects" ? "active" : ""}>Projects</a>
          <a href="#skills" className={active==="skills" ? "active" : ""}>Skills</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>

          <img src={profile} alt="profile" className="profile"/>

          <h1 className="gradient-text">
            <ReactTyped
              strings={[
                "Hi, I'm Noreen Eliza Roy 👋",
                "Full Stack Developer 💻",
                "AI & ML Enthusiast 🤖"
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h1>

          <p>Building scalable, intelligent & AI-powered systems</p>

          <div className="links">
  <a href="mailto:noreenelizaroy27@gmail.com">
    <FaEnvelope /> Email
  </a>

  <a href="https://github.com/NoreenElizaRoy" target="_blank" rel="noreferrer">
    <FaGithub /> GitHub
  </a>

  <a href="https://www.linkedin.com/in/noreen-eliza-roy-106b3b227/" target="_blank" rel="noreferrer">
    <FaLinkedin /> LinkedIn
  </a>
</div>

          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn glow">
            Download Resume
          </a>

        </motion.div>
      </section>

      {/* ABOUT */}
      <motion.section id="about" initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}}>
        <h2 className="gradient-text">About Me</h2>
        <p>
  I’m Noreen Eliza Roy, a Computer Science postgraduate student with a strong
  passion for building intelligent, scalable, and user-focused digital solutions.
  <br /><br />

  With a solid foundation in Python, full-stack web development, and machine learning,
  I enjoy working at the intersection of software engineering and AI. My experience
  spans from developing RESTful APIs and backend systems to designing data-driven
  applications using modern technologies.
  <br /><br />

  I’ve worked with tools and frameworks like Django, React, PostgreSQL, and AWS,
  and I am particularly focused on Machine Learning, Deep Learning, Large Language Models (LLMs),
  and Network Analysis.
  <br /><br />

  Beyond technical skills, I bring strong leadership and mentoring experience,
  having guided over 100 students and led technical initiatives at the campus level.
  I enjoy collaborating, solving complex problems, and continuously learning new technologies.
  <br /><br />
</p>
      </motion.section>

      {/* PROJECTS */}
      <motion.section id="projects" initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}}>
        <h2 className="gradient-text">Projects</h2>

        <div className="grid">

          <motion.div className="card glass" whileHover={{scale:1.05}}>
  <h3>Coauthor Recommendation System</h3>

  <p className="tech">
    Tech: Python • Machine Learning • LLMs • Network Analysis
  </p>

  <p>
    This project focuses on predicting potential research collaborations using 
    advanced machine learning and graph-based techniques.
  </p>

  <ul className="highlights">
    <li>Built an intelligent system to recommend research collaborators</li>
    <li>Used LLMs to extract insights from academic datasets</li>
    <li>Applied graph/network analysis to identify collaboration patterns</li>
    <li>Designed algorithms to improve prediction accuracy</li>
    <li>Developed scalable architecture for large datasets</li>
  </ul>


  <a 
    href="https://github.com/NoreenElizaRoy/Coauthor-Recommendation-System"
    target="_blank"
    rel="noreferrer"
  >
    View Project →
  </a>
</motion.div>

          <motion.div className="card glass" whileHover={{scale:1.05}}>
  <h3>Blockchain Empowered IPFS System</h3>

  <p className="tech">
    Tech: Django • Python • Ethereum • IPFS • SQLyog • JavaScript • AWS S3
  </p>

  <p>
    A decentralized storage system designed to ensure secure, transparent, 
    and tamper-proof data management.
  </p>

  <ul className="highlights">
    <li>Integrated Ethereum blockchain with IPFS for decentralized storage</li>
    <li>Ensured data integrity using blockchain hashing techniques</li>
    <li>Developed smart contracts for validation and access control</li>
    <li>Implemented user-controlled access via blockchain hash references</li>
    <li>Combined AWS S3 with decentralized storage for scalability</li>
    <li>Built full-stack system using Django backend and interactive frontend</li>
  </ul>


  <a 
    href="https://github.com/NoreenElizaRoy/BlockchainEmpoweredIPFS.git"
    target="_blank"
    rel="noreferrer"
  >
    View Project →
  </a>

</motion.div>
<motion.div className="card glass" whileHover={{scale:1.05}}>
  <h3>CityCareConnect</h3>

  <p className="tech">
    Tech: Django • PostgreSQL • HTML • CSS • JavaScript
  </p>

  <p>
    A smart civic complaint management system that improves communication 
    between citizens and authorities.
  </p>

  <ul className="highlights">
    <li>Developed complaint registration with real-time status tracking</li>
    <li>Built admin dashboard for efficient monitoring and management</li>
    <li>Implemented OTP-based secure authentication</li>
    <li>Integrated chatbot to enhance user experience</li>
    <li>Designed responsive UI for all devices</li>
    <li>Enabled structured workflows for faster resolution</li>
  </ul>

  <a 
    href="https://github.com/NoreenElizaRoy/CityCareConnect.git"
    target="_blank"
    rel="noreferrer"
  >
    View Project →
  </a>
</motion.div>

          {/* NEW DEEP LEARNING PROJECTS */}

     

          

        </div>
      </motion.section>

      {/* SKILLS */}
      <motion.section id="skills" initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}}>
        <h2 className="gradient-text">Tech Stack</h2>

        <div className="skills icons">

          {[
            {icon:<FaPython/>, name:"Python"},
            {icon:<FaJs/>, name:"JavaScript"},
            {icon:<FaReact/>, name:"React"},
            {icon:<FaNodeJs/>, name:"Node.js"},
            {icon:<SiDjango/>, name:"Django"},
            {icon:<SiPostgresql/>, name:"PostgreSQL"},
            {icon:<FaHtml5/>, name:"HTML"},
            {icon:<FaCss3Alt/>, name:"CSS"},
            {icon:<FaAws/>, name:"AWS"},
            {icon:<SiPostman/>, name:"Postman"},
            {icon:<SiOpencv/>, name:"OpenCV"},
            {icon:<SiLatex/>, name:"LaTeX"},
          ].map((skill, i) => (
            <motion.div
              key={i}
              className="skill-card"
              whileHover={{ scale: 1.15, rotate: 2 }}
            >
              {skill.icon}
              <span>{skill.name}</span>
            </motion.div>
          ))}

        </div>

      </motion.section>

    </div>
  );
}