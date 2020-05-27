import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import ProjectsPage from './ProjectsPage'

test('component renders' , async () => {
    const component = render(
        <ProjectsPage display={1}></ProjectsPage>
    )
})