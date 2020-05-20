import React, { useState} from 'react'
import useViewPort from './Hooks/UseViewPort'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import Introduction from './Components/Introduction'
import IconRow from './Components/IconRow'
import './style.scss'

import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

function App() {
  const {width} = useViewPort()
  const breakpoint = 1024

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
