import React from 'react';
import './style.css';
import { render } from '@testing-library/react';

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
      <i className="fas fa-chevron-down" style={huge}></i>
    </div>
  )
}
function App() {
  return (
    <div>
      <nav>
        <div className="logo">
          <h1><span style={accentStyle}>></span>Suoranta_</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
          <li>
            <a href="#">Language</a>
          </li>
        </ul>
      </nav>
      <Introduction></Introduction>

    </div>
  );
}

export default App;
