import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Section from './Section'

test('renders content' , async () => {
    const component = render(
        <Section title="Test" id="Test"></Section>
    )
    expect(component.container).toHaveTextContent("Test")
})

test('renders passed child components' , async () => {
    const component = render(
        <Section title="Test" id="Test"><p>Inside</p></Section>
    )
    expect(component.container).toHaveTextContent("Inside")
})