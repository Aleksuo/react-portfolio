import React, { useState } from 'react';
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

/*
function Carousel(){

}
*/
function Navbar() {
  return (
    <nav>
      <ul className="nav-links">
        <li><a href="#Home">Home</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </nav>
  )
}

function Card(props){
  const background = useState(props.background)
  return(
    <div className="card" style={{backgroundImage: "url("+{background}+")"}}>
      <h1>Project title</h1>
      <div></div>
      <div>
      <i className="fas fa-code" style={huge}></i>
      <i className="fas fa-external-link-alt" style={huge}></i>
      </div>
      

    </div>
  )
}
function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <section id="Home" >
        <div className="section-header">
          <h1><span style={accentStyle}>></span>Suoranta_</h1>
        </div>
        <Introduction></Introduction>
      </section>

      <section id="Projects" >
        <div className="section-header">
          <h1><span style={accentStyle}>></span>Projects_</h1>
        </div>

        <div className="carousel-grid">
          <Card background={"https://via.placeholder.com/150"}></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </section>
      <section id="Contact">
        <div className="section-header">
          <h1><span style={accentStyle}>></span>Contact_</h1>
        </div>

        {/*<a href="#Projects" className="center-top"><i className="fas fa-chevron-up" style={huge}></i></a> */}
      </section>
    </div>
  );
}

export default App;
