import React from 'react'
import Icon from './Icon'

function IconRow() {
  return (
    <span className="huge">
      <Icon icon="fab fa-github" link="https://github.com/Aleksuo" tooltip="Github"></Icon>
      <Icon icon="fab fa-linkedin" tooltip="Linkedin"></Icon>
      <Icon icon="far fa-file" tooltip="Resume"></Icon>
    </span>
  )
}

export default IconRow