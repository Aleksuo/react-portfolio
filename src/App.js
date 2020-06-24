import React from 'react'
import useViewPort from './hooks/UseViewPort'
import Navbar from './components/Navbar'

import HomePage from './components/pages/HomePage'
import ProjectsPage from './components/pages/ProjectsPage'
import ContactPage from './components/pages/ContactPage'

import './styles/style.scss'
import './styles/utils.scss'

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
  )
}

export default App;
