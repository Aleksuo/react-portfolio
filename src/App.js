import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'
import './style.scss';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

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
      <a href="https://github.com/Aleksuo" target="_blank"><i className="fab fa-github" ></i></a>
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

function Card(props) {
  const background = useState(props.background)
  return (
    <div className="card" style={{ backgroundImage: "url(" + { background } + ")" }}>
      <div className="card-info"></div>
      <h1>Project title</h1>
      <div></div>
      <div>
        <i className="fas fa-code" style={huge}></i>
        <i className="fas fa-external-link-alt" style={huge}></i>
      </div>
    </div>
  )
}

function useViewPort() {
  const [width, setWidth] = React.useState(window.innerWidth)

  useEffect(() =>{
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  },[])

  return {width}
}

function App() {
  const {width} = useViewPort()
  const breakpoint = 1024;

  return (
    <div className="container">
      { width < breakpoint ?
         <div></div>: <Navbar></Navbar>
      }
      

      <section id="Home" >
        <div className="section-header">
          <h1><span style={accentStyle}>></span>Suoranta_</h1>
        </div>
        <Introduction></Introduction>
      </section>

      <section id="Projects">
        <div className="section-header">
          <h1><span style={accentStyle}>></span>Projects_</h1>
        </div>
        {
          width < breakpoint ?
            <Carousel arrows dots slidesPerPage={1} infinite>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </Carousel> :
            <Carousel arrows dots slidesPerPage={3} infinite>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </Carousel>
        }
      </section>
      <section id="Contact">
        <div className="section-header">
          <h1><span style={accentStyle}>></span>Contact_</h1>
        </div>
      </section>
    </div>
  );
}

export default App;
