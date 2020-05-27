import React from './node_modules/react'
import IconRow from './IconRow'
import FancyTitle from './FancyTitle'



function Introduction() {
    return (
      <div className="frontParagraph">
        <h1 className="huge">
          <FancyTitle>Full Stack Developer</FancyTitle>
        </h1>
        <br></br>
        <IconRow></IconRow>
        <br></br>
        <span>See my work below</span>
        <br></br>
        <br></br>
        <a href="#Projects"><i className="fas fa-chevron-down huge"></i></a>
      </div>
    )
  }

export default Introduction