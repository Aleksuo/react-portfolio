import React from 'react'
import useViewPort from './Hooks/UseViewPort'
import Navbar from './Components/Navbar'

import HomePage from './Components/HomePage'
import ProjectsPage from './Components/ProjectsPage'
import ContactPage from './Components/ContactPage'

import './style.scss'

function App() {
  const {width} = useViewPort()
  const breakpoint = 1024
  let display
  if(width < breakpoint){
    display = 1
  }else{
    display = 3
  }
  return (
    <div className="container">
      { width < breakpoint ?
         <div></div>: <Navbar></Navbar>
      }
      <HomePage></HomePage>
      <ProjectsPage display={display}></ProjectsPage>
      <ContactPage></ContactPage>
    </div>
  );
}

export default App;
