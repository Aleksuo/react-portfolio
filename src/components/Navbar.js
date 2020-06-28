import React from 'react'
import '../styles/navbar.scss'

const items = [
  {
    id: 0,
    name: "Home",
    link: "#Home"
  },
  {
    id: 1,
    name: "Projects",
    link: "#Projects"
  },
  {
    id: 2,
    name: "Contact",
    link: "#Contact"
  }
]

function Navbar(props) {
  const {active} = props
    return (
      <nav>
        <ul className="nav-links">
          {items.map(item => {
            if(item.id === active){
              return <li key={item.id}><a href={item.link} className="active">{item.name}</a></li>
            }else{
              return <li key={item.id}><a href={item.link}>{item.name}</a></li>
            }
          })}
        </ul>
      </nav>
    )
  }

export default Navbar