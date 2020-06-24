import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import HomePage from './HomePage'

test('component renders' , async () => {
    const component = render(
        <HomePage></HomePage>
    )
})