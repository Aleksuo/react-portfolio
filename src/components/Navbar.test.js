import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Navbar from './Navbar'

test('renders content' , async () => {
    const component = render(
        <Navbar></Navbar>
    )
    expect(component.container).toHaveTextContent("Home")
    expect(component.container).toHaveTextContent("Projects")
    expect(component.container).toHaveTextContent("Contact")
})