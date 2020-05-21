import React, { useState } from 'react'

function Card(props) {
  const [{ project }] = useState(props)
  return (
    <div className="card">
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
      <div></div>
      
      <h1>{project.title}</h1>
      <div></div>
      <div>
        <i className="fas fa-code huge"></i>
        <i className="fas fa-external-link-alt huge"></i>
      </div>
    </div>
  )
}

export default Card