import React, { useState } from 'react';
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
function App() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 })
  //const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  //const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
  //const isPortrait = useMediaQuery({ orientation: 'portrait' })
  //const isRetina = useMediaQuery({ minResolution: '2dppx' })
 
  return (
    <div className="container">
      <Navbar></Navbar>
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
          isTabletOrMobile && 
          <Carousel arrows dots slidesPerPage={1} infinite>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Carousel>
        }
        {isDesktopOrLaptop && 
           <Carousel arrows dots slidesPerPage={3} infinite>
           <Card></Card>
           <Card></Card>
           <Card></Card>
           <Card></Card>
           <Card></Card>
           <Card></Card>
         </Carousel>
        }      
        {/*}
        <div className="carousel-grid">
          <Card background={"https://via.placeholder.com/150"}></Card>
          <Card></Card>
          <Card></Card>
  </div>*/}
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
