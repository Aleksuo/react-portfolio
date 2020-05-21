import React from 'react'
import IconRow from './IconRow'

function Introduction() {
    return (
      <div className="frontParagraph">
        <h1 className="huge">
          <span className="accent-style">></span>Full Stack Developer_
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