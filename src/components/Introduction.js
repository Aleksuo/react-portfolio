import React from 'react'
import IconRow from './IconRow'
import Icon from './Icon'
import FancyTitle from './FancyTitle'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../api.js'


function Introduction(props) {
  const { document } = props
  return (
    <div className="item-introduction">
      <h1 className="huge">
        <FancyTitle>{document.data.title[0].text}</FancyTitle>
      </h1>
      <IconRow>
        <Icon icon="fab fa-github" link={document.data.github_link.url} tooltip="Github"></Icon>
        <Icon icon="fab fa-linkedin" link={document.data.linkedin_link.url} tooltip="Linkedin"></Icon>
        <Icon icon="far fa-file" tooltip="Resume"></Icon>
      </IconRow>
      <br></br>
      <RichText render={document.data.arrow_text} linkResolver={linkResolver} />
      <br></br>
      <a href="#Projects"><i className="fas fa-chevron-down huge"></i></a>
    </div>
  )
}

export default Introduction