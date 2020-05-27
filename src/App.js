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

function Section(props){
  const {title, id} = props

  return(
    <section id={id}>
      <div className="section-header">
          <h1><FancyTitle>{title}</FancyTitle></h1>
      </div>
      {props.children}
    </section>
  )
}

function App() {
  const {width} = useViewPort()
  const projects = data;
  const breakpoint = 1024

  return (
    <div className="container">
      { width < breakpoint ?
         <div></div>: <Navbar></Navbar>
      }
      <Section title="Suoranta" id="Home">
        <Introduction></Introduction>
      </Section>

      <Section title="Projects" id="Projects">
      {
          width < breakpoint ?
            <Carousel arrows dots slidesPerPage={1} infinite>
              {projects.map(project => <Card project={project} key={project.id}></Card>)}
            </Carousel> :
            <Carousel arrows dots slidesPerPage={3} infinite>
              {projects.map(project => <Card project={project} key={project.id}></Card>)}
            </Carousel>
        }
      </Section>
      <Section title="Contact" id="Contact">
      </Section>
    </div>
  );
}

export default App;
