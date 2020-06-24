import React from 'react'
import FancyTitle from './FancyTitle'

import '../styles/section.scss'

function Section(props){
    const {title, id} = props
  
    return(
      <section id={id}>
        <div className="section-header">
            <h1><FancyTitle>{title}</FancyTitle></h1>
        </div>
        {props.children}
      </section>
    )
  }

 export default Section