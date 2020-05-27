import React from 'react'
import useViewPort from './Hooks/UseViewPort'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import Introduction from './Components/Introduction'
import FancyTitle from './Components/FancyTitle'
import data from './data/data.json'
import './style.scss'

import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

function App() {
  const {width} = useViewPort()
  const projects = data;
  const breakpoint = 1024

  return (
    <div className="container">
      { width < breakpoint ?
         <div></div>: <Navbar></Navbar>
      }
      <section id="Home" >
        <div className="section-header">
          <h1><FancyTitle>Suoranta</FancyTitle></h1>
        </div>
        <Introduction></Introduction>
      </section>

      <section id="Projects">
        <div className="section-header">
        < h1><FancyTitle>Projects</FancyTitle></h1>
        </div>
        {
          width < breakpoint ?
            <Carousel arrows dots slidesPerPage={1} infinite>
              {projects.map(project => <Card project={project} key={project.id}></Card>)}
            </Carousel> :
            <Carousel arrows dots slidesPerPage={3} infinite>
              {projects.map(project => <Card project={project} key={project.id}></Card>)}
            </Carousel>
        }
      </section>
      <section id="Contact">
        <div className="section-header">
          <h1><FancyTitle>Contact</FancyTitle></h1>
        </div>
      </section>
    </div>
  );
}

export default App;
