import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Card from './Card'
const mockProject = {
    id: 1,
    title: "Speech Dismantler",
    description: "Group project where we created an app for practicing public speaking using principles from User Centered Design. I focused on the UI and implemented the playback -feature.",
    type: "Group project, School",
    languages: "Javascript, Css, Html",
    technologies: "React, Material UI, Nodejs, Google cloud speech, Socket.IO, Heroku, Travis CI",
    img: "/img/speech_dismantler.PNG",
    github: "https://github.com/speech-dismantler-5000",
    demo: "https://speech-dismantler-5000.github.io/SpeechDismantlerFront/"
}


test('renders text content' ,() => {
    const component = render(
        <Card project={mockProject}></Card>
    )
    const exclude = ["id", "img", "github", "demo"]
    for (const [key, value] of Object.entries(mockProject)){
        if(!exclude.includes(key))
            expect(component.container).toHaveTextContent(value)
    }
    
})