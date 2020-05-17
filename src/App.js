import React from 'react';
import './style.css';

const accentStyle = {
  color: "#BF6464",
}
const huge = {
  fontSize: "48px"
}

const socialIcons = {
  fontSize: "48px"
}

function IconRow() {
  return (
    <span style={socialIcons}>
      <i className="fab fa-github"></i>
      <i className="fab fa-linkedin"></i>
      <i className="far fa-file"></i>
    </span>
  )
}
function Introduction() {
  return (
    <div className="center frontParagraph">
      <h1 style={huge}>
        <span style={accentStyle}>></span>Full Stack Developer_
      </h1>
      <br></br>
      <IconRow></IconRow>
      <br></br>
      <span>See my work below</span>
      <br></br>
      <br></br>
      <a href="#Projects"><i className="fas fa-chevron-down" style={huge}></i></a>
    </div>
  )
}
function App() {
  return (
    <div>
      <section id="Landing">
        <nav>
          <div className="logo">
            <h1><span style={accentStyle}>></span>Suoranta_</h1>
          </div>
          <ul className="nav-links">
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Contact">Contact</a></li>
            <li>
              <a href="#">Language</a>
            </li>
          </ul>
        </nav>
        <Introduction></Introduction>
      </section>
      <section id="Projects">
        <h1>Projects</h1>
        <a href="#Landing" className="center-top"><i className="fas fa-chevron-up" style={huge}></i></a>
        <a href="#Contact" className="center-bottom"><i className="fas fa-chevron-down" style={huge}></i></a>
      </section>
      <section id="Contact">
        <h1>Contact</h1>
        <a href="#Projects" className="center-top"><i className="fas fa-chevron-up" style={huge}></i></a>
      </section>
      </div>
  );
}

export default App;
