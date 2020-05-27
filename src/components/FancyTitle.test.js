import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import FancyTitle from './FancyTitle'

test('renders content' ,() => {
    const component = render(
        <FancyTitle>Test</FancyTitle>
    )
    expect(component.container).toHaveTextContent("Test")
})