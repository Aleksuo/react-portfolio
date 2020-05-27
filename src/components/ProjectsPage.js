import React from 'react'
import Section from './Section'
import Card from './Card'

import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

import data from '../data/data.json'

function ProjectsPage(props){
    const {display} = props
    const projects = data
    return(
      <Section title="Projects" id="Projects">  
              <Carousel arrows dots slidesPerPage={display} infinite>
                {projects.map(project => <Card project={project} key={project.id}></Card>)}
              </Carousel> 
      </Section>
    )
}

export default ProjectsPage