import React  from 'react'
import useViewPort from './Hooks/UseViewPort'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import Introduction from './Components/Introduction'
import FancyTitle from './Components/FancyTitle'
import './style.scss'

import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

function App() {
  const {width} = useViewPort()
  const breakpoint = 1024

  const projects = [
    {
      id: 1,
      title: "Speech Dismantler",
      description: "Group project where we created an app for practicing public speaking using principles from User Centered Design. I focused on the UI and implemented the playback -feature.",
      type: "Group project, School",
      languages: "Javascript, Css, Html",
      technologies: "React, Material UI, Nodejs, Google cloud speech, Socket.IO, Heroku, Travis CI",
      img: "/img/speech_dismantler.PNG",
      github: "https://github.com/speech-dismantler-5000",
      demo: "https://speech-dismantler-5000.github.io/SpeechDismantlerFront/"
    },
    {
      id: 2,
      title: "Robot uprising 2019",
      description: "We created AI for controlling two robots to play a ball game against other robots. I was responsible for machine vision and I also solved some connection issues.",
      type: "Group project, Hackathon",
      languages: "Python, C",
      technologies: "OpenCV, Websocket, Numpy, Raspberry Pi",
      github: "https://github.com/TOTALLY-HUMANS/AI2019/tree/balldetection",
      demo: "link"
    },
    {
      id: 3,
      title: "Speech explorer project",
      type: "Group project, School",
      description: "todo",
      languages: "Javascript, Python, Css, Html",
      technologies: "Three.js, Nodejs, Selenium, Heroku, Travis CI, AppVeyor,  Dat.gui, Istanbul, Mocha, Electron",
      img: "/img/speech_explorer.PNG",
      github: "https://github.com/SSGL-SEP",
      demo: "https://ssgl-sep.herokuapp.com/"
    },
    {
      id: 4,
      title: "Portfolio",
      description: "My personal portfolio for displaying my projects.",
      type: "Personal project, Free time",
      languages: "Javascript, Css, Html",
      technologies: "React, Sass",
      img: "/img/portfolio.PNG",
      github: "https://github.com/Aleksuo/react-portfolio",
      demo: "https://aleksuo.github.io/react-portfolio/"
    }
  ]

  return (
    <div className="container">
      { width < breakpoint ?
         <div></div>: <Navbar></Navbar>
      }
      <section id="Home" >
        <div className="section-header">
          <h1><FancyTitle>Suoranta</FancyTitle></h1>
        </div>
        <Introduction></Introduction>
      </section>

      <section id="Projects">
        <div className="section-header">
        < h1><FancyTitle>Projects</FancyTitle></h1>
        </div>
        {
          width < breakpoint ?
            <Carousel arrows dots slidesPerPage={1} infinite>
              {projects.map(project => <Card project={project} key={project.id}></Card>)}
            </Carousel> :
            <Carousel arrows dots slidesPerPage={3} infinite>
              {projects.map(project => <Card project={project} key={project.id}></Card>)}
            </Carousel>
        }
      </section>
      <section id="Contact">
        <div className="section-header">
          <h1><FancyTitle>Contact</FancyTitle></h1>
        </div>
      </section>
    </div>
  );
}

export default App;
