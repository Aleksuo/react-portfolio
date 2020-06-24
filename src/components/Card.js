import React from 'react'
import FancyTitle from './FancyTitle'
import Icon from './Icon'
import CardInfo from './CardInfo'
import {RichText} from 'prismic-reactjs'

import '../styles/card.scss'

function Card(props) {
  const {project} = props
  return (
    <div className="card" style={{backgroundImage: `url(${project.img.url})` }}>
      <CardInfo project={project}></CardInfo>
      <h1 ><FancyTitle>{RichText.asText(project.title)}</FancyTitle></h1>
      <div></div>
      <div className="card-icons huge">
        <Icon link={project.github.url} icon="fas fa-code" tooltip="Code"></Icon>
        <Icon link={project.demo.url} icon="fas fa-external-link-alt" tooltip="Demo"></Icon>
      </div>
    </div>
  )
}

export default Card