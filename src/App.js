import "./App.css";
import { ReactTyped } from "react-typed";
import axios from "axios";
import profile from "./assets/Prince.jpg";
import { useEffect, useState } from "react";

function App() {

  const [repos,setRepos] = useState([]);

  useEffect(()=>{
    axios.get("https://api.github.com/users/PrinceSharma13/repos")
    .then(res=>{
      setRepos(res.data.slice(0,4));
    });
  },[]);

  return (
    <div className="container">

<header className="hero">

  <img src={profile} alt="Prince" className="profile-img"/>

  <h1>Prince Kumar Sharma</h1>

  <ReactTyped
    strings={[
      "React Developer",
      "Full Stack Developer",
      "Problem Solver"
    ]}
    typeSpeed={50}
    backSpeed={50}
    loop
  />

  <a href="#projects" className="btn">View Projects</a>

</header>


      <section className="about">

        <h2>About Me</h2>

        <p>
          I build modern web applications using React, Node.js and MongoDB.
          I enjoy building real world products and clean user interfaces.
        </p>

      </section>


      <section className="skills">

        <h2>Skills</h2>

        <div className="skill-grid">

          <div>React</div>
          <div>JavaScript</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>Node.js</div>
          <div>MongoDB</div>

        </div>

      </section>


      <section id="projects">

        <h2>Projects</h2>

        <div className="project-grid">

          {repos.map(repo=>(
            <div className="card" key={repo.id}>

              <h3>{repo.name}</h3>

              <p>{repo.description}</p>

              <a href={repo.html_url} target="_blank" rel="noreferrer">
                View Code
              </a>

            </div>
          ))}

        </div>

      </section>


      <section className="contact">

        <h2>Contact</h2>

        <p>Email: your@email.com</p>

        <p>GitHub: github.com/YOUR_GITHUB_USERNAME</p>

      </section>


      <footer>

        <p>© 2026 Prince Portfolio</p>

      </footer>

    </div>
  );
}

export default App;