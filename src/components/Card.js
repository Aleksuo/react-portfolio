import React from 'react'
import FancyTitle from './FancyTitle'

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
      <div className="card-icons">
        <a href={project.github} target="_blank" rel="noopener noreferrer"><i className="fas fa-code huge" ></i></a>
        <a href={project.demo} target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt huge" ></i></a>
      </div>
    </div>
  )
}

export default Card