import "./App.css";
import { ReactTyped } from "react-typed";
import profile from "./assets/Prince.jpg";
import { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from "react-icons/fa";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";
import quicktalk from "./assets/projects/quicktalk.png";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(()=>{
  AOS.init({ duration: 1000 });
},[]);


  return (
    <div className="container">

<nav className="navbar">
  <h2 className="logo">Prince</h2>

  <div className="nav-links">
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </div>
</nav>

<header className="hero">
  <img src={profile} alt="Prince" className="profile-img"/>

  <h1>Prince Kumar Sharma</h1>

  <ReactTyped
    strings={[
      "React Developer",
      "Full Stack Developer",
      "Problem Solver"
    ]}
    typeSpeed={60}
    backSpeed={40}
    loop
    showCursor={false}
  />

  <div className="btn-group">
<a href="/prince-resume.pdf" target="_blank" className="btn resume-btn">
  View Resume
</a>

<a href="/prince-resume.pdf" download className="btn resume-btn">
  Download Resume
</a>

</div>

</header>


      <section id="about" className="about" data-aos="fade-up">

        <h2>About Me</h2>

        <p id="aboutMe">
I am a final-year B.Tech student with a strong interest in software development and problem-solving. I enjoy building practical and user-friendly applications while continuously improving my skills in Data Structures and Algorithms. <br/> 
I have hands-on experience with technologies like React,Node.js ,Express.js, C++, and web development and know databases like MongoDb and SQL.
<br/> <br/> 
I am always eager to learn new tools and frameworks. I focus on writing clean, efficient code and developing solutions that create real-world impact. Interested in applying academic knowledge to real-world projects and contributing to innovative solutions in the tech industry. <br/> <br/>
Currently, I am seeking opportunities where I can apply my knowledge, grow as a developer, and contribute meaningfully to a team.


        </p>
<div className="timeline">

  <div className="timeline-item" style={{ left: "10%" }}>
  
  <div className="icon"><FaSchool /></div>

  {/* Default view */}
  <div className="basic-info">
    <h4>2019</h4>
  </div>

  {/* Hover view */}
  <div className="detail-info">
    <p>X (CBSE) - 88%</p>
    <span>Siddharth Public School</span>
  </div>

</div>

  <div className="timeline-item" style={{ left: "40%" }}>
  
  <div className="icon"><FaSchool /></div>

  {/* Default view */}
  <div className="basic-info">
    <h4>2021</h4>
  </div>

  {/* Hover view */}
  <div className="detail-info">
    <p>XII (CBSE) - 93.8%</p>
    <span>Siddharth Publc School</span>
  </div>

</div>

<div className="timeline-item" style={{ left: "80%" }}>
  
  <div className="icon"><FaGraduationCap /></div>

  {/* Default view */}
  <div className="basic-info">
    <h4>2026</h4>
  </div>

  {/* Hover view */}
  <div className="detail-info">
    <span>(2022-2026)</span>
    <p>B.tech (CS) - 7.7cgpa </p>
    <span>AKTU</span>
  </div>

</div>

</div>

      </section>


<section id="skills" className="skills" data-aos="fade-up">

  <h2>Skills</h2>

  <div className="skill-grid">



    <div className="skill-card">
      <FaHtml5 size={40} />
      <p>HTML</p>
    </div>

    <div className="skill-card">
      <FaCss3Alt size={40} />
      <p>CSS</p>
    </div>

    <div className="skill-card">
      <FaJs size={40} />
      <p>JavaScript</p>
    </div>

     <div className="skill-card">
      <FaReact size={40} />
      <p>React</p>
    </div>

    <div className="skill-card">
      <FaNodeJs size={40} />
      <p>Node.js</p>
    </div>

    <div className="skill-card">
      <FaDatabase size={40} />
      <p>MongoDB</p>
    </div>

  </div>

</section>


<section id="projects" data-aos="fade-up">

  <h2>Projects</h2>

  <div className="project-grid">

    <a 
      href="#"  
      target="_blank" 
      rel="noreferrer"
      className="project-link-wrapper"
    >
      <div className="project-card">

        <img src={quicktalk} alt="Quick Talk" />

        <div className="project-content">
          <h3>Quick Talk</h3>
          <p>Connect with your friends and chat endlessly</p>

          <div className="project-links">

            <a 
              href="#"   
              target="_blank" 
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Code
            </a>

          </div>
        </div>

      </div>
    </a>

  </div>

</section>


     <section id="contact" className="contact" data-aos="fade-up">

  <h2>Contact</h2>

  <div className="contact-grid">

   <a 
  href="https://mail.google.com/mail/?view=cm&to=pksgkpsdr@gmail.com&body=Hello Prince Sharma,"
  target="_blank"
  rel="noreferrer"
  className="contact-card"
>
  <FaEnvelope size={35} />
  <p>Email</p>
</a>

    <a href="https://github.com/PrinceSharma13" target="_blank" rel="noreferrer" className="contact-card">
      <FaGithub size={35} />
      <p>GitHub</p>
    </a>


     
    <a href="https://www.linkedin.com/in/prince-sharma07/" target="_blank" rel="noreferrer" className="contact-card">
      <FaLinkedin size={35} />
      <p>LinkedIn</p>
    </a>

  </div>

</section>

     <footer className="footer">

  <p>Let’s build something great together 🚀</p>

  <p className="copyright">© 2026 Prince</p>

</footer>

    </div>
  );
}

export default App;