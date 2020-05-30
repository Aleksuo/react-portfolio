import React from 'react'
import FancyTitle from './FancyTitle'
import Icon from './Icon'
import CardInfo from './CardInfo'



function Card(props) {
  const {project} = props
  return (
    <div className="card" style={{backgroundImage: `url(${process.env.PUBLIC_URL+project.img})` }}>
      <CardInfo project={project}></CardInfo>
      <h1 ><FancyTitle>{project.title}</FancyTitle></h1>
      <div></div>
      <div className="card-icons huge">
        <Icon link={project.github} icon="fas fa-code" tooltip="Code"></Icon>
        <Icon link={project.demo} icon="fas fa-external-link-alt" tooltip="Demo"></Icon>
      </div>
    </div>
  )
}

export default Card