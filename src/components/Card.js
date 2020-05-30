import React from 'react'
import FancyTitle from './FancyTitle'
import Icon from './Icon'

function Card(props) {
  const {project} = props
  return (
    <div className="card" style={{backgroundImage: `url(${process.env.PUBLIC_URL+project.img})` }}>
      <div className="card-info">
        <div></div>
        <div></div>
        <div className="card-info-element">
          <h3>Type:</h3>
          {project.type}
        </div>
        <div className="card-info-element">
          <h3>Description:</h3>
          {project.description}
        </div>
        <div className="card-info-element">
          <h3>Languages:</h3>
          {project.languages}
        </div>
        <div className="card-info-element">
        <h3>Technologies:</h3>
        {project.technologies}
      </div>
      </div>
      <h1 ><FancyTitle>{project.title}</FancyTitle></h1>
      <div></div>
      <div className="card-icons huge">
        <Icon href={project.github} icon="fas fa-code" tooltip="Code"></Icon>
        <Icon href={project.demo} icon="fas fa-external-link-alt" tooltip="Demo"></Icon>
      </div>
    </div>
  )
}

export default Card