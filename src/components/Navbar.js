import React from 'react'
import '../styles/navbar.scss'

function Navbar() {
    return (
      <nav>
        <ul className="nav-links">
          <li><a href="#Home">Home</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    )
  }

export default Navbar