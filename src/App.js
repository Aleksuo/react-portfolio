import React, { useState} from 'react';
import useViewPort from './Hooks/UseViewPort'
import './style.scss';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function IconRow() {
  return (
    <span className="huge">
      <a href="https://github.com/Aleksuo" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" ></i></a>
      <i className="fab fa-linkedin"></i>
      <i className="far fa-file"></i>
    </span>
  )
}
function Introduction() {
  return (
    <div className="center frontParagraph">
      <h1 className="huge">
        <span className="accent-style">></span>Full Stack Developer_
      </h1>
      <br></br>
      <IconRow></IconRow>
      <br></br>
      <span>See my work below</span>
      <br></br>
      <br></br>
      <a href="#Projects"><i className="fas fa-chevron-down huge"></i></a>
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
        <i className="fas fa-code huge"></i>
        <i className="fas fa-external-link-alt huge"></i>
      </div>
    </div>
  )
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
          <h1><span className="accent-style">></span>Suoranta_</h1>
        </div>
        <Introduction></Introduction>
      </section>

      <section id="Projects">
        <div className="section-header">
          <h1><span className="accent-style">></span>Projects_</h1>
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
          <h1><span className="accent-style">></span>Contact_</h1>
        </div>
      </section>
    </div>
  );
}

export default App;
