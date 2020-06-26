import React from 'react'
import FancyTitle from './FancyTitle'

import '../styles/section.scss'

function GridLayout(props) {
  return (
    <div className="gridcontainer">
      {props.children}
    </div>
  )
}
function Header(props) {
  const { title } = props
  return (
    <div className="item-header">
      <h1><FancyTitle>{title}</FancyTitle></h1>
    </div>
  )
}

function Section(props) {
  const { title, id } = props
  return (
    <section id={id}>
      <GridLayout>
        <Header title={title} />
        {props.children}
      </GridLayout>
    </section>
  )
}

export default Section